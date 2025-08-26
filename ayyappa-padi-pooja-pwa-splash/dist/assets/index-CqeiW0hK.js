function $T(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function o_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ud={exports:{}},Wa={},Fd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function qT(){if(cy)return Re;cy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=I&&V[I]||V["@@iterator"],typeof V=="function"?V:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function L(V,K,fe){this.props=V,this.context=K,this.refs=q,this.updater=fe||D}L.prototype.isReactComponent={},L.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Z(){}Z.prototype=L.prototype;function X(V,K,fe){this.props=V,this.context=K,this.refs=q,this.updater=fe||D}var ne=X.prototype=new Z;ne.constructor=X,B(ne,L.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,Se=Object.prototype.hasOwnProperty,ve={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function A(V,K,fe){var Ae,ke={},Ne=null,Me=null;if(K!=null)for(Ae in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(Ne=""+K.key),K)Se.call(K,Ae)&&!N.hasOwnProperty(Ae)&&(ke[Ae]=K[Ae]);var je=arguments.length-2;if(je===1)ke.children=fe;else if(1<je){for(var qe=Array(je),wt=0;wt<je;wt++)qe[wt]=arguments[wt+2];ke.children=qe}if(V&&V.defaultProps)for(Ae in je=V.defaultProps,je)ke[Ae]===void 0&&(ke[Ae]=je[Ae]);return{$$typeof:n,type:V,key:Ne,ref:Me,props:ke,_owner:ve.current}}function P(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return K[fe]})}var M=/\/+/g;function R(V,K){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):K.toString(36)}function st(V,K,fe,Ae,ke){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,ke=ke(Me),V=Ae===""?"."+R(Me,0):Ae,re(ke)?(fe="",V!=null&&(fe=V.replace(M,"$&/")+"/"),st(ke,K,fe,"",function(wt){return wt})):ke!=null&&(x(ke)&&(ke=P(ke,fe+(!ke.key||Me&&Me.key===ke.key?"":(""+ke.key).replace(M,"$&/")+"/")+V)),K.push(ke)),1;if(Me=0,Ae=Ae===""?".":Ae+":",re(V))for(var je=0;je<V.length;je++){Ne=V[je];var qe=Ae+R(Ne,je);Me+=st(Ne,K,fe,qe,ke)}else if(qe=S(V),typeof qe=="function")for(V=qe.call(V),je=0;!(Ne=V.next()).done;)Ne=Ne.value,qe=Ae+R(Ne,je++),Me+=st(Ne,K,fe,qe,ke);else if(Ne==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ot(V,K,fe){if(V==null)return V;var Ae=[],ke=0;return st(V,Ae,"","",function(Ne){return K.call(fe,Ne,ke++)}),Ae}function Lt(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},ie={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ie,ReactCurrentOwner:ve};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Ot,forEach:function(V,K,fe){Ot(V,function(){K.apply(this,arguments)},fe)},count:function(V){var K=0;return Ot(V,function(){K++}),K},toArray:function(V){return Ot(V,function(K){return K})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=L,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=X,Re.StrictMode=i,Re.Suspense=p,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Re.act=oe,Re.cloneElement=function(V,K,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=B({},V.props),ke=V.key,Ne=V.ref,Me=V._owner;if(K!=null){if(K.ref!==void 0&&(Ne=K.ref,Me=ve.current),K.key!==void 0&&(ke=""+K.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for(qe in K)Se.call(K,qe)&&!N.hasOwnProperty(qe)&&(Ae[qe]=K[qe]===void 0&&je!==void 0?je[qe]:K[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=fe;else if(1<qe){je=Array(qe);for(var wt=0;wt<qe;wt++)je[wt]=arguments[wt+2];Ae.children=je}return{$$typeof:n,type:V.type,key:ke,ref:Ne,props:Ae,_owner:Me}},Re.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=A,Re.createFactory=function(V){var K=A.bind(null,V);return K.type=V,K},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:d,render:V}},Re.isValidElement=x,Re.lazy=function(V){return{$$typeof:_,_payload:{_status:-1,_result:V},_init:Lt}},Re.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},Re.startTransition=function(V){var K=ie.transition;ie.transition={};try{V()}finally{ie.transition=K}},Re.unstable_act=oe,Re.useCallback=function(V,K){return Be.current.useCallback(V,K)},Re.useContext=function(V){return Be.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Re.useEffect=function(V,K){return Be.current.useEffect(V,K)},Re.useId=function(){return Be.current.useId()},Re.useImperativeHandle=function(V,K,fe){return Be.current.useImperativeHandle(V,K,fe)},Re.useInsertionEffect=function(V,K){return Be.current.useInsertionEffect(V,K)},Re.useLayoutEffect=function(V,K){return Be.current.useLayoutEffect(V,K)},Re.useMemo=function(V,K){return Be.current.useMemo(V,K)},Re.useReducer=function(V,K,fe){return Be.current.useReducer(V,K,fe)},Re.useRef=function(V){return Be.current.useRef(V)},Re.useState=function(V){return Be.current.useState(V)},Re.useSyncExternalStore=function(V,K,fe){return Be.current.useSyncExternalStore(V,K,fe)},Re.useTransition=function(){return Be.current.useTransition()},Re.version="18.3.1",Re}var hy;function Wf(){return hy||(hy=1,Fd.exports=qT()),Fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function HT(){if(dy)return Wa;dy=1;var n=Wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var _,I={},S=null,D=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(D=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(I[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)I[_]===void 0&&(I[_]=p[_]);return{$$typeof:e,type:d,key:S,ref:D,props:I,_owner:o.current}}return Wa.Fragment=t,Wa.jsx=c,Wa.jsxs=c,Wa}var fy;function WT(){return fy||(fy=1,Ud.exports=HT()),Ud.exports}var E=WT(),H=Wf();const a_=o_(H),KT=$T({__proto__:null,default:a_},[H]);var Gu={},Bd={exports:{}},sn={},zd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function GT(){return py||(py=1,(function(n){function e(ie,me){var oe=ie.length;ie.push(me);e:for(;0<oe;){var V=oe-1>>>1,K=ie[V];if(0<o(K,me))ie[V]=me,ie[oe]=K,oe=V;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var me=ie[0],oe=ie.pop();if(oe!==me){ie[0]=oe;e:for(var V=0,K=ie.length,fe=K>>>1;V<fe;){var Ae=2*(V+1)-1,ke=ie[Ae],Ne=Ae+1,Me=ie[Ne];if(0>o(ke,oe))Ne<K&&0>o(Me,ke)?(ie[V]=Me,ie[Ne]=oe,V=Ne):(ie[V]=ke,ie[Ae]=oe,V=Ae);else if(Ne<K&&0>o(Me,oe))ie[V]=Me,ie[Ne]=oe,V=Ne;else break e}}return me}function o(ie,me){var oe=ie.sortIndex-me.sortIndex;return oe!==0?oe:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],_=1,I=null,S=3,D=!1,B=!1,q=!1,L=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ie){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ie)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function re(ie){if(q=!1,ne(ie),!B)if(t(p)!==null)B=!0,Lt(Se);else{var me=t(y);me!==null&&Be(re,me.startTime-ie)}}function Se(ie,me){B=!1,q&&(q=!1,Z(A),A=-1),D=!0;var oe=S;try{for(ne(me),I=t(p);I!==null&&(!(I.expirationTime>me)||ie&&!O());){var V=I.callback;if(typeof V=="function"){I.callback=null,S=I.priorityLevel;var K=V(I.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?I.callback=K:I===t(p)&&i(p),ne(me)}else i(p);I=t(p)}if(I!==null)var fe=!0;else{var Ae=t(y);Ae!==null&&Be(re,Ae.startTime-me),fe=!1}return fe}finally{I=null,S=oe,D=!1}}var ve=!1,N=null,A=-1,P=5,x=-1;function O(){return!(n.unstable_now()-x<P)}function M(){if(N!==null){var ie=n.unstable_now();x=ie;var me=!0;try{me=N(!0,ie)}finally{me?R():(ve=!1,N=null)}}else ve=!1}var R;if(typeof X=="function")R=function(){X(M)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ot=st.port2;st.port1.onmessage=M,R=function(){Ot.postMessage(null)}}else R=function(){L(M,0)};function Lt(ie){N=ie,ve||(ve=!0,R())}function Be(ie,me){A=L(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){B||D||(B=!0,Lt(Se))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var oe=S;S=me;try{return ie()}finally{S=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=S;S=ie;try{return me()}finally{S=oe}},n.unstable_scheduleCallback=function(ie,me,oe){var V=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?V+oe:V):oe=V,ie){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=oe+K,ie={id:_++,callback:me,priorityLevel:ie,startTime:oe,expirationTime:K,sortIndex:-1},oe>V?(ie.sortIndex=oe,e(y,ie),t(p)===null&&ie===t(y)&&(q?(Z(A),A=-1):q=!0,Be(re,oe-V))):(ie.sortIndex=K,e(p,ie),B||D||(B=!0,Lt(Se))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var me=S;return function(){var oe=S;S=me;try{return ie.apply(this,arguments)}finally{S=oe}}}})($d)),$d}var my;function QT(){return my||(my=1,zd.exports=GT()),zd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function YT(){if(gy)return sn;gy=1;var n=Wf(),e=QT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},I={};function S(r){return p.call(I,r)?!0:p.call(_,r)?!1:y.test(r)?I[r]=!0:(_[r]=!0,!1)}function D(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,a,h){if(s===null||typeof s>"u"||D(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function X(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Z,X);L[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Z,X);L[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Z,X);L[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,a,h){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,a,f,h)&&(a=null),h||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),ve=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var fe=!1;function Ae(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,k=g.length-1;1<=w&&0<=k&&f[w]!==g[k];)k--;for(;1<=w&&0<=k;w--,k--)if(f[w]!==g[k]){if(w!==1||k!==1)do if(w--,k--,0>k||f[w]!==g[k]){var C=`
`+f[w].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=w&&0<=k);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function ke(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case ve:return"Portal";case P:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case st:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function yr(r){r._valueTracker||(r._valueTracker=wt(r))}function Os(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=qe(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Jr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ui(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ls(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Xo(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function Zo(r,s){Xo(r,s);var a=je(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Vs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Vs(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Dl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Vs(r,s,a){(s!=="number"||Jr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function _r(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ea(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ms(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function js(r,s){var a=je(s.value),h=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ta(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function pt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?pt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var wr,na=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=wr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Xr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bi=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(r){Bi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Fi[s]=Fi[r]})});function ra(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Fi.hasOwnProperty(r)&&Fi[r]?(""+s).trim():s+"px"}function ia(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=ra(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var sa=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(r,s){if(s){if(sa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function aa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Us(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Fs=null,_n=null,Jn=null;function Bs(r){if(r=Na(r)){if(typeof Fs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=uu(s),Fs(r.stateNode,r.type,s))}}function Xn(r){_n?Jn?Jn.push(r):Jn=[r]:_n=r}function la(){if(_n){var r=_n,s=Jn;if(Jn=_n=null,Bs(r),s)for(r=0;r<s.length;r++)Bs(s[r])}}function $i(r,s){return r(s)}function ua(){}var Er=!1;function ca(r,s,a){if(Er)return r(s,a);Er=!0;try{return $i(r,s,a)}finally{Er=!1,(_n!==null||Jn!==null)&&(ua(),la())}}function ot(r,s){var a=r.stateNode;if(a===null)return null;var h=uu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var zs=!1;if(d)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{zs=!1}function qi(r,s,a,h,f,g,w,k,C){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Q){this.onError(Q)}}var Hi=!1,$s=null,bn=!1,ha=null,fh={onError:function(r){Hi=!0,$s=r}};function qs(r,s,a,h,f,g,w,k,C){Hi=!1,$s=null,qi.apply(fh,arguments)}function Ol(r,s,a,h,f,g,w,k,C){if(qs.apply(this,arguments),Hi){if(Hi){var z=$s;Hi=!1,$s=null}else throw Error(t(198));bn||(bn=!0,ha=z)}}function Dn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Wi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function On(r){if(Dn(r)!==r)throw Error(t(188))}function Ll(r){var s=r.alternate;if(!s){if(s=Dn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return On(f),r;if(g===h)return On(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,k=f.child;k;){if(k===a){w=!0,a=f,h=g;break}if(k===h){w=!0,h=f,a=g;break}k=k.sibling}if(!w){for(k=g.child;k;){if(k===a){w=!0,a=g,h=f;break}if(k===h){w=!0,h=g,a=f;break}k=k.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function da(r){return r=Ll(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var Ws=e.unstable_scheduleCallback,fa=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,ph=e.unstable_requestPaint,He=e.unstable_now,Ml=e.unstable_getCurrentPriorityLevel,Ki=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,pa=e.unstable_LowPriority,jl=e.unstable_IdlePriority,Gi=null,cn=null;function Ul(r){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Gi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Bl,ma=Math.log,Fl=Math.LN2;function Bl(r){return r>>>=0,r===0?32:31-(ma(r)/Fl|0)|0}var Ks=64,Gs=4194304;function ei(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Qi(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var k=w&~f;k!==0?h=ei(k):(g&=w,g!==0&&(h=ei(g)))}else w=a&~f,w!==0?h=ei(w):g!==0&&(h=ei(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Wt(s),f=1<<a,h|=r[a],s&=~f;return h}function mh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Wt(g),k=1<<w,C=f[w];C===-1?((k&a)===0||(k&h)!==0)&&(f[w]=mh(k,s)):C<=s&&(r.expiredLanes|=k),g&=~k}}function hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Yi(){var r=Ks;return Ks<<=1,(Ks&4194240)===0&&(Ks=64),r}function ti(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ni(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function $e(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Wt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function ri(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Wt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Ce=0;function ii(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var zl,Qs,$l,ql,Hl,ga=!1,Zn=[],kt=null,Ln=null,Vn=null,si=new Map,En=new Map,er=[],gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":si.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function Jt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Na(s),s!==null&&Qs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function yh(r,s,a,h,f){switch(s){case"focusin":return kt=Jt(kt,r,s,a,h,f),!0;case"dragenter":return Ln=Jt(Ln,r,s,a,h,f),!0;case"mouseover":return Vn=Jt(Vn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return si.set(g,Jt(si.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,En.set(g,Jt(En.get(g)||null,r,s,a,h,f)),!0}return!1}function Kl(r){var s=ts(r.target);if(s!==null){var a=Dn(s);if(a!==null){if(s=a.tag,s===13){if(s=Wi(a),s!==null){r.blockedOn=s,Hl(r.priority,function(){$l(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ir(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ys(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);zi=h,a.target.dispatchEvent(h),zi=null}else return s=Na(a),s!==null&&Qs(s),r.blockedOn=a,!1;s.shift()}return!0}function Ji(r,s,a){Ir(r)&&a.delete(s)}function Gl(){ga=!1,kt!==null&&Ir(kt)&&(kt=null),Ln!==null&&Ir(Ln)&&(Ln=null),Vn!==null&&Ir(Vn)&&(Vn=null),si.forEach(Ji),En.forEach(Ji)}function Mn(r,s){r.blockedOn===s&&(r.blockedOn=null,ga||(ga=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gl)))}function jn(r){function s(f){return Mn(f,r)}if(0<Zn.length){Mn(Zn[0],r);for(var a=1;a<Zn.length;a++){var h=Zn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(kt!==null&&Mn(kt,r),Ln!==null&&Mn(Ln,r),Vn!==null&&Mn(Vn,r),si.forEach(s),En.forEach(s),a=0;a<er.length;a++)h=er[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)Kl(a),a.blockedOn===null&&er.shift()}var Sr=re.ReactCurrentBatchConfig,oi=!0;function Ye(r,s,a,h){var f=Ce,g=Sr.transition;Sr.transition=null;try{Ce=1,ya(r,s,a,h)}finally{Ce=f,Sr.transition=g}}function vh(r,s,a,h){var f=Ce,g=Sr.transition;Sr.transition=null;try{Ce=4,ya(r,s,a,h)}finally{Ce=f,Sr.transition=g}}function ya(r,s,a,h){if(oi){var f=Ys(r,s,a,h);if(f===null)Ch(r,s,h,Xi,a),Wl(r,h);else if(yh(f,r,s,a,h))h.stopPropagation();else if(Wl(r,h),s&4&&-1<gh.indexOf(r)){for(;f!==null;){var g=Na(f);if(g!==null&&zl(g),g=Ys(r,s,a,h),g===null&&Ch(r,s,h,Xi,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else Ch(r,s,h,null,a)}}var Xi=null;function Ys(r,s,a,h){if(Xi=null,r=Us(h),r=ts(r),r!==null)if(s=Dn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Wi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Xi=r,null}function va(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ml()){case Ki:return 1;case Zr:return 4;case wn:case pa:return 16;case jl:return 536870912;default:return 16}default:return 16}}var dn=null,Js=null,Xt=null;function _a(){if(Xt)return Xt;var r,s=Js,a=s.length,h,f="value"in dn?dn.value:dn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return Xt=f.slice(r,1<h?1-h:void 0)}function Xs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function tr(){return!0}function wa(){return!1}function Rt(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(a=r[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?tr:wa,this.isPropagationStopped=wa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),s}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Rt(Un),nr=oe({},Un,{view:0,detail:0}),_h=Rt(nr),eo,Ar,ai,Zi=oe({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ai&&(ai&&r.type==="mousemove"?(eo=r.screenX-ai.screenX,Ar=r.screenY-ai.screenY):Ar=eo=0,ai=r),eo)},movementY:function(r){return"movementY"in r?r.movementY:Ar}}),to=Rt(Zi),Ea=oe({},Zi,{dataTransfer:0}),Ql=Rt(Ea),no=oe({},nr,{relatedTarget:0}),ro=Rt(no),Yl=oe({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=Rt(Yl),Jl=oe({},Un,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xl=Rt(Jl),Zl=oe({},Un,{data:0}),Ta=Rt(Zl),io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=eu[r])?!!s[r]:!1}function rr(){return tu}var u=oe({},nr,{key:function(r){if(r.key){var s=io[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Xs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(r){return r.type==="keypress"?Xs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Rt(u),v=oe({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Rt(v),j=oe({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr}),$=Rt(j),te=oe({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Rt(te),gt=oe({},Zi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=Rt(gt),Et=[9,13,27,32],ct=d&&"CompositionEvent"in window,Tn=null;d&&"documentMode"in document&&(Tn=document.documentMode);var fn=d&&"TextEvent"in window&&!Tn,es=d&&(!ct||Tn&&8<Tn&&11>=Tn),so=" ",im=!1;function sm(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var oo=!1;function FE(r,s){switch(r){case"compositionend":return om(s);case"keypress":return s.which!==32?null:(im=!0,so);case"textInput":return r=s.data,r===so&&im?null:r;default:return null}}function BE(r,s){if(oo)return r==="compositionend"||!ct&&sm(r,s)?(r=_a(),Xt=Js=dn=null,oo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return es&&s.locale!=="ko"?null:s.data;default:return null}}var zE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!zE[r.type]:s==="textarea"}function lm(r,s,a,h){Xn(h),s=ou(s,"onChange"),0<s.length&&(a=new Zs("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ia=null,Sa=null;function $E(r){km(r,0)}function nu(r){var s=ho(r);if(Os(s))return r}function qE(r,s){if(r==="change")return s}var um=!1;if(d){var wh;if(d){var Eh="oninput"in document;if(!Eh){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Eh=typeof cm.oninput=="function"}wh=Eh}else wh=!1;um=wh&&(!document.documentMode||9<document.documentMode)}function hm(){Ia&&(Ia.detachEvent("onpropertychange",dm),Sa=Ia=null)}function dm(r){if(r.propertyName==="value"&&nu(Sa)){var s=[];lm(s,Sa,r,Us(r)),ca($E,s)}}function HE(r,s,a){r==="focusin"?(hm(),Ia=s,Sa=a,Ia.attachEvent("onpropertychange",dm)):r==="focusout"&&hm()}function WE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(Sa)}function KE(r,s){if(r==="click")return nu(s)}function GE(r,s){if(r==="input"||r==="change")return nu(s)}function QE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Fn=typeof Object.is=="function"?Object.is:QE;function Aa(r,s){if(Fn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Fn(r[f],s[f]))return!1}return!0}function fm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function pm(r,s){var a=fm(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fm(a)}}function mm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?mm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function gm(){for(var r=window,s=Jr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Jr(r.document)}return s}function Th(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function YE(r){var s=gm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&mm(a.ownerDocument.documentElement,a)){if(h!==null&&Th(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=pm(a,g);var w=pm(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var JE=d&&"documentMode"in document&&11>=document.documentMode,ao=null,Ih=null,ka=null,Sh=!1;function ym(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sh||ao==null||ao!==Jr(h)||(h=ao,"selectionStart"in h&&Th(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ka&&Aa(ka,h)||(ka=h,h=ou(Ih,"onSelect"),0<h.length&&(s=new Zs("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=ao)))}function ru(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var lo={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Ah={},vm={};d&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function iu(r){if(Ah[r])return Ah[r];if(!lo[r])return r;var s=lo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in vm)return Ah[r]=s[a];return r}var _m=iu("animationend"),wm=iu("animationiteration"),Em=iu("animationstart"),Tm=iu("transitionend"),Im=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(r,s){Im.set(r,s),l(s,[r])}for(var kh=0;kh<Sm.length;kh++){var Rh=Sm[kh],XE=Rh.toLowerCase(),ZE=Rh[0].toUpperCase()+Rh.slice(1);li(XE,"on"+ZE)}li(_m,"onAnimationEnd"),li(wm,"onAnimationIteration"),li(Em,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Tm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Am(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Ol(h,s,void 0,r),r.currentTarget=null}function km(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var k=h[w],C=k.instance,z=k.currentTarget;if(k=k.listener,C!==g&&f.isPropagationStopped())break e;Am(f,k,z),g=C}else for(w=0;w<h.length;w++){if(k=h[w],C=k.instance,z=k.currentTarget,k=k.listener,C!==g&&f.isPropagationStopped())break e;Am(f,k,z),g=C}}}if(bn)throw r=ha,bn=!1,ha=null,r}function Ke(r,s){var a=s[Lh];a===void 0&&(a=s[Lh]=new Set);var h=r+"__bubble";a.has(h)||(Rm(s,r,2,!1),a.add(h))}function Ph(r,s,a){var h=0;s&&(h|=4),Rm(a,r,h,s)}var su="_reactListening"+Math.random().toString(36).slice(2);function Pa(r){if(!r[su]){r[su]=!0,i.forEach(function(a){a!=="selectionchange"&&(eT.has(a)||Ph(a,!1,r),Ph(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[su]||(s[su]=!0,Ph("selectionchange",!1,s))}}function Rm(r,s,a,h){switch(va(s)){case 1:var f=Ye;break;case 4:f=vh;break;default:f=ya}a=f.bind(null,s,a,r),f=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Ch(r,s,a,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var k=h.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var C=w.tag;if((C===3||C===4)&&(C=w.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;w=w.return}for(;k!==null;){if(w=ts(k),w===null)return;if(C=w.tag,C===5||C===6){h=g=w;continue e}k=k.parentNode}}h=h.return}ca(function(){var z=g,Q=Us(a),J=[];e:{var G=Im.get(r);if(G!==void 0){var se=Zs,ue=r;switch(r){case"keypress":if(Xs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=ro;break;case"focusout":ue="blur",se=ro;break;case"beforeblur":case"afterblur":se=ro;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=to;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case _m:case wm:case Em:se=kr;break;case Tm:se=Ue;break;case"scroll":se=_h;break;case"wheel":se=be;break;case"copy":case"cut":case"paste":se=Xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=T}var ce=(s&4)!==0,at=!ce&&r==="scroll",U=ce?G!==null?G+"Capture":null:G;ce=[];for(var b=z,F;b!==null;){F=b;var ee=F.stateNode;if(F.tag===5&&ee!==null&&(F=ee,U!==null&&(ee=ot(b,U),ee!=null&&ce.push(Ca(b,ee,F)))),at)break;b=b.return}0<ce.length&&(G=new se(G,ue,null,a,Q),J.push({event:G,listeners:ce}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",G&&a!==zi&&(ue=a.relatedTarget||a.fromElement)&&(ts(ue)||ue[Rr]))break e;if((se||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=z,ue=ue?ts(ue):null,ue!==null&&(at=Dn(ue),ue!==at||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=z),se!==ue)){if(ce=to,ee="onMouseLeave",U="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(ce=T,ee="onPointerLeave",U="onPointerEnter",b="pointer"),at=se==null?G:ho(se),F=ue==null?G:ho(ue),G=new ce(ee,b+"leave",se,a,Q),G.target=at,G.relatedTarget=F,ee=null,ts(Q)===z&&(ce=new ce(U,b+"enter",ue,a,Q),ce.target=F,ce.relatedTarget=at,ee=ce),at=ee,se&&ue)t:{for(ce=se,U=ue,b=0,F=ce;F;F=uo(F))b++;for(F=0,ee=U;ee;ee=uo(ee))F++;for(;0<b-F;)ce=uo(ce),b--;for(;0<F-b;)U=uo(U),F--;for(;b--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=uo(ce),U=uo(U)}ce=null}else ce=null;se!==null&&Pm(J,G,se,ce,!1),ue!==null&&at!==null&&Pm(J,at,ue,ce,!0)}}e:{if(G=z?ho(z):window,se=G.nodeName&&G.nodeName.toLowerCase(),se==="select"||se==="input"&&G.type==="file")var de=qE;else if(am(G))if(um)de=GE;else{de=WE;var ge=HE}else(se=G.nodeName)&&se.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=KE);if(de&&(de=de(r,z))){lm(J,de,a,Q);break e}ge&&ge(r,G,z),r==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Vs(G,"number",G.value)}switch(ge=z?ho(z):window,r){case"focusin":(am(ge)||ge.contentEditable==="true")&&(ao=ge,Ih=z,ka=null);break;case"focusout":ka=Ih=ao=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,ym(J,a,Q);break;case"selectionchange":if(JE)break;case"keydown":case"keyup":ym(J,a,Q)}var ye;if(ct)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else oo?sm(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(es&&a.locale!=="ko"&&(oo||we!=="onCompositionStart"?we==="onCompositionEnd"&&oo&&(ye=_a()):(dn=Q,Js="value"in dn?dn.value:dn.textContent,oo=!0)),ge=ou(z,we),0<ge.length&&(we=new Ta(we,r,null,a,Q),J.push({event:we,listeners:ge}),ye?we.data=ye:(ye=om(a),ye!==null&&(we.data=ye)))),(ye=fn?FE(r,a):BE(r,a))&&(z=ou(z,"onBeforeInput"),0<z.length&&(Q=new Ta("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:z}),Q.data=ye))}km(J,s)})}function Ca(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ou(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ot(r,a),g!=null&&h.unshift(Ca(r,g,f)),g=ot(r,s),g!=null&&h.push(Ca(r,g,f))),r=r.return}return h}function uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Pm(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var k=a,C=k.alternate,z=k.stateNode;if(C!==null&&C===h)break;k.tag===5&&z!==null&&(k=z,f?(C=ot(a,g),C!=null&&w.unshift(Ca(a,C,k))):f||(C=ot(a,g),C!=null&&w.push(Ca(a,C,k)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var tT=/\r\n?/g,nT=/\u0000|\uFFFD/g;function Cm(r){return(typeof r=="string"?r:""+r).replace(tT,`
`).replace(nT,"")}function au(r,s,a){if(s=Cm(s),Cm(r)!==s&&a)throw Error(t(425))}function lu(){}var xh=null,Nh=null;function bh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,rT=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,iT=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(r){return xm.resolve(null).then(r).catch(sT)}:Dh;function sT(r){setTimeout(function(){throw r})}function Oh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),jn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);jn(s)}function ui(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Nm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var co=Math.random().toString(36).slice(2),ir="__reactFiber$"+co,xa="__reactProps$"+co,Rr="__reactContainer$"+co,Lh="__reactEvents$"+co,oT="__reactListeners$"+co,aT="__reactHandles$"+co;function ts(r){var s=r[ir];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Rr]||a[ir]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Nm(r);r!==null;){if(a=r[ir])return a;r=Nm(r)}return s}r=a,a=r.parentNode}return null}function Na(r){return r=r[ir]||r[Rr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ho(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[xa]||null}var Vh=[],fo=-1;function ci(r){return{current:r}}function Ge(r){0>fo||(r.current=Vh[fo],Vh[fo]=null,fo--)}function We(r,s){fo++,Vh[fo]=r.current,r.current=s}var hi={},Vt=ci(hi),Zt=ci(!1),ns=hi;function po(r,s){var a=r.type.contextTypes;if(!a)return hi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function en(r){return r=r.childContextTypes,r!=null}function cu(){Ge(Zt),Ge(Vt)}function bm(r,s,a){if(Vt.current!==hi)throw Error(t(168));We(Vt,s),We(Zt,a)}function Dm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return oe({},a,h)}function hu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||hi,ns=Vt.current,We(Vt,r),We(Zt,Zt.current),!0}function Om(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Dm(r,s,ns),h.__reactInternalMemoizedMergedChildContext=r,Ge(Zt),Ge(Vt),We(Vt,r)):Ge(Zt),We(Zt,a)}var Pr=null,du=!1,Mh=!1;function Lm(r){Pr===null?Pr=[r]:Pr.push(r)}function lT(r){du=!0,Lm(r)}function di(){if(!Mh&&Pr!==null){Mh=!0;var r=0,s=Ce;try{var a=Pr;for(Ce=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Pr=null,du=!1}catch(f){throw Pr!==null&&(Pr=Pr.slice(r+1)),Ws(Ki,di),f}finally{Ce=s,Mh=!1}}return null}var mo=[],go=0,fu=null,pu=0,In=[],Sn=0,rs=null,Cr=1,xr="";function is(r,s){mo[go++]=pu,mo[go++]=fu,fu=r,pu=s}function Vm(r,s,a){In[Sn++]=Cr,In[Sn++]=xr,In[Sn++]=rs,rs=r;var h=Cr;r=xr;var f=32-Wt(h)-1;h&=~(1<<f),a+=1;var g=32-Wt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Cr=1<<32-Wt(s)+f|a<<f|h,xr=g+r}else Cr=1<<g|a<<f|h,xr=r}function jh(r){r.return!==null&&(is(r,1),Vm(r,1,0))}function Uh(r){for(;r===fu;)fu=mo[--go],mo[go]=null,pu=mo[--go],mo[go]=null;for(;r===rs;)rs=In[--Sn],In[Sn]=null,xr=In[--Sn],In[Sn]=null,Cr=In[--Sn],In[Sn]=null}var pn=null,mn=null,Je=!1,Bn=null;function Mm(r,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function jm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,pn=r,mn=ui(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,pn=r,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=rs!==null?{id:Cr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,pn=r,mn=null,!0):!1;default:return!1}}function Fh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Bh(r){if(Je){var s=mn;if(s){var a=s;if(!jm(r,s)){if(Fh(r))throw Error(t(418));s=ui(a.nextSibling);var h=pn;s&&jm(r,s)?Mm(h,a):(r.flags=r.flags&-4097|2,Je=!1,pn=r)}}else{if(Fh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,pn=r}}}function Um(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function mu(r){if(r!==pn)return!1;if(!Je)return Um(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!bh(r.type,r.memoizedProps)),s&&(s=mn)){if(Fh(r))throw Fm(),Error(t(418));for(;s;)Mm(r,s),s=ui(s.nextSibling)}if(Um(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){mn=ui(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}mn=null}}else mn=pn?ui(r.stateNode.nextSibling):null;return!0}function Fm(){for(var r=mn;r;)r=ui(r.nextSibling)}function yo(){mn=pn=null,Je=!1}function zh(r){Bn===null?Bn=[r]:Bn.push(r)}var uT=re.ReactCurrentBatchConfig;function ba(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var k=f.refs;w===null?delete k[g]:k[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function gu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Bm(r){var s=r._init;return s(r._payload)}function zm(r){function s(U,b){if(r){var F=U.deletions;F===null?(U.deletions=[b],U.flags|=16):F.push(b)}}function a(U,b){if(!r)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function h(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function f(U,b){return U=wi(U,b),U.index=0,U.sibling=null,U}function g(U,b,F){return U.index=F,r?(F=U.alternate,F!==null?(F=F.index,F<b?(U.flags|=2,b):F):(U.flags|=2,b)):(U.flags|=1048576,b)}function w(U){return r&&U.alternate===null&&(U.flags|=2),U}function k(U,b,F,ee){return b===null||b.tag!==6?(b=Dd(F,U.mode,ee),b.return=U,b):(b=f(b,F),b.return=U,b)}function C(U,b,F,ee){var de=F.type;return de===N?Q(U,b,F.props.children,ee,F.key):b!==null&&(b.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Lt&&Bm(de)===b.type)?(ee=f(b,F.props),ee.ref=ba(U,b,F),ee.return=U,ee):(ee=Fu(F.type,F.key,F.props,null,U.mode,ee),ee.ref=ba(U,b,F),ee.return=U,ee)}function z(U,b,F,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=Od(F,U.mode,ee),b.return=U,b):(b=f(b,F.children||[]),b.return=U,b)}function Q(U,b,F,ee,de){return b===null||b.tag!==7?(b=ds(F,U.mode,ee,de),b.return=U,b):(b=f(b,F),b.return=U,b)}function J(U,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Dd(""+b,U.mode,F),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Se:return F=Fu(b.type,b.key,b.props,null,U.mode,F),F.ref=ba(U,null,b),F.return=U,F;case ve:return b=Od(b,U.mode,F),b.return=U,b;case Lt:var ee=b._init;return J(U,ee(b._payload),F)}if(vr(b)||me(b))return b=ds(b,U.mode,F,null),b.return=U,b;gu(U,b)}return null}function G(U,b,F,ee){var de=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return de!==null?null:k(U,b,""+F,ee);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Se:return F.key===de?C(U,b,F,ee):null;case ve:return F.key===de?z(U,b,F,ee):null;case Lt:return de=F._init,G(U,b,de(F._payload),ee)}if(vr(F)||me(F))return de!==null?null:Q(U,b,F,ee,null);gu(U,F)}return null}function se(U,b,F,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(F)||null,k(b,U,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Se:return U=U.get(ee.key===null?F:ee.key)||null,C(b,U,ee,de);case ve:return U=U.get(ee.key===null?F:ee.key)||null,z(b,U,ee,de);case Lt:var ge=ee._init;return se(U,b,F,ge(ee._payload),de)}if(vr(ee)||me(ee))return U=U.get(F)||null,Q(b,U,ee,de,null);gu(b,ee)}return null}function ue(U,b,F,ee){for(var de=null,ge=null,ye=b,we=b=0,St=null;ye!==null&&we<F.length;we++){ye.index>we?(St=ye,ye=null):St=ye.sibling;var Le=G(U,ye,F[we],ee);if(Le===null){ye===null&&(ye=St);break}r&&ye&&Le.alternate===null&&s(U,ye),b=g(Le,b,we),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=St}if(we===F.length)return a(U,ye),Je&&is(U,we),de;if(ye===null){for(;we<F.length;we++)ye=J(U,F[we],ee),ye!==null&&(b=g(ye,b,we),ge===null?de=ye:ge.sibling=ye,ge=ye);return Je&&is(U,we),de}for(ye=h(U,ye);we<F.length;we++)St=se(ye,U,we,F[we],ee),St!==null&&(r&&St.alternate!==null&&ye.delete(St.key===null?we:St.key),b=g(St,b,we),ge===null?de=St:ge.sibling=St,ge=St);return r&&ye.forEach(function(Ei){return s(U,Ei)}),Je&&is(U,we),de}function ce(U,b,F,ee){var de=me(F);if(typeof de!="function")throw Error(t(150));if(F=de.call(F),F==null)throw Error(t(151));for(var ge=de=null,ye=b,we=b=0,St=null,Le=F.next();ye!==null&&!Le.done;we++,Le=F.next()){ye.index>we?(St=ye,ye=null):St=ye.sibling;var Ei=G(U,ye,Le.value,ee);if(Ei===null){ye===null&&(ye=St);break}r&&ye&&Ei.alternate===null&&s(U,ye),b=g(Ei,b,we),ge===null?de=Ei:ge.sibling=Ei,ge=Ei,ye=St}if(Le.done)return a(U,ye),Je&&is(U,we),de;if(ye===null){for(;!Le.done;we++,Le=F.next())Le=J(U,Le.value,ee),Le!==null&&(b=g(Le,b,we),ge===null?de=Le:ge.sibling=Le,ge=Le);return Je&&is(U,we),de}for(ye=h(U,ye);!Le.done;we++,Le=F.next())Le=se(ye,U,we,Le.value,ee),Le!==null&&(r&&Le.alternate!==null&&ye.delete(Le.key===null?we:Le.key),b=g(Le,b,we),ge===null?de=Le:ge.sibling=Le,ge=Le);return r&&ye.forEach(function(zT){return s(U,zT)}),Je&&is(U,we),de}function at(U,b,F,ee){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Se:e:{for(var de=F.key,ge=b;ge!==null;){if(ge.key===de){if(de=F.type,de===N){if(ge.tag===7){a(U,ge.sibling),b=f(ge,F.props.children),b.return=U,U=b;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Lt&&Bm(de)===ge.type){a(U,ge.sibling),b=f(ge,F.props),b.ref=ba(U,ge,F),b.return=U,U=b;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}F.type===N?(b=ds(F.props.children,U.mode,ee,F.key),b.return=U,U=b):(ee=Fu(F.type,F.key,F.props,null,U.mode,ee),ee.ref=ba(U,b,F),ee.return=U,U=ee)}return w(U);case ve:e:{for(ge=F.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(U,b.sibling),b=f(b,F.children||[]),b.return=U,U=b;break e}else{a(U,b);break}else s(U,b);b=b.sibling}b=Od(F,U.mode,ee),b.return=U,U=b}return w(U);case Lt:return ge=F._init,at(U,b,ge(F._payload),ee)}if(vr(F))return ue(U,b,F,ee);if(me(F))return ce(U,b,F,ee);gu(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(U,b.sibling),b=f(b,F),b.return=U,U=b):(a(U,b),b=Dd(F,U.mode,ee),b.return=U,U=b),w(U)):a(U,b)}return at}var vo=zm(!0),$m=zm(!1),yu=ci(null),vu=null,_o=null,$h=null;function qh(){$h=_o=vu=null}function Hh(r){var s=yu.current;Ge(yu),r._currentValue=s}function Wh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function wo(r,s){vu=r,$h=_o=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(tn=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if($h!==r)if(r={context:r,memoizedValue:s,next:null},_o===null){if(vu===null)throw Error(t(308));_o=r,vu.dependencies={lanes:0,firstContext:r}}else _o=_o.next=r;return s}var ss=null;function Kh(r){ss===null?ss=[r]:ss.push(r)}function qm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Kh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Nr(r,h)}function Nr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function Gh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function pi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Oe&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Nr(r,a)}return f=h.interleaved,f===null?(s.next=s,Kh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Nr(r,a)}function _u(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ri(r,a)}}function Wm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function wu(r,s,a,h){var f=r.updateQueue;fi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var C=k,z=C.next;C.next=null,w===null?g=z:w.next=z,w=C;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,k=Q.lastBaseUpdate,k!==w&&(k===null?Q.firstBaseUpdate=z:k.next=z,Q.lastBaseUpdate=C))}if(g!==null){var J=f.baseState;w=0,Q=z=C=null,k=g;do{var G=k.lane,se=k.eventTime;if((h&G)===G){Q!==null&&(Q=Q.next={eventTime:se,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var ue=r,ce=k;switch(G=s,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){J=ue.call(se,J,G);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,G=typeof ue=="function"?ue.call(se,J,G):ue,G==null)break e;J=oe({},J,G);break e;case 2:fi=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,G=f.effects,G===null?f.effects=[k]:G.push(k))}else se={eventTime:se,lane:G,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Q===null?(z=Q=se,C=J):Q=Q.next=se,w|=G;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;G=k,k=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if(Q===null&&(C=J),f.baseState=C,f.firstBaseUpdate=z,f.lastBaseUpdate=Q,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ls|=w,r.lanes=w,r.memoizedState=J}}function Km(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Da={},sr=ci(Da),Oa=ci(Da),La=ci(Da);function os(r){if(r===Da)throw Error(t(174));return r}function Qh(r,s){switch(We(La,s),We(Oa,r),We(sr,Da),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=mt(s,r)}Ge(sr),We(sr,s)}function Eo(){Ge(sr),Ge(Oa),Ge(La)}function Gm(r){os(La.current);var s=os(sr.current),a=mt(s,r.type);s!==a&&(We(Oa,r),We(sr,a))}function Yh(r){Oa.current===r&&(Ge(sr),Ge(Oa))}var Xe=ci(0);function Eu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Xh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Tu=re.ReactCurrentDispatcher,Zh=re.ReactCurrentBatchConfig,as=0,Ze=null,yt=null,Tt=null,Iu=!1,Va=!1,Ma=0,cT=0;function Mt(){throw Error(t(321))}function ed(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Fn(r[a],s[a]))return!1;return!0}function td(r,s,a,h,f,g){if(as=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tu.current=r===null||r.memoizedState===null?pT:mT,r=a(h,f),Va){g=0;do{if(Va=!1,Ma=0,25<=g)throw Error(t(301));g+=1,Tt=yt=null,s.updateQueue=null,Tu.current=gT,r=a(h,f)}while(Va)}if(Tu.current=ku,s=yt!==null&&yt.next!==null,as=0,Tt=yt=Ze=null,Iu=!1,s)throw Error(t(300));return r}function nd(){var r=Ma!==0;return Ma=0,r}function or(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function kn(){if(yt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=yt.next;var s=Tt===null?Ze.memoizedState:Tt.next;if(s!==null)Tt=s,yt=r;else{if(r===null)throw Error(t(310));yt=r,r={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function ja(r,s){return typeof s=="function"?s(r):s}function rd(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=yt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var k=w=null,C=null,z=g;do{var Q=z.lane;if((as&Q)===Q)C!==null&&(C=C.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var J={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};C===null?(k=C=J,w=h):C=C.next=J,Ze.lanes|=Q,ls|=Q}z=z.next}while(z!==null&&z!==g);C===null?w=h:C.next=k,Fn(h,s.memoizedState)||(tn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=C,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,ls|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function id(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Fn(g,s.memoizedState)||(tn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Qm(){}function Ym(r,s){var a=Ze,h=kn(),f=s(),g=!Fn(h.memoizedState,f);if(g&&(h.memoizedState=f,tn=!0),h=h.queue,sd(Zm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Ua(9,Xm.bind(null,a,h,f,s),void 0,null),It===null)throw Error(t(349));(as&30)!==0||Jm(a,s,f)}return f}function Jm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Xm(r,s,a,h){s.value=a,s.getSnapshot=h,eg(s)&&tg(r)}function Zm(r,s,a){return a(function(){eg(s)&&tg(r)})}function eg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Fn(r,a)}catch{return!0}}function tg(r){var s=Nr(r,1);s!==null&&Hn(s,r,1,-1)}function ng(r){var s=or();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},s.queue=r,r=r.dispatch=fT.bind(null,Ze,r),[s.memoizedState,r]}function Ua(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function rg(){return kn().memoizedState}function Su(r,s,a,h){var f=or();Ze.flags|=r,f.memoizedState=Ua(1|s,a,void 0,h===void 0?null:h)}function Au(r,s,a,h){var f=kn();h=h===void 0?null:h;var g=void 0;if(yt!==null){var w=yt.memoizedState;if(g=w.destroy,h!==null&&ed(h,w.deps)){f.memoizedState=Ua(s,a,g,h);return}}Ze.flags|=r,f.memoizedState=Ua(1|s,a,g,h)}function ig(r,s){return Su(8390656,8,r,s)}function sd(r,s){return Au(2048,8,r,s)}function sg(r,s){return Au(4,2,r,s)}function og(r,s){return Au(4,4,r,s)}function ag(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function lg(r,s,a){return a=a!=null?a.concat([r]):null,Au(4,4,ag.bind(null,s,r),a)}function od(){}function ug(r,s){var a=kn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&ed(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function cg(r,s){var a=kn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&ed(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function hg(r,s,a){return(as&21)===0?(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=a):(Fn(a,s)||(a=Yi(),Ze.lanes|=a,ls|=a,r.baseState=!0),s)}function hT(r,s){var a=Ce;Ce=a!==0&&4>a?a:4,r(!0);var h=Zh.transition;Zh.transition={};try{r(!1),s()}finally{Ce=a,Zh.transition=h}}function dg(){return kn().memoizedState}function dT(r,s,a){var h=vi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},fg(r))pg(s,a);else if(a=qm(r,s,a,h),a!==null){var f=Qt();Hn(a,r,h,f),mg(a,s,h)}}function fT(r,s,a){var h=vi(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(fg(r))pg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,k=g(w,a);if(f.hasEagerState=!0,f.eagerState=k,Fn(k,w)){var C=s.interleaved;C===null?(f.next=f,Kh(s)):(f.next=C.next,C.next=f),s.interleaved=f;return}}catch{}finally{}a=qm(r,s,f,h),a!==null&&(f=Qt(),Hn(a,r,h,f),mg(a,s,h))}}function fg(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function pg(r,s){Va=Iu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function mg(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ri(r,a)}}var ku={readContext:An,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},pT={readContext:An,useCallback:function(r,s){return or().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:ig,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Su(4194308,4,ag.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Su(4194308,4,r,s)},useInsertionEffect:function(r,s){return Su(4,2,r,s)},useMemo:function(r,s){var a=or();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=or();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=dT.bind(null,Ze,r),[h.memoizedState,r]},useRef:function(r){var s=or();return r={current:r},s.memoizedState=r},useState:ng,useDebugValue:od,useDeferredValue:function(r){return or().memoizedState=r},useTransition:function(){var r=ng(!1),s=r[0];return r=hT.bind(null,r[1]),or().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=Ze,f=or();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(as&30)!==0||Jm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,ig(Zm.bind(null,h,g,r),[r]),h.flags|=2048,Ua(9,Xm.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=or(),s=It.identifierPrefix;if(Je){var a=xr,h=Cr;a=(h&~(1<<32-Wt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ma++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=cT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},mT={readContext:An,useCallback:ug,useContext:An,useEffect:sd,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:cg,useReducer:rd,useRef:rg,useState:function(){return rd(ja)},useDebugValue:od,useDeferredValue:function(r){var s=kn();return hg(s,yt.memoizedState,r)},useTransition:function(){var r=rd(ja)[0],s=kn().memoizedState;return[r,s]},useMutableSource:Qm,useSyncExternalStore:Ym,useId:dg,unstable_isNewReconciler:!1},gT={readContext:An,useCallback:ug,useContext:An,useEffect:sd,useImperativeHandle:lg,useInsertionEffect:sg,useLayoutEffect:og,useMemo:cg,useReducer:id,useRef:rg,useState:function(){return id(ja)},useDebugValue:od,useDeferredValue:function(r){var s=kn();return yt===null?s.memoizedState=r:hg(s,yt.memoizedState,r)},useTransition:function(){var r=id(ja)[0],s=kn().memoizedState;return[r,s]},useMutableSource:Qm,useSyncExternalStore:Ym,useId:dg,unstable_isNewReconciler:!1};function zn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ad(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ru={isMounted:function(r){return(r=r._reactInternals)?Dn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Qt(),f=vi(r),g=br(h,f);g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Hn(s,r,f,h),_u(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Qt(),f=vi(r),g=br(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Hn(s,r,f,h),_u(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Qt(),h=vi(r),f=br(a,h);f.tag=2,s!=null&&(f.callback=s),s=pi(r,f,h),s!==null&&(Hn(s,r,h,a),_u(s,r,h))}};function gg(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Aa(a,h)||!Aa(f,g):!0}function yg(r,s,a){var h=!1,f=hi,g=s.contextType;return typeof g=="object"&&g!==null?g=An(g):(f=en(s)?ns:Vt.current,h=s.contextTypes,g=(h=h!=null)?po(r,f):hi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ru,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function vg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Ru.enqueueReplaceState(s,s.state,null)}function ld(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Gh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=An(g):(g=en(s)?ns:Vt.current,f.context=po(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ad(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Ru.enqueueReplaceState(f,f.state,null),wu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function To(r,s){try{var a="",h=s;do a+=ke(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function ud(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function cd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var yT=typeof WeakMap=="function"?WeakMap:Map;function _g(r,s,a){a=br(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Ou||(Ou=!0,Ad=h),cd(r,s)},a}function wg(r,s,a){a=br(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){cd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){cd(r,s),typeof h!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Eg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new yT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=NT.bind(null,r,s,a),s.then(r,r))}function Tg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ig(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=br(-1,1),s.tag=2,pi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var vT=re.ReactCurrentOwner,tn=!1;function Gt(r,s,a,h){s.child=r===null?$m(s,null,a,h):vo(s,r.child,a,h)}function Sg(r,s,a,h,f){a=a.render;var g=s.ref;return wo(s,f),h=td(r,s,a,h,g,f),a=nd(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Dr(r,s,f)):(Je&&a&&jh(s),s.flags|=1,Gt(r,s,h,f),s.child)}function Ag(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!bd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,kg(r,s,g,h,f)):(r=Fu(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(w,h)&&r.ref===s.ref)return Dr(r,s,f)}return s.flags|=1,r=wi(g,h),r.ref=s.ref,r.return=s,s.child=r}function kg(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(Aa(g,h)&&r.ref===s.ref)if(tn=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Dr(r,s,f)}return hd(r,s,a,h,f)}function Rg(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(So,gn),gn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(So,gn),gn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,We(So,gn),gn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,We(So,gn),gn|=h;return Gt(r,s,f,a),s.child}function Pg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function hd(r,s,a,h,f){var g=en(a)?ns:Vt.current;return g=po(s,g),wo(s,f),a=td(r,s,a,h,g,f),h=nd(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Dr(r,s,f)):(Je&&h&&jh(s),s.flags|=1,Gt(r,s,a,f),s.child)}function Cg(r,s,a,h,f){if(en(a)){var g=!0;hu(s)}else g=!1;if(wo(s,f),s.stateNode===null)Cu(r,s),yg(s,a,h),ld(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,k=s.memoizedProps;w.props=k;var C=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=An(z):(z=en(a)?ns:Vt.current,z=po(s,z));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==h||C!==z)&&vg(s,w,h,z),fi=!1;var G=s.memoizedState;w.state=G,wu(s,h,w,f),C=s.memoizedState,k!==h||G!==C||Zt.current||fi?(typeof Q=="function"&&(ad(s,a,Q,h),C=s.memoizedState),(k=fi||gg(s,a,k,h,G,C,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=C),w.props=h,w.state=C,w.context=z,h=k):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,Hm(r,s),k=s.memoizedProps,z=s.type===s.elementType?k:zn(s.type,k),w.props=z,J=s.pendingProps,G=w.context,C=a.contextType,typeof C=="object"&&C!==null?C=An(C):(C=en(a)?ns:Vt.current,C=po(s,C));var se=a.getDerivedStateFromProps;(Q=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==J||G!==C)&&vg(s,w,h,C),fi=!1,G=s.memoizedState,w.state=G,wu(s,h,w,f);var ue=s.memoizedState;k!==J||G!==ue||Zt.current||fi?(typeof se=="function"&&(ad(s,a,se,h),ue=s.memoizedState),(z=fi||gg(s,a,z,h,G,ue,C)||!1)?(Q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ue,C),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ue,C)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ue),w.props=h,w.state=ue,w.context=C,h=z):(typeof w.componentDidUpdate!="function"||k===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),h=!1)}return dd(r,s,a,h,g,f)}function dd(r,s,a,h,f,g){Pg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Om(s,a,!1),Dr(r,s,g);h=s.stateNode,vT.current=s;var k=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=vo(s,r.child,null,g),s.child=vo(s,null,k,g)):Gt(r,s,k,g),s.memoizedState=h.state,f&&Om(s,a,!0),s.child}function xg(r){var s=r.stateNode;s.pendingContext?bm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&bm(r,s.context,!1),Qh(r,s.containerInfo)}function Ng(r,s,a,h,f){return yo(),zh(f),s.flags|=256,Gt(r,s,a,h),s.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(r){return{baseLanes:r,cachePool:null,transitions:null}}function bg(r,s,a){var h=s.pendingProps,f=Xe.current,g=!1,w=(s.flags&128)!==0,k;if((k=w)||(k=r!==null&&r.memoizedState===null?!1:(f&2)!==0),k?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(Xe,f&1),r===null)return Bh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Bu(w,h,0,null),r=ds(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=pd(a),s.memoizedState=fd,r):md(s,w));if(f=r.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return _T(r,s,w,h,k,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,k=f.sibling;var C={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=C,s.deletions=null):(h=wi(f,C),h.subtreeFlags=f.subtreeFlags&14680064),k!==null?g=wi(k,g):(g=ds(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?pd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=fd,h}return g=r.child,r=g.sibling,h=wi(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function md(r,s){return s=Bu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Pu(r,s,a,h){return h!==null&&zh(h),vo(s,r.child,null,a),r=md(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function _T(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=ud(Error(t(422))),Pu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=Bu({mode:"visible",children:h.children},f,0,null),g=ds(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&vo(s,r.child,null,w),s.child.memoizedState=pd(w),s.memoizedState=fd,g);if((s.mode&1)===0)return Pu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var k=h.dgst;return h=k,g=Error(t(419)),h=ud(g,h,void 0),Pu(r,s,w,h)}if(k=(w&r.childLanes)!==0,tn||k){if(h=It,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Nr(r,f),Hn(h,r,f,-1))}return Nd(),h=ud(Error(t(421))),Pu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=bT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,mn=ui(f.nextSibling),pn=s,Je=!0,Bn=null,r!==null&&(In[Sn++]=Cr,In[Sn++]=xr,In[Sn++]=rs,Cr=r.id,xr=r.overflow,rs=s),s=md(s,h.children),s.flags|=4096,s)}function Dg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Wh(r.return,s,a)}function gd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Og(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Gt(r,s,h.children,a),h=Xe.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Dg(r,a,s);else if(r.tag===19)Dg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Xe,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Eu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),gd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Eu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}gd(s,!0,a,null,g);break;case"together":gd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Dr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ls|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=wi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=wi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function wT(r,s,a){switch(s.tag){case 3:xg(s),yo();break;case 5:Gm(s);break;case 1:en(s.type)&&hu(s);break;case 4:Qh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(yu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Xe,Xe.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?bg(r,s,a):(We(Xe,Xe.current&1),r=Dr(r,s,a),r!==null?r.sibling:null);We(Xe,Xe.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Og(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Xe,Xe.current),h)break;return null;case 22:case 23:return s.lanes=0,Rg(r,s,a)}return Dr(r,s,a)}var Lg,yd,Vg,Mg;Lg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yd=function(){},Vg=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,os(sr.current);var g=null;switch(a){case"input":f=Ui(r,f),h=Ui(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ea(r,f),h=ea(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=lu)}oa(a,h);var w;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var k=f[z];for(w in k)k.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var C=h[z];if(k=f?.[z],h.hasOwnProperty(z)&&C!==k&&(C!=null||k!=null))if(z==="style")if(k){for(w in k)!k.hasOwnProperty(w)||C&&C.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in C)C.hasOwnProperty(w)&&k[w]!==C[w]&&(a||(a={}),a[w]=C[w])}else a||(g||(g=[]),g.push(z,a)),a=C;else z==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,k=k?k.__html:void 0,C!=null&&k!==C&&(g=g||[]).push(z,C)):z==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(z,""+C):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(C!=null&&z==="onScroll"&&Ke("scroll",r),g||k===C||(g=[])):(g=g||[]).push(z,C))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Mg=function(r,s,a,h){a!==h&&(s.flags|=4)};function Fa(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function jt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function ET(r,s,a){var h=s.pendingProps;switch(Uh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(s),null;case 1:return en(s.type)&&cu(),jt(s),null;case 3:return h=s.stateNode,Eo(),Ge(Zt),Ge(Vt),Xh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(mu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Bn!==null&&(Pd(Bn),Bn=null))),yd(r,s),jt(s),null;case 5:Yh(s);var f=os(La.current);if(a=s.type,r!==null&&s.stateNode!=null)Vg(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return jt(s),null}if(r=os(sr.current),mu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[ir]=s,h[xa]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(f=0;f<Ra.length;f++)Ke(Ra[f],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":Ls(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Ms(h,g),Ke("invalid",h)}oa(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var k=g[w];w==="children"?typeof k=="string"?h.textContent!==k&&(g.suppressHydrationWarning!==!0&&au(h.textContent,k,r),f=["children",k]):typeof k=="number"&&h.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&au(h.textContent,k,r),f=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&Ke("scroll",h)}switch(a){case"input":yr(h),Dl(h,g,!0);break;case"textarea":yr(h),ta(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=lu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=pt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[ir]=s,r[xa]=h,Lg(r,s,!1,!1),s.stateNode=r;e:{switch(w=aa(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),f=h;break;case"iframe":case"object":case"embed":Ke("load",r),f=h;break;case"video":case"audio":for(f=0;f<Ra.length;f++)Ke(Ra[f],r);f=h;break;case"source":Ke("error",r),f=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=h;break;case"details":Ke("toggle",r),f=h;break;case"input":Ls(r,h),f=Ui(r,h),Ke("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Ms(r,h),f=ea(r,h),Ke("invalid",r);break;default:f=h}oa(a,f),k=f;for(g in k)if(k.hasOwnProperty(g)){var C=k[g];g==="style"?ia(r,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&na(r,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Xr(r,C):typeof C=="number"&&Xr(r,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Ke("scroll",r):C!=null&&ne(r,g,C,w))}switch(a){case"input":yr(r),Dl(r,h,!1);break;case"textarea":yr(r),ta(r);break;case"option":h.value!=null&&r.setAttribute("value",""+je(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?_r(r,!!h.multiple,g,!1):h.defaultValue!=null&&_r(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=lu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return jt(s),null;case 6:if(r&&s.stateNode!=null)Mg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=os(La.current),os(sr.current),mu(s)){if(h=s.stateNode,a=s.memoizedProps,h[ir]=s,(g=h.nodeValue!==a)&&(r=pn,r!==null))switch(r.tag){case 3:au(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[ir]=s,s.stateNode=h}return jt(s),null;case 13:if(Ge(Xe),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&mn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Fm(),yo(),s.flags|=98560,g=!1;else if(g=mu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ir]=s}else yo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;jt(s),g=!1}else Bn!==null&&(Pd(Bn),Bn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Xe.current&1)!==0?vt===0&&(vt=3):Nd())),s.updateQueue!==null&&(s.flags|=4),jt(s),null);case 4:return Eo(),yd(r,s),r===null&&Pa(s.stateNode.containerInfo),jt(s),null;case 10:return Hh(s.type._context),jt(s),null;case 17:return en(s.type)&&cu(),jt(s),null;case 19:if(Ge(Xe),g=s.memoizedState,g===null)return jt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Fa(g,!1);else{if(vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Eu(r),w!==null){for(s.flags|=128,Fa(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>Ao&&(s.flags|=128,h=!0,Fa(g,!1),s.lanes=4194304)}else{if(!h)if(r=Eu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Fa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Je)return jt(s),null}else 2*He()-g.renderingStartTime>Ao&&a!==1073741824&&(s.flags|=128,h=!0,Fa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Xe.current,We(Xe,h?a&1|2:a&1),s):(jt(s),null);case 22:case 23:return xd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(gn&1073741824)!==0&&(jt(s),s.subtreeFlags&6&&(s.flags|=8192)):jt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function TT(r,s){switch(Uh(s),s.tag){case 1:return en(s.type)&&cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Eo(),Ge(Zt),Ge(Vt),Xh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Yh(s),null;case 13:if(Ge(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));yo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return Eo(),null;case 10:return Hh(s.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var xu=!1,Ut=!1,IT=typeof WeakSet=="function"?WeakSet:Set,le=null;function Io(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){nt(r,s,h)}else a.current=null}function vd(r,s,a){try{a()}catch(h){nt(r,s,h)}}var jg=!1;function ST(r,s){if(xh=oi,r=gm(),Th(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,k=-1,C=-1,z=0,Q=0,J=r,G=null;t:for(;;){for(var se;J!==a||f!==0&&J.nodeType!==3||(k=w+f),J!==g||h!==0&&J.nodeType!==3||(C=w+h),J.nodeType===3&&(w+=J.nodeValue.length),(se=J.firstChild)!==null;)G=J,J=se;for(;;){if(J===r)break t;if(G===a&&++z===f&&(k=w),G===g&&++Q===h&&(C=w),(se=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=se}a=k===-1||C===-1?null:{start:k,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nh={focusedElem:r,selectionRange:a},oi=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,at=ue.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?ce:zn(s.type,ce),at);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){nt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=jg,jg=!1,ue}function Ba(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&vd(s,a,g)}f=f.next}while(f!==h)}}function Nu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function _d(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Ug(r){var s=r.alternate;s!==null&&(r.alternate=null,Ug(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ir],delete s[xa],delete s[Lh],delete s[oT],delete s[aT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Fg(r){return r.tag===5||r.tag===3||r.tag===4}function Bg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Fg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function wd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=lu));else if(h!==4&&(r=r.child,r!==null))for(wd(r,s,a),r=r.sibling;r!==null;)wd(r,s,a),r=r.sibling}function Ed(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Ed(r,s,a),r=r.sibling;r!==null;)Ed(r,s,a),r=r.sibling}var Pt=null,$n=!1;function mi(r,s,a){for(a=a.child;a!==null;)zg(r,s,a),a=a.sibling}function zg(r,s,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Gi,a)}catch{}switch(a.tag){case 5:Ut||Io(a,s);case 6:var h=Pt,f=$n;Pt=null,mi(r,s,a),Pt=h,$n=f,Pt!==null&&($n?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&($n?(r=Pt,a=a.stateNode,r.nodeType===8?Oh(r.parentNode,a):r.nodeType===1&&Oh(r,a),jn(r)):Oh(Pt,a.stateNode));break;case 4:h=Pt,f=$n,Pt=a.stateNode.containerInfo,$n=!0,mi(r,s,a),Pt=h,$n=f;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&vd(a,s,w),f=f.next}while(f!==h)}mi(r,s,a);break;case 1:if(!Ut&&(Io(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(k){nt(a,s,k)}mi(r,s,a);break;case 21:mi(r,s,a);break;case 22:a.mode&1?(Ut=(h=Ut)||a.memoizedState!==null,mi(r,s,a),Ut=h):mi(r,s,a);break;default:mi(r,s,a)}}function $g(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new IT),s.forEach(function(h){var f=DT.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function qn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,k=w;e:for(;k!==null;){switch(k.tag){case 5:Pt=k.stateNode,$n=!1;break e;case 3:Pt=k.stateNode.containerInfo,$n=!0;break e;case 4:Pt=k.stateNode.containerInfo,$n=!0;break e}k=k.return}if(Pt===null)throw Error(t(160));zg(g,w,f),Pt=null,$n=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(z){nt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qg(s,r),s=s.sibling}function qg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(qn(s,r),ar(r),h&4){try{Ba(3,r,r.return),Nu(3,r)}catch(ce){nt(r,r.return,ce)}try{Ba(5,r,r.return)}catch(ce){nt(r,r.return,ce)}}break;case 1:qn(s,r),ar(r),h&512&&a!==null&&Io(a,a.return);break;case 5:if(qn(s,r),ar(r),h&512&&a!==null&&Io(a,a.return),r.flags&32){var f=r.stateNode;try{Xr(f,"")}catch(ce){nt(r,r.return,ce)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,k=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&Xo(f,g),aa(k,w);var z=aa(k,g);for(w=0;w<C.length;w+=2){var Q=C[w],J=C[w+1];Q==="style"?ia(f,J):Q==="dangerouslySetInnerHTML"?na(f,J):Q==="children"?Xr(f,J):ne(f,Q,J,z)}switch(k){case"input":Zo(f,g);break;case"textarea":js(f,g);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?_r(f,!!g.multiple,se,!1):G!==!!g.multiple&&(g.defaultValue!=null?_r(f,!!g.multiple,g.defaultValue,!0):_r(f,!!g.multiple,g.multiple?[]:"",!1))}f[xa]=g}catch(ce){nt(r,r.return,ce)}}break;case 6:if(qn(s,r),ar(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){nt(r,r.return,ce)}}break;case 3:if(qn(s,r),ar(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(s.containerInfo)}catch(ce){nt(r,r.return,ce)}break;case 4:qn(s,r),ar(r);break;case 13:qn(s,r),ar(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Sd=He())),h&4&&$g(r);break;case 22:if(Q=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||Q,qn(s,r),Ut=z):qn(s,r),ar(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!Q&&(r.mode&1)!==0)for(le=r,Q=r.child;Q!==null;){for(J=le=Q;le!==null;){switch(G=le,se=G.child,G.tag){case 0:case 11:case 14:case 15:Ba(4,G,G.return);break;case 1:Io(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){h=G,a=G.return;try{s=h,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){nt(h,a,ce)}}break;case 5:Io(G,G.return);break;case 22:if(G.memoizedState!==null){Kg(J);continue}}se!==null?(se.return=G,le=se):Kg(J)}Q=Q.sibling}e:for(Q=null,J=r;;){if(J.tag===5){if(Q===null){Q=J;try{f=J.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=J.stateNode,C=J.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null,k.style.display=ra("display",w))}catch(ce){nt(r,r.return,ce)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(ce){nt(r,r.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:qn(s,r),ar(r),h&4&&$g(r);break;case 21:break;default:qn(s,r),ar(r)}}function ar(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Fg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Xr(f,""),h.flags&=-33);var g=Bg(r);Ed(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,k=Bg(r);wd(r,k,w);break;default:throw Error(t(161))}}catch(C){nt(r,r.return,C)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function AT(r,s,a){le=r,Hg(r)}function Hg(r,s,a){for(var h=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||xu;if(!w){var k=f.alternate,C=k!==null&&k.memoizedState!==null||Ut;k=xu;var z=Ut;if(xu=w,(Ut=C)&&!z)for(le=f;le!==null;)w=le,C=w.child,w.tag===22&&w.memoizedState!==null?Gg(f):C!==null?(C.return=w,le=C):Gg(f);for(;g!==null;)le=g,Hg(g),g=g.sibling;le=f,xu=k,Ut=z}Wg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,le=g):Wg(r)}}function Wg(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Nu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:zn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Km(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Km(s,w,a)}break;case 5:var k=s.stateNode;if(a===null&&s.flags&4){a=k;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&jn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&_d(s)}catch(G){nt(s,s.return,G)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Kg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Gg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Nu(4,s)}catch(C){nt(s,a,C)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(C){nt(s,f,C)}}var g=s.return;try{_d(s)}catch(C){nt(s,g,C)}break;case 5:var w=s.return;try{_d(s)}catch(C){nt(s,w,C)}}}catch(C){nt(s,s.return,C)}if(s===r){le=null;break}var k=s.sibling;if(k!==null){k.return=s.return,le=k;break}le=s.return}}var kT=Math.ceil,bu=re.ReactCurrentDispatcher,Td=re.ReactCurrentOwner,Rn=re.ReactCurrentBatchConfig,Oe=0,It=null,ht=null,Ct=0,gn=0,So=ci(0),vt=0,za=null,ls=0,Du=0,Id=0,$a=null,nn=null,Sd=0,Ao=1/0,Or=null,Ou=!1,Ad=null,gi=null,Lu=!1,yi=null,Vu=0,qa=0,kd=null,Mu=-1,ju=0;function Qt(){return(Oe&6)!==0?He():Mu!==-1?Mu:Mu=He()}function vi(r){return(r.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:uT.transition!==null?(ju===0&&(ju=Yi()),ju):(r=Ce,r!==0||(r=window.event,r=r===void 0?16:va(r.type)),r)}function Hn(r,s,a,h){if(50<qa)throw qa=0,kd=null,Error(t(185));ni(r,a,h),((Oe&2)===0||r!==It)&&(r===It&&((Oe&2)===0&&(Du|=a),vt===4&&_i(r,Ct)),rn(r,h),a===1&&Oe===0&&(s.mode&1)===0&&(Ao=He()+500,du&&di()))}function rn(r,s){var a=r.callbackNode;Tr(r,s);var h=Qi(r,r===It?Ct:0);if(h===0)a!==null&&fa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&fa(a),s===1)r.tag===0?lT(Yg.bind(null,r)):Lm(Yg.bind(null,r)),iT(function(){(Oe&6)===0&&di()}),a=null;else{switch(ii(h)){case 1:a=Ki;break;case 4:a=Zr;break;case 16:a=wn;break;case 536870912:a=jl;break;default:a=wn}a=iy(a,Qg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Qg(r,s){if(Mu=-1,ju=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(ko()&&r.callbackNode!==a)return null;var h=Qi(r,r===It?Ct:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Uu(r,h);else{s=h;var f=Oe;Oe|=2;var g=Xg();(It!==r||Ct!==s)&&(Or=null,Ao=He()+500,cs(r,s));do try{CT();break}catch(k){Jg(r,k)}while(!0);qh(),bu.current=g,Oe=f,ht!==null?s=0:(It=null,Ct=0,s=vt)}if(s!==0){if(s===2&&(f=hn(r),f!==0&&(h=f,s=Rd(r,f))),s===1)throw a=za,cs(r,0),_i(r,h),rn(r,He()),a;if(s===6)_i(r,h);else{if(f=r.current.alternate,(h&30)===0&&!RT(f)&&(s=Uu(r,h),s===2&&(g=hn(r),g!==0&&(h=g,s=Rd(r,g))),s===1))throw a=za,cs(r,0),_i(r,h),rn(r,He()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:hs(r,nn,Or);break;case 3:if(_i(r,h),(h&130023424)===h&&(s=Sd+500-He(),10<s)){if(Qi(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Dh(hs.bind(null,r,nn,Or),s);break}hs(r,nn,Or);break;case 4:if(_i(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Wt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*kT(h/1960))-h,10<h){r.timeoutHandle=Dh(hs.bind(null,r,nn,Or),h);break}hs(r,nn,Or);break;case 5:hs(r,nn,Or);break;default:throw Error(t(329))}}}return rn(r,He()),r.callbackNode===a?Qg.bind(null,r):null}function Rd(r,s){var a=$a;return r.current.memoizedState.isDehydrated&&(cs(r,s).flags|=256),r=Uu(r,s),r!==2&&(s=nn,nn=a,s!==null&&Pd(s)),r}function Pd(r){nn===null?nn=r:nn.push.apply(nn,r)}function RT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Fn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function _i(r,s){for(s&=~Id,s&=~Du,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),h=1<<a;r[a]=-1,s&=~h}}function Yg(r){if((Oe&6)!==0)throw Error(t(327));ko();var s=Qi(r,0);if((s&1)===0)return rn(r,He()),null;var a=Uu(r,s);if(r.tag!==0&&a===2){var h=hn(r);h!==0&&(s=h,a=Rd(r,h))}if(a===1)throw a=za,cs(r,0),_i(r,s),rn(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,hs(r,nn,Or),rn(r,He()),null}function Cd(r,s){var a=Oe;Oe|=1;try{return r(s)}finally{Oe=a,Oe===0&&(Ao=He()+500,du&&di())}}function us(r){yi!==null&&yi.tag===0&&(Oe&6)===0&&ko();var s=Oe;Oe|=1;var a=Rn.transition,h=Ce;try{if(Rn.transition=null,Ce=1,r)return r()}finally{Ce=h,Rn.transition=a,Oe=s,(Oe&6)===0&&di()}}function xd(){gn=So.current,Ge(So)}function cs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,rT(a)),ht!==null)for(a=ht.return;a!==null;){var h=a;switch(Uh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&cu();break;case 3:Eo(),Ge(Zt),Ge(Vt),Xh();break;case 5:Yh(h);break;case 4:Eo();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Hh(h.type._context);break;case 22:case 23:xd()}a=a.return}if(It=r,ht=r=wi(r.current,null),Ct=gn=s,vt=0,za=null,Id=Du=ls=0,nn=$a=null,ss!==null){for(s=0;s<ss.length;s++)if(a=ss[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}ss=null}return r}function Jg(r,s){do{var a=ht;try{if(qh(),Tu.current=ku,Iu){for(var h=Ze.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Iu=!1}if(as=0,Tt=yt=Ze=null,Va=!1,Ma=0,Td.current=null,a===null||a.return===null){vt=1,za=s,ht=null;break}e:{var g=r,w=a.return,k=a,C=s;if(s=Ct,k.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var z=C,Q=k,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var se=Tg(w);if(se!==null){se.flags&=-257,Ig(se,w,k,g,s),se.mode&1&&Eg(g,z,s),s=se,C=z;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(C),s.updateQueue=ce}else ue.add(C);break e}else{if((s&1)===0){Eg(g,z,s),Nd();break e}C=Error(t(426))}}else if(Je&&k.mode&1){var at=Tg(w);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Ig(at,w,k,g,s),zh(To(C,k));break e}}g=C=To(C,k),vt!==4&&(vt=2),$a===null?$a=[g]:$a.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=_g(g,C,s);Wm(g,U);break e;case 1:k=C;var b=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(gi===null||!gi.has(F)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=wg(g,k,s);Wm(g,ee);break e}}g=g.return}while(g!==null)}ey(a)}catch(de){s=de,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Xg(){var r=bu.current;return bu.current=ku,r===null?ku:r}function Nd(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||(ls&268435455)===0&&(Du&268435455)===0||_i(It,Ct)}function Uu(r,s){var a=Oe;Oe|=2;var h=Xg();(It!==r||Ct!==s)&&(Or=null,cs(r,s));do try{PT();break}catch(f){Jg(r,f)}while(!0);if(qh(),Oe=a,bu.current=h,ht!==null)throw Error(t(261));return It=null,Ct=0,vt}function PT(){for(;ht!==null;)Zg(ht)}function CT(){for(;ht!==null&&!Vl();)Zg(ht)}function Zg(r){var s=ry(r.alternate,r,gn);r.memoizedProps=r.pendingProps,s===null?ey(r):ht=s,Td.current=null}function ey(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=ET(a,s,gn),a!==null){ht=a;return}}else{if(a=TT(a,s),a!==null){a.flags&=32767,ht=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);vt===0&&(vt=5)}function hs(r,s,a){var h=Ce,f=Rn.transition;try{Rn.transition=null,Ce=1,xT(r,s,a,h)}finally{Rn.transition=f,Ce=h}return null}function xT(r,s,a,h){do ko();while(yi!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if($e(r,g),r===It&&(ht=It=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Lu||(Lu=!0,iy(wn,function(){return ko(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Rn.transition,Rn.transition=null;var w=Ce;Ce=1;var k=Oe;Oe|=4,Td.current=null,ST(r,a),qg(a,r),YE(Nh),oi=!!xh,Nh=xh=null,r.current=a,AT(a),ph(),Oe=k,Ce=w,Rn.transition=g}else r.current=a;if(Lu&&(Lu=!1,yi=r,Vu=f),g=r.pendingLanes,g===0&&(gi=null),Ul(a.stateNode),rn(r,He()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Ou)throw Ou=!1,r=Ad,Ad=null,r;return(Vu&1)!==0&&r.tag!==0&&ko(),g=r.pendingLanes,(g&1)!==0?r===kd?qa++:(qa=0,kd=r):qa=0,di(),null}function ko(){if(yi!==null){var r=ii(Vu),s=Rn.transition,a=Ce;try{if(Rn.transition=null,Ce=16>r?16:r,yi===null)var h=!1;else{if(r=yi,yi=null,Vu=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,le=r.current;le!==null;){var g=le,w=g.child;if((le.flags&16)!==0){var k=g.deletions;if(k!==null){for(var C=0;C<k.length;C++){var z=k[C];for(le=z;le!==null;){var Q=le;switch(Q.tag){case 0:case 11:case 15:Ba(8,Q,g)}var J=Q.child;if(J!==null)J.return=Q,le=J;else for(;le!==null;){Q=le;var G=Q.sibling,se=Q.return;if(Ug(Q),Q===z){le=null;break}if(G!==null){G.return=se,le=G;break}le=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var at=ce.sibling;ce.sibling=null,ce=at}while(ce!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ba(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var b=r.current;for(le=b;le!==null;){w=le;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,le=F;else e:for(w=b;le!==null;){if(k=le,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Nu(9,k)}}catch(de){nt(k,k.return,de)}if(k===w){le=null;break e}var ee=k.sibling;if(ee!==null){ee.return=k.return,le=ee;break e}le=k.return}}if(Oe=f,di(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Gi,r)}catch{}h=!0}return h}finally{Ce=a,Rn.transition=s}}return!1}function ty(r,s,a){s=To(a,s),s=_g(r,s,1),r=pi(r,s,1),s=Qt(),r!==null&&(ni(r,1,s),rn(r,s))}function nt(r,s,a){if(r.tag===3)ty(r,r,a);else for(;s!==null;){if(s.tag===3){ty(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(gi===null||!gi.has(h))){r=To(a,r),r=wg(s,r,1),s=pi(s,r,1),r=Qt(),s!==null&&(ni(s,1,r),rn(s,r));break}}s=s.return}}function NT(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Qt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(Ct&a)===a&&(vt===4||vt===3&&(Ct&130023424)===Ct&&500>He()-Sd?cs(r,0):Id|=a),rn(r,s)}function ny(r,s){s===0&&((r.mode&1)===0?s=1:(s=Gs,Gs<<=1,(Gs&130023424)===0&&(Gs=4194304)));var a=Qt();r=Nr(r,s),r!==null&&(ni(r,s,a),rn(r,a))}function bT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),ny(r,a)}function DT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),ny(r,a)}var ry;ry=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return tn=!1,wT(r,s,a);tn=(r.flags&131072)!==0}else tn=!1,Je&&(s.flags&1048576)!==0&&Vm(s,pu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Cu(r,s),r=s.pendingProps;var f=po(s,Vt.current);wo(s,a),f=td(null,s,h,r,f,a);var g=nd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(h)?(g=!0,hu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gh(s),f.updater=Ru,s.stateNode=f,f._reactInternals=s,ld(s,h,r,a),s=dd(null,s,h,!0,g,a)):(s.tag=0,Je&&g&&jh(s),Gt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Cu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=LT(h),r=zn(h,r),f){case 0:s=hd(null,s,h,r,a);break e;case 1:s=Cg(null,s,h,r,a);break e;case 11:s=Sg(null,s,h,r,a);break e;case 14:s=Ag(null,s,h,zn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),hd(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),Cg(r,s,h,f,a);case 3:e:{if(xg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Hm(r,s),wu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=To(Error(t(423)),s),s=Ng(r,s,h,a,f);break e}else if(h!==f){f=To(Error(t(424)),s),s=Ng(r,s,h,a,f);break e}else for(mn=ui(s.stateNode.containerInfo.firstChild),pn=s,Je=!0,Bn=null,a=$m(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yo(),h===f){s=Dr(r,s,a);break e}Gt(r,s,h,a)}s=s.child}return s;case 5:return Gm(s),r===null&&Bh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,bh(h,f)?w=null:g!==null&&bh(h,g)&&(s.flags|=32),Pg(r,s),Gt(r,s,w,a),s.child;case 6:return r===null&&Bh(s),null;case 13:return bg(r,s,a);case 4:return Qh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=vo(s,null,h,a):Gt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),Sg(r,s,h,f,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,We(yu,h._currentValue),h._currentValue=w,g!==null)if(Fn(g.value,w)){if(g.children===f.children&&!Zt.current){s=Dr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var k=g.dependencies;if(k!==null){w=g.child;for(var C=k.firstContext;C!==null;){if(C.context===h){if(g.tag===1){C=br(-1,a&-a),C.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),z.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),Wh(g.return,a,s),k.lanes|=a;break}C=C.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,k=w.alternate,k!==null&&(k.lanes|=a),Wh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,wo(s,a),f=An(f),h=h(f),s.flags|=1,Gt(r,s,h,a),s.child;case 14:return h=s.type,f=zn(h,s.pendingProps),f=zn(h.type,f),Ag(r,s,h,f,a);case 15:return kg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),Cu(r,s),s.tag=1,en(h)?(r=!0,hu(s)):r=!1,wo(s,a),yg(s,h,f),ld(s,h,f,a),dd(null,s,h,!0,r,a);case 19:return Og(r,s,a);case 22:return Rg(r,s,a)}throw Error(t(156,s.tag))};function iy(r,s){return Ws(r,s)}function OT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,a,h){return new OT(r,s,a,h)}function bd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function LT(r){if(typeof r=="function")return bd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Ot)return 14}return 2}function wi(r,s){var a=r.alternate;return a===null?(a=Pn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Fu(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")bd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case N:return ds(a.children,f,g,s);case A:w=8,f|=8;break;case P:return r=Pn(12,a,s,f|2),r.elementType=P,r.lanes=g,r;case R:return r=Pn(13,a,s,f),r.elementType=R,r.lanes=g,r;case st:return r=Pn(19,a,s,f),r.elementType=st,r.lanes=g,r;case Be:return Bu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case O:w=9;break e;case M:w=11;break e;case Ot:w=14;break e;case Lt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function ds(r,s,a,h){return r=Pn(7,r,h,s),r.lanes=a,r}function Bu(r,s,a,h){return r=Pn(22,r,h,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Dd(r,s,a){return r=Pn(6,r,null,s),r.lanes=a,r}function Od(r,s,a){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function VT(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Ld(r,s,a,h,f,g,w,k,C){return r=new VT(r,s,a,k,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(g),r}function MT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function sy(r){if(!r)return hi;r=r._reactInternals;e:{if(Dn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(en(a))return Dm(r,a,s)}return s}function oy(r,s,a,h,f,g,w,k,C){return r=Ld(a,h,!0,r,f,g,w,k,C),r.context=sy(null),a=r.current,h=Qt(),f=vi(a),g=br(h,f),g.callback=s??null,pi(a,g,f),r.current.lanes=f,ni(r,f,h),rn(r,h),r}function zu(r,s,a,h){var f=s.current,g=Qt(),w=vi(f);return a=sy(a),s.context===null?s.context=a:s.pendingContext=a,s=br(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=pi(f,s,w),r!==null&&(Hn(r,f,w,g),_u(r,f,w)),w}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ay(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Vd(r,s){ay(r,s),(r=r.alternate)&&ay(r,s)}function jT(){return null}var ly=typeof reportError=="function"?reportError:function(r){console.error(r)};function Md(r){this._internalRoot=r}qu.prototype.render=Md.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));zu(r,s,null,null)},qu.prototype.unmount=Md.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;us(function(){zu(null,r,null,null)}),s[Rr]=null}};function qu(r){this._internalRoot=r}qu.prototype.unstable_scheduleHydration=function(r){if(r){var s=ql();r={blockedOn:null,target:r,priority:s};for(var a=0;a<er.length&&s!==0&&s<er[a].priority;a++);er.splice(a,0,r),a===0&&Kl(r)}};function jd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Hu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function uy(){}function UT(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=$u(w);g.call(z)}}var w=oy(s,h,r,0,null,!1,!1,"",uy);return r._reactRootContainer=w,r[Rr]=w.current,Pa(r.nodeType===8?r.parentNode:r),us(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var k=h;h=function(){var z=$u(C);k.call(z)}}var C=Ld(r,0,!1,null,null,!1,!1,"",uy);return r._reactRootContainer=C,r[Rr]=C.current,Pa(r.nodeType===8?r.parentNode:r),us(function(){zu(s,C,a,h)}),C}function Wu(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var k=f;f=function(){var C=$u(w);k.call(C)}}zu(s,w,r,f)}else w=UT(a,s,r,f,h);return $u(w)}zl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ei(s.pendingLanes);a!==0&&(ri(s,a|1),rn(s,He()),(Oe&6)===0&&(Ao=He()+500,di()))}break;case 13:us(function(){var h=Nr(r,1);if(h!==null){var f=Qt();Hn(h,r,1,f)}}),Vd(r,1)}},Qs=function(r){if(r.tag===13){var s=Nr(r,134217728);if(s!==null){var a=Qt();Hn(s,r,134217728,a)}Vd(r,134217728)}},$l=function(r){if(r.tag===13){var s=vi(r),a=Nr(r,s);if(a!==null){var h=Qt();Hn(a,r,s,h)}Vd(r,s)}},ql=function(){return Ce},Hl=function(r,s){var a=Ce;try{return Ce=r,s()}finally{Ce=a}},Fs=function(r,s,a){switch(s){case"input":if(Zo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=uu(h);if(!f)throw Error(t(90));Os(h),Zo(h,f)}}}break;case"textarea":js(r,a);break;case"select":s=a.value,s!=null&&_r(r,!!a.multiple,s,!1)}},$i=Cd,ua=us;var FT={usingClientEntryPoint:!1,Events:[Na,ho,uu,Xn,la,Cd]},Ha={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BT={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=da(r),r===null?null:r.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||jT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Gi=Ku.inject(BT),cn=Ku}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT,sn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(s))throw Error(t(200));return MT(r,s,null,a)},sn.createRoot=function(r,s){if(!jd(r))throw Error(t(299));var a=!1,h="",f=ly;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Ld(r,1,!1,null,null,a,!1,h,f),r[Rr]=s.current,Pa(r.nodeType===8?r.parentNode:r),new Md(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=da(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return us(r)},sn.hydrate=function(r,s,a){if(!Hu(s))throw Error(t(200));return Wu(null,r,s,!0,a)},sn.hydrateRoot=function(r,s,a){if(!jd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=ly;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=oy(s,null,r,1,a??null,f,!1,g,w),r[Rr]=s.current,Pa(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new qu(s)},sn.render=function(r,s,a){if(!Hu(s))throw Error(t(200));return Wu(null,r,s,!1,a)},sn.unmountComponentAtNode=function(r){if(!Hu(r))throw Error(t(40));return r._reactRootContainer?(us(function(){Wu(null,null,r,!1,function(){r._reactRootContainer=null,r[Rr]=null})}),!0):!1},sn.unstable_batchedUpdates=Cd,sn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Hu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Wu(r,s,a,!1,h)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var yy;function l_(){if(yy)return Bd.exports;yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bd.exports=YT(),Bd.exports}var vy;function JT(){if(vy)return Gu;vy=1;var n=l_();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var XT=JT();const ZT=o_(XT);l_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},al.apply(this,arguments)}var Pi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Pi||(Pi={}));const _y="popstate";function eI(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return df("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:dc(o)}return nI(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function u_(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tI(){return Math.random().toString(36).substr(2,8)}function wy(n,e){return{usr:n.state,key:n.key,idx:e}}function df(n,e,t,i){return t===void 0&&(t=null),al({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?qo(e):e,{state:t,key:e&&e.key||i||tI()})}function dc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function nI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d=Pi.Pop,p=null,y=_();y==null&&(y=0,c.replaceState(al({},c.state,{idx:y}),""));function _(){return(c.state||{idx:null}).idx}function I(){d=Pi.Pop;let L=_(),Z=L==null?null:L-y;y=L,p&&p({action:d,location:q.location,delta:Z})}function S(L,Z){d=Pi.Push;let X=df(q.location,L,Z);y=_()+1;let ne=wy(X,y),re=q.createHref(X);try{c.pushState(ne,"",re)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(re)}l&&p&&p({action:d,location:q.location,delta:1})}function D(L,Z){d=Pi.Replace;let X=df(q.location,L,Z);y=_();let ne=wy(X,y),re=q.createHref(X);c.replaceState(ne,"",re),l&&p&&p({action:d,location:q.location,delta:0})}function B(L){let Z=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof L=="string"?L:dc(L);return X=X.replace(/ $/,"%20"),et(Z,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,Z)}let q={get action(){return d},get location(){return n(o,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(_y,I),p=L,()=>{o.removeEventListener(_y,I),p=null}},createHref(L){return e(o,L)},createURL:B,encodeLocation(L){let Z=B(L);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:S,replace:D,go(L){return c.go(L)}};return q}var Ey;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ey||(Ey={}));function rI(n,e,t){return t===void 0&&(t="/"),iI(n,e,t)}function iI(n,e,t,i){let o=typeof e=="string"?qo(e):e,l=Lo(o.pathname||"/",t);if(l==null)return null;let c=c_(n);sI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=gI(l);d=pI(c[p],y)}return d}function c_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=xi([i,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(et(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),c_(l.children,e,_,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:dI(y,l.index),routesMeta:_})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of h_(l.path))o(l,c,p)}),e}function h_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=h_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function sI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:fI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const oI=/^:[\w-]+$/,aI=3,lI=2,uI=1,cI=10,hI=-2,Ty=n=>n==="*";function dI(n,e){let t=n.split("/"),i=t.length;return t.some(Ty)&&(i+=hI),e&&(i+=lI),t.filter(o=>!Ty(o)).reduce((o,l)=>o+(oI.test(l)?aI:l===""?uI:cI),i)}function fI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function pI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",I=ff({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),S=p.route;if(!I)return null;Object.assign(o,I.params),c.push({params:o,pathname:xi([l,I.pathname]),pathnameBase:wI(xi([l,I.pathnameBase])),route:S}),I.pathnameBase!=="/"&&(l=xi([l,I.pathnameBase]))}return c}function ff(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=mI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,_,I)=>{let{paramName:S,isOptional:D}=_;if(S==="*"){let q=d[I]||"";c=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const B=d[I];return D&&!B?y[S]=void 0:y[S]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function mI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),u_(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function gI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return u_(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Lo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function yI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?qo(n):n;return{pathname:t?t.startsWith("/")?t:vI(t,e):e,search:EI(i),hash:TI(o)}}function vI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function qd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _I(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Kf(n,e){let t=_I(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Gf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=qo(n):(o=al({},n),et(!o.pathname||!o.pathname.includes("?"),qd("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),qd("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),qd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let I=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),I-=1;o.pathname=S.join("/")}d=I>=0?e[I]:"/"}let p=yI(o,d),y=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}const xi=n=>n.join("/").replace(/\/\/+/g,"/"),wI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,TI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function II(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const d_=["post","put","patch","delete"];new Set(d_);const SI=["get",...d_];new Set(SI);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ll.apply(this,arguments)}const Dc=H.createContext(null),f_=H.createContext(null),Kr=H.createContext(null),Oc=H.createContext(null),Gr=H.createContext({outlet:null,matches:[],isDataRoute:!1}),p_=H.createContext(null);function AI(n,e){let{relative:t}=e===void 0?{}:e;Ho()||et(!1);let{basename:i,navigator:o}=H.useContext(Kr),{hash:l,pathname:c,search:d}=Lc(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:xi([i,c])),o.createHref({pathname:p,search:d,hash:l})}function Ho(){return H.useContext(Oc)!=null}function Wo(){return Ho()||et(!1),H.useContext(Oc).location}function m_(n){H.useContext(Kr).static||H.useLayoutEffect(n)}function Rs(){let{isDataRoute:n}=H.useContext(Gr);return n?UI():kI()}function kI(){Ho()||et(!1);let n=H.useContext(Dc),{basename:e,future:t,navigator:i}=H.useContext(Kr),{matches:o}=H.useContext(Gr),{pathname:l}=Wo(),c=JSON.stringify(Kf(o,t.v7_relativeSplatPath)),d=H.useRef(!1);return m_(()=>{d.current=!0}),H.useCallback(function(y,_){if(_===void 0&&(_={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let I=Gf(y,JSON.parse(c),l,_.relative==="path");n==null&&e!=="/"&&(I.pathname=I.pathname==="/"?e:xi([e,I.pathname])),(_.replace?i.replace:i.push)(I,_.state,_)},[e,i,c,l,n])}function RI(){let{matches:n}=H.useContext(Gr),e=n[n.length-1];return e?e.params:{}}function Lc(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=H.useContext(Kr),{matches:o}=H.useContext(Gr),{pathname:l}=Wo(),c=JSON.stringify(Kf(o,i.v7_relativeSplatPath));return H.useMemo(()=>Gf(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function PI(n,e){return CI(n,e)}function CI(n,e,t,i){Ho()||et(!1);let{navigator:o}=H.useContext(Kr),{matches:l}=H.useContext(Gr),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Wo(),_;if(e){var I;let L=typeof e=="string"?qo(e):e;p==="/"||(I=L.pathname)!=null&&I.startsWith(p)||et(!1),_=L}else _=y;let S=_.pathname||"/",D=S;if(p!=="/"){let L=p.replace(/^\//,"").split("/");D="/"+S.replace(/^\//,"").split("/").slice(L.length).join("/")}let B=rI(n,{pathname:D}),q=OI(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},d,L.params),pathname:xi([p,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:xi([p,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,t,i);return e&&q?H.createElement(Oc.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Pi.Pop}},q):q}function xI(){let n=jI(),e=II(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,null)}const NI=H.createElement(xI,null);class bI extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?H.createElement(Gr.Provider,{value:this.props.routeContext},H.createElement(p_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DI(n){let{routeContext:e,match:t,children:i}=n,o=H.useContext(Dc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),H.createElement(Gr.Provider,{value:e},i)}function OI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let _=c.findIndex(I=>I.route.id&&d?.[I.route.id]!==void 0);_>=0||et(!1),c=c.slice(0,Math.min(c.length,_+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let _=0;_<c.length;_++){let I=c[_];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(y=_),I.route.id){let{loaderData:S,errors:D}=t,B=I.route.loader&&S[I.route.id]===void 0&&(!D||D[I.route.id]===void 0);if(I.route.lazy||B){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((_,I,S)=>{let D,B=!1,q=null,L=null;t&&(D=d&&I.route.id?d[I.route.id]:void 0,q=I.route.errorElement||NI,p&&(y<0&&S===0?(FI("route-fallback"),B=!0,L=null):y===S&&(B=!0,L=I.route.hydrateFallbackElement||null)));let Z=e.concat(c.slice(0,S+1)),X=()=>{let ne;return D?ne=q:B?ne=L:I.route.Component?ne=H.createElement(I.route.Component,null):I.route.element?ne=I.route.element:ne=_,H.createElement(DI,{match:I,routeContext:{outlet:_,matches:Z,isDataRoute:t!=null},children:ne})};return t&&(I.route.ErrorBoundary||I.route.errorElement||S===0)?H.createElement(bI,{location:t.location,revalidation:t.revalidation,component:q,error:D,children:X(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):X()},null)}var g_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(g_||{}),y_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(y_||{});function LI(n){let e=H.useContext(Dc);return e||et(!1),e}function VI(n){let e=H.useContext(f_);return e||et(!1),e}function MI(n){let e=H.useContext(Gr);return e||et(!1),e}function v_(n){let e=MI(),t=e.matches[e.matches.length-1];return t.route.id||et(!1),t.route.id}function jI(){var n;let e=H.useContext(p_),t=VI(),i=v_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function UI(){let{router:n}=LI(g_.UseNavigateStable),e=v_(y_.UseNavigateStable),t=H.useRef(!1);return m_(()=>{t.current=!0}),H.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,ll({fromRouteId:e},l)))},[n,e])}const Iy={};function FI(n,e,t){Iy[n]||(Iy[n]=!0)}function BI(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function __(n){let{to:e,replace:t,state:i,relative:o}=n;Ho()||et(!1);let{future:l,static:c}=H.useContext(Kr),{matches:d}=H.useContext(Gr),{pathname:p}=Wo(),y=Rs(),_=Gf(e,Kf(d,l.v7_relativeSplatPath),p,o==="path"),I=JSON.stringify(_);return H.useEffect(()=>y(JSON.parse(I),{replace:t,state:i,relative:o}),[y,I,o,t,i]),null}function Wn(n){et(!1)}function zI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Pi.Pop,navigator:l,static:c=!1,future:d}=n;Ho()&&et(!1);let p=e.replace(/^\/*/,"/"),y=H.useMemo(()=>({basename:p,navigator:l,static:c,future:ll({v7_relativeSplatPath:!1},d)}),[p,d,l,c]);typeof i=="string"&&(i=qo(i));let{pathname:_="/",search:I="",hash:S="",state:D=null,key:B="default"}=i,q=H.useMemo(()=>{let L=Lo(_,p);return L==null?null:{location:{pathname:L,search:I,hash:S,state:D,key:B},navigationType:o}},[p,_,I,S,D,B,o]);return q==null?null:H.createElement(Kr.Provider,{value:y},H.createElement(Oc.Provider,{children:t,value:q}))}function $I(n){let{children:e,location:t}=n;return PI(pf(e),t)}new Promise(()=>{});function pf(n,e){e===void 0&&(e=[]);let t=[];return H.Children.forEach(n,(i,o)=>{if(!H.isValidElement(i))return;let l=[...e,o];if(i.type===H.Fragment){t.push.apply(t,pf(i.props.children,l));return}i.type!==Wn&&et(!1),!i.props.index||!i.props.children||et(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=pf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fc(){return fc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},fc.apply(this,arguments)}function w_(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function qI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function HI(n,e){return n.button===0&&(!e||e==="_self")&&!qI(n)}const WI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],KI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],GI="6";try{window.__reactRouterVersion=GI}catch{}const QI=H.createContext({isTransitioning:!1}),YI="startTransition",Sy=KT[YI];function JI(n){let{basename:e,children:t,future:i,window:o}=n,l=H.useRef();l.current==null&&(l.current=eI({window:o,v5Compat:!0}));let c=l.current,[d,p]=H.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},_=H.useCallback(I=>{y&&Sy?Sy(()=>p(I)):p(I)},[p,y]);return H.useLayoutEffect(()=>c.listen(_),[c,_]),H.useEffect(()=>BI(i),[i]),H.createElement(zI,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}const XI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,on=H.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:_,viewTransition:I}=e,S=w_(e,WI),{basename:D}=H.useContext(Kr),B,q=!1;if(typeof y=="string"&&ZI.test(y)&&(B=y,XI))try{let ne=new URL(window.location.href),re=y.startsWith("//")?new URL(ne.protocol+y):new URL(y),Se=Lo(re.pathname,D);re.origin===ne.origin&&Se!=null?y=Se+re.search+re.hash:q=!0}catch{}let L=AI(y,{relative:o}),Z=tS(y,{replace:c,state:d,target:p,preventScrollReset:_,relative:o,viewTransition:I});function X(ne){i&&i(ne),ne.defaultPrevented||Z(ne)}return H.createElement("a",fc({},S,{href:B||L,onClick:q||l?i:X,ref:t,target:p}))}),lr=H.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:c=!1,style:d,to:p,viewTransition:y,children:_}=e,I=w_(e,KI),S=Lc(p,{relative:I.relative}),D=Wo(),B=H.useContext(f_),{navigator:q,basename:L}=H.useContext(Kr),Z=B!=null&&nS(S)&&y===!0,X=q.encodeLocation?q.encodeLocation(S).pathname:S.pathname,ne=D.pathname,re=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(ne=ne.toLowerCase(),re=re?re.toLowerCase():null,X=X.toLowerCase()),re&&L&&(re=Lo(re,L)||re);const Se=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let ve=ne===X||!c&&ne.startsWith(X)&&ne.charAt(Se)==="/",N=re!=null&&(re===X||!c&&re.startsWith(X)&&re.charAt(X.length)==="/"),A={isActive:ve,isPending:N,isTransitioning:Z},P=ve?i:void 0,x;typeof l=="function"?x=l(A):x=[l,ve?"active":null,N?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let O=typeof d=="function"?d(A):d;return H.createElement(on,fc({},I,{"aria-current":P,className:x,ref:t,style:O,to:p,viewTransition:y}),typeof _=="function"?_(A):_)});var mf;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(mf||(mf={}));var Ay;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Ay||(Ay={}));function eS(n){let e=H.useContext(Dc);return e||et(!1),e}function tS(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,p=Rs(),y=Wo(),_=Lc(n,{relative:c});return H.useCallback(I=>{if(HI(I,t)){I.preventDefault();let S=i!==void 0?i:dc(y)===dc(_);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[y,p,_,i,o,t,n,l,c,d])}function nS(n,e){e===void 0&&(e={});let t=H.useContext(QI);t==null&&et(!1);let{basename:i}=eS(mf.useViewTransitionState),o=Lc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Lo(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Lo(t.nextLocation.pathname,i)||t.nextLocation.pathname;return ff(o.pathname,c)!=null||ff(o.pathname,l)!=null}var ky={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},rS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},T_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,I=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,D=y&63;p||(D=64,c||(S=64)),i.push(t[_],t[I],t[S],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(E_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||I==null)throw new iS;const S=l<<2|d>>4;if(i.push(S),y!==64){const D=d<<4&240|y>>2;if(i.push(D),I!==64){const B=y<<6&192|I;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sS=function(n){const e=E_(n);return T_.encodeByteArray(e,!0)},pc=function(n){return sS(n).replace(/\./g,"")},I_=function(n){try{return T_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=()=>oS().__FIREBASE_DEFAULTS__,lS=()=>{if(typeof process>"u"||typeof ky>"u")return;const n=ky.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&I_(n[1]);return e&&JSON.parse(e)},Vc=()=>{try{return aS()||lS()||uS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},S_=n=>{var e,t;return(t=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},A_=n=>{const e=S_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},k_=()=>{var n;return(n=Vc())===null||n===void 0?void 0:n.config},R_=n=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pc(JSON.stringify(t)),pc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function dS(){var n;const e=(n=Vc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gS(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yS(){return!dS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C_(){try{return typeof indexedDB=="object"}catch{return!1}}function x_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function vS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="FirebaseError";class Yn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_S,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?wS(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Yn(o,d,i)}}function wS(n,e){return n.replace(ES,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const ES=/\{\$([^}]+)}/g;function TS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Ry(l)&&Ry(c)){if(!mc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ry(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Qa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ya(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function IS(n,e){const t=new SS(n,e);return t.subscribe.bind(t)}class SS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");AS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Hd),o.error===void 0&&(o.error=Hd),o.complete===void 0&&(o.complete=Hd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n){return n&&n._delegate?n._delegate:n}class xn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new cS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(n){return n===fs?void 0:n}function PS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const xS={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},NS=xe.INFO,bS={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},DS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=bS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qf{constructor(e){this.name=e,this._logLevel=NS,this._logHandler=DS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const OS=(n,e)=>e.some(t=>n instanceof t);let Py,Cy;function LS(){return Py||(Py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VS(){return Cy||(Cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N_=new WeakMap,gf=new WeakMap,b_=new WeakMap,Wd=new WeakMap,Yf=new WeakMap;function MS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ur(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&N_.set(t,n)}).catch(()=>{}),Yf.set(e,n),e}function jS(n){if(gf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});gf.set(n,e)}let yf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||b_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ur(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function US(n){yf=n(yf)}function FS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Kd(this),e,...t);return b_.set(i,e.sort?e.sort():[e]),Ur(i)}:VS().includes(n)?function(...e){return n.apply(Kd(this),e),Ur(N_.get(this))}:function(...e){return Ur(n.apply(Kd(this),e))}}function BS(n){return typeof n=="function"?FS(n):(n instanceof IDBTransaction&&jS(n),OS(n,LS())?new Proxy(n,yf):n)}function Ur(n){if(n instanceof IDBRequest)return MS(n);if(Wd.has(n))return Wd.get(n);const e=BS(n);return e!==n&&(Wd.set(n,e),Yf.set(e,n)),e}const Kd=n=>Yf.get(n);function Mc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Ur(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ur(c.result),p.oldVersion,p.newVersion,Ur(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}function Gd(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Ur(t).then(()=>{})}const zS=["get","getKey","getAll","getAllKeys","count"],$S=["put","add","delete","clear"],Qd=new Map;function xy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=$S.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||zS.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Qd.set(e,l),l}US(n=>({...n,get:(e,t,i)=>xy(e,t)||n.get(e,t,i),has:(e,t)=>!!xy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function HS(n){const e=n.getComponent();return e?.type==="VERSION"}const vf="@firebase/app",Ny="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Qf("@firebase/app"),WS="@firebase/app-compat",KS="@firebase/analytics-compat",GS="@firebase/analytics",QS="@firebase/app-check-compat",YS="@firebase/app-check",JS="@firebase/auth",XS="@firebase/auth-compat",ZS="@firebase/database",eA="@firebase/data-connect",tA="@firebase/database-compat",nA="@firebase/functions",rA="@firebase/functions-compat",iA="@firebase/installations",sA="@firebase/installations-compat",oA="@firebase/messaging",aA="@firebase/messaging-compat",lA="@firebase/performance",uA="@firebase/performance-compat",cA="@firebase/remote-config",hA="@firebase/remote-config-compat",dA="@firebase/storage",fA="@firebase/storage-compat",pA="@firebase/firestore",mA="@firebase/vertexai-preview",gA="@firebase/firestore-compat",yA="firebase",vA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="[DEFAULT]",_A={[vf]:"fire-core",[WS]:"fire-core-compat",[GS]:"fire-analytics",[KS]:"fire-analytics-compat",[YS]:"fire-app-check",[QS]:"fire-app-check-compat",[JS]:"fire-auth",[XS]:"fire-auth-compat",[ZS]:"fire-rtdb",[eA]:"fire-data-connect",[tA]:"fire-rtdb-compat",[nA]:"fire-fn",[rA]:"fire-fn-compat",[iA]:"fire-iid",[sA]:"fire-iid-compat",[oA]:"fire-fcm",[aA]:"fire-fcm-compat",[lA]:"fire-perf",[uA]:"fire-perf-compat",[cA]:"fire-rc",[hA]:"fire-rc-compat",[dA]:"fire-gcs",[fA]:"fire-gcs-compat",[pA]:"fire-fst",[gA]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[yA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map,wA=new Map,wf=new Map;function by(n,e){try{n.container.addComponent(e)}catch(t){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if(wf.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,n);for(const t of gc.values())by(t,n);for(const t of wA.values())by(t,n);return!0}function Cs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ur(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new Ps("app","Firebase",EA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=vA;function D_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_f,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ni.create("bad-app-name",{appName:String(o)});if(t||(t=k_()),!t)throw Ni.create("no-options");const l=gc.get(o);if(l){if(mc(t,l.options)&&mc(i,l.config))return l;throw Ni.create("duplicate-app",{appName:o})}const c=new CS(o);for(const p of wf.values())c.addComponent(p);const d=new TA(t,i,c);return gc.set(o,d),d}function jc(n=_f){const e=gc.get(n);if(!e&&n===_f&&k_())return D_();if(!e)throw Ni.create("no-app",{appName:n});return e}function ln(n,e,t){var i;let o=(i=_A[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(d.join(" "));return}Kn(new xn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="firebase-heartbeat-database",SA=1,ul="firebase-heartbeat-store";let Yd=null;function O_(){return Yd||(Yd=Mc(IA,SA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ul)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ni.create("idb-open",{originalErrorMessage:n.message})})),Yd}async function AA(n){try{const t=(await O_()).transaction(ul),i=await t.objectStore(ul).get(L_(n));return await t.done,i}catch(e){if(e instanceof Yn)zr.warn(e.message);else{const t=Ni.create("idb-get",{originalErrorMessage:e?.message});zr.warn(t.message)}}}async function Dy(n,e){try{const i=(await O_()).transaction(ul,"readwrite");await i.objectStore(ul).put(e,L_(n)),await i.done}catch(t){if(t instanceof Yn)zr.warn(t.message);else{const i=Ni.create("idb-set",{originalErrorMessage:t?.message});zr.warn(i.message)}}}function L_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1024,RA=720*60*60*1e3;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Oy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=RA}),this._storage.overwrite(this._heartbeatsCache))}catch(i){zr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oy(),{heartbeatsToSend:i,unsentEntries:o}=CA(this._heartbeatsCache.heartbeats),l=pc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return zr.warn(t),""}}}function Oy(){return new Date().toISOString().substring(0,10)}function CA(n,e=kA){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Ly(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ly(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C_()?x_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await AA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Dy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Dy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ly(n){return pc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n){Kn(new xn("platform-logger",e=>new qS(e),"PRIVATE")),Kn(new xn("heartbeat",e=>new PA(e),"PRIVATE")),ln(vf,Ny,n),ln(vf,Ny,"esm2017"),ln("fire-js","")}NA("");var bA="firebase",DA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(bA,DA,"app");function Jf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function V_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OA=V_,M_=new Ps("auth","Firebase",V_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Qf("@firebase/auth");function LA(n,...e){yc.logLevel<=xe.WARN&&yc.warn(`Auth (${xs}): ${n}`,...e)}function rc(n,...e){yc.logLevel<=xe.ERROR&&yc.error(`Auth (${xs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,...e){throw Xf(n,...e)}function hr(n,...e){return Xf(n,...e)}function j_(n,e,t){const i=Object.assign(Object.assign({},OA()),{[e]:t});return new Ps("auth","Firebase",i).create(e,{appName:n.name})}function Fr(n){return j_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return M_.create(n,...e)}function _e(n,e,...t){if(!n)throw Xf(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rc(e),new Error(e)}function $r(n,e){n||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function VA(){return Vy()==="http:"||Vy()==="https:"}function Vy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VA()||pS()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,$r(t>e,"Short delay should be less than long delay!"),this.isMobile=hS()||mS()}get(){return MA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,e){$r(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Tl(3e4,6e4);function Vi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qr(n,e,t,i,o={}){return F_(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=El(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return fS()||(y.referrerPolicy="no-referrer"),U_.fetch()(B_(n,n.config.apiHost,t,d),y)})}async function F_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},UA),e);try{const o=new zA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Qu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Qu(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw j_(n,_,y);Gn(n,_)}}catch(o){if(o instanceof Yn)throw o;Gn(n,"network-request-failed",{message:String(o)})}}async function Il(n,e,t,i,o={}){const l=await Qr(n,e,t,i,o);return"mfaPendingCredential"in l&&Gn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function B_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Zf(n.config,o):`${n.config.apiScheme}://${o}`}function BA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),FA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(n,e,i);return o.customData._tokenResponse=t,o}function My(n){return n!==void 0&&n.enterprise!==void 0}class $A{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return BA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qA(n,e){return Qr(n,"GET","/v2/recaptchaConfig",Vi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n,e){return Qr(n,"POST","/v1/accounts:delete",e)}async function z_(n,e){return Qr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(n,e=!1){const t=ze(n),i=await t.getIdToken(e),o=ep(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l?.sign_in_provider;return{claims:o,token:i,authTime:tl(Jd(o.auth_time)),issuedAtTime:tl(Jd(o.iat)),expirationTime:tl(Jd(o.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Jd(n){return Number(n)*1e3}function ep(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=I_(t);return o?JSON.parse(o):(rc("Failed to decode base64 JWT payload"),null)}catch(o){return rc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function jy(n){const e=ep(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Yn&&KA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function KA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tl(this.lastLoginAt),this.creationTime=tl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Vo(n,z_(t,{idToken:i}));_e(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?$_(l.providerUserInfo):[],d=YA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!d?.length,_=p?y:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Tf(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,I)}async function QA(n){const e=ze(n);await vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function $_(n){return n.map(e=>{var{providerId:t}=e,i=Jf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(n,e){const t=await F_(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=B_(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",U_.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XA(n,e){return Qr(n,"POST","/v2/accounts:revokeToken",Vi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=jy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await JA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new No;return i&&(_e(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Tf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WA(this,e)}reload(){return QA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await vc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ur(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await Vo(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,_;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Z=(y=t.createdAt)!==null&&y!==void 0?y:void 0,X=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ne,emailVerified:re,isAnonymous:Se,providerData:ve,stsTokenManager:N}=t;_e(ne&&N,e,"internal-error");const A=No.fromJSON(this.name,N);_e(typeof ne=="string",e,"internal-error"),Ti(I,e.name),Ti(S,e.name),_e(typeof re=="boolean",e,"internal-error"),_e(typeof Se=="boolean",e,"internal-error"),Ti(D,e.name),Ti(B,e.name),Ti(q,e.name),Ti(L,e.name),Ti(Z,e.name),Ti(X,e.name);const P=new Mr({uid:ne,auth:e,email:S,emailVerified:re,displayName:I,isAnonymous:Se,photoURL:B,phoneNumber:D,tenantId:q,stsTokenManager:A,createdAt:Z,lastLoginAt:X});return ve&&Array.isArray(ve)&&(P.providerData=ve.map(x=>Object.assign({},x))),L&&(P._redirectEventId=L),P}static async _fromIdTokenResponse(e,t,i=!1){const o=new No;o.updateFromServerResponse(t);const l=new Mr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await vc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?$_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!l?.length,d=new No;d.updateFromIdToken(i);const p=new Mr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Tf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;function jr(n){$r(n instanceof Function,"Expected a class definition");let e=Uy.get(n);return e?($r(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}q_.type="NONE";const Fy=q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n,e,t){return`firebase:${n}:${e}:${t}`}class bo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new bo(jr(Fy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||jr(Fy);const c=ic(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const _=await y._get(c);if(_){const I=Mr._fromJSON(e,_);y!==l&&(d=I),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new bo(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new bo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y_(e))return"Blackberry";if(J_(e))return"Webos";if(W_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function H_(n=Ht()){return/firefox\//i.test(n)}function W_(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(n=Ht()){return/crios\//i.test(n)}function G_(n=Ht()){return/iemobile/i.test(n)}function Q_(n=Ht()){return/android/i.test(n)}function Y_(n=Ht()){return/blackberry/i.test(n)}function J_(n=Ht()){return/webos/i.test(n)}function tp(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZA(n=Ht()){var e;return tp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ek(){return gS()&&document.documentMode===10}function X_(n=Ht()){return tp(n)||Q_(n)||J_(n)||Y_(n)||/windows phone/i.test(n)||G_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,e=[]){let t;switch(n){case"Browser":t=By(Ht());break;case"Worker":t=`${By(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(n,e={}){return Qr(n,"GET","/v2/passwordPolicy",Vi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=6;class ik{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:rk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zy(this),this.idTokenSubscription=new zy(this),this.beforeStateQueue=new tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await bo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await z_(this,{idToken:e}),i=await Mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ur(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&p?.user&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ur(this.app))return Promise.reject(Fr(this));const t=e?ze(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ur(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ur(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nk(this),t=new ik(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await XA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await bo.create(this,[jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&LA(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ns(n){return ze(n)}class zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=IS(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ok(n){Uc=n}function ew(n){return Uc.loadJS(n)}function ak(){return Uc.recaptchaEnterpriseScript}function lk(){return Uc.gapiScript}function uk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ck="recaptcha-enterprise",hk="NO_RECAPTCHA";class dk{constructor(e){this.type=ck,this.auth=Ns(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{qA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new $A(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;My(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(hk)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&My(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=ak();p.length!==0&&(p+=d),ew(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function $y(n,e,t,i=!1){const o=new dk(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function If(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await $y(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await $y(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(n,e){const t=Cs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(mc(l,e??{}))return o;Gn(o,"already-initialized")}return t.initialize({options:e})}function pk(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(jr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function mk(n,e,t){const i=Ns(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=tw(e),{host:c,port:d}=gk(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),yk()}function tw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gk(n){const e=tw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:qy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:qy(c)}}}function qy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function vk(n,e){return Qr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(n,e){return Il(n,"POST","/v1/accounts:signInWithPassword",Vi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Vi(n,e))}async function Ek(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Vi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends np{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new cl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new cl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,t,"signInWithPassword",_k);case"emailLink":return wk(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,i,"signUpPassword",vk);case"emailLink":return Ek(e,{idToken:t,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n,e){return Il(n,"POST","/v1/accounts:signInWithIdp",Vi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="http://localhost";class _s extends np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Jf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new _s(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Do(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:Tk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sk(n){const e=Qa(Ya(n)).link,t=e?Qa(Ya(e)).deep_link_id:null,i=Qa(Ya(n)).deep_link_id;return(i?Qa(Ya(i)).link:null)||i||t||e||n}class rp{constructor(e){var t,i,o,l,c,d;const p=Qa(Ya(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,I=Ik((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&_&&I,"argument-error"),this.apiKey=y,this.operation=I,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Sk(e);try{return new rp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.providerId=Ko.PROVIDER_ID}static credential(e,t){return cl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=rp.parseLink(t);return _e(i,"argument-error"),cl._fromEmailAndCode(e,i.code,i.tenantId)}}Ko.PROVIDER_ID="password";Ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Sl{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Si.credential(t,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Sl{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Sl{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ki.credential(t,i)}catch{return null}}}ki.TWITTER_SIGN_IN_METHOD="twitter.com";ki.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(n,e){return Il(n,"POST","/v1/accounts:signUp",Vi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Mr._fromIdTokenResponse(e,i,o),c=Hy(i);return new ws({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Hy(i);return new ws({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Hy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends Yn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new _c(e,t,i,o)}}function rw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(n,l,e,i):l})}async function kk(n,e,t=!1){const i=await Vo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ws._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(n,e,t=!1){const{auth:i}=n;if(ur(i.app))return Promise.reject(Fr(i));const o="reauthenticate";try{const l=await Vo(n,rw(i,o,e,n),t);_e(l.idToken,i,"internal-error");const c=ep(l.idToken);_e(c,i,"internal-error");const{sub:d}=c;return _e(n.uid===d,i,"user-mismatch"),ws._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Gn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(n,e,t=!1){if(ur(n.app))return Promise.reject(Fr(n));const i="signIn",o=await rw(n,i,e),l=await ws._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function Pk(n,e){return iw(Ns(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(n){const e=Ns(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ck(n,e,t){if(ur(n.app))return Promise.reject(Fr(n));const i=Ns(n),c=await If(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ak).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&sw(n),p}),d=await ws._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function xk(n,e,t){return ur(n.app)?Promise.reject(Fr(n)):Pk(ze(n),Ko.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&sw(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(n,e){return Qr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ze(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Vo(i,Nk(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function Dk(n,e,t,i){return ze(n).onIdTokenChanged(e,t,i)}function Ok(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function Lk(n,e,t,i){return ze(n).onAuthStateChanged(e,t,i)}function Vk(n){return ze(n).signOut()}const wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=1e3,jk=10;class aw extends ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);ek()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,jk):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}aw.type="LOCAL";const Uk=aw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw extends ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lw.type="SESSION";const uw=lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Fc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await Fk(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=ip("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(I){const S=I;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function zk(n){dr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function $k(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qk(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Hk(){return cw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="firebaseLocalStorageDb",Wk=1,Ec="firebaseLocalStorage",dw="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bc(n,e){return n.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function Kk(){const n=indexedDB.deleteDatabase(hw);return new Al(n).toPromise()}function Sf(){const n=indexedDB.open(hw,Wk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ec,{keyPath:dw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ec)?e(i):(i.close(),await Kk(),e(await Sf()))})})}async function Wy(n,e,t){const i=Bc(n,!0).put({[dw]:e,value:t});return new Al(i).toPromise()}async function Gk(n,e){const t=Bc(n,!1).get(e),i=await new Al(t).toPromise();return i===void 0?null:i.value}function Ky(n,e){const t=Bc(n,!0).delete(e);return new Al(t).toPromise()}const Qk=800,Yk=3;class fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Yk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(Hk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $k(),!this.activeServiceWorker)return;this.sender=new Bk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sf();return await Wy(e,wc,"1"),await Ky(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Gk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ky(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Bc(o,!1).getAll();return new Al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fw.type="LOCAL";const Jk=fw;new Tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(n,e){return e?jr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zk(n){return iw(n.auth,new sp(n),n.bypassAuthState)}function eR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),Rk(t,new sp(n),n.bypassAuthState)}async function tR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),kk(t,new sp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zk;case"linkViaPopup":case"linkViaRedirect":return tR;case"reauthViaPopup":case"reauthViaRedirect":return eR;default:Gn(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Tl(2e3,1e4);class xo extends pw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nR.get())};e()}}xo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="pendingRedirect",sc=new Map;class iR extends pw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const i=await sR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sR(n,e){const t=lR(e),i=aR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function oR(n,e){sc.set(n._key(),e)}function aR(n){return jr(n._redirectPersistence)}function lR(n){return ic(rR,n.config.apiKey,n.name)}async function uR(n,e,t=!1){if(ur(n.app))return Promise.reject(Fr(n));const i=Ns(n),o=Xk(i,e),c=await new iR(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=600*1e3;class hR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!mw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(hr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gy(e))}saveEventToCache(e){this.cachedEventUids.add(Gy(e)),this.lastProcessedEventTime=Date.now()}}function Gy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function dR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(n,e={}){return Qr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mR=/^https?/;async function gR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fR(n);for(const t of e)try{if(yR(t))return}catch{}Gn(n,"unauthorized-domain")}function yR(n){const e=Ef(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!mR.test(t))return!1;if(pR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=new Tl(3e4,6e4);function Qy(){const n=dr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _R(n){return new Promise((e,t)=>{var i,o,l;function c(){Qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qy(),t(hr(n,"network-request-failed"))},timeout:vR.get()})}if(!((o=(i=dr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=dr().gapi)===null||l===void 0)&&l.load)c();else{const d=uk("iframefcb");return dr()[d]=()=>{gapi.load?c():t(hr(n,"network-request-failed"))},ew(`${lk()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw oc=null,e})}let oc=null;function wR(n){return oc=oc||_R(n),oc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Tl(5e3,15e3),TR="__/auth/iframe",IR="emulator/auth/iframe",SR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kR(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zf(e,IR):`https://${n.config.authDomain}/${TR}`,i={apiKey:e.apiKey,appName:n.name,v:xs},o=AR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${El(i).slice(1)}`}async function RR(n){const e=await wR(n),t=dr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:kR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=hr(n,"network-request-failed"),d=dr().setTimeout(()=>{l(c)},ER.get());function p(){dr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CR=500,xR=600,NR="_blank",bR="http://localhost";class Yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(n,e,t,i=CR,o=xR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},PR),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Ht().toLowerCase();t&&(d=K_(y)?NR:t),H_(y)&&(e=e||bR,p.scrollbars="yes");const _=Object.entries(p).reduce((S,[D,B])=>`${S}${D}=${B},`,"");if(ZA(y)&&d!=="_self")return OR(e||"",d),new Yy(null);const I=window.open(e||"",d,_);_e(I,n,"popup-blocked");try{I.focus()}catch{}return new Yy(I)}function OR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="__/auth/handler",VR="emulator/auth/handler",MR=encodeURIComponent("fac");async function Jy(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xs,eventId:o};if(e instanceof nw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",TS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,I]of Object.entries({}))c[_]=I}if(e instanceof Sl){const _=e.getScopes().filter(I=>I!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),y=p?`#${MR}=${encodeURIComponent(p)}`:"";return`${jR(n)}?${El(d).slice(1)}${y}`}function jR({config:n}){return n.emulator?Zf(n,VR):`https://${n.authDomain}/${LR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class UR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uw,this._completeRedirectFn=uR,this._overrideRedirectResult=oR}async _openPopup(e,t,i,o){var l;$r((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Jy(e,t,i,Ef(),o);return DR(e,c,ip())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Jy(e,t,i,Ef(),o);return zk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):($r(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await RR(e),i=new hR(e);return t.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xd,{type:Xd},o=>{var l;const c=(l=o?.[0])===null||l===void 0?void 0:l[Xd];c!==void 0&&t(!!c),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return X_()||W_()||tp()}}const FR=UR;var Xy="@firebase/auth",Zy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $R(n){Kn(new xn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;_e(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(n)},y=new sk(i,o,l,p);return pk(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Kn(new xn("auth-internal",e=>{const t=Ns(e.getProvider("auth").getImmediate());return(i=>new BR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Xy,Zy,zR(n)),ln(Xy,Zy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=300,HR=R_("authIdTokenMaxAge")||qR;let ev=null;const WR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>HR)return;const o=t?.token;ev!==o&&(ev=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function KR(n=jc()){const e=Cs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fk(n,{popupRedirectResolver:FR,persistence:[Jk,Uk,uw]}),i=R_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=WR(l.toString());Ok(t,c,()=>c(t.currentUser)),Dk(t,d=>c(d))}}const o=S_("auth");return o&&mk(t,`http://${o}`),t}function GR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ok({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=hr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",GR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$R("Browser");var tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gs,gw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function P(){}P.prototype=A.prototype,N.D=A.prototype,N.prototype=new P,N.prototype.constructor=N,N.C=function(x,O,M){for(var R=Array(arguments.length-2),st=2;st<arguments.length;st++)R[st-2]=arguments[st];return A.prototype[O].apply(x,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,A,P){P||(P=0);var x=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)x[O]=A.charCodeAt(P++)|A.charCodeAt(P++)<<8|A.charCodeAt(P++)<<16|A.charCodeAt(P++)<<24;else for(O=0;16>O;++O)x[O]=A[P++]|A[P++]<<8|A[P++]<<16|A[P++]<<24;A=N.g[0],P=N.g[1],O=N.g[2];var M=N.g[3],R=A+(M^P&(O^M))+x[0]+3614090360&4294967295;A=P+(R<<7&4294967295|R>>>25),R=M+(O^A&(P^O))+x[1]+3905402710&4294967295,M=A+(R<<12&4294967295|R>>>20),R=O+(P^M&(A^P))+x[2]+606105819&4294967295,O=M+(R<<17&4294967295|R>>>15),R=P+(A^O&(M^A))+x[3]+3250441966&4294967295,P=O+(R<<22&4294967295|R>>>10),R=A+(M^P&(O^M))+x[4]+4118548399&4294967295,A=P+(R<<7&4294967295|R>>>25),R=M+(O^A&(P^O))+x[5]+1200080426&4294967295,M=A+(R<<12&4294967295|R>>>20),R=O+(P^M&(A^P))+x[6]+2821735955&4294967295,O=M+(R<<17&4294967295|R>>>15),R=P+(A^O&(M^A))+x[7]+4249261313&4294967295,P=O+(R<<22&4294967295|R>>>10),R=A+(M^P&(O^M))+x[8]+1770035416&4294967295,A=P+(R<<7&4294967295|R>>>25),R=M+(O^A&(P^O))+x[9]+2336552879&4294967295,M=A+(R<<12&4294967295|R>>>20),R=O+(P^M&(A^P))+x[10]+4294925233&4294967295,O=M+(R<<17&4294967295|R>>>15),R=P+(A^O&(M^A))+x[11]+2304563134&4294967295,P=O+(R<<22&4294967295|R>>>10),R=A+(M^P&(O^M))+x[12]+1804603682&4294967295,A=P+(R<<7&4294967295|R>>>25),R=M+(O^A&(P^O))+x[13]+4254626195&4294967295,M=A+(R<<12&4294967295|R>>>20),R=O+(P^M&(A^P))+x[14]+2792965006&4294967295,O=M+(R<<17&4294967295|R>>>15),R=P+(A^O&(M^A))+x[15]+1236535329&4294967295,P=O+(R<<22&4294967295|R>>>10),R=A+(O^M&(P^O))+x[1]+4129170786&4294967295,A=P+(R<<5&4294967295|R>>>27),R=M+(P^O&(A^P))+x[6]+3225465664&4294967295,M=A+(R<<9&4294967295|R>>>23),R=O+(A^P&(M^A))+x[11]+643717713&4294967295,O=M+(R<<14&4294967295|R>>>18),R=P+(M^A&(O^M))+x[0]+3921069994&4294967295,P=O+(R<<20&4294967295|R>>>12),R=A+(O^M&(P^O))+x[5]+3593408605&4294967295,A=P+(R<<5&4294967295|R>>>27),R=M+(P^O&(A^P))+x[10]+38016083&4294967295,M=A+(R<<9&4294967295|R>>>23),R=O+(A^P&(M^A))+x[15]+3634488961&4294967295,O=M+(R<<14&4294967295|R>>>18),R=P+(M^A&(O^M))+x[4]+3889429448&4294967295,P=O+(R<<20&4294967295|R>>>12),R=A+(O^M&(P^O))+x[9]+568446438&4294967295,A=P+(R<<5&4294967295|R>>>27),R=M+(P^O&(A^P))+x[14]+3275163606&4294967295,M=A+(R<<9&4294967295|R>>>23),R=O+(A^P&(M^A))+x[3]+4107603335&4294967295,O=M+(R<<14&4294967295|R>>>18),R=P+(M^A&(O^M))+x[8]+1163531501&4294967295,P=O+(R<<20&4294967295|R>>>12),R=A+(O^M&(P^O))+x[13]+2850285829&4294967295,A=P+(R<<5&4294967295|R>>>27),R=M+(P^O&(A^P))+x[2]+4243563512&4294967295,M=A+(R<<9&4294967295|R>>>23),R=O+(A^P&(M^A))+x[7]+1735328473&4294967295,O=M+(R<<14&4294967295|R>>>18),R=P+(M^A&(O^M))+x[12]+2368359562&4294967295,P=O+(R<<20&4294967295|R>>>12),R=A+(P^O^M)+x[5]+4294588738&4294967295,A=P+(R<<4&4294967295|R>>>28),R=M+(A^P^O)+x[8]+2272392833&4294967295,M=A+(R<<11&4294967295|R>>>21),R=O+(M^A^P)+x[11]+1839030562&4294967295,O=M+(R<<16&4294967295|R>>>16),R=P+(O^M^A)+x[14]+4259657740&4294967295,P=O+(R<<23&4294967295|R>>>9),R=A+(P^O^M)+x[1]+2763975236&4294967295,A=P+(R<<4&4294967295|R>>>28),R=M+(A^P^O)+x[4]+1272893353&4294967295,M=A+(R<<11&4294967295|R>>>21),R=O+(M^A^P)+x[7]+4139469664&4294967295,O=M+(R<<16&4294967295|R>>>16),R=P+(O^M^A)+x[10]+3200236656&4294967295,P=O+(R<<23&4294967295|R>>>9),R=A+(P^O^M)+x[13]+681279174&4294967295,A=P+(R<<4&4294967295|R>>>28),R=M+(A^P^O)+x[0]+3936430074&4294967295,M=A+(R<<11&4294967295|R>>>21),R=O+(M^A^P)+x[3]+3572445317&4294967295,O=M+(R<<16&4294967295|R>>>16),R=P+(O^M^A)+x[6]+76029189&4294967295,P=O+(R<<23&4294967295|R>>>9),R=A+(P^O^M)+x[9]+3654602809&4294967295,A=P+(R<<4&4294967295|R>>>28),R=M+(A^P^O)+x[12]+3873151461&4294967295,M=A+(R<<11&4294967295|R>>>21),R=O+(M^A^P)+x[15]+530742520&4294967295,O=M+(R<<16&4294967295|R>>>16),R=P+(O^M^A)+x[2]+3299628645&4294967295,P=O+(R<<23&4294967295|R>>>9),R=A+(O^(P|~M))+x[0]+4096336452&4294967295,A=P+(R<<6&4294967295|R>>>26),R=M+(P^(A|~O))+x[7]+1126891415&4294967295,M=A+(R<<10&4294967295|R>>>22),R=O+(A^(M|~P))+x[14]+2878612391&4294967295,O=M+(R<<15&4294967295|R>>>17),R=P+(M^(O|~A))+x[5]+4237533241&4294967295,P=O+(R<<21&4294967295|R>>>11),R=A+(O^(P|~M))+x[12]+1700485571&4294967295,A=P+(R<<6&4294967295|R>>>26),R=M+(P^(A|~O))+x[3]+2399980690&4294967295,M=A+(R<<10&4294967295|R>>>22),R=O+(A^(M|~P))+x[10]+4293915773&4294967295,O=M+(R<<15&4294967295|R>>>17),R=P+(M^(O|~A))+x[1]+2240044497&4294967295,P=O+(R<<21&4294967295|R>>>11),R=A+(O^(P|~M))+x[8]+1873313359&4294967295,A=P+(R<<6&4294967295|R>>>26),R=M+(P^(A|~O))+x[15]+4264355552&4294967295,M=A+(R<<10&4294967295|R>>>22),R=O+(A^(M|~P))+x[6]+2734768916&4294967295,O=M+(R<<15&4294967295|R>>>17),R=P+(M^(O|~A))+x[13]+1309151649&4294967295,P=O+(R<<21&4294967295|R>>>11),R=A+(O^(P|~M))+x[4]+4149444226&4294967295,A=P+(R<<6&4294967295|R>>>26),R=M+(P^(A|~O))+x[11]+3174756917&4294967295,M=A+(R<<10&4294967295|R>>>22),R=O+(A^(M|~P))+x[2]+718787259&4294967295,O=M+(R<<15&4294967295|R>>>17),R=P+(M^(O|~A))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,A){A===void 0&&(A=N.length);for(var P=A-this.blockSize,x=this.B,O=this.h,M=0;M<A;){if(O==0)for(;M<=P;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<A;)if(x[O++]=N.charCodeAt(M++),O==this.blockSize){o(this,x),O=0;break}}else for(;M<A;)if(x[O++]=N[M++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;var P=8*this.o;for(A=N.length-8;A<N.length;++A)N[A]=P&255,P/=256;for(this.u(N),N=Array(16),A=P=0;4>A;++A)for(var x=0;32>x;x+=8)N[P++]=this.g[A]>>>x&255;return N};function l(N,A){var P=d;return Object.prototype.hasOwnProperty.call(P,N)?P[N]:P[N]=A(N)}function c(N,A){this.h=A;for(var P=[],x=!0,O=N.length-1;0<=O;O--){var M=N[O]|0;x&&M==A||(P[O]=M,x=!1)}this.g=P}var d={};function p(N){return-128<=N&&128>N?l(N,function(A){return new c([A|0],0>A?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return I;if(0>N)return L(y(-N));for(var A=[],P=1,x=0;N>=P;x++)A[x]=N/P|0,P*=4294967296;return new c(A,0)}function _(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return L(_(N.substring(1),A));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(A,8)),x=I,O=0;O<N.length;O+=8){var M=Math.min(8,N.length-O),R=parseInt(N.substring(O,O+M),A);8>M?(M=y(Math.pow(A,M)),x=x.j(M).add(y(R))):(x=x.j(P),x=x.add(y(R)))}return x}var I=p(0),S=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(q(this))return-L(this).m();for(var N=0,A=1,P=0;P<this.g.length;P++){var x=this.i(P);N+=(0<=x?x:4294967296+x)*A,A*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(B(this))return"0";if(q(this))return"-"+L(this).toString(N);for(var A=y(Math.pow(N,6)),P=this,x="";;){var O=re(P,A).g;P=Z(P,O.j(A));var M=((0<P.g.length?P.g[0]:P.h)>>>0).toString(N);if(P=O,B(P))return M+x;for(;6>M.length;)M="0"+M;x=M+x}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function B(N){if(N.h!=0)return!1;for(var A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function q(N){return N.h==-1}n.l=function(N){return N=Z(this,N),q(N)?-1:B(N)?0:1};function L(N){for(var A=N.g.length,P=[],x=0;x<A;x++)P[x]=~N.g[x];return new c(P,~N.h).add(S)}n.abs=function(){return q(this)?L(this):this},n.add=function(N){for(var A=Math.max(this.g.length,N.g.length),P=[],x=0,O=0;O<=A;O++){var M=x+(this.i(O)&65535)+(N.i(O)&65535),R=(M>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);x=R>>>16,M&=65535,R&=65535,P[O]=R<<16|M}return new c(P,P[P.length-1]&-2147483648?-1:0)};function Z(N,A){return N.add(L(A))}n.j=function(N){if(B(this)||B(N))return I;if(q(this))return q(N)?L(this).j(L(N)):L(L(this).j(N));if(q(N))return L(this.j(L(N)));if(0>this.l(D)&&0>N.l(D))return y(this.m()*N.m());for(var A=this.g.length+N.g.length,P=[],x=0;x<2*A;x++)P[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<N.g.length;O++){var M=this.i(x)>>>16,R=this.i(x)&65535,st=N.i(O)>>>16,Ot=N.i(O)&65535;P[2*x+2*O]+=R*Ot,X(P,2*x+2*O),P[2*x+2*O+1]+=M*Ot,X(P,2*x+2*O+1),P[2*x+2*O+1]+=R*st,X(P,2*x+2*O+1),P[2*x+2*O+2]+=M*st,X(P,2*x+2*O+2)}for(x=0;x<A;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=A;x<2*A;x++)P[x]=0;return new c(P,0)};function X(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function ne(N,A){this.g=N,this.h=A}function re(N,A){if(B(A))throw Error("division by zero");if(B(N))return new ne(I,I);if(q(N))return A=re(L(N),A),new ne(L(A.g),L(A.h));if(q(A))return A=re(N,L(A)),new ne(L(A.g),A.h);if(30<N.g.length){if(q(N)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var P=S,x=A;0>=x.l(N);)P=Se(P),x=Se(x);var O=ve(P,1),M=ve(x,1);for(x=ve(x,2),P=ve(P,2);!B(x);){var R=M.add(x);0>=R.l(N)&&(O=O.add(P),M=R),x=ve(x,1),P=ve(P,1)}return A=Z(N,O.j(A)),new ne(O,A)}for(O=I;0<=N.l(A);){for(P=Math.max(1,Math.floor(N.m()/A.m())),x=Math.ceil(Math.log(P)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),M=y(P),R=M.j(A);q(R)||0<R.l(N);)P-=x,M=y(P),R=M.j(A);B(M)&&(M=S),O=O.add(M),N=Z(N,R)}return new ne(O,N)}n.A=function(N){return re(this,N).h},n.and=function(N){for(var A=Math.max(this.g.length,N.g.length),P=[],x=0;x<A;x++)P[x]=this.i(x)&N.i(x);return new c(P,this.h&N.h)},n.or=function(N){for(var A=Math.max(this.g.length,N.g.length),P=[],x=0;x<A;x++)P[x]=this.i(x)|N.i(x);return new c(P,this.h|N.h)},n.xor=function(N){for(var A=Math.max(this.g.length,N.g.length),P=[],x=0;x<A;x++)P[x]=this.i(x)^N.i(x);return new c(P,this.h^N.h)};function Se(N){for(var A=N.g.length+1,P=[],x=0;x<A;x++)P[x]=N.i(x)<<1|N.i(x-1)>>>31;return new c(P,N.h)}function ve(N,A){var P=A>>5;A%=32;for(var x=N.g.length-P,O=[],M=0;M<x;M++)O[M]=0<A?N.i(M+P)>>>A|N.i(M+P+1)<<32-A:N.i(M+P);return new c(O,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,gw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,gs=c}).apply(typeof tv<"u"?tv:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yw,Ja,vw,ac,Af,_w,ww,Ew;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in v))break e;v=v[j]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,T=!1,j={next:function(){if(!T&&v<u.length){var $=v++;return{value:m($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function I(u,m,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function S(u,m,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,S.apply(null,arguments)}function D(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function B(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,j,$){for(var te=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)te[Ue-2]=arguments[Ue];return m.prototype[j].apply(T,te)}}function q(u){const m=u.length;if(0<m){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function L(u,m){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const j=u.length||0,$=T.length||0;u.length=j+$;for(let te=0;te<$;te++)u[j+te]=T[te]}else u.push(T)}}class Z{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var Se=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function ve(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function N(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function A(u){const m={};for(const v in u)m[v]=u[v];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let v,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(v in T)u[v]=T[v];for(let $=0;$<P.length;$++)v=P[$],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function M(u){d.setTimeout(()=>{throw u},0)}function R(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class st{constructor(){this.h=this.g=null}add(m,v){const T=Ot.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Ot=new Z(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ie=!1,me=new st,oe=()=>{const u=d.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(v){M(v)}var m=Ot;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function ke(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{re(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}B(ke,fe);var Ne={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),je=0;function qe(u,m,v,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=j,this.key=++je,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yr(u){this.src=u,this.g={},this.h=0}yr.prototype.add=function(u,m,v,T,j){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var te=Jr(u,m,T,j);return-1<te?(m=u[te],v||(m.fa=!1)):(m=new qe(m,this.src,$,!!T,j),m.fa=v,u.push(m)),m};function Os(u,m){var v=m.type;if(v in u.g){var T=u.g[v],j=Array.prototype.indexOf.call(T,m,void 0),$;($=0<=j)&&Array.prototype.splice.call(T,j,1),$&&(wt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Jr(u,m,v,T){for(var j=0;j<u.length;++j){var $=u[j];if(!$.da&&$.listener==m&&$.capture==!!v&&$.ha==T)return j}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Ls={};function Xo(u,m,v,T,j){if(Array.isArray(m)){for(var $=0;$<m.length;$++)Xo(u,m[$],v,T,j);return null}return v=ta(v),u&&u[Me]?u.K(m,v,y(T)?!!T.capture:!1,j):Zo(u,m,v,!1,T,j)}function Zo(u,m,v,T,j,$){if(!m)throw Error("Invalid event type");var te=y(j)?!!j.capture:!!j,Ue=Ms(u);if(Ue||(u[Ui]=Ue=new yr(u)),v=Ue.add(m,v,T,te,$),v.proxy)return v;if(T=Dl(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)Ae||(j=te),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(_r(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Dl(){function u(v){return m.call(u.src,u.listener,v)}const m=ea;return u}function Vs(u,m,v,T,j){if(Array.isArray(m))for(var $=0;$<m.length;$++)Vs(u,m[$],v,T,j);else T=y(T)?!!T.capture:!!T,v=ta(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],v=Jr($,v,T,j),-1<v&&(wt($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ms(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Jr(m,v,T,j)),(v=-1<u?m[u]:null)&&vr(v))}function vr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Os(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(_r(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Ms(m))?(Os(v,u),v.h==0&&(v.src=null,m[Ui]=null)):wt(u)}}}function _r(u){return u in Ls?Ls[u]:Ls[u]="on"+u}function ea(u,m){if(u.da)u=!0;else{m=new ke(m,this);var v=u.listener,T=u.ha||u.src;u.fa&&vr(u),u=v.call(T,m)}return u}function Ms(u){return u=u[Ui],u instanceof yr?u:null}var js="__closure_events_fn_"+(1e9*Math.random()>>>0);function ta(u){return typeof u=="function"?u:(u[js]||(u[js]=function(m){return u.handleEvent(m)}),u[js])}function pt(){K.call(this),this.i=new yr(this),this.M=this,this.F=null}B(pt,K),pt.prototype[Me]=!0,pt.prototype.removeEventListener=function(u,m,v,T){Vs(this,u,m,v,T)};function mt(u,m){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var j=m;m=new fe(T,u),x(m,j)}if(j=!0,v)for(var $=v.length-1;0<=$;$--){var te=m.g=v[$];j=wr(te,T,!0,m)&&j}if(te=m.g=u,j=wr(te,T,!0,m)&&j,j=wr(te,T,!1,m)&&j,v)for($=0;$<v.length;$++)te=m.g=v[$],j=wr(te,T,!1,m)&&j}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],T=0;T<v.length;T++)wt(v[T]);delete u.g[m],u.h--}}this.F=null},pt.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},pt.prototype.L=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function wr(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,$=0;$<m.length;++$){var te=m[$];if(te&&!te.da&&te.capture==v){var Ue=te.listener,gt=te.ha||te.src;te.fa&&Os(u.i,te),j=Ue.call(gt,T)!==!1&&j}}return j&&!T.defaultPrevented}function na(u,m,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Xr(u){u.g=na(()=>{u.g=null,u.i&&(u.i=!1,Xr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Fi extends K{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Xr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(u){K.call(this),this.h=u,this.g={}}B(Bi,K);var ra=[];function ia(u){ve(u.g,function(m,v){this.g.hasOwnProperty(v)&&vr(m)},u),u.g={}}Bi.prototype.N=function(){Bi.aa.N.call(this),ia(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sa=d.JSON.stringify,oa=d.JSON.parse,aa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function zi(){}zi.prototype.h=null;function Us(u){return u.h||(u.h=u.i())}function Fs(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jn(){fe.call(this,"d")}B(Jn,fe);function Bs(){fe.call(this,"c")}B(Bs,fe);var Xn={},la=null;function $i(){return la=la||new pt}Xn.La="serverreachability";function ua(u){fe.call(this,Xn.La,u)}B(ua,fe);function Er(u){const m=$i();mt(m,new ua(m))}Xn.STAT_EVENT="statevent";function ca(u,m){fe.call(this,Xn.STAT_EVENT,u),this.stat=m}B(ca,fe);function ot(u){const m=$i();mt(m,new ca(m,u))}Xn.Ma="timingevent";function zs(u,m){fe.call(this,Xn.Ma,u),this.size=m}B(zs,fe);function Nn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function Hi(u,m,v,T,j,$){u.info(function(){if(u.g)if($)for(var te="",Ue=$.split("&"),gt=0;gt<Ue.length;gt++){var be=Ue[gt].split("=");if(1<be.length){var Et=be[0];be=be[1];var ct=Et.split("_");te=2<=ct.length&&ct[1]=="type"?te+(Et+"="+be+"&"):te+(Et+"=redacted&")}}else te=null;else te=$;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+v+`
`+te})}function $s(u,m,v,T,j,$,te){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+v+`
`+$+" "+te})}function bn(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+fh(u,v)+(T?" "+T:"")})}function ha(u,m){u.info(function(){return"TIMEOUT: "+m})}qi.prototype.info=function(){};function fh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var te=1;te<j.length;te++)j[te]=""}}}}return sa(v)}catch{return m}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function Wi(){}B(Wi,zi),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},Dn=new Wi;function On(u,m,v,T){this.j=u,this.i=m,this.l=v,this.R=T||1,this.U=new Bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var da={},Hs={};function Ws(u,m,v){u.L=1,u.v=ri(hn(m)),u.m=v,u.P=!0,fa(u,null)}function fa(u,m){u.F=Date.now(),He(u),u.A=hn(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),si(v.i,"t",T),u.C=0,v=u.j.J,u.h=new Ll,u.g=Zl(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Fi(S(u.Y,u,u.g),u.O)),m=u.U,v=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(ra[0]=j.toString()),j=ra);for(var $=0;$<j.length;$++){var te=Xo(v,j[$],T||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Er(),Hi(u.i,u.u,u.A,u.l,u.R,u.m)}On.prototype.ca=function(u){u=u.target;const m=this.M;m&&Xt(u)==3?m.j():this.Y(u)},On.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Xt(this.g);var m=this.g.Ba();const Tn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||_a(this.g)))){this.J||ct!=4||m==7||(m==8||0>=Tn?Er(3):Er(2)),Ki(this);var v=this.g.Z();this.X=v;t:if(Vl(this)){var T=_a(this.g);u="";var j=T.length,$=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Zr(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!($&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=v==200,$s(this.i,this.u,this.A,this.l,this.R,ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,gt=this.g;if((Ue=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Ue)){var be=Ue;break t}}be=null}if(v=be)bn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pa(this,v);else{this.o=!1,this.s=3,ot(12),wn(this),Zr(this);break e}}if(this.P){v=!0;let fn;for(;!this.J&&this.C<te.length;)if(fn=ph(this,te),fn==Hs){ct==4&&(this.s=4,ot(14),v=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==da){this.s=4,ot(15),bn(this.i,this.l,te,"[Invalid Chunk]"),v=!1;break}else bn(this.i,this.l,fn,null),pa(this,fn);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||te.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)bn(this.i,this.l,te,"[Invalid Chunked Response]"),wn(this),Zr(this);else if(0<te.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Ea(Et),Et.M=!0,ot(11))}}else bn(this.i,this.l,te,null),pa(this,te);ct==4&&wn(this),this.o&&!this.J&&(ct==4?ro(this.j,this):(this.o=!1,He(this)))}else Xs(this.g),v==400&&0<te.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),wn(this),Zr(this)}}}catch{}finally{}};function Vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ph(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?Hs:(v=Number(m.substring(v,T)),isNaN(v)?da:(T+=1,T+v>m.length?Hs:(m=m.slice(T,T+v),u.C=T+v,m)))}On.prototype.cancel=function(){this.J=!0,wn(this)};function He(u){u.S=Date.now()+u.I,Ml(u,u.I)}function Ml(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Nn(S(u.ba,u),m)}function Ki(u){u.B&&(d.clearTimeout(u.B),u.B=null)}On.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ha(this.i,this.A),this.L!=2&&(Er(),ot(17)),wn(this),this.s=2,Zr(this)):Ml(this,this.S-u)};function Zr(u){u.j.G==0||u.J||ro(u.j,u)}function wn(u){Ki(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ia(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function pa(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Wt(v.h,u))){if(!u.K&&Wt(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)no(v),Un(v);else break e;to(v),ot(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Nn(S(v.Za,v),6e3));if(1>=Ul(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else kr(v,11)}else if((u.K||v.g==u)&&no(v),!X(m))for(j=v.Da.g.parse(m),m=0;m<j.length;m++){let be=j[m];if(v.T=be[0],be=be[1],v.G==2)if(be[0]=="c"){v.K=be[1],v.ia=be[2];const Et=be[3];Et!=null&&(v.la=Et,v.j.info("VER="+v.la));const ct=be[4];ct!=null&&(v.Aa=ct,v.j.info("SVER="+v.Aa));const Tn=be[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(T=1.5*Tn,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const fn=u.g;if(fn){const es=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var $=T.h;$.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ma($,$.h),$.h=null))}if(T.D){const so=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;so&&(T.ya=so,$e(T.I,T.D,so))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var te=u;if(T.qa=Xl(T,T.J?T.ia:null,T.W),te.K){Fl(T.h,te);var Ue=te,gt=T.L;gt&&(Ue.I=gt),Ue.B&&(Ki(Ue),He(Ue)),T.g=te}else Zi(T);0<v.i.length&&nr(v)}else be[0]!="stop"&&be[0]!="close"||kr(v,7);else v.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?kr(v,7):Rt(v):be[0]!="noop"&&v.l&&v.l.ta(be),v.v=0)}}Er(4)}catch{}}var jl=class{constructor(u,m){this.g=u,this.map=m}};function Gi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ul(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ma(u,m){u.g?u.g.add(m):u.h=m}function Fl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Gi.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Bl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return q(u.i)}function Ks(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,T=0;T<v;T++)m.push(u[T]);return m}m=[],v=0;for(T in u)m[v++]=u[T];return m}function Gs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const T in u)m[v++]=T;return m}}}function ei(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Gs(u),T=Ks(u),j=T.length,$=0;$<j;$++)m.call(void 0,T[$],v&&v[$],u)}var Qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),j=null;if(0<=T){var $=u[v].substring(0,T);j=u[v].substring(T+1)}else $=u[v];m($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Tr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Tr){this.h=u.h,Yi(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var m=u.i,v=new Zn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),ni(this,v),this.m=u.m}else u&&(m=String(u).match(Qi))?(this.h=!1,Yi(this,m[1]||"",!0),this.o=Ce(m[2]||""),this.g=Ce(m[3]||"",!0),ti(this,m[4]),this.l=Ce(m[5]||"",!0),ni(this,m[6]||"",!0),this.m=Ce(m[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Tr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ii(m,Qs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ii(m,Qs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ii(v,v.charAt(0)=="/"?ql:$l,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ii(v,ga)),u.join("")};function hn(u){return new Tr(u)}function Yi(u,m,v){u.j=v?Ce(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ni(u,m,v){m instanceof Zn?(u.i=m,er(u.i,u.h)):(v||(m=ii(m,Hl)),u.i=new Zn(m,u.h))}function $e(u,m,v){u.i.set(m,v)}function ri(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ce(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,zl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function zl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Qs=/[#\/\?@]/g,$l=/[#\?:]/g,ql=/[#\?]/g,Hl=/[#\?@]/g,ga=/#/g;function Zn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&mh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Zn.prototype,n.add=function(u,m){kt(this),this.i=null,u=En(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Ln(u,m){kt(u),m=En(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Vn(u,m){return kt(u),m=En(u,m),u.g.has(m)}n.forEach=function(u,m){kt(this),this.g.forEach(function(v,T){v.forEach(function(j){u.call(m,j,T,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let T=0;T<m.length;T++){const j=u[T];for(let $=0;$<j.length;$++)v.push(m[T])}return v},n.V=function(u){kt(this);let m=[];if(typeof u=="string")Vn(this,u)&&(m=m.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return kt(this),this.i=null,u=En(this,u),Vn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function si(u,m,v){Ln(u,m),0<v.length&&(u.i=null,u.g.set(En(u,m),q(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var T=m[v];const $=encodeURIComponent(String(T)),te=this.V(T);for(T=0;T<te.length;T++){var j=$;te[T]!==""&&(j+="="+encodeURIComponent(String(te[T]))),u.push(j)}}return this.i=u.join("&")};function En(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function er(u,m){m&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(v,T){var j=T.toLowerCase();T!=j&&(Ln(this,T),si(this,j,v))},u)),u.j=m}function gh(u,m){const v=new qi;if(d.Image){const T=new Image;T.onload=D(Jt,v,"TestLoadImage: loaded",!0,m,T),T.onerror=D(Jt,v,"TestLoadImage: error",!1,m,T),T.onabort=D(Jt,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=D(Jt,v,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Wl(u,m){const v=new qi,T=new AbortController,j=setTimeout(()=>{T.abort(),Jt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(j),$.ok?Jt(v,"TestPingServer: ok",!0,m):Jt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Jt(v,"TestPingServer: error",!1,m)})}function Jt(u,m,v,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(v)}catch{}}function yh(){this.g=new aa}function Kl(u,m,v){const T=v||"";try{ei(u,function(j,$){let te=j;y(j)&&(te=sa(j)),m.push(T+$+"="+encodeURIComponent(te))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function Ir(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Ir,zi),Ir.prototype.g=function(){return new Ji(this.l,this.j)},Ir.prototype.i=(function(u){return function(){return u}})({});function Ji(u,m){pt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Ji,pt),n=Ji.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,jn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Mn(this):jn(this),this.readyState==3&&Gl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Mn(this))},n.Qa=function(u){this.g&&(this.response=u,Mn(this))},n.ga=function(){this.g&&Mn(this)};function Mn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,jn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Sr(u){let m="";return ve(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function oi(u,m,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=Sr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):$e(u,m,v))}function Ye(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ye,pt);var vh=/^https?$/i,ya=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?Us(this.o):Us(Dn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){Xi(this,$);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)v.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())v.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),j=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ya,m,void 0))||T||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,te]of v)this.g.setRequestHeader($,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Xi(this,$)}};function Xi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ys(u),dn(u)}function Ys(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},n.bb=function(){va(this)};function va(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Xt(u)!=4||u.Z()!=2)){if(u.u&&Xt(u)==4)na(u.Ea,0,u);else if(mt(u,"readystatechange"),Xt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var T;if(T=te===0){var j=String(u.D).match(Qi)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),T=!vh.test(j?j.toLowerCase():"")}v=T}if(v)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var $=2<Xt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Ys(u)}}finally{dn(u)}}}}function dn(u,m){if(u.g){Js(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||mt(u,"ready");try{v.onreadystatechange=T}catch{}}}function Js(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Xt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),oa(m)}};function _a(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xs(u){const m={};u=(u.g&&2<=Xt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(X(u[T]))continue;var v=O(u[T]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=m[j]||[];m[j]=$,$.push(v)}N(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function wa(u){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tr("baseRetryDelayMs",5e3,u),this.cb=tr("retryDelaySeedMs",1e4,u),this.Wa=tr("forwardChannelMaxRetries",2,u),this.wa=tr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(u&&u.concurrentRequestLimit),this.Da=new yh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wa.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,T){ot(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Xl(this,null,this.W),nr(this)};function Rt(u){if(Zs(u),u.G==3){var m=u.U++,v=hn(u.I);if($e(v,"SID",u.K),$e(v,"RID",m),$e(v,"TYPE","terminate"),Ar(u,v),m=new On(u,u.j,m),m.L=2,m.v=ri(hn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=Zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Jl(u)}function Un(u){u.g&&(Ea(u),u.g.cancel(),u.g=null)}function Zs(u){Un(u),u.u&&(d.clearTimeout(u.u),u.u=null),no(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function nr(u){if(!cn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||oe(),ie||(Be(),ie=!0),me.add(m,u),u.B=0}}function _h(u,m){return Ul(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Nn(S(u.Ga,u,m),Yl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new On(this,this.j,u);let $=this.o;if(this.S&&($?($=A($),x($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=ai(this,j,m),v=hn(this.I),$e(v,"RID",u),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),Ar(this,v),$&&(this.O?m="headers="+encodeURIComponent(String(Sr($)))+"&"+m:this.m&&oi(v,this.m,$)),ma(this.h,j),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",m),$e(v,"SID","null"),j.T=!0,Ws(j,v,null)):Ws(j,v,m),this.G=2}}else this.G==3&&(u?eo(this,u):this.i.length==0||cn(this.h)||eo(this))};function eo(u,m){var v;m?v=m.l:v=u.U++;const T=hn(u.I);$e(T,"SID",u.K),$e(T,"RID",v),$e(T,"AID",u.T),Ar(u,T),u.m&&u.o&&oi(T,u.m,u.o),v=new On(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ai(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ma(u.h,v),Ws(v,T,m)}function Ar(u,m){u.H&&ve(u.H,function(v,T){$e(m,T,v)}),u.l&&ei({},function(v,T){$e(m,T,v)})}function ai(u,m,v){v=Math.min(u.i.length,v);var T=u.l?S(u.l.Na,u.l,u):null;e:{var j=u.i;let $=-1;for(;;){const te=["count="+v];$==-1?0<v?($=j[0].g,te.push("ofs="+$)):$=0:te.push("ofs="+$);let Ue=!0;for(let gt=0;gt<v;gt++){let be=j[gt].g;const Et=j[gt].map;if(be-=$,0>be)$=Math.max(0,j[gt].g-100),Ue=!1;else try{Kl(Et,te,"req"+be+"_")}catch{T&&T(Et)}}if(Ue){T=te.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,T}function Zi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||oe(),ie||(Be(),ie=!0),me.add(m,u),u.v=0}}function to(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Nn(S(u.Fa,u),Yl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Nn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Un(this),Ql(this))};function Ea(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new On(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),Ar(u,m),u.m&&u.o&&oi(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ri(hn(m)),v.m=null,v.P=!0,fa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Un(this),to(this),ot(19))};function no(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function ro(u,m){var v=null;if(u.g==m){no(u),Ea(u),u.g=null;var T=2}else if(Wt(u.h,m))v=m.D,Fl(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=$i(),mt(T,new zs(T,v)),nr(u)}else Zi(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&_h(u,m)||T==2&&to(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),j){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function Yl(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function kr(u,m){if(u.j.info("Error code "+m),m==2){var v=S(u.fb,u),T=u.Xa;const j=!T;T=new Tr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Yi(T,"https"),ri(T),j?gh(T.toString(),v):Wl(T.toString(),v)}else ot(2);u.G=0,u.l&&u.l.sa(m),Jl(u),Zs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Jl(u){if(u.G=0,u.ka=[],u.l){const m=Bl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Xl(u,m,v){var T=v instanceof Tr?hn(v):new Tr(v);if(T.g!="")m&&(T.g=m+"."+T.g),ti(T,T.s);else{var j=d.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var $=new Tr(null);T&&Yi($,T),m&&($.g=m),j&&ti($,j),v&&($.l=v),T=$}return v=u.D,m=u.ya,v&&m&&$e(T,v,m),$e(T,"VER",u.la),Ar(u,T),T}function Zl(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new Ir({eb:v})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ta(){}n=Ta.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function io(){}io.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){pt.call(this),this.g=new wa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!X(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new rr(this)}B(Kt,pt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Rt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=sa(u),u=v);m.i.push(new jl(m.Ya++,u)),m.G==3&&nr(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,Kt.aa.N.call(this)};function eu(u){Jn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}B(eu,Jn);function tu(){Bs.call(this),this.status=1}B(tu,Bs);function rr(u){this.g=u}B(rr,Ta),rr.prototype.ua=function(){mt(this.g,"a")},rr.prototype.ta=function(u){mt(this.g,new eu(u))},rr.prototype.sa=function(u){mt(this.g,new tu)},rr.prototype.ra=function(){mt(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Ew=function(){return new io},ww=function(){return $i()},_w=Xn,Af={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,ac=qs,Ol.COMPLETE="complete",vw=Ol,Fs.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Ja=Fs,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,yw=Ye}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const nv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Qf("@firebase/firestore");function Ka(){return Es.logLevel}function he(n,...e){if(Es.logLevel<=xe.DEBUG){const t=e.map(op);Es.debug(`Firestore (${Go}): ${n}`,...t)}}function qr(n,...e){if(Es.logLevel<=xe.ERROR){const t=e.map(op);Es.error(`Firestore (${Go}): ${n}`,...t)}}function Mo(n,...e){if(Es.logLevel<=xe.WARN){const t=e.map(op);Es.warn(`Firestore (${Go}): ${n}`,...t)}}function op(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+n;throw qr(e),new Error(e)}function Fe(n,e){n||Ee()}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class YR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class JR{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Br,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Br)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new Tw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Bt(e)}}class XR{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZR{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new XR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class e1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new e1(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=n1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ve(n,e){return n<e?-1:n>e?1:0}function jo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Te(e)}static min(){return new Te(new _t(0,0))}static max(){return new Te(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return hl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hl?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qe extends hl{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const r1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends hl{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return r1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Qe.fromString(e))}static fromName(e){return new pe(Qe.fromString(e).popFirst(5))}static empty(){return new pe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Qe(e.slice()))}}function i1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Di(o,pe.empty(),e)}function s1(n){return new Di(n.readTime,n.key,-1)}class Di{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Di(Te.min(),pe.empty(),-1)}static max(){return new Di(Te.max(),pe.empty(),-1)}}function o1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==a1)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,i)=>{t(e)}))}static reject(e){return new Y(((t,i)=>{i(e)}))}static waitFor(e){return new Y(((t,i)=>{let o=0,l=0,c=!1;e.forEach((d=>{++o,d.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=Y.resolve(!1);for(const i of e)t=t.next((o=>o?Y.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new Y(((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((_=>{c[y]=_,++d,d===l&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new Y(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function u1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ap.oe=-1;function zc(n){return n==null}function Tc(n){return n===0&&1/n==-1/0}function c1(n){return typeof n=="number"&&Number.isInteger(n)&&!Tc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Sw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new bt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Aw("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const h1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=h1.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ts(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function up(n){const e=n.mapValue.fields.__previous_value__;return lp(e)?up(e):e}function dl(n){const e=Oi(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class fl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={mapValue:{}};function Is(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lp(n)?4:p1(n)?9007199254740991:f1(n)?10:11:Ee()}function gr(n,e){if(n===e)return!0;const t=Is(n);if(t!==Is(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dl(n).isEqual(dl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Oi(o.timestampValue),d=Oi(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Ts(o.bytesValue).isEqual(Ts(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=lt(o.doubleValue),d=lt(l.doubleValue);return c===d?Tc(c)===Tc(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(rv(c)!==rv(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!gr(c[p],d[p])))return!1;return!0})(n,e);default:return Ee()}}function pl(n,e){return(n.values||[]).find((t=>gr(t,e)))!==void 0}function Uo(n,e){if(n===e)return 0;const t=Is(n),i=Is(e);if(t!==i)return Ve(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=lt(l.integerValue||l.doubleValue),p=lt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return sv(n.timestampValue,e.timestampValue);case 4:return sv(dl(n),dl(e));case 5:return Ve(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Ts(l),p=Ts(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const _=Ve(d[y],p[y]);if(_!==0)return _}return Ve(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Ve(lt(l.latitude),lt(c.latitude));return d!==0?d:Ve(lt(l.longitude),lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ov(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var d,p,y,_;const I=l.fields||{},S=c.fields||{},D=(d=I.value)===null||d===void 0?void 0:d.arrayValue,B=(p=S.value)===null||p===void 0?void 0:p.arrayValue,q=Ve(((y=D?.values)===null||y===void 0?void 0:y.length)||0,((_=B?.values)===null||_===void 0?void 0:_.length)||0);return q!==0?q:ov(D,B)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Xu.mapValue&&c===Xu.mapValue)return 0;if(l===Xu.mapValue)return 1;if(c===Xu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let I=0;I<p.length&&I<_.length;++I){const S=Ve(p[I],_[I]);if(S!==0)return S;const D=Uo(d[p[I]],y[_[I]]);if(D!==0)return D}return Ve(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Ee()}}function sv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=Oi(n),i=Oi(e),o=Ve(t.seconds,i.seconds);return o!==0?o:Ve(t.nanos,i.nanos)}function ov(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Uo(t[o],i[o]);if(l)return l}return Ve(t.length,i.length)}function Fo(n){return kf(n)}function kf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Oi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ts(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=kf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${kf(t.fields[c])}`;return o+"}"})(n.mapValue):Ee()}function av(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Rf(n){return!!n&&"integerValue"in n}function cp(n){return!!n&&"arrayValue"in n}function lv(n){return!!n&&"nullValue"in n}function uv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lc(n){return!!n&&"mapValue"in n}function f1(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function nl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=nl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function p1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!lc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=nl(c):o.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());lc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];lc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){bs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new an(nl(this.value))}}function kw(n){const e=[];return bs(n.fields,((t,i)=>{const o=new Nt([t]);if(lc(i)){const l=kw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new zt(e,0,Te.min(),Te.min(),Te.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Te.min(),Te.min(),an.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Te.min(),Te.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.position=e,this.inclusive=t}}function cv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(c.referenceValue),t.key):i=Uo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function hv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t="asc"){this.field=e,this.dir=t}}function m1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{}class ft extends Rw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new y1(e,t,i):t==="array-contains"?new w1(e,i):t==="in"?new E1(e,i):t==="not-in"?new T1(e,i):t==="array-contains-any"?new I1(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new v1(e,i):new _1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Uo(t,this.value)):t!==null&&Is(this.value)===Is(t)&&this.matchesComparison(Uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends Rw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qn(e,t)}matches(e){return Pw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pw(n){return n.op==="and"}function Cw(n){return g1(n)&&Pw(n)}function g1(n){for(const e of n.filters)if(e instanceof Qn)return!1;return!0}function Pf(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if(Cw(n))return n.filters.map((e=>Pf(e))).join(",");{const e=n.filters.map((t=>Pf(t))).join(",");return`${n.op}(${e})`}}function xw(n,e){return n instanceof ft?(function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)})(n,e):n instanceof Qn?(function(i,o){return o instanceof Qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,d)=>l&&xw(c,o.filters[d])),!0):!1})(n,e):void Ee()}function Nw(n){return n instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`})(n):n instanceof Qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nw).join(" ,")+"}"})(n):"Filter"}class y1 extends ft{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class v1 extends ft{constructor(e,t){super(e,"in",t),this.keys=bw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class _1 extends ft{constructor(e,t){super(e,"not-in",t),this.keys=bw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class w1 extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cp(t)&&pl(t.arrayValue,this.value)}}class E1 extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pl(this.value.arrayValue,t)}}class T1 extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!pl(this.value.arrayValue,t)}}class I1 extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>pl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function dv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new S1(n,e,t,i,o,l,c)}function hp(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Pf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),zc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Fo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Fo(i))).join(",")),e.ue=t}return e.ue}function dp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!m1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hv(n.startAt,e.startAt)&&hv(n.endAt,e.endAt)}function Cf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function A1(n,e,t,i,o,l,c,d){return new Qo(n,e,t,i,o,l,c,d)}function $c(n){return new Qo(n)}function fv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dw(n){return n.collectionGroup!==null}function rl(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new bt(Nt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new ml(l,i))})),t.has(Nt.keyField().canonicalString())||e.ce.push(new ml(Nt.keyField(),i))}return e.ce}function fr(n){const e=Ie(n);return e.le||(e.le=k1(e,rl(n))),e.le}function k1(n,e){if(n.limitType==="F")return dv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ml(o.field,l)}));const t=n.endAt?new Ic(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ic(n.startAt.position,n.startAt.inclusive):null;return dv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function xf(n,e){const t=n.filters.concat([e]);return new Qo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Nf(n,e,t){return new Qo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qc(n,e){return dp(fr(n),fr(e))&&n.limitType===e.limitType}function Ow(n){return`${hp(fr(n))}|lt:${n.limitType}`}function Ro(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Nw(o))).join(", ")}]`),zc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Fo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Fo(o))).join(",")),`Target(${i})`})(fr(n))}; limitType=${n.limitType})`}function Hc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of rl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,d,p){const y=cv(c,d,p);return c.inclusive?y<=0:y<0})(i.startAt,rl(i),o)||i.endAt&&!(function(c,d,p){const y=cv(c,d,p);return c.inclusive?y>=0:y>0})(i.endAt,rl(i),o))})(n,e)}function R1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lw(n){return(e,t)=>{let i=!1;for(const o of rl(n)){const l=P1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function P1(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Uo(p,y):Ee()})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Sw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new tt(pe.comparator);function Hr(){return C1}const Vw=new tt(pe.comparator);function Xa(...n){let e=Vw;for(const t of n)e=e.insert(t.key,t);return e}function Mw(n){let e=Vw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ps(){return il()}function jw(){return il()}function il(){return new Yo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const x1=new tt(pe.comparator),N1=new bt(pe.comparator);function Pe(...n){let e=N1;for(const t of n)e=e.add(t);return e}const b1=new bt(Ve);function D1(){return b1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function Uw(n){return{integerValue:""+n}}function O1(n,e){return c1(e)?Uw(e):fp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this._=void 0}}function L1(n,e,t){return n instanceof gl?(function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&lp(l)&&(l=up(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}})(t,e):n instanceof yl?Bw(n,e):n instanceof vl?zw(n,e):(function(o,l){const c=Fw(o,l),d=pv(c)+pv(o.Pe);return Rf(c)&&Rf(o.Pe)?Uw(d):fp(o.serializer,d)})(n,e)}function V1(n,e,t){return n instanceof yl?Bw(n,e):n instanceof vl?zw(n,e):t}function Fw(n,e){return n instanceof Sc?(function(i){return Rf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class gl extends Wc{}class yl extends Wc{constructor(e){super(),this.elements=e}}function Bw(n,e){const t=$w(e);for(const i of n.elements)t.some((o=>gr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class vl extends Wc{constructor(e){super(),this.elements=e}}function zw(n,e){let t=$w(e);for(const i of n.elements)t=t.filter((o=>!gr(o,i)));return{arrayValue:{values:t}}}class Sc extends Wc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function pv(n){return lt(n.integerValue||n.doubleValue)}function $w(n){return cp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,t){this.field=e,this.transform=t}}function j1(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof yl&&o instanceof yl||i instanceof vl&&o instanceof vl?jo(i.elements,o.elements,gr):i instanceof Sc&&o instanceof Sc?gr(i.Pe,o.Pe):i instanceof gl&&o instanceof gl})(n.transform,e.transform)}class U1{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kc{}function qw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pp(n.key,Cn.none()):new Pl(n.key,n.data,Cn.none());{const t=n.data,i=an.empty();let o=new bt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Mi(n.key,i,new yn(o.toArray()),Cn.none())}}function F1(n,e,t){n instanceof Pl?(function(o,l,c){const d=o.value.clone(),p=gv(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Mi?(function(o,l,c){if(!uc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=gv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Hw(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function sl(n,e,t,i){return n instanceof Pl?(function(l,c,d,p){if(!uc(l.precondition,c))return d;const y=l.value.clone(),_=yv(l.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Mi?(function(l,c,d,p){if(!uc(l.precondition,c))return d;const y=yv(l.fieldTransforms,p,c),_=c.data;return _.setAll(Hw(l)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(n,e,t,i):(function(l,c,d){return uc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function B1(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Fw(i.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(i.field,l))}return t||null}function mv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,((l,c)=>j1(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pl extends Kc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Mi extends Kc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function gv(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,V1(c,d,t[o]))}return i}function yv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,L1(l,c,e))}return i}class pp extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z1 extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&F1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=sl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=sl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=jw();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=qw(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Te.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((t,i)=>mv(t,i)))&&jo(this.baseMutations,e.baseMutations,((t,i)=>mv(t,i)))}}class mp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=(function(){return x1})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new mp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,De;function W1(n){switch(n){default:return Ee();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Ww(n){if(n===void 0)return qr("GRPC error has no .code"),W.UNKNOWN;switch(n){case dt.OK:return W.OK;case dt.CANCELLED:return W.CANCELLED;case dt.UNKNOWN:return W.UNKNOWN;case dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case dt.INTERNAL:return W.INTERNAL;case dt.UNAVAILABLE:return W.UNAVAILABLE;case dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case dt.NOT_FOUND:return W.NOT_FOUND;case dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case dt.ABORTED:return W.ABORTED;case dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case dt.DATA_LOSS:return W.DATA_LOSS;default:return Ee()}}(De=dt||(dt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new gs([4294967295,4294967295],0);function vv(n){const e=K1().encode(n),t=new gw;return t.update(e),new Uint8Array(t.digest())}function _v(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new gs([t,i],0),new gs([o,l],0)]}class gp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Za(`Invalid padding: ${t}`);if(i<0)throw new Za(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Za(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=gs.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(gs.fromNumber(i)));return o.compare(G1)===1&&(o=new gs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=vv(e),[i,o]=_v(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new gp(l,o,t);return i.forEach((d=>c.insert(d))),c}insert(e){if(this.Ie===0)return;const t=vv(e),[i,o]=_v(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Gc(Te.min(),o,new tt(Ve),Hr(),Pe())}}class Cl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Cl(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Kw{constructor(e,t){this.targetId=e,this.me=t}}class Gw{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class wv{constructor(){this.fe=0,this.ge=Tv(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}})),new Cl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Tv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Q1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Hr(),this.qe=Ev(),this.Qe=new tt(Ve)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Ee()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((i,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(Cf(l))if(i===0){const c=new pe(l.path);this.Ue(t,c,zt.newNoDocument(c,Te.min()))}else Fe(i===1);else{const c=this.Ye(t);if(c!==i){const d=this.Ze(e),p=d?this.Xe(d,e,c):1;if(p!==0){this.je(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,y)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Ts(i).toUint8Array()}catch(p){if(p instanceof Aw)return Mo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new gp(c,o,l)}catch(p){return Mo(p instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Le.tt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,l,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((l,c)=>{const d=this.Je(c);if(d){if(l.current&&Cf(d.target)){const p=new pe(d.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,zt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}}));let i=Pe();this.qe.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const y=this.Je(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(i=i.add(l))})),this.ke.forEach(((l,c)=>c.setReadTime(e)));const o=new Gc(e,t,this.Qe,this.ke,i);return this.ke=Hr(),this.qe=Ev(),this.Qe=new tt(Ve),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new wv,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new bt(Ve),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wv),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ev(){return new tt(pe.comparator)}function Tv(){return new tt(pe.comparator)}const Y1={asc:"ASCENDING",desc:"DESCENDING"},J1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X1={and:"AND",or:"OR"};class Z1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bf(n,e){return n.useProto3Json||zc(e)?e:{value:e}}function Ac(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function eP(n,e){return Ac(n,e.toTimestamp())}function pr(n){return Fe(!!n),Te.fromTimestamp((function(t){const i=Oi(t);return new _t(i.seconds,i.nanos)})(n))}function yp(n,e){return Df(n,e).canonicalString()}function Df(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Yw(n){const e=Qe.fromString(n);return Fe(t0(e)),e}function Of(n,e){return yp(n.databaseId,e.path)}function Zd(n,e){const t=Yw(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(Xw(t))}function Jw(n,e){return yp(n.databaseId,e)}function tP(n){const e=Yw(n);return e.length===4?Qe.emptyPath():Xw(e)}function Lf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xw(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Iv(n,e,t){return{name:Of(n,e),fields:t.value.mapValue.fields}}function nP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(Fe(_===void 0||typeof _=="string"),Dt.fromBase64String(_||"")):(Fe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Dt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(y){const _=y.code===void 0?W.UNKNOWN:Ww(y.code);return new ae(_,y.message||"")})(c);t=new Gw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Zd(n,i.document.name),l=pr(i.document.updateTime),c=i.document.createTime?pr(i.document.createTime):Te.min(),d=new an({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,c,d),y=i.targetIds||[],_=i.removedTargetIds||[];t=new cc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Zd(n,i.document),l=i.readTime?pr(i.readTime):Te.min(),c=zt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new cc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Zd(n,i.document),l=i.removedTargetIds||[];t=new cc([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new H1(o,l),d=i.targetId;t=new Kw(d,c)}}return t}function rP(n,e){let t;if(e instanceof Pl)t={update:Iv(n,e.key,e.value)};else if(e instanceof pp)t={delete:Of(n,e.key)};else if(e instanceof Mi)t={update:Iv(n,e.key,e.data),updateMask:dP(e.fieldMask)};else{if(!(e instanceof z1))return Ee();t={verify:Of(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const d=c.transform;if(d instanceof gl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof yl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof vl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Sc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Ee()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:eP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()})(n,e.precondition)),t}function iP(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map((t=>(function(o,l){let c=o.updateTime?pr(o.updateTime):pr(l);return c.isEqual(Te.min())&&(c=pr(l)),new U1(c,o.transformResults||[])})(t,e)))):[]}function sP(n,e){return{documents:[Jw(n,e.path)]}}function oP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Jw(n,o);const l=(function(y){if(y.length!==0)return e0(Qn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((_=>(function(S){return{field:Po(S.field),direction:uP(S.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=bf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{_t:t,parent:o}}function aP(n){let e=tP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(I){const S=Zw(I);return S instanceof Qn&&Cw(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(I){return I.map((S=>(function(B){return new ml(Co(B.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(S)))})(t.orderBy));let d=null;t.limit&&(d=(function(I){let S;return S=typeof I=="object"?I.value:I,zc(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(I){const S=!!I.before,D=I.values||[];return new Ic(D,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(I){const S=!I.before,D=I.values||[];return new Ic(D,S)})(t.endAt)),A1(e,o,c,l,d,"F",p,y)}function lP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Co(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Co(t.unaryFilter.field);return ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Co(t.unaryFilter.field);return ft.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}})(n):n.fieldFilter!==void 0?(function(t){return ft.create(Co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Qn.create(t.compositeFilter.filters.map((i=>Zw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}})(t.compositeFilter.op))})(n):Ee()}function uP(n){return Y1[n]}function cP(n){return J1[n]}function hP(n){return X1[n]}function Po(n){return{fieldPath:n.canonicalString()}}function Co(n){return Nt.fromServerFormat(n.fieldPath)}function e0(n){return n instanceof ft?(function(t){if(t.op==="=="){if(uv(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(lv(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(uv(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(lv(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:cP(t.op),value:t.value}}})(n):n instanceof Qn?(function(t){const i=t.getFilters().map((o=>e0(o)));return i.length===1?i[0]:{compositeFilter:{op:hP(t.op),filters:i}}})(n):Ee()}function dP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function t0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,i,o,l=Te.min(),c=Te.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.ct=e}}function pP(n){const e=aP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.un=new gP}addToCollectionParentIndex(e,t){return this.un.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(Di.min())}updateCollectionGroup(e,t,i){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class gP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new bt(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new bt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Bo(0)}static kn(){return new Bo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.changes=new Yo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Y.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&sl(i.mutation,o,yn.empty(),_t.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Pe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Xa();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Pe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,i,o){let l=Hr();const c=il(),d=(function(){return il()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Mi)?l=l.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),sl(_.mutation,y,_.mutation.getFieldMask(),_t.now())):c.set(y.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,_)=>c.set(y,_))),t.forEach(((y,_)=>{var I;return d.set(y,new vP(_,(I=c.get(y))!==null&&I!==void 0?I:null))})),d)))}recalculateAndSaveOverlays(e,t){const i=il();let o=new tt(((c,d)=>c-d)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||yn.empty();_=d.applyToLocalView(y,_),i.set(p,_);const I=(o.get(d.batchId)||Pe()).add(p);o=o.insert(d.batchId,I)}))})).next((()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,_=p.value,I=jw();_.forEach((S=>{if(!l.has(S)){const D=qw(t.get(S),i.get(S));D!==null&&I.set(S,D),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,I))}return Y.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Y.resolve(ps());let d=-1,p=l;return c.next((y=>Y.forEach(y,((_,I)=>(d<I.largestBatchId&&(d=I.largestBatchId),l.get(_)?Y.resolve():this.remoteDocumentCache.getEntry(e,_).next((S=>{p=p.insert(_,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,Pe()))).next((_=>({batchId:d,changes:Mw(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Xa();return this.indexManager.getCollectionParents(e,l).next((d=>Y.forEach(d,(p=>{const y=(function(I,S){return new Qo(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((I,S)=>{c=c.insert(I,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,zt.newInvalidDocument(_)))}));let d=Xa();return c.forEach(((p,y)=>{const _=l.get(p);_!==void 0&&sl(_.mutation,y,yn.empty(),_t.now()),Hc(t,y)&&(d=d.insert(p,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Y.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:pr(o.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:pP(o.bundledQuery),readTime:pr(o.readTime)}})(t)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.overlays=new tt(pe.comparator),this.Ir=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return Y.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.ht(e,t,l)})),Y.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Ir.delete(i)),Y.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,_)=>y-_));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=ps(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const d=ps(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>d.set(y,_))),!(d.size()>=o)););return Y.resolve(d)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new q1(t,i));let l=this.Ir.get(t);l===void 0&&(l=Pe(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.Tr=new bt(At.Er),this.dr=new bt(At.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new At(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Vr(new At(e,t))}mr(e,t){e.forEach((i=>this.removeReference(i,t)))}gr(e){const t=new pe(new Qe([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.dr.forEachInRange([i,o],(c=>{this.Vr(c),l.push(c.key)})),l}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new pe(new Qe([])),i=new At(t,e),o=new At(t,e+1);let l=Pe();return this.dr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new At(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return pe.comparator(e.key,t.key)||Ve(e.wr,t.wr)}static Ar(e,t){return Ve(e.wr,t.wr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new bt(At.Er)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new $1(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.br=this.br.add(new At(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Y.resolve(c)}lookupMutationBatch(e,t){return Y.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return Y.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],(c=>{const d=this.Dr(c.wr);l.push(d)})),Y.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new bt(Ve);return t.forEach((o=>{const l=new At(o,0),c=new At(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],(d=>{i=i.add(d.wr)}))})),Y.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const c=new At(new pe(l),0);let d=new bt(Ve);return this.br.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.wr)),!0)}),c),Y.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach((i=>{const o=this.Dr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Y.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=i}))}On(e){}containsKey(e,t){const i=new At(t,0),o=this.br.firstAfterOrEqual(i);return Y.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.Mr=e,this.docs=(function(){return new tt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Y.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Hr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),Y.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Hr();const c=t.path,d=new pe(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||o1(s1(_),i)<=0||(o.has(_.key)||Hc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return Y.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee()}Or(e,t){return Y.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new AP(this)}getSize(e){return Y.resolve(this.size)}}class AP extends yP{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)})),Y.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.persistence=e,this.Nr=new Yo((t=>hp(t)),dp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vp,this.targetCount=0,this.kr=Bo.Bn()}forEachTarget(e,t){return this.Nr.forEach(((i,o)=>t(o))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),Y.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Bo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Kn(t),Y.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach(((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),Y.waitFor(l).next((()=>o))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return Y.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),Y.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),Y.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return Y.resolve(i)}containsKey(e,t){return Y.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ap(0),this.Kr=!1,this.Kr=!0,this.$r=new TP,this.referenceDelegate=e(this),this.Ur=new kP(this),this.indexManager=new mP,this.remoteDocumentCache=(function(o){return new SP(o)})((i=>this.referenceDelegate.Wr(i))),this.serializer=new fP(t),this.Gr=new wP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new EP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new IP(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const o=new PP(this.Qr.next());return this.referenceDelegate.zr(),i(o).next((l=>this.referenceDelegate.jr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Hr(e,t){return Y.or(Object.values(this.qr).map((i=>()=>i.containsKey(e,t))))}}class PP extends l1{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.Jr=new vp,this.Yr=null}static Zr(e){return new _p(e)}get Xr(){if(this.Yr)return this.Yr;throw Ee()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),Y.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.Xr.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Xr,(i=>{const o=pe.fromPath(i);return this.ei(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Y.or([()=>Y.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new wp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return yS()?8:u1(Ht())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.Zi(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new CP;return this.Xi(e,t,c).next((d=>{if(l.result=d,this.zi)return this.es(e,t,c,d.size)}))})).next((()=>l.result))}es(e,t,i,o){return i.documentReadCount<this.ji?(Ka()<=xe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Y.resolve()):(Ka()<=xe.DEBUG&&he("QueryEngine","Query:",Ro(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Ka()<=xe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(t))):Y.resolve())}Yi(e,t){if(fv(t))return Y.resolve(null);let i=fr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Nf(t,null,"F"),i=fr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Pe(...l);return this.Ji.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.ts(t,d);return this.ns(t,y,c,p.readTime)?this.Yi(e,Nf(t,null,"F")):this.rs(e,y,t,p)}))))})))))}Zi(e,t,i,o){return fv(t)||o.isEqual(Te.min())?Y.resolve(null):this.Ji.getDocuments(e,i).next((l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?Y.resolve(null):(Ka()<=xe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ro(t)),this.rs(e,c,t,i1(o,-1)).next((d=>d)))}))}ts(e,t){let i=new bt(Lw(e));return t.forEach(((o,l)=>{Hc(e,l)&&(i=i.add(l))})),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return Ka()<=xe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.Ji.getDocumentsMatchingQuery(e,t,Di.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new tt(Ve),this._s=new Yo((l=>hp(l)),dp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _P(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function bP(n,e,t,i){return new NP(n,e,t,i)}async function n0(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],d=[];let p=Pe();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){d.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({hs:y,removedBatchIds:c,addedBatchIds:d})))}))}))}function DP(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return(function(d,p,y,_){const I=y.batch,S=I.keys();let D=Y.resolve();return S.forEach((B=>{D=D.next((()=>_.getEntry(p,B))).next((q=>{const L=y.docVersions.get(B);Fe(L!==null),q.version.compareTo(L)<0&&(I.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),_.addEntry(q)))}))})),D.next((()=>d.mutationQueue.removeMutationBatch(p,I)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(d){let p=Pe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function r0(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function OP(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const d=[];e.targetChanges.forEach(((_,I)=>{const S=o.get(I);if(!S)return;d.push(t.Ur.removeMatchingKeys(l,_.removedDocuments,I).next((()=>t.Ur.addMatchingKeys(l,_.addedDocuments,I))));let D=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?D=D.withResumeToken(Dt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(_.resumeToken,i)),o=o.insert(I,D),(function(q,L,Z){return q.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(S,D,_)&&d.push(t.Ur.updateTargetData(l,D))}));let p=Hr(),y=Pe();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),d.push(LP(l,c,e.documentUpdates).next((_=>{p=_.Ps,y=_.Is}))),!i.isEqual(Te.min())){const _=t.Ur.getLastRemoteSnapshotVersion(l).next((I=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i)));d.push(_)}return Y.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.os=o,l)))}function LP(n,e,t){let i=Pe(),o=Pe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Hr();return t.forEach(((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)})),{Ps:c,Is:o}}))}function VP(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function MP(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Ur.getTargetData(i,e).next((l=>l?(o=l,Y.resolve(o)):t.Ur.allocateTargetId(i).next((c=>(o=new Ci(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i}))}async function Vf(n,e,t){const i=Ie(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!Rl(c))throw c;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function Sv(n,e,t){const i=Ie(n);let o=Te.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,_){const I=Ie(p),S=I._s.get(_);return S!==void 0?Y.resolve(I.os.get(S)):I.Ur.getTargetData(y,_)})(i,c,fr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Te.min(),t?l:Pe()))).next((d=>(jP(i,R1(e),d),{documents:d,Ts:l})))))}function jP(n,e,t){let i=n.us.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.us.set(e,i)}class Av{constructor(){this.activeTargetIds=D1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UP{constructor(){this.so=new Av,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Av,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu=null;function ef(){return Zu===null?Zu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zu++,"0x"+Zu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class $P extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const d=ef(),p=this.xo(t,i.toUriEncodedString());he("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,c),this.No(t,p,y,o).then((_=>(he("RestConnection",`Received RPC '${t}' ${d}: `,_),_)),(_=>{throw Mo("RestConnection",`RPC '${t}' ${d} failed with error: `,_,"url: ",p,"request:",o),_}))}Lo(t,i,o,l,c,d){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Go})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),o&&o.headers.forEach(((l,c)=>t[c]=l))}xo(t,i){const o=BP[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=ef();return new Promise(((c,d)=>{const p=new yw;p.setWithCredentials(!0),p.listenOnce(vw.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case ac.NO_ERROR:const _=p.getResponseJson();he(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case ac.TIMEOUT:he(Ft,`RPC '${e}' ${l} timed out`),d(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const I=p.getStatus();if(he(Ft,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S?.error;if(D&&D.status&&D.message){const B=(function(L){const Z=L.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Z)>=0?Z:W.UNKNOWN})(D.status);d(new ae(B,D.message))}else d(new ae(W.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ae(W.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{he(Ft,`RPC '${e}' ${l} completed.`)}}));const y=JSON.stringify(o);he(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)}))}Bo(e,t,i){const o=ef(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Ew(),d=ww(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");he(Ft,`Creating RPC '${e}' stream ${o}: ${_}`,p);const I=c.createWebChannel(_,p);let S=!1,D=!1;const B=new zP({Io:L=>{D?he(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(S||(he(Ft,`Opening RPC '${e}' stream ${o} transport.`),I.open(),S=!0),he(Ft,`RPC '${e}' stream ${o} sending:`,L),I.send(L))},To:()=>I.close()}),q=(L,Z,X)=>{L.listen(Z,(ne=>{try{X(ne)}catch(re){setTimeout((()=>{throw re}),0)}}))};return q(I,Ja.EventType.OPEN,(()=>{D||(he(Ft,`RPC '${e}' stream ${o} transport opened.`),B.yo())})),q(I,Ja.EventType.CLOSE,(()=>{D||(D=!0,he(Ft,`RPC '${e}' stream ${o} transport closed`),B.So())})),q(I,Ja.EventType.ERROR,(L=>{D||(D=!0,Mo(Ft,`RPC '${e}' stream ${o} transport errored:`,L),B.So(new ae(W.UNAVAILABLE,"The operation could not be completed")))})),q(I,Ja.EventType.MESSAGE,(L=>{var Z;if(!D){const X=L.data[0];Fe(!!X);const ne=X,re=ne.error||((Z=ne[0])===null||Z===void 0?void 0:Z.error);if(re){he(Ft,`RPC '${e}' stream ${o} received error:`,re);const Se=re.status;let ve=(function(P){const x=dt[P];if(x!==void 0)return Ww(x)})(Se),N=re.message;ve===void 0&&(ve=W.INTERNAL,N="Unknown error status: "+Se+" with message "+re.message),D=!0,B.So(new ae(ve,N)),I.close()}else he(Ft,`RPC '${e}' stream ${o} received:`,X),B.bo(X)}})),q(d,_w.STAT_EVENT,(L=>{L.stat===Af.PROXY?he(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===Af.NOPROXY&&he(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.wo()}),0),B}}function tf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){return new Z1(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,i,o,l,c,d,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new i0(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(qr(t.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.Yo===t&&this.P_(i,o)}),(i=>{e((()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)}))}))}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{i((()=>this.listener.Eo()))})),this.stream.Ro((()=>{i((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{i((()=>this.I_(o)))})),this.stream.onMessage((o=>{i((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qP extends s0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=nP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Te.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Te.min():c.readTime?pr(c.readTime):Te.min()})(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=Lf(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Cf(p)?{documents:sP(l,p)}:{query:oP(l,p)._t},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Qw(l,c.resumeToken);const y=bf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Te.min())>0){d.readTime=Ac(l,c.snapshotVersion.toTimestamp());const y=bf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const i=lP(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=Lf(this.serializer),t.removeTarget=e,this.a_(t)}}class HP extends s0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=iP(e.writeResults,e.commitTime),i=pr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=Lf(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>rP(this.serializer,i)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Mo(e,Df(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(W.UNKNOWN,l.toString())}))}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Lo(e,Df(t,i),o,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ae(W.UNKNOWN,c.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class KP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qr(t),this.D_=!1):he("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o((c=>{i.enqueueAndForget((async()=>{Ds(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await(async function(p){const y=Ie(p);y.L_.add(4),await xl(y),y.q_.set("Unknown"),y.L_.delete(4),await Yc(y)})(this))}))})),this.q_=new KP(i,o)}}async function Yc(n){if(Ds(n))for(const e of n.B_)await e(!0)}async function xl(n){for(const e of n.B_)await e(!1)}function o0(n,e){const t=Ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Sp(t)?Ip(t):Jo(t).r_()&&Tp(t,e))}function Ep(n,e){const t=Ie(n),i=Jo(t);t.N_.delete(e),i.r_()&&a0(t,e),t.N_.size===0&&(i.r_()?i.o_():Ds(t)&&t.q_.set("Unknown"))}function Tp(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(n).A_(e)}function a0(n,e){n.Q_.xe(e),Jo(n).R_(e)}function Ip(n){n.Q_=new Q1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Jo(n).start(),n.q_.v_()}function Sp(n){return Ds(n)&&!Jo(n).n_()&&n.N_.size>0}function Ds(n){return Ie(n).L_.size===0}function l0(n){n.Q_=void 0}async function QP(n){n.q_.set("Online")}async function YP(n){n.N_.forEach(((e,t)=>{Tp(n,e)}))}async function JP(n,e){l0(n),Sp(n)?(n.q_.M_(e),Ip(n)):n.q_.set("Unknown")}async function XP(n,e,t){if(n.q_.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const d of l.targetIds)o.N_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.N_.delete(d),o.Q_.removeTarget(d))})(n,e)}catch(i){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await kc(n,i)}else if(e instanceof cc?n.Q_.Ke(e):e instanceof Kw?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Te.min()))try{const i=await r0(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const d=l.Q_.rt(c);return d.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.N_.get(y);_&&l.N_.set(y,_.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,y)=>{const _=l.N_.get(p);if(!_)return;l.N_.set(p,_.withResumeToken(Dt.EMPTY_BYTE_STRING,_.snapshotVersion)),a0(l,p);const I=new Ci(_.target,p,y,_.sequenceNumber);Tp(l,I)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(i){he("RemoteStore","Failed to raise snapshot:",i),await kc(n,i)}}async function kc(n,e,t){if(!Rl(e))throw e;n.L_.add(1),await xl(n),n.q_.set("Offline"),t||(t=()=>r0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Yc(n)}))}function u0(n,e){return e().catch((t=>kc(n,t,e)))}async function Jc(n){const e=Ie(n),t=Li(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ZP(e);)try{const o=await VP(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,eC(e,o)}catch(o){await kc(e,o)}c0(e)&&h0(e)}function ZP(n){return Ds(n)&&n.O_.length<10}function eC(n,e){n.O_.push(e);const t=Li(n);t.r_()&&t.V_&&t.m_(e.mutations)}function c0(n){return Ds(n)&&!Li(n).n_()&&n.O_.length>0}function h0(n){Li(n).start()}async function tC(n){Li(n).p_()}async function nC(n){const e=Li(n);for(const t of n.O_)e.m_(t.mutations)}async function rC(n,e,t){const i=n.O_.shift(),o=mp.from(i,e,t);await u0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Jc(n)}async function iC(n,e){e&&Li(n).V_&&await(async function(i,o){if((function(c){return W1(c)&&c!==W.ABORTED})(o.code)){const l=i.O_.shift();Li(i).s_(),await u0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Jc(i)}})(n,e),c0(n)&&h0(n)}async function Rv(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const i=Ds(t);t.L_.add(3),await xl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Yc(t)}async function sC(n,e){const t=Ie(n);e?(t.L_.delete(2),await Yc(t)):e||(t.L_.add(2),await xl(t),t.q_.set("Unknown"))}function Jo(n){return n.K_||(n.K_=(function(t,i,o){const l=Ie(t);return l.w_(),new qP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Eo:QP.bind(null,n),Ro:YP.bind(null,n),mo:JP.bind(null,n),d_:XP.bind(null,n)}),n.B_.push((async e=>{e?(n.K_.s_(),Sp(n)?Ip(n):n.q_.set("Unknown")):(await n.K_.stop(),l0(n))}))),n.K_}function Li(n){return n.U_||(n.U_=(function(t,i,o){const l=Ie(t);return l.w_(),new HP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tC.bind(null,n),mo:iC.bind(null,n),f_:nC.bind(null,n),g_:rC.bind(null,n)}),n.B_.push((async e=>{e?(n.U_.s_(),await Jc(n)):(await n.U_.stop(),n.O_.length>0&&(he("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))}))),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new Ap(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(n,e){if(qr("AsyncQueue",`${e}: ${n}`),Rl(n))return new ae(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Oo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.W_=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Ee():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class zo{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new zo(e,t,Oo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class aC{constructor(){this.queries=Cv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=Cv(),l.forEach(((c,d)=>{for(const p of d.j_)p.onError(i)}))})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function Cv(){return new Yo((n=>Ow(n)),qc)}async function Rp(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new oC,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=kp(c,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Cp(t)}async function Pp(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function lC(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.j_)d.X_(o)&&(i=!0);c.z_=o}}i&&Cp(t)}function uC(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function Cp(n){n.Y_.forEach((e=>{e.next()}))}var Mf,xv;(xv=Mf||(Mf={})).ea="default",xv.Cache="cache";class xp{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.key=e}}class f0{constructor(e){this.key=e}}class cC{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Pe(),this.mutatedKeys=Pe(),this.Aa=Lw(e),this.Ra=new Oo(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Pv,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,I)=>{const S=o.get(_),D=Hc(this.query,I)?I:null,B=!!S&&this.mutatedKeys.has(S.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let L=!1;S&&D?S.data.isEqual(D.data)?B!==q&&(i.track({type:3,doc:D}),L=!0):this.ga(S,D)||(i.track({type:2,doc:D}),L=!0,(p&&this.Aa(D,p)>0||y&&this.Aa(D,y)<0)&&(d=!0)):!S&&D?(i.track({type:0,doc:D}),L=!0):S&&!D&&(i.track({type:1,doc:S}),L=!0,(p||y)&&(d=!0)),L&&(D?(c=c.add(D),l=q?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{Ra:c,fa:i,ns:d,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort(((_,I)=>(function(D,B){const q=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return q(D)-q(B)})(_.type,I.type)||this.Aa(_.doc,I.doc))),this.pa(i),o=o!=null&&o;const d=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,y=p!==this.Ea;return this.Ea=p,c.length!==0||y?{snapshot:new zo(this.query,e.Ra,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Pe(),this.Ra.forEach((i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))}));const t=[];return e.forEach((i=>{this.da.has(i)||t.push(new f0(i))})),this.da.forEach((i=>{e.has(i)||t.push(new d0(i))})),t}ba(e){this.Ta=e.Ts,this.da=Pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return zo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class dC{constructor(e){this.key=e,this.va=!1}}class fC{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new Yo((d=>Ow(d)),qc),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(pe.comparator),this.Na=new Map,this.La=new vp,this.Ba={},this.ka=new Map,this.qa=Bo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pC(n,e,t=!0){const i=_0(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await p0(i,e,t,!0),o}async function mC(n,e){const t=_0(n);await p0(t,e,!0,!1)}async function p0(n,e,t,i){const o=await MP(n.localStore,fr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await gC(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&o0(n.remoteStore,o),d}async function gC(n,e,t,i,o){n.Ka=(I,S,D)=>(async function(q,L,Z,X){let ne=L.view.ma(Z);ne.ns&&(ne=await Sv(q.localStore,L.query,!1).then((({documents:N})=>L.view.ma(N,ne))));const re=X&&X.targetChanges.get(L.targetId),Se=X&&X.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges(ne,q.isPrimaryClient,re,Se);return bv(q,L.targetId,ve.wa),ve.snapshot})(n,I,S,D);const l=await Sv(n.localStore,e,!0),c=new cC(e,l.Ts),d=c.ma(l.documents),p=Cl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);bv(n,t,y.wa);const _=new hC(e,t,c);return n.Fa.set(e,_),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),y.snapshot}async function yC(n,e,t){const i=Ie(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter((c=>!qc(c,e)))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ep(i.remoteStore,o.targetId),jf(i,o.targetId)})).catch(kl)):(jf(i,o.targetId),await Vf(i.localStore,o.targetId,!0))}async function vC(n,e){const t=Ie(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ep(t.remoteStore,i.targetId))}async function _C(n,e,t){const i=kC(n);try{const o=await(function(c,d){const p=Ie(c),y=_t.now(),_=d.reduce(((D,B)=>D.add(B.key)),Pe());let I,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let B=Hr(),q=Pe();return p.cs.getEntries(D,_).next((L=>{B=L,B.forEach(((Z,X)=>{X.isValidDocument()||(q=q.add(Z))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,B))).next((L=>{I=L;const Z=[];for(const X of d){const ne=B1(X,I.get(X.key).overlayedDocument);ne!=null&&Z.push(new Mi(X.key,ne,kw(ne.value.mapValue),Cn.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,Z,d)})).next((L=>{S=L;const Z=L.applyToLocalDocumentSet(I,q);return p.documentOverlayCache.saveOverlays(D,L.batchId,Z)}))})).then((()=>({batchId:S.batchId,changes:Mw(I)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,d,p){let y=c.Ba[c.currentUser.toKey()];y||(y=new tt(Ve)),y=y.insert(d,p),c.Ba[c.currentUser.toKey()]=y})(i,o.batchId,t),await Nl(i,o.changes),await Jc(i.remoteStore)}catch(o){const l=kp(o,"Failed to persist write");t.reject(l)}}async function m0(n,e){const t=Ie(n);try{const i=await OP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Na.get(l);c&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?Fe(c.va):o.removedDocuments.size>0&&(Fe(c.va),c.va=!1))})),await Nl(t,i,e)}catch(i){await kl(i)}}function Nv(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach(((l,c)=>{const d=c.view.Z_(e);d.snapshot&&o.push(d.snapshot)})),(function(c,d){const p=Ie(c);p.onlineState=d;let y=!1;p.queries.forEach(((_,I)=>{for(const S of I.j_)S.Z_(d)&&(y=!0)})),y&&Cp(p)})(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function wC(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new tt(pe.comparator);c=c.insert(l,zt.newNoDocument(l,Te.min()));const d=Pe().add(l),p=new Gc(Te.min(),new Map,new tt(Ve),c,d);await m0(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),Np(i)}else await Vf(i.localStore,e,!1).then((()=>jf(i,e,t))).catch(kl)}async function EC(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await DP(t.localStore,e);y0(t,i,null),g0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Nl(t,o)}catch(o){await kl(o)}}async function TC(n,e,t){const i=Ie(n);try{const o=await(function(c,d){const p=Ie(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,d).next((I=>(Fe(I!==null),_=I.keys(),p.mutationQueue.removeMutationBatch(y,I)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);y0(i,e,t),g0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Nl(i,o)}catch(o){await kl(o)}}function g0(n,e){(n.ka.get(e)||[]).forEach((t=>{t.resolve()})),n.ka.delete(e)}function y0(n,e,t){const i=Ie(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function jf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach((i=>{n.La.containsKey(i)||v0(n,i)}))}function v0(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ep(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Np(n))}function bv(n,e,t){for(const i of t)i instanceof d0?(n.La.addReference(i.key,e),IC(n,i)):i instanceof f0?(he("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||v0(n,i.key)):Ee()}function IC(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(he("SyncEngine","New document in limbo: "+t),n.xa.add(i),Np(n))}function Np(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new pe(Qe.fromString(e)),i=n.qa.next();n.Na.set(i,new dC(t)),n.Oa=n.Oa.insert(t,i),o0(n.remoteStore,new Ci(fr($c(t.path)),i,"TargetPurposeLimboResolution",ap.oe))}}async function Nl(n,e,t){const i=Ie(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach(((d,p)=>{c.push(i.Ka(p,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const I=y?!y.fromCache:(_=t?.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(y){o.push(y);const I=wp.Wi(p.targetId,y);l.push(I)}})))})),await Promise.all(c),i.Ca.d_(o),await(async function(p,y){const _=Ie(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>Y.forEach(y,(S=>Y.forEach(S.$i,(D=>_.persistence.referenceDelegate.addReference(I,S.targetId,D))).next((()=>Y.forEach(S.Ui,(D=>_.persistence.referenceDelegate.removeReference(I,S.targetId,D)))))))))}catch(I){if(!Rl(I))throw I;he("LocalStore","Failed to update sequence numbers: "+I)}for(const I of y){const S=I.targetId;if(!I.fromCache){const D=_.os.get(S),B=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(B);_.os=_.os.insert(S,q)}}})(i.localStore,l))}async function SC(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const i=await n0(t.localStore,e);t.currentUser=e,(function(l,c){l.ka.forEach((d=>{d.forEach((p=>{p.reject(new ae(W.CANCELLED,c))}))})),l.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Nl(t,i.hs)}}function AC(n,e){const t=Ie(n),i=t.Na.get(e);if(i&&i.va)return Pe().add(i.key);{let o=Pe();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const d=t.Fa.get(c);o=o.unionWith(d.view.Va)}return o}}function _0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=m0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wC.bind(null,e),e.Ca.d_=lC.bind(null,e.eventManager),e.Ca.$a=uC.bind(null,e.eventManager),e}function kC(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TC.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return bP(this.persistence,new xP,e.initialUser,this.serializer)}Ga(e){return new RP(_p.Zr,this.serializer)}Wa(e){return new UP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Nv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=SC.bind(null,this.syncEngine),await sC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new aC})()}createDatastore(e){const t=Qc(e.databaseInfo.databaseId),i=(function(l){return new $P(l)})(e.databaseInfo);return(function(l,c,d,p){return new WP(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,d){return new GP(i,o,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Nv(this.syncEngine,t,0)),(function(){return kv.D()?new kv:new FP})())}createSyncEngine(e,t){return(function(o,l,c,d,p,y,_){const I=new fC(o,l,c,d,p,y);return _&&(I.Qa=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);he("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await xl(l),l.k_.shutdown(),l.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Uf.provider={build:()=>new Uf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=Iw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{he("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(he("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=kp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function nf(n,e){n.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await n0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Dv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PC(n);he("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Rv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>Rv(e.remoteStore,o))),n._onlineComponents=e}async function PC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he("FirestoreClient","Using user provided OfflineComponentProvider");try{await nf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Mo("Error using user provided cache. Falling back to memory cache: "+t),await nf(n,new Rc)}}else he("FirestoreClient","Using default OfflineComponentProvider"),await nf(n,new Rc);return n._offlineComponents}async function w0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he("FirestoreClient","Using user provided OnlineComponentProvider"),await Dv(n,n._uninitializedComponentsProvider._online)):(he("FirestoreClient","Using default OnlineComponentProvider"),await Dv(n,new Uf))),n._onlineComponents}function CC(n){return w0(n).then((e=>e.syncEngine))}async function Pc(n){const e=await w0(n),t=e.eventManager;return t.onListen=pC.bind(null,e.syncEngine),t.onUnlisten=yC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vC.bind(null,e.syncEngine),t}function xC(n,e,t={}){const i=new Br;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,y){const _=new bp({next:S=>{_.Za(),c.enqueueAndForget((()=>Pp(l,I)));const D=S.docs.has(d);!D&&S.fromCache?y.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&p&&p.source==="server"?y.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),I=new xp($c(d.path),_,{includeMetadataChanges:!0,_a:!0});return Rp(l,I)})(await Pc(n),n.asyncQueue,e,t,i))),i.promise}function NC(n,e,t={}){const i=new Br;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,y){const _=new bp({next:S=>{_.Za(),c.enqueueAndForget((()=>Pp(l,I))),S.fromCache&&p.source==="server"?y.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),I=new xp(d,_,{includeMetadataChanges:!0,_a:!0});return Rp(l,I)})(await Pc(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(n,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bC(n,e,t,i){if(e===!0&&i===!0)throw new ae(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lv(n){if(!pe.isDocumentKey(n))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vv(n){if(pe.isDocumentKey(n))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function un(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xc(n);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mv(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new QR;switch(i.type){case"firstParty":return new ZR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Ov.get(t);i&&(he("ComponentProvider","Removing Datastore"),Ov.delete(t),i.terminate())})(this),Promise.resolve()}}function DC(n,e,t,i={}){var o;const l=(n=un(n,Zc))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Bt.MOCK_USER;else{d=P_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Bt(y)}n._authCredentials=new YR(new Tw(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class $t{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class bi extends ji{constructor(e,t,i){super(e,t,$c(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new pe(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function eh(n,e,...t){if(n=ze(n),T0("collection","path",e),n instanceof Zc){const i=Qe.fromString(e,...t);return Vv(i),new bi(n,null,i)}{if(!(n instanceof $t||n instanceof bi))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Vv(i),new bi(n.firestore,null,i)}}function ys(n,e,...t){if(n=ze(n),arguments.length===1&&(e=Iw.newId()),T0("doc","path",e),n instanceof Zc){const i=Qe.fromString(e,...t);return Lv(i),new $t(n,null,new pe(i))}{if(!(n instanceof $t||n instanceof bi))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Lv(i),new $t(n.firestore,n instanceof bi?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new i0(this,"async_queue_retry"),this.Vu=()=>{const i=tf();i&&he("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=tf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=tf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new Br;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Rl(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((i=>{this.Eu=i,this.du=!1;const o=(function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d})(i);throw qr("INTERNAL UNHANDLED ERROR: ",o),i})).then((i=>(this.du=!1,i))))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Ap.createAndSchedule(this,e,t,i,(l=>this.yu(l)));return this.Tu.push(o),o}fu(){this.Eu&&Ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Uv(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Wr extends Zc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new jv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jv(e),this._firestoreClient=void 0,await e}}}function OC(n,e){const t=typeof n=="object"?n:jc(),i=typeof n=="string"?n:"(default)",o=Cs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=A_("firestore");l&&DC(o,...l)}return o}function th(n){if(n._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LC(n),n._firestoreClient}function LC(n){var e,t,i;const o=n._freezeSettings(),l=(function(d,p,y,_){return new d1(d,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,E0(_.experimentalLongPollingOptions),_.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new RC(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(d){const p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(Dt.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $o(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=/^__.*__$/;class MC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pl(e,this.data,t,this.fieldTransforms)}}class I0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function S0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class Lp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Cc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(S0(this.Cu)&&VC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class jC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Qc(e)}Qu(e,t,i,o=!1){return new Lp({Cu:e,methodName:t,qu:i,path:Nt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ih(n){const e=n._freezeSettings(),t=Qc(n._databaseId);return new jC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function A0(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);Mp("Data must be an object, but it was:",c,i);const d=k0(i,c);let p,y;if(l.merge)p=new yn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const I of l.mergeFields){const S=Ff(e,I,t);if(!c.contains(S))throw new ae(W.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);P0(_,S)||_.push(S)}p=new yn(_),y=c.fieldTransforms.filter((I=>p.covers(I.field)))}else p=null,y=c.fieldTransforms;return new MC(new an(d),p,y)}class sh extends rh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sh}}class Vp extends rh{_toFieldTransform(e){return new M1(e.path,new gl)}isEqual(e){return e instanceof Vp}}function UC(n,e,t,i){const o=n.Qu(1,e,t);Mp("Data must be an object, but it was:",o,i);const l=[],c=an.empty();bs(i,((p,y)=>{const _=jp(e,p,t);y=ze(y);const I=o.Nu(_);if(y instanceof sh)l.push(_);else{const S=bl(y,I);S!=null&&(l.push(_),c.set(_,S))}}));const d=new yn(l);return new I0(c,d,o.fieldTransforms)}function FC(n,e,t,i,o,l){const c=n.Qu(1,e,t),d=[Ff(e,i,t)],p=[o];if(l.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(Ff(e,l[S])),p.push(l[S+1]);const y=[],_=an.empty();for(let S=d.length-1;S>=0;--S)if(!P0(y,d[S])){const D=d[S];let B=p[S];B=ze(B);const q=c.Nu(D);if(B instanceof sh)y.push(D);else{const L=bl(B,q);L!=null&&(y.push(D),_.set(D,L))}}const I=new yn(y);return new I0(_,I,c.fieldTransforms)}function BC(n,e,t,i=!1){return bl(t,n.Qu(i?4:3,e))}function bl(n,e){if(R0(n=ze(n)))return Mp("Unsupported field value:",e,n),k0(n,e);if(n instanceof rh)return(function(i,o){if(!S0(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const d of i){let p=bl(d,o.Lu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=ze(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return O1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:Ac(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ac(o.serializer,l)}}if(i instanceof Dp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof $o)return{bytesValue:Qw(o.serializer,i._byteString)};if(i instanceof $t){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:yp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Op)return(function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map((p=>{if(typeof p!="number")throw d.Bu("VectorValues must only contain numeric values.");return fp(d.serializer,p)}))}}}}}})(i,o);throw o.Bu(`Unsupported field value: ${Xc(i)}`)})(n,e)}function k0(n,e){const t={};return Sw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(n,((i,o)=>{const l=bl(o,e.Mu(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function R0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Dp||n instanceof $o||n instanceof $t||n instanceof rh||n instanceof Op)}function Mp(n,e,t){if(!R0(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const i=Xc(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Ff(n,e,t){if((e=ze(e))instanceof nh)return e._internalPath;if(typeof e=="string")return jp(n,e);throw Cc("Field path arguments must be of type string or ",n,!1,void 0,t)}const zC=new RegExp("[~\\*/\\[\\]]");function jp(n,e,t){if(e.search(zC)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nh(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ae(W.INVALID_ARGUMENT,d+n+p)}function P0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $C(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $C extends C0{data(){return super.data()}}function oh(n,e){return typeof e=="string"?jp(n,e):e instanceof nh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Up{}class N0 extends Up{}function Fp(n,e,...t){let i=[];e instanceof Up&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Bp)).length,d=l.filter((p=>p instanceof ah)).length;if(c>1||c>0&&d>0)throw new ae(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class ah extends N0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new ah(e,t,i)}_apply(e){const t=this._parse(e);return O0(e._query,t),new ji(e.firestore,e.converter,xf(e._query,t))}_parse(e){const t=ih(e.firestore);return(function(l,c,d,p,y,_,I){let S;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ae(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Bv(I,_);const D=[];for(const B of I)D.push(Fv(p,l,B));S={arrayValue:{values:D}}}else S=Fv(p,l,I)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Bv(I,_),S=BC(d,c,I,_==="in"||_==="not-in");return ft.create(y,_,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function b0(n,e,t){const i=e,o=oh("where",n);return ah._create(o,i,t)}class Bp extends Up{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)O0(c,p),c=xf(c,p)})(e._query,t),new ji(e.firestore,e.converter,xf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zp extends N0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new ae(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ml(l,c)})(e._query,this._field,this._direction);return new ji(e.firestore,e.converter,(function(o,l){const c=o.explicitOrderBy.concat([l]);return new Qo(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function D0(n,e="asc"){const t=e,i=oh("orderBy",n);return zp._create(i,t)}function Fv(n,e,t){if(typeof(t=ze(t))=="string"){if(t==="")throw new ae(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dw(e)&&t.indexOf("/")!==-1)throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!pe.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return av(n,new pe(i))}if(t instanceof $t)return av(n,t._key);throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(t)}.`)}function Bv(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function O0(n,e){const t=(function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class qC{convertValue(e,t="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return bs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>lt(c.doubleValue)));return new Op(l)}convertGeoPoint(e){return new Dp(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=up(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);Fe(t0(i));const o=new fl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V0 extends C0{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(oh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class hc extends V0{data(e={}){return super.data(e)}}class M0{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new el(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new hc(this._firestore,this._userDataWriter,i.key,i,new el(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((d=>{const p=new hc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new el(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new hc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new el(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:HC(d.type),doc:p,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function HC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){n=un(n,$t);const e=un(n.firestore,Wr);return xC(th(e),n._key).then((t=>F0(e,n,t)))}class $p extends qC{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,t)}}function WC(n){n=un(n,ji);const e=un(n.firestore,Wr),t=th(e),i=new $p(e);return x0(n._query),NC(t,n._query).then((o=>new M0(e,i,n,o)))}function zv(n,e,t){n=un(n,$t);const i=un(n.firestore,Wr),o=L0(n.converter,e,t);return lh(i,[A0(ih(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Cn.none())])}function KC(n,e,t,...i){n=un(n,$t);const o=un(n.firestore,Wr),l=ih(o);let c;return c=typeof(e=ze(e))=="string"||e instanceof nh?FC(l,"updateDoc",n._key,e,t,i):UC(l,"updateDoc",n._key,e),lh(o,[c.toMutation(n._key,Cn.exists(!0))])}function GC(n){return lh(un(n.firestore,Wr),[new pp(n._key,Cn.none())])}function QC(n,e){const t=un(n.firestore,Wr),i=ys(n),o=L0(n.converter,e);return lh(t,[A0(ih(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Cn.exists(!1))]).then((()=>i))}function U0(n,...e){var t,i,o;n=ze(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Uv(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Uv(e[c])){const I=e[c];e[c]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[c+1]=(i=I.error)===null||i===void 0?void 0:i.bind(I),e[c+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let p,y,_;if(n instanceof $t)y=un(n.firestore,Wr),_=$c(n._key.path),p={next:I=>{e[c]&&e[c](F0(y,n,I))},error:e[c+1],complete:e[c+2]};else{const I=un(n,ji);y=un(I.firestore,Wr),_=I._query;const S=new $p(y);p={next:D=>{e[c]&&e[c](new M0(y,S,I,D))},error:e[c+1],complete:e[c+2]},x0(n._query)}return(function(S,D,B,q){const L=new bp(q),Z=new xp(D,L,B);return S.asyncQueue.enqueueAndForget((async()=>Rp(await Pc(S),Z))),()=>{L.Za(),S.asyncQueue.enqueueAndForget((async()=>Pp(await Pc(S),Z)))}})(th(y),_,d,p)}function lh(n,e){return(function(i,o){const l=new Br;return i.asyncQueue.enqueueAndForget((async()=>_C(await CC(i),o,l))),l.promise})(th(n),e)}function F0(n,e,t){const i=t.docs.get(e._key),o=new $p(n);return new V0(n,o,e._key,i,new el(t.hasPendingWrites,t.fromCache),e.converter)}function YC(){return new Vp("serverTimestamp")}(function(e,t=!0){(function(o){Go=o})(xs),Kn(new xn("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Wr(new JR(i.getProvider("auth-internal")),new t1(i.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fl(y.options.projectId,_)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),ln(nv,"4.7.3",e),ln(nv,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="firebasestorage.googleapis.com",z0="storageBucket",JC=120*1e3,XC=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Yn{constructor(e,t,i=0){super(rf(e),`Firebase Storage: ${t} (${rf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function rf(n){return"storage/"+n}function qp(){const n="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,n)}function ZC(n){return new it(rt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ex(n){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tx(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,n)}function nx(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rx(n){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ix(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sx(){return new it(rt.CANCELED,"User canceled the upload/download.")}function ox(n){return new it(rt.INVALID_URL,"Invalid URL '"+n+"'.")}function ax(n){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function lx(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+z0+"' property when initializing the app?")}function ux(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cx(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hx(n){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bf(n){return new it(rt.INVALID_ARGUMENT,n)}function $0(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function dx(n){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ol(n,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ga(n){throw new it(rt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=vn.makeFromUrl(e,t)}catch{return new vn(e,"")}if(i.path==="")return i;throw ax(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const _="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",D=new RegExp(`^https?://${I}/${_}/b/${o}/o${S}`,"i"),B={bucket:1,path:3},q=t===B0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",Z=new RegExp(`^https?://${q}/${o}/${L}`,"i"),ne=[{regex:d,indices:p,postModify:l},{regex:D,indices:B,postModify:y},{regex:Z,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<ne.length;re++){const Se=ne[re],ve=Se.regex.exec(e);if(ve){const N=ve[Se.indices.bucket];let A=ve[Se.indices.path];A||(A=""),i=new vn(N,A),Se.postModify(i);break}}if(i==null)throw ox(e);return i}}class fx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function _(...L){y||(y=!0,e.apply(null,L))}function I(L){o=setTimeout(()=>{o=null,n(D,p())},L)}function S(){l&&clearTimeout(l)}function D(L,...Z){if(y){S();return}if(L){S(),_.call(null,L,...Z);return}if(p()||c){S(),_.call(null,L,...Z);return}i<64&&(i*=2);let ne;d===1?(d=2,ne=0):ne=(i+Math.random())*1e3,I(ne)}let B=!1;function q(L){B||(B=!0,S(),!y&&(o!==null?(L||(d=2),clearTimeout(o),I(0)):L||(d=1)))}return I(0),l=setTimeout(()=>{c=!0,q(!0)},t),q}function mx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(n){return n!==void 0}function yx(n){return typeof n=="object"&&!Array.isArray(n)}function Hp(n){return typeof n=="string"||n instanceof String}function $v(n){return Wp()&&n instanceof Blob}function Wp(){return typeof Blob<"u"}function qv(n,e,t,i){if(i<e)throw Bf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Bf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function q0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var vs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(vs||(vs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,t,i,o,l,c,d,p,y,_,I,S=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=_,this.connectionFactory_=I,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,B)=>{this.resolve_=D,this.reject_=B,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new ec(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===vs.NO_ERROR,p=l.getStatus();if(!d||vx(p,this.additionalRetryCodes_)&&this.retry){const _=l.getErrorCode()===vs.ABORT;i(!1,new ec(!1,null,_));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new ec(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());gx(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=qp();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?$0():sx();c(p)}else{const p=ix();c(p)}};this.canceled_?t(!1,new ec(!1,null,!0)):this.backoffId_=px(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ec{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function wx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Ex(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Ix(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Sx(n,e,t,i,o,l,c=!0){const d=q0(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return Tx(y,e),wx(y,t),Ex(y,l),Ix(y,i),new _x(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function kx(...n){const e=Ax();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Wp())return new Blob(n);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Rx(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(n){if(typeof atob>"u")throw hx("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sf{constructor(e,t){this.data=e,this.contentType=t||null}}function Cx(n,e){switch(n){case cr.RAW:return new sf(H0(e));case cr.BASE64:case cr.BASE64URL:return new sf(W0(n,e));case cr.DATA_URL:return new sf(Nx(e),bx(e))}throw qp()}function H0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function xx(n){let e;try{e=decodeURIComponent(n)}catch{throw ol(cr.DATA_URL,"Malformed data URL.")}return H0(e)}function W0(n,e){switch(n){case cr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw ol(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case cr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw ol(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Px(e)}catch(o){throw o.message.includes("polyfill")?o:ol(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class K0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ol(cr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Dx(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Nx(n){const e=new K0(n);return e.base64?W0(cr.BASE64,e.rest):xx(e.rest)}function bx(n){return new K0(n).contentType}function Dx(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){let i=0,o="";$v(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if($v(this.data_)){const i=this.data_,o=Rx(i,e,t);return o===null?null:new Ri(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ri(i,!0)}}static getBlob(...e){if(Wp()){const t=e.map(i=>i instanceof Ri?i.data_:i);return new Ri(kx.apply(null,t))}else{const t=e.map(c=>Hp(c)?Cx(cr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Ri(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n){let e;try{e=JSON.parse(n)}catch{return null}return yx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Lx(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Q0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(n,e){return e}class Yt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||Vx}}let tc=null;function Mx(n){return!Hp(n)||n.length<2?n:Q0(n)}function Y0(){if(tc)return tc;const n=[];n.push(new Yt("bucket")),n.push(new Yt("generation")),n.push(new Yt("metageneration")),n.push(new Yt("name","fullPath",!0));function e(l,c){return Mx(c)}const t=new Yt("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new Yt("size");return o.xform=i,n.push(o),n.push(new Yt("timeCreated")),n.push(new Yt("updated")),n.push(new Yt("md5Hash",null,!0)),n.push(new Yt("cacheControl",null,!0)),n.push(new Yt("contentDisposition",null,!0)),n.push(new Yt("contentEncoding",null,!0)),n.push(new Yt("contentLanguage",null,!0)),n.push(new Yt("contentType",null,!0)),n.push(new Yt("metadata","customMetadata",!0)),tc=n,tc}function jx(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new vn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function Ux(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return jx(i,n),i}function J0(n,e,t){const i=G0(e);return i===null?null:Ux(n,i,t)}function Fx(n,e,t,i){const o=G0(e);if(o===null||!Hp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const _=n.bucket,I=n.fullPath,S="/b/"+c(_)+"/o/"+c(I),D=uh(S,t,i),B=q0({alt:"media",token:y});return D+B})[0]}function Bx(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class Kp{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){if(!n)throw qp()}function zx(n,e){function t(i,o){const l=J0(n,o,e);return X0(l!==null),l}return t}function $x(n,e){function t(i,o){const l=J0(n,o,e);return X0(l!==null),Fx(l,o,n.host,n._protocol)}return t}function Z0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=nx():o=tx():t.getStatus()===402?o=ex(n.bucket):t.getStatus()===403?o=rx(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function eE(n){const e=Z0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=ZC(n.path)),l.serverResponse=o.serverResponse,l}return t}function qx(n,e,t){const i=e.fullServerUrl(),o=uh(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new Kp(o,l,$x(n,t),c);return d.errorHandler=eE(e),d}function Hx(n,e){const t=e.fullServerUrl(),i=uh(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function c(p,y){}const d=new Kp(i,o,c,l);return d.successCodes=[200,204],d.errorHandler=eE(e),d}function Wx(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Kx(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=Wx(null,e)),i}function Gx(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let ne="";for(let re=0;re<2;re++)ne=ne+Math.random().toString().slice(2);return ne}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=Kx(e,i,o),_=Bx(y,t),I="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",D=Ri.getBlob(I,i,S);if(D===null)throw ux();const B={name:y.fullPath},q=uh(l,n.host,n._protocol),L="POST",Z=n.maxUploadRetryTime,X=new Kp(q,L,zx(n,t),Z);return X.urlParams=B,X.headers=c,X.body=D.uploadData(),X.errorHandler=Z0(e),X}class Qx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ga("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ga("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ga("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ga("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ga("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Yx extends Qx{initXhr(){this.xhr_.responseType="text"}}function Gp(){return new Yx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this._service=e,t instanceof vn?this._location=t:this._location=vn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ss(e,t)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Q0(this._location.path)}get storage(){return this._service}get parent(){const e=Ox(this._location.path);if(e===null)return null;const t=new vn(this._location.bucket,e);return new Ss(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw dx(e)}}function Jx(n,e,t){n._throwIfRoot("uploadBytes");const i=Gx(n.storage,n._location,Y0(),new Ri(e,!0),t);return n.storage.makeRequestWithTokens(i,Gp).then(o=>({metadata:o,ref:n}))}function Xx(n){n._throwIfRoot("getDownloadURL");const e=qx(n.storage,n._location,Y0());return n.storage.makeRequestWithTokens(e,Gp).then(t=>{if(t===null)throw cx();return t})}function Zx(n){n._throwIfRoot("deleteObject");const e=Hx(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Gp)}function eN(n,e){const t=Lx(n._location.path,e),i=new vn(n._location.bucket,t);return new Ss(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n){return/^[A-Za-z]+:\/\//.test(n)}function nN(n,e){return new Ss(n,e)}function tE(n,e){if(n instanceof Qp){const t=n;if(t._bucket==null)throw lx();const i=new Ss(t,t._bucket);return e!=null?tE(i,e):i}else return e!==void 0?eN(n,e):n}function rN(n,e){if(e&&tN(e)){if(n instanceof Qp)return nN(n,e);throw Bf("To use ref(service, url), the first argument must be a Storage instance.")}else return tE(n,e)}function Hv(n,e){const t=e?.[z0];return t==null?null:vn.makeFromBucketSpec(t,n)}function iN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:P_(o,n.app.options.projectId))}class Qp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=B0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JC,this._maxUploadRetryTime=XC,this._requests=new Set,o!=null?this._bucket=vn.makeFromBucketSpec(o,this._host):this._bucket=Hv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=Hv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ss(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new fx($0());{const c=Sx(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Wv="@firebase/storage",Kv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="storage";function sN(n,e,t){return n=ze(n),Jx(n,e,t)}function oN(n){return n=ze(n),Xx(n)}function rE(n){return n=ze(n),Zx(n)}function zf(n,e){return n=ze(n),rN(n,e)}function aN(n=jc(),e){n=ze(n);const i=Cs(n,nE).getImmediate({identifier:e}),o=A_("storage");return o&&lN(i,...o),i}function lN(n,e,t,i={}){iN(n,e,t,i)}function uN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Qp(t,i,o,e,xs)}function cN(){Kn(new xn(nE,uN,"PUBLIC").setMultipleInstances(!0)),ln(Wv,Kv,""),ln(Wv,Kv,"esm2017")}cN();const iE="@firebase/installations",Yp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=1e4,oE=`w:${Yp}`,aE="FIS_v2",hN="https://firebaseinstallations.googleapis.com/v1",dN=3600*1e3,fN="installations",pN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new Ps(fN,pN,mN);function lE(n){return n instanceof Yn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE({projectId:n}){return`${hN}/projects/${n}/installations`}function cE(n){return{token:n.token,requestStatus:2,expiresIn:yN(n.expiresIn),creationTime:Date.now()}}async function hE(n,e){const i=(await e.json()).error;return As.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function dE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function gN(n,{refreshToken:e}){const t=dE(n);return t.append("Authorization",vN(e)),t}async function fE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function yN(n){return Number(n.replace("s","000"))}function vN(n){return`${aE} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=uE(n),o=dE(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:aE,appId:n.appId,sdkVersion:oE},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await fE(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:cE(y.authToken)}}else throw await hE("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=/^[cdef][\w-]{21}$/,$f="";function TN(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=IN(n);return EN.test(t)?t:$f}catch{return $f}}function IN(n){return wN(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new Map;function gE(n,e){const t=ch(n);yE(t,e),SN(t,e)}function yE(n,e){const t=mE.get(n);if(t)for(const i of t)i(e)}function SN(n,e){const t=AN();t&&t.postMessage({key:n,fid:e}),kN()}let ms=null;function AN(){return!ms&&"BroadcastChannel"in self&&(ms=new BroadcastChannel("[Firebase] FID Change"),ms.onmessage=n=>{yE(n.data.key,n.data.fid)}),ms}function kN(){mE.size===0&&ms&&(ms.close(),ms=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="firebase-installations-database",PN=1,ks="firebase-installations-store";let of=null;function Jp(){return of||(of=Mc(RN,PN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ks)}}})),of}async function xc(n,e){const t=ch(n),o=(await Jp()).transaction(ks,"readwrite"),l=o.objectStore(ks),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&gE(n,e.fid),e}async function vE(n){const e=ch(n),i=(await Jp()).transaction(ks,"readwrite");await i.objectStore(ks).delete(e),await i.done}async function hh(n,e){const t=ch(n),o=(await Jp()).transaction(ks,"readwrite"),l=o.objectStore(ks),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&gE(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(n){let e;const t=await hh(n.appConfig,i=>{const o=CN(i),l=xN(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===$f?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function CN(n){const e=n||{fid:TN(),registrationStatus:0};return _E(e)}function xN(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=NN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bN(n)}:{installationEntry:e}}async function NN(n,e){try{const t=await _N(n,e);return xc(n.appConfig,t)}catch(t){throw lE(t)&&t.customData.serverCode===409?await vE(n.appConfig):await xc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bN(n){let e=await Gv(n.appConfig);for(;e.registrationStatus===1;)await pE(100),e=await Gv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Xp(n);return i||t}return e}function Gv(n){return hh(n,e=>{if(!e)throw As.create("installation-not-found");return _E(e)})}function _E(n){return DN(n)?{fid:n.fid,registrationStatus:0}:n}function DN(n){return n.registrationStatus===1&&n.registrationTime+sE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON({appConfig:n,heartbeatServiceProvider:e},t){const i=LN(n,t),o=gN(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:oE,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await fE(()=>fetch(i,d));if(p.ok){const y=await p.json();return cE(y)}else throw await hE("Generate Auth Token",p)}function LN(n,{fid:e}){return`${uE(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(n,e=!1){let t;const i=await hh(n.appConfig,l=>{if(!wE(l))throw As.create("not-registered");const c=l.authToken;if(!e&&jN(c))return l;if(c.requestStatus===1)return t=VN(n,e),l;{if(!navigator.onLine)throw As.create("app-offline");const d=FN(l);return t=MN(n,d),d}});return t?await t:i.authToken}async function VN(n,e){let t=await Qv(n.appConfig);for(;t.authToken.requestStatus===1;)await pE(100),t=await Qv(n.appConfig);const i=t.authToken;return i.requestStatus===0?Zp(n,e):i}function Qv(n){return hh(n,e=>{if(!wE(e))throw As.create("not-registered");const t=e.authToken;return BN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function MN(n,e){try{const t=await ON(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await xc(n.appConfig,i),t}catch(t){if(lE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await vE(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xc(n.appConfig,i)}throw t}}function wE(n){return n!==void 0&&n.registrationStatus===2}function jN(n){return n.requestStatus===2&&!UN(n)}function UN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dN}function FN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function BN(n){return n.requestStatus===1&&n.requestTime+sE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(n){const e=n,{installationEntry:t,registrationPromise:i}=await Xp(e);return i?i.catch(console.error):Zp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(n,e=!1){const t=n;return await qN(t),(await Zp(t,e)).token}async function qN(n){const{registrationPromise:e}=await Xp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(n){if(!n||!n.options)throw af("App Configuration");if(!n.name)throw af("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw af(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function af(n){return As.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="installations",WN="installations-internal",KN=n=>{const e=n.getProvider("app").getImmediate(),t=HN(e),i=Cs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},GN=n=>{const e=n.getProvider("app").getImmediate(),t=Cs(e,EE).getImmediate();return{getId:()=>zN(t),getToken:o=>$N(t,o)}};function QN(){Kn(new xn(EE,KN,"PUBLIC")),Kn(new xn(WN,GN,"PRIVATE"))}QN();ln(iE,Yp);ln(iE,Yp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="/firebase-messaging-sw.js",JN="/firebase-cloud-messaging-push-scope",TE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",XN="https://fcmregistrations.googleapis.com/v1",IE="google.c.a.c_id",ZN="google.c.a.c_l",eb="google.c.a.ts",tb="google.c.a.e";var Yv;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Yv||(Yv={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var _l;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(_l||(_l={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function nb(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="fcm_token_details_db",rb=5,Jv="fcm_token_object_Store";async function ib(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(lf))return null;let e=null;return(await Mc(lf,rb,{upgrade:async(i,o,l,c)=>{var d;if(o<2||!i.objectStoreNames.contains(Jv))return;const p=c.objectStore(Jv),y=await p.index("fcmSenderId").get(n);if(await p.clear(),!!y){if(o===2){const _=y;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(d=_.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:Lr(_.vapidKey)}}}else if(o===3){const _=y;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Lr(_.auth),p256dh:Lr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Lr(_.vapidKey)}}}else if(o===4){const _=y;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Lr(_.auth),p256dh:Lr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Lr(_.vapidKey)}}}}}})).close(),await Gd(lf),await Gd("fcm_vapid_details_db"),await Gd("undefined"),sb(e)?e:null}function sb(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firebase-messaging-database",ab=1,wl="firebase-messaging-store";let uf=null;function SE(){return uf||(uf=Mc(ob,ab,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(wl)}}})),uf}async function lb(n){const e=AE(n),i=await(await SE()).transaction(wl).objectStore(wl).get(e);if(i)return i;{const o=await ib(n.appConfig.senderId);if(o)return await em(n,o),o}}async function em(n,e){const t=AE(n),o=(await SE()).transaction(wl,"readwrite");return await o.objectStore(wl).put(e,t),await o.done,e}function AE({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},qt=new Ps("messaging","Messaging",ub);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(n,e){const t=await nm(n),i=kE(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(tm(n.appConfig),o)).json()}catch(c){throw qt.create("token-subscribe-failed",{errorInfo:c?.toString()})}if(l.error){const c=l.error.message;throw qt.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw qt.create("token-subscribe-no-token");return l.token}async function hb(n,e){const t=await nm(n),i=kE(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${tm(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw qt.create("token-update-failed",{errorInfo:c?.toString()})}if(l.error){const c=l.error.message;throw qt.create("token-update-failed",{errorInfo:c})}if(!l.token)throw qt.create("token-update-no-token");return l.token}async function db(n,e){const i={method:"DELETE",headers:await nm(n)};try{const l=await(await fetch(`${tm(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw qt.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw qt.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function tm({projectId:n}){return`${XN}/projects/${n}/registrations`}async function nm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function kE({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==TE&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=10080*60*1e3;async function pb(n){const e=await gb(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Lr(e.getKey("auth")),p256dh:Lr(e.getKey("p256dh"))},i=await lb(n.firebaseDependencies);if(i){if(yb(i.subscriptionOptions,t))return Date.now()>=i.createTime+fb?mb(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await db(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return Xv(n.firebaseDependencies,t)}else return Xv(n.firebaseDependencies,t)}async function mb(n,e){try{const t=await hb(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await em(n.firebaseDependencies,i),t}catch(t){throw t}}async function Xv(n,e){const i={token:await cb(n,e),createTime:Date.now(),subscriptionOptions:e};return await em(n,i),i.token}async function gb(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:nb(e)})}function yb(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return vb(e,n),_b(e,n),wb(e,n),e}function vb(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function _b(n,e){e.data&&(n.data=e.data)}function wb(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const d=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;d&&(n.fcmOptions.link=d);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n){return typeof n=="object"&&!!n&&IE in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){if(!n||!n.options)throw cf("App Configuration Object");if(!n.name)throw cf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw cf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function cf(n){return qt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Tb(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(n){try{n.swRegistration=await navigator.serviceWorker.register(YN,{scope:JN}),n.swRegistration.update().catch(()=>{})}catch(e){throw qt.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(n,e){if(!e&&!n.swRegistration&&await Sb(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw qt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=TE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(n,e){if(!navigator)throw qt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw qt.create("permission-blocked");return await kb(n,e?.vapidKey),await Ab(n,e?.serviceWorkerRegistration),pb(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(n,e,t){const i=Pb(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[IE],message_name:t[ZN],message_time:t[eb],message_device_time:Math.floor(Date.now()/1e3)})}function Pb(n){switch(n){case _l.NOTIFICATION_CLICKED:return"notification_open";case _l.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===_l.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Zv(t)):n.onMessageHandler.next(Zv(t)));const i=t.data;Eb(i)&&i[tb]==="1"&&await Rb(n,t.messageType,i)}const e_="@firebase/messaging",t_="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=n=>{const e=new Ib(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Cb(e,t)),e},Nb=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>RE(e,i)}};function bb(){Kn(new xn("messaging",xb,"PUBLIC")),Kn(new xn("messaging-internal",Nb,"PRIVATE")),ln(e_,t_),ln(e_,t_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(){try{await x_()}catch{return!1}return typeof window<"u"&&C_()&&vS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(n,e){if(!navigator)throw qt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(n=jc()){return Db().then(e=>{if(!e)throw qt.create("unsupported-browser")},e=>{throw qt.create("indexed-db-unsupported")}),Cs(ze(n),"messaging").getImmediate()}async function Vb(n,e){return n=ze(n),RE(n,e)}function Mb(n,e){return n=ze(n),Ob(n,e)}bb();const jb={apiKey:"AIzaSyACD-C7poJu6I5Cvvb6MyUQ3uM4x6rg-FI",authDomain:"ayyappa-padi-pooja.firebaseapp.com",projectId:"ayyappa-padi-pooja",storageBucket:"ayyappa-padi-pooja.appspot.com",messagingSenderId:"779308511885",appId:"1:779308511885:web:b50fb74c415fb40346a8c4"},dh=D_(jb),nc=KR(dh),mr=OC(dh),qf=aN(dh),PE=Lb(dh),Ub=async()=>{try{return await Notification.requestPermission()==="granted"?await Vb(PE,{vapidKey:"BEYz-iz6T3F5SsRuzAG9oRY_fLyi3EUh7zQ3ORCY3e_8AhnKZcE9FpZcG1YD2nk7jJ7yGAFTv15Y0lRd5Pht9UY"}):null}catch(n){return console.error("Error getting notification permission:",n),null}},Fb=()=>new Promise(n=>{Mb(PE,e=>{n(e)})}),CE=H.createContext();function Bb({children:n}){const[e,t]=H.useState(null),[i,o]=H.useState(!0);H.useEffect(()=>{const y=Lk(nc,_=>{t(_),o(!1)});return()=>y()},[]);const p={user:e,loading:i,signup:async(y,_,I)=>{const S=await Ck(nc,_,I);await bk(S.user,{displayName:y}),t(S.user)},login:(y,_)=>xk(nc,y,_),logout:()=>Vk(nc)};return E.jsx(CE.Provider,{value:p,children:n})}const Yr=()=>H.useContext(CE),xE=H.createContext();function zb({children:n}){const{user:e}=Yr(),[t,i]=H.useState(null),[o,l]=H.useState("default"),[c,d]=H.useState(!1);H.useEffect(()=>{"Notification"in window&&l(Notification.permission)},[]);const p=async()=>{try{const S=await Ub();return S?(i(S),l("granted"),await y(S),d(!0),S):null}catch(S){return console.error("Error requesting notification permission:",S),null}},y=async S=>{if(e)try{const D=ys(mr,"users",e.uid);await zv(D,{notificationToken:S,email:e.email,displayName:e.displayName,lastUpdated:new Date,isSubscribed:!0},{merge:!0})}catch(D){console.error("Error saving notification token:",D)}},_=async()=>{if(e)try{const S=ys(mr,"users",e.uid);await zv(S,{notificationToken:null,isSubscribed:!1,lastUpdated:new Date},{merge:!0}),i(null),d(!1)}catch(S){console.error("Error unsubscribing from notifications:",S)}};H.useEffect(()=>{(async()=>{if(e)try{const D=ys(mr,"users",e.uid),B=await j0(D);if(B.exists()){const q=B.data();d(q.isSubscribed||!1),i(q.notificationToken||null)}}catch(D){console.error("Error checking subscription status:",D)}})()},[e]),H.useEffect(()=>{const S=Fb().then(D=>{if(console.log("Received foreground message:",D),D?.notification){const{title:B,body:q}=D.notification,L=document.createElement("div");L.className="fixed top-4 right-4 bg-white border border-green-200 rounded-lg shadow-lg p-4 z-50 max-w-sm",L.innerHTML=`
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0">
                <img src="/icon-192.png" alt="Ayyappa" class="w-8 h-8 rounded-full">
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900">${B}</h4>
                <p class="text-sm text-gray-600">${q}</p>
                <div class="mt-2 flex gap-2">
                  <button onclick="window.location.href='/poojas'" class="text-xs bg-ayyappa-orange text-white px-2 py-1 rounded">View</button>
                  <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">Close</button>
                </div>
              </div>
            </div>
          `,document.body.appendChild(L),setTimeout(()=>{L.parentElement&&L.remove()},5e3)}}).catch(D=>console.error("Error receiving foreground message:",D));return()=>S},[]);const I={notificationToken:t,permission:o,isSubscribed:c,requestPermission:p,unsubscribeFromNotifications:_};return E.jsx(xE.Provider,{value:I,children:n})}const NE=()=>H.useContext(xE);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bE=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=H.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...d},p)=>H.createElement("svg",{ref:p,...qb,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:bE("lucide",o),...d},[...c.map(([y,_])=>H.createElement(y,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(n,e)=>{const t=H.forwardRef(({className:i,...o},l)=>H.createElement(Hb,{ref:l,iconNode:e,className:bE(`lucide-${$b(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=ut("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=ut("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=ut("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=ut("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=ut("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=ut("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ut("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=ut("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=ut("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=ut("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=ut("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=ut("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=ut("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=ut("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=ut("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=ut("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=ut("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=ut("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=ut("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=ut("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function t2(){const{user:n,logout:e}=Yr(),{isSubscribed:t,permission:i}=NE(),o=Rs(),[l,c]=H.useState(!1),d=async()=>{await e(),o("/"),c(!1)},p=({isActive:_})=>`px-3 py-2 rounded-xl ${_?"bg-ayyappa-yellow text-black":"hover:bg-yellow-100"}`,y=({isActive:_})=>`block w-full px-4 py-3 text-left ${_?"bg-ayyappa-yellow text-black":"hover:bg-yellow-100"}`;return E.jsx("header",{className:"sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-yellow-200",children:E.jsxs("div",{className:"container mx-auto px-4 py-3",children:[E.jsxs("div",{className:"hidden md:flex items-center justify-between",children:[E.jsxs(on,{to:"/",className:"flex items-center gap-2",children:[E.jsx("img",{src:"https://4.bp.blogspot.com/-p24h1ji1l2U/WeTPZW9DjJI/AAAAAAAACJU/T5R70DpofkokjB3ovuqtwzHico-CHvPdwCLcBGAs/s1600/muru-2.jpg",alt:"Ayyappa",className:"h-10 w-10 rounded-full object-cover border-2 border-ayyappa-gold"}),E.jsxs("div",{children:[E.jsx("div",{className:"font-dev text-ayyappa-blue text-xl leading-4",children:"स्वामीये शरणम्"}),E.jsx("div",{className:"font-bold text-ayyappa-orange -mt-1",children:"Ayyappa Padi Pooja"})]})]}),E.jsxs("nav",{className:"flex items-center gap-2",children:[E.jsx(lr,{to:"/",className:p,children:"Home"}),E.jsx(lr,{to:"/about",className:p,children:"About"}),E.jsx(lr,{to:"/poojas",className:p,children:"Poojas"}),n&&E.jsx(lr,{to:"/add",className:p,children:E.jsxs("span",{className:"inline-flex items-center gap-1",children:[E.jsx(n_,{size:18})," Add"]})}),n&&E.jsx(lr,{to:"/my",className:p,children:E.jsxs("span",{className:"inline-flex items-center gap-1",children:[E.jsx(i_,{size:18})," My Poojas"]})})]}),E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsxs(on,{to:"/notifications",className:"relative p-2 rounded-xl hover:bg-yellow-100 transition-colors",title:t?"Notifications enabled":"Notification settings",children:[t?E.jsx(bc,{className:"text-green-600",size:20}):E.jsx(Nc,{className:"text-gray-400",size:20}),t&&E.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"})]}),n?E.jsxs(E.Fragment,{children:[E.jsxs("span",{className:"text-sm inline-flex items-center gap-1",children:[E.jsx(r_,{size:18})," ",E.jsx("b",{children:n.displayName||n.email})]}),E.jsxs("button",{onClick:d,className:"btn-primary inline-flex items-center gap-1",children:[E.jsx(s_,{size:16})," Logout"]})]}):E.jsxs(E.Fragment,{children:[E.jsx(on,{to:"/login",className:"btn-primary",children:"Login"}),E.jsx(on,{to:"/signup",className:"btn-gold",children:"Sign Up"})]})]})]}),E.jsxs("div",{className:"md:hidden",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs(on,{to:"/",className:"flex items-center gap-2",onClick:()=>c(!1),children:[E.jsx("img",{src:"https://4.bp.blogspot.com/-p24h1ji1l2U/WeTPZW9DjJI/AAAAAAAACJU/T5R70DpofkokjB3ovuqtwzHico-CHvPdwCLcBGAs/s1600/muru-2.jpg",alt:"Ayyappa",className:"h-8 w-8 rounded-full object-cover border-2 border-ayyappa-gold"}),E.jsxs("div",{children:[E.jsx("div",{className:"font-dev text-ayyappa-blue text-sm leading-3",children:"स्वामीये शरणम्"}),E.jsx("div",{className:"font-bold text-ayyappa-orange text-xs -mt-0.5",children:"Ayyappa Padi Pooja"})]})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsxs(on,{to:"/notifications",className:"relative p-2 rounded-xl hover:bg-yellow-100 transition-colors",title:t?"Notifications enabled":"Notification settings",onClick:()=>c(!1),children:[t?E.jsx(bc,{className:"text-green-600",size:18}):E.jsx(Nc,{className:"text-gray-400",size:18}),t&&E.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"})]}),E.jsx("button",{onClick:()=>c(!l),className:"p-2 rounded-xl hover:bg-yellow-100 transition-colors",children:l?E.jsx(e2,{size:20}):E.jsx(Qb,{size:20})})]})]}),l&&E.jsxs("div",{className:"mt-3 bg-white/95 backdrop-blur rounded-xl border border-yellow-200 shadow-lg",children:[E.jsxs("nav",{className:"py-2",children:[E.jsx(lr,{to:"/",className:y,onClick:()=>c(!1),children:"Home"}),E.jsx(lr,{to:"/about",className:y,onClick:()=>c(!1),children:"About"}),E.jsx(lr,{to:"/poojas",className:y,onClick:()=>c(!1),children:"Poojas"}),n&&E.jsx(lr,{to:"/add",className:y,onClick:()=>c(!1),children:E.jsxs("span",{className:"inline-flex items-center gap-2",children:[E.jsx(n_,{size:18})," Add Pooja"]})}),n&&E.jsx(lr,{to:"/my",className:y,onClick:()=>c(!1),children:E.jsxs("span",{className:"inline-flex items-center gap-2",children:[E.jsx(i_,{size:18})," My Poojas"]})})]}),E.jsx("div",{className:"border-t border-yellow-200 py-2",children:n?E.jsxs("div",{className:"px-4 py-2",children:[E.jsxs("div",{className:"text-sm text-gray-600 mb-3 flex items-center gap-2",children:[E.jsx(r_,{size:16}),E.jsx("span",{children:E.jsx("b",{children:n.displayName||n.email})})]}),E.jsxs("button",{onClick:d,className:"w-full btn-primary inline-flex items-center justify-center gap-2",children:[E.jsx(s_,{size:16})," Logout"]})]}):E.jsxs("div",{className:"px-4 py-2 space-y-2",children:[E.jsx(on,{to:"/login",className:"block w-full btn-primary text-center",onClick:()=>c(!1),children:"Login"}),E.jsx(on,{to:"/signup",className:"block w-full btn-gold text-center",onClick:()=>c(!1),children:"Sign Up"})]})})]})]})]})})}function n2(){const n=[{title:"Devotion (Bhakti)",icon:E.jsx(Gb,{className:"w-10 h-10 text-pink-600 mx-auto"}),content:"Swamiye Saranam Ayyappa 🙏 Devotion is the soul of the Ayyappa Padi Pooja. Singing bhajans, chanting His holy name, and offering pooja with a pure heart brings peace, strength, and divine blessings.",bg:"https://tse4.mm.bing.net/th/id/OIP.8qOkFqw39JH8KXQDpk6LdQHaHS?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"},{title:"Discipline (Niyamam)",icon:E.jsx(Jb,{className:"w-10 h-10 text-green-600 mx-auto"}),content:"Discipline prepares the devotee to receive Lord Ayyappa’s grace. By following vratham, purity of thoughts, humility, and truth, one walks the path of spiritual strength and harmony.",bg:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},{title:"Service (Seva)",icon:E.jsx(Kb,{className:"w-10 h-10 text-indigo-600 mx-auto"}),content:"Service is the highest offering to Lord Ayyappa. Helping fellow devotees, supporting poojas, and contributing selflessly reflects Ayyappa’s teaching of Tat Tvam Asi — You are Divine.",bg:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"}];return E.jsxs("section",{className:"text-center",children:[E.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-8",children:[E.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('https://www.wherevart.com/wp-content/uploads/2021/02/Sabarimala-Ayyappa-Temple-Tourist-Guide-min.jpg')"},children:E.jsx("div",{className:"absolute inset-0 bg-black/50"})}),E.jsxs("div",{className:"relative z-10 p-8 md:p-16 text-white",children:[E.jsx("h1",{className:"font-dev text-4xl md:text-6xl text-white mb-4 drop-shadow-lg",children:"Swamiye Sharanam Ayyappa 🙏"}),E.jsx("p",{className:"text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md",children:"Join devotees worldwide. View upcoming Padi Poojas, add your event, and celebrate devotion together."}),E.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[E.jsx(on,{to:"/poojas",className:"btn-primary bg-white text-ayyappa-orange hover:bg-gray-100",children:"View Poojas"}),E.jsx(on,{to:"/add",className:"btn-gold bg-ayyappa-gold text-black hover:bg-yellow-400",children:"Add Your Pooja"})]})]})]}),E.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:n.map((e,t)=>E.jsxs("div",{className:"relative rounded-2xl shadow-lg p-6 text-center border hover:shadow-2xl transition overflow-hidden",style:{backgroundImage:`url('${e.bg}')`,backgroundSize:"cover",backgroundPosition:"center"},children:[E.jsx("div",{className:"absolute inset-0 bg-white/70 backdrop-blur-sm"}),E.jsxs("div",{className:"relative z-10",children:[E.jsx("div",{className:"mb-4",children:e.icon}),E.jsx("div",{className:"text-xl font-bold text-ayyappa-orange mb-2",children:e.title}),E.jsx("p",{className:"text-sm text-gray-800",children:e.content})]})]},t))})]})}function r2(){return E.jsxs("div",{className:"card p-6 space-y-3",children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue",children:"About Ayyappa Padi Pooja"}),E.jsx("p",{children:"Padi Pooja is a sacred celebration honoring Lord Ayyappa, symbolizing the pilgrim's journey of devotion and discipline. This platform enables devotees to share and discover Padi Poojas near them."}),E.jsx("p",{children:`Wear the mala with humility, chant "Swamiye Sharanam Ayyappa", and unite in service. May Ayyappa's blessings be with all.`})]})}function Hf({pooja:n,completed:e=!1}){const{user:t}=Yr(),i=n.date?.toDate?n.date.toDate():new Date(n.date),o=t?.uid===n.createdBy,l=async()=>{if(o&&confirm("Delete this pooja?")){try{if(n.imageUrl){const c=n.imageUrl.split("/o/")[1]?.split("?")[0];if(c){const d=decodeURIComponent(c),p=zf(qf,d);await rE(p)}}}catch(c){console.warn("Storage delete issue:",c)}await GC(ys(mr,"poojas",n.id))}};return E.jsxs("div",{className:"card p-4",children:[E.jsxs("div",{className:"flex items-start justify-between",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-bold text-ayyappa-blue",children:n.title||"Ayyappa Padi Pooja"}),E.jsxs("div",{className:"mt-2 space-y-1 text-sm",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(DE,{size:16})," ",i.toLocaleString()]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(rm,{size:16})," ",n.venue," ",n.village?", "+n.village:""]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(ME,{size:16})," ",n.organizer]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(VE,{size:16})," ",n.contact]}),E.jsx("div",{className:"text-gray-700",children:n.address})]})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[e&&E.jsxs("div",{className:"flex items-center gap-1 text-green-700 font-semibold",children:[E.jsx(LE,{})," Completed"]}),o&&E.jsxs(E.Fragment,{children:[E.jsxs(on,{to:`/edit/${n.id}`,className:"px-2 py-1 rounded bg-blue-600 text-white inline-flex items-center gap-1",children:[E.jsx(Yb,{size:14})," Edit"]}),E.jsxs("button",{onClick:l,className:"px-2 py-1 rounded bg-red-600 text-white inline-flex items-center gap-1",children:[E.jsx(Xb,{size:14})," Delete"]})]})]})]}),n.imageUrl&&E.jsx("img",{src:n.imageUrl,alt:"Pooja Flyer",className:"mt-3 rounded-xl max-h-64 object-cover w-full"}),n.description&&E.jsx("p",{className:"mt-3 text-sm text-gray-700",children:n.description})]})}function i2(){const[n,e]=H.useState([]),[t,i]=H.useState(!0);H.useEffect(()=>{const d=Fp(eh(mr,"poojas"),D0("date","asc")),p=U0(d,y=>{const _=y.docs.map(I=>({id:I.id,...I.data()}));e(_),i(!1)});return()=>p()},[]);const o=new Date,l=n.filter(d=>(d.date?.toDate?d.date.toDate():new Date(d.date))>=o),c=n.filter(d=>(d.date?.toDate?d.date.toDate():new Date(d.date))<o).sort((d,p)=>{const y=d.date?.toDate?d.date.toDate():new Date(d.date);return(p.date?.toDate?p.date.toDate():new Date(p.date))-y});return E.jsxs("div",{className:"space-y-8",children:[E.jsxs("section",{children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-orange mb-3",children:"Upcoming Poojas"}),t?E.jsx("div",{children:"Loading..."}):l.length===0?E.jsx("div",{className:"card p-4 text-gray-600",children:"No upcoming poojas yet 🙏"}):E.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:l.map(d=>E.jsx(Hf,{pooja:d},d.id))})]}),E.jsxs("section",{children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue mb-3",children:"Completed Poojas"}),t?E.jsx("div",{children:"Loading..."}):c.length===0?E.jsx("div",{className:"card p-4 text-gray-600",children:"No poojas completed yet 🙏"}):E.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:c.map(d=>E.jsx(Hf,{pooja:d,completed:!0},d.id))})]})]})}const jE={Telangana:{Hyderabad:["Malkajgiri","Secunderabad","LB Nagar","Serilingampally","Quthbullapur","Rajendranagar","Shamshabad","Medchal","Sangareddy"],Warangal:["Hanamkonda","Kazipet","Warangal Rural","Mulugu","Jangaon","Bhupalpally","Mahabubabad","Peddapalli"],Nalgonda:["Nalgonda","Devarakonda","Miryalaguda","Suryapet","Kodad","Huzurnagar","Nakrekal","Choutuppal"],Karimnagar:["Karimnagar","Jagtial","Peddapalli","Manthani","Huzurabad","Sircilla","Vemulawada","Korutla"],Khammam:["Khammam","Kothagudem","Bhadrachalam","Paloncha","Madhira","Wyra","Sathupally","Yellandu"],Adilabad:["Adilabad","Nirmal","Mancherial","Bellampalle","Asifabad","Khanapur","Luxettipet","Utnoor"]},Kerala:{Pathanamthitta:["Sabarimala","Nilackal","Ranni","Pathanamthitta","Adoor","Kozhencherry","Thiruvalla","Mallappally","Aranmula"],Ernakulam:["Kochi","Thrippunithura","Aluva","Kothamangalam","Muvattupuzha","Perumbavoor","North Paravur","Mattancherry"],Kottayam:["Kottayam","Changanassery","Pala","Vaikom","Ettumanoor","Kanjirappally","Meenachil","Kaduthuruthy"],Idukki:["Thodupuzha","Munnar","Kattappana","Nedumkandam","Adimali","Devikulam","Udumbanchola","Peerumade"],Alappuzha:["Alappuzha","Cherthala","Kuttanad","Ambalappuzha","Karthikappally","Chengannur","Mavelikkara","Kayamkulam"],Kollam:["Kollam","Karunagappally","Kunnathur","Pathanapuram","Punalur","Kottarakkara","Kundara","Chavara"]},AndhraPradesh:{Tirupati:["Tirumala","Tirupati Rural","Tirupati Urban","Chandragiri","Srikalahasti","Yerpedu","Renigunta","Puttur"],Vijayawada:["Ibrahimpatnam","Kankipadu","Vijayawada Urban","Vijayawada Rural","Gannavaram","Nandigama","Jaggayyapeta","Mylavaram"],Guntur:["Guntur","Tenali","Bapatla","Ponnur","Repalle","Narasaraopet","Vinukonda","Sattenapalle","Macherla"],Visakhapatnam:["Visakhapatnam","Anakapalle","Narsipatnam","Chodavaram","Paderu","Araku Valley","Chintapalle","Gajuwaka"],Kurnool:["Kurnool","Nandyal","Adoni","Yemmiganur","Mantralayam","Kodumur","Gudur","Atmakur","Pattikonda"],Anantapur:["Anantapur","Hindupur","Dharmavaram","Gooty","Kadiri","Penukonda","Tadipatri","Kadapa","Proddatur"]},TamilNadu:{Chennai:["Chennai North","Chennai South","Chennai Central","Tondiarpet","Royapuram","Mylapore","Adyar","Guindy","Saidapet"],Coimbatore:["Coimbatore North","Coimbatore South","Singanallur","Sulur","Pollachi","Mettupalayam","Valparai","Udumalpet"],Madurai:["Madurai North","Madurai South","Madurai Central","Melur","Usilampatti","Thirumangalam","Periyakulam","Theni"],Salem:["Salem North","Salem South","Salem West","Attur","Mettur","Omalur","Edappadi","Rasipuram","Sankari"],Vellore:["Vellore","Kanchipuram","Tiruvannamalai","Arni","Gudiyatham","Vaniyambadi","Ambur","Arakkonam","Walajah"],Tiruchirappalli:["Tiruchirappalli","Srirangam","Lalgudi","Manachanallur","Musiri","Thuraiyur","Perambalur","Kulithalai"]},Karnataka:{Bangalore:["Bangalore North","Bangalore South","Bangalore East","Bangalore West","Yelahanka","Anekal","Devanahalli","Hosakote"],Mysore:["Mysore","Nanjangud","T Narasipura","Hunsur","Krishnarajanagara","Piriyapatna","Saragur","Heggadadevanakote"],Mangalore:["Mangalore","Udupi","Kundapura","Karkala","Bantwal","Puttur","Sullia","Belthangady","Moodbidri"],Hubli:["Hubli","Dharwad","Gadag","Haveri","Ranebennur","Hirekerur","Shiggaon","Savanur","Byadgi"],Belgaum:["Belgaum","Chikodi","Athani","Raibag","Hukkeri","Ramdurg","Gokak","Bailhongal","Khanapur"],Gulbarga:["Gulbarga","Yadgir","Shahpur","Jevargi","Chitapur","Sedam","Chincholi","Aland","Afzalpur"]}},UE=async(n,e,t={})=>{try{const i=eh(mr,"users"),o=Fp(i,b0("isSubscribed","==",!0)),l=await WC(o),c=[];if(l.forEach(d=>{const p=d.data();p.notificationToken&&c.push(p.notificationToken)}),c.length===0){console.log("No subscribed users found");return}await s2(c,n,e,t),console.log(`Notification sent to ${c.length} users`)}catch(i){console.error("Error sending notification:",i)}},s2=async(n,e,t,i={})=>{try{const o=await fetch("/api/send-notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tokens:n,notification:{title:e,body:t,icon:"/icon-192.png",badge:"/icon-192.png",tag:"ayyappa-pooja-notification",requireInteraction:!0,actions:[{action:"view",title:"View Poojas",icon:"/icon-192.png"},{action:"close",title:"Close",icon:"/icon-192.png"}],data:i}})});if(!o.ok)throw new Error("Failed to send notification");return await o.json()}catch(o){throw console.error("Error sending notification to tokens:",o),o}},o2=async n=>{const e="🛕 New Ayyappa Padi Pooja",t=`New pooja: ${n.title} in ${n.venue}`,i={poojaId:n.id,type:"new_pooja",url:"/poojas"};await UE(e,t,i)},a2=async n=>{const e="⏰ Upcoming Padi Pooja Reminder",t=`Reminder: ${n.title} is happening soon in ${n.venue}`,i={poojaId:n.id,type:"reminder",url:"/poojas"};await UE(e,t,i)};function l2(){const{user:n}=Yr(),e=Rs(),[t,i]=H.useState(!1),[o,l]=H.useState({title:"Ayyappa Padi Pooja",organizer:"",contact:"",state:"",district:"",mandal:"",village:"",venue:"",address:"",date:"",description:""}),[c,d]=H.useState(""),[p,y]=H.useState(""),_=B=>l({...o,[B.target.name]:B.target.value}),I=B=>{const q=B.target.value;l({...o,state:q,venue:q?`${q}`:""})},S=async B=>{B.preventDefault(),y(""),d(""),i(!0);try{if(!n?.uid){y("You must be logged in to add a pooja."),i(!1);return}const q={...o,date:new Date(o.date),imageUrl:"",createdBy:n.uid,createdAt:YC(),venue:o.venue||[o.state,o.district,o.mandal,o.village].filter(Boolean).join(", ")},L=await QC(eh(mr,"poojas"),q);d("🙏 Pooja added successfully! Notification queued."),l({title:"Ayyappa Padi Pooja",organizer:"",contact:"",state:"",district:"",mandal:"",village:"",venue:"",address:"",date:"",description:""}),e("/my"),o2({id:L.id,...q}).then(()=>console.log("Notification sent successfully")).catch(Z=>console.warn("Failed to send notification:",Z))}catch(q){console.error("AddPooja error:",q),y(q?.message||"Failed to add pooja. Please try again.")}finally{i(!1)}},D=Object.keys(jE);return E.jsx("div",{className:"max-w-2xl mx-auto",children:E.jsxs("form",{onSubmit:S,className:"card p-6",children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue text-center mb-4",children:"🛕 Add Ayyappa Padi Pooja"}),c&&E.jsx("div",{className:"text-green-700 text-sm mb-2",children:c}),p&&E.jsx("div",{className:"text-red-600 text-sm mb-2",children:p}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsxs("label",{className:"font-semibold flex items-center gap-2",children:[E.jsx(Zb,{size:18})," Title"]}),E.jsx("input",{name:"title",value:o.title,onChange:_,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{children:[E.jsxs("label",{className:"font-semibold flex items-center gap-2",children:[E.jsx(ME,{size:18})," Organizer"]}),E.jsx("input",{name:"organizer",value:o.organizer,onChange:_,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{children:[E.jsxs("label",{className:"font-semibold flex items-center gap-2",children:[E.jsx(VE,{size:18})," Contact (Phone / Email)"]}),E.jsx("input",{name:"contact",value:o.contact,onChange:_,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{children:[E.jsxs("label",{className:"font-semibold flex items-center gap-2",children:[E.jsx(rm,{size:18})," State",o.state&&E.jsx("span",{className:"text-green-600 text-xs",children:"✓ Selected"})]}),E.jsxs("div",{className:"relative",children:[E.jsxs("select",{name:"state",value:o.state,onChange:I,className:"w-full p-3 rounded-xl border appearance-none bg-white",required:!0,children:[E.jsx("option",{value:"",children:"Select State"}),D.map(B=>E.jsx("option",{value:B,children:B},B))]}),E.jsx(OE,{className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"District"}),E.jsx("input",{name:"district",value:o.district,onChange:_,className:"w-full p-3 rounded-xl border",placeholder:"Enter district name",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Mandal"}),E.jsx("input",{name:"mandal",value:o.mandal,onChange:_,className:"w-full p-3 rounded-xl border",placeholder:"Enter mandal name",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Village"}),E.jsx("input",{name:"village",value:o.village,onChange:_,className:"w-full p-3 rounded-xl border",placeholder:"Enter village name",required:!0})]}),E.jsxs("div",{className:"md:col-span-2",children:[E.jsx("label",{className:"font-semibold",children:"Complete Address (Temple, Street, Landmark)"}),E.jsx("textarea",{name:"address",value:o.address,onChange:_,className:"w-full p-3 rounded-xl border",rows:2,required:!0})]}),E.jsxs("div",{children:[E.jsxs("label",{className:"font-semibold flex items-center gap-2",children:[E.jsx(DE,{size:18})," Date & Time"]}),E.jsx("input",{type:"datetime-local",name:"date",value:o.date,onChange:_,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{className:"md:col-span-2",children:[E.jsx("label",{className:"font-semibold",children:"Description"}),E.jsx("textarea",{name:"description",value:o.description,onChange:_,className:"w-full p-3 rounded-xl border",rows:3})]})]}),E.jsx("button",{disabled:t,className:"btn-primary w-full mt-4",children:t?"Adding...":"🙏 Add Pooja"})]})})}function u2(){const{id:n}=RI(),e=Rs(),{user:t}=Yr(),[i,o]=H.useState(!0),[l,c]=H.useState(!1),[d,p]=H.useState(null),[y,_]=H.useState(null),[I,S]=H.useState("");H.useEffect(()=>{(async()=>{try{const Z=await j0(ys(mr,"poojas",n));if(!Z.exists())S("Pooja not found");else{const X=Z.data();X.createdBy!==t?.uid&&S("You are not allowed to edit this pooja."),_({...X,date:X.date?.toDate?X.date.toDate().toISOString().slice(0,16):X.date})}}catch(Z){S(Z.message)}finally{o(!1)}})()},[n,t?.uid]);const D=Z=>_({...y,[Z.target.name]:Z.target.value}),B=Z=>{const X=Z.target.value;_({...y,state:X,venue:X?`${X}`:""})},q=async Z=>{if(Z.preventDefault(),!!y){c(!0);try{let X=y.imageUrl||"";if(d){try{if(X){const ve=decodeURIComponent(X.match(/o\/(.*?)\?/)[1]),N=zf(qf,ve);await rE(N)}}catch(ve){console.warn("Failed to delete old file:",ve)}const re=`flyers/${t.uid}/${Date.now()}_${d.name}`,Se=zf(qf,re);await sN(Se,d),X=await oN(Se)}const ne={...y,date:new Date(y.date),imageUrl:X};await KC(ys(mr,"poojas",n),ne),e("/my"),a2({id:n,...ne}).then(()=>console.log("Update notification sent successfully")).catch(re=>console.warn("Failed to send update notification:",re))}catch(X){S(X.message)}finally{c(!1)}}};if(i)return E.jsx("div",{className:"p-6 text-center",children:"Loading..."});if(I)return E.jsx("div",{className:"p-6 text-center text-red-600",children:I});if(!y)return null;const L=Object.keys(jE);return E.jsx("div",{className:"max-w-2xl mx-auto",children:E.jsxs("form",{onSubmit:q,className:"card p-6",children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue text-center mb-4",children:"Edit Pooja"}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Title"}),E.jsx("input",{name:"title",value:y.title,onChange:D,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Organizer"}),E.jsx("input",{name:"organizer",value:y.organizer,onChange:D,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Contact"}),E.jsx("input",{name:"contact",value:y.contact,onChange:D,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{children:[E.jsxs("label",{className:"font-semibold flex items-center gap-2",children:[E.jsx(rm,{size:18})," State",y.state&&E.jsx("span",{className:"text-green-600 text-xs",children:"✓ Selected"})]}),E.jsxs("div",{className:"relative",children:[E.jsxs("select",{name:"state",value:y.state,onChange:B,className:"w-full p-3 rounded-xl border appearance-none bg-white",required:!0,children:[E.jsx("option",{value:"",children:"Select State"}),L.map(Z=>E.jsx("option",{value:Z,children:Z},Z))]}),E.jsx(OE,{className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"District"}),E.jsx("input",{name:"district",value:y.district,onChange:D,className:"w-full p-3 rounded-xl border",placeholder:"Enter district name",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Mandal"}),E.jsx("input",{name:"mandal",value:y.mandal,onChange:D,className:"w-full p-3 rounded-xl border",placeholder:"Enter mandal name",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Village"}),E.jsx("input",{name:"village",value:y.village,onChange:D,className:"w-full p-3 rounded-xl border",placeholder:"Enter village name",required:!0})]}),E.jsxs("div",{className:"md:col-span-2",children:[E.jsx("label",{className:"font-semibold",children:"Complete Address"}),E.jsx("textarea",{name:"address",value:y.address,onChange:D,className:"w-full p-3 rounded-xl border",rows:2,required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"font-semibold",children:"Date & Time"}),E.jsx("input",{type:"datetime-local",name:"date",value:y.date,onChange:D,className:"w-full p-3 rounded-xl border",required:!0})]}),E.jsxs("div",{className:"md:col-span-2",children:[E.jsx("label",{className:"font-semibold",children:"Description"}),E.jsx("textarea",{name:"description",value:y.description,onChange:D,className:"w-full p-3 rounded-xl border",rows:3})]}),E.jsxs("div",{className:"md:col-span-2",children:[E.jsx("label",{className:"font-semibold",children:"Replace Flyer (optional)"}),E.jsx("input",{type:"file",accept:"image/*",onChange:Z=>p(Z.target.files?.[0]||null)})]})]}),E.jsx("button",{disabled:l,className:"btn-primary w-full mt-4",children:l?"Saving...":"Save Changes"})]})})}function c2(){const{user:n,loading:e}=Yr(),[t,i]=H.useState([]),[o,l]=H.useState(!0);return H.useEffect(()=>{if(!n)return;const c=Fp(eh(mr,"poojas"),b0("createdBy","==",n.uid),D0("date","desc")),d=U0(c,p=>{const y=p.docs.map(_=>({id:_.id,..._.data()}));i(y),l(!1)});return()=>d()},[n]),e?E.jsx("div",{className:"p-6 text-center",children:"Loading..."}):E.jsxs("div",{className:"space-y-6",children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue",children:"My Poojas"}),o?E.jsx("div",{children:"Loading..."}):t.length===0?E.jsx("div",{className:"card p-4 text-gray-600",children:"You haven't added any poojas yet."}):E.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:t.map(c=>E.jsx(Hf,{pooja:c},c.id))})]})}function h2(){const{login:n}=Yr(),e=Rs(),[t,i]=H.useState(""),[o,l]=H.useState(""),[c,d]=H.useState(""),p=async y=>{y.preventDefault(),d("");try{await n(t,o),e("/add")}catch(_){d(_.message)}};return E.jsxs("div",{className:"max-w-md mx-auto card p-6",children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue text-center mb-4",children:"Login"}),c&&E.jsx("div",{className:"text-red-600 text-sm mb-2",children:c}),E.jsxs("form",{onSubmit:p,className:"space-y-3",children:[E.jsx("input",{value:t,onChange:y=>i(y.target.value),type:"email",placeholder:"Email",className:"w-full p-3 rounded-xl border",required:!0}),E.jsx("input",{value:o,onChange:y=>l(y.target.value),type:"password",placeholder:"Password",className:"w-full p-3 rounded-xl border",required:!0}),E.jsx("button",{className:"btn-primary w-full",children:"Login"})]}),E.jsxs("p",{className:"text-sm mt-3 text-center",children:["No account? ",E.jsx(on,{className:"text-ayyappa-orange font-semibold",to:"/signup",children:"Sign up"})]})]})}function d2(){const{signup:n}=Yr(),e=Rs(),[t,i]=H.useState(""),[o,l]=H.useState(""),[c,d]=H.useState(""),[p,y]=H.useState(""),[_,I]=H.useState(""),S=async D=>{if(D.preventDefault(),I(""),c!==p)return I("Passwords do not match");try{await n(t,o,c),e("/add")}catch(B){I(B.message)}};return E.jsxs("div",{className:"max-w-md mx-auto card p-6",children:[E.jsx("h2",{className:"text-2xl font-bold text-ayyappa-blue text-center mb-4",children:"Create Account"}),_&&E.jsx("div",{className:"text-red-600 text-sm mb-2",children:_}),E.jsxs("form",{onSubmit:S,className:"space-y-3",children:[E.jsx("input",{value:t,onChange:D=>i(D.target.value),type:"text",placeholder:"Full Name",className:"w-full p-3 rounded-xl border",required:!0}),E.jsx("input",{value:o,onChange:D=>l(D.target.value),type:"email",placeholder:"Email",className:"w-full p-3 rounded-xl border",required:!0}),E.jsx("input",{value:c,onChange:D=>d(D.target.value),type:"password",placeholder:"Password",className:"w-full p-3 rounded-xl border",required:!0}),E.jsx("input",{value:p,onChange:D=>y(D.target.value),type:"password",placeholder:"Confirm Password",className:"w-full p-3 rounded-xl border",required:!0}),E.jsx("button",{className:"btn-gold w-full",children:"Sign Up"})]}),E.jsxs("p",{className:"text-sm mt-3 text-center",children:["Already have an account? ",E.jsx(on,{className:"text-ayyappa-orange font-semibold",to:"/login",children:"Login"})]})]})}function f2(){const{permission:n,isSubscribed:e,requestPermission:t,unsubscribeFromNotifications:i}=NE(),o=async()=>{const p=await t();alert(p?"🙏 Thank you! You'll now receive notifications about new Padi Poojas.":"Please allow notifications in your browser settings to receive updates.")},l=async()=>{await i(),alert("You've been unsubscribed from notifications.")},d=n==="denied"?{text:"Notifications are blocked. Please enable them in your browser settings.",icon:E.jsx(Wb,{className:"text-red-500",size:20}),color:"text-red-600"}:e?{text:"You're subscribed to notifications! You'll receive updates about new Padi Poojas.",icon:E.jsx(LE,{className:"text-green-500",size:20}),color:"text-green-600"}:n==="granted"?{text:"Notifications are enabled. Click subscribe to receive Padi Pooja updates.",icon:E.jsx(bc,{className:"text-blue-500",size:20}),color:"text-blue-600"}:{text:"Enable notifications to stay updated about new Padi Poojas in your area.",icon:E.jsx(Nc,{className:"text-gray-500",size:20}),color:"text-gray-600"};return E.jsxs("div",{className:"card p-6 max-w-md mx-auto",children:[E.jsxs("div",{className:"text-center mb-6",children:[E.jsx("h3",{className:"text-xl font-bold text-ayyappa-blue mb-2",children:"🔔 Notification Settings"}),E.jsx("p",{className:"text-sm text-gray-600",children:"Stay updated about new Ayyappa Padi Poojas"})]}),E.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg bg-gray-50 mb-4 ${d.color}`,children:[d.icon,E.jsx("p",{className:"text-sm",children:d.text})]}),E.jsx("div",{className:"space-y-3",children:n==="denied"?E.jsxs("div",{className:"text-center",children:[E.jsx("p",{className:"text-sm text-red-600 mb-2",children:"Notifications are blocked in your browser"}),E.jsx("button",{onClick:()=>window.open("chrome://settings/content/notifications","_blank"),className:"btn-primary text-sm",children:"Open Browser Settings"})]}):e?E.jsxs("button",{onClick:l,className:"w-full btn-primary bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2",children:[E.jsx(Nc,{size:18}),"Unsubscribe from Notifications"]}):E.jsxs("button",{onClick:o,className:"w-full btn-primary flex items-center justify-center gap-2",disabled:n==="denied",children:[E.jsx(bc,{size:18}),"Subscribe to Notifications"]})}),E.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 rounded-lg",children:[E.jsx("h4",{className:"font-semibold text-ayyappa-orange mb-2",children:"What you'll receive:"}),E.jsxs("ul",{className:"text-sm text-gray-700 space-y-1",children:[E.jsx("li",{children:"• New Padi Pooja announcements"}),E.jsx("li",{children:"• Updates about nearby events"}),E.jsx("li",{children:"• Important devotional reminders"}),E.jsx("li",{children:"• Special Ayyappa celebrations"})]})]})]})}function p2(){return E.jsxs("div",{className:"space-y-6",children:[E.jsxs("div",{className:"text-center",children:[E.jsx("h1",{className:"text-3xl font-bold text-ayyappa-blue mb-2",children:"🔔 Notification Settings"}),E.jsx("p",{className:"text-gray-600",children:"Manage your notification preferences for Ayyappa Padi Pooja updates"})]}),E.jsx(f2,{}),E.jsxs("div",{className:"card p-6 max-w-2xl mx-auto",children:[E.jsx("h3",{className:"text-lg font-semibold text-ayyappa-orange mb-3",children:"About Push Notifications"}),E.jsxs("div",{className:"space-y-3 text-sm text-gray-700",children:[E.jsxs("p",{children:[E.jsx("strong",{children:"Why enable notifications?"})," Stay connected with the Ayyappa community and never miss important Padi Pooja events in your area."]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Privacy:"})," We only send notifications about Padi Pooja events. Your data is secure and we never share it with third parties."]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Control:"})," You can unsubscribe at any time from this page or through your browser settings."]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Frequency:"})," We send notifications only when there are new Padi Pooja announcements or important updates."]})]})]})]})}function hf({children:n}){const{user:e,loading:t}=Yr();return t?E.jsx("div",{className:"p-8 text-center text-lg",children:"Loading..."}):e?n:E.jsx(__,{to:"/login",replace:!0})}function m2(){return E.jsx(JI,{children:E.jsx(Bb,{children:E.jsx(zb,{children:E.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50",children:[E.jsx(t2,{}),E.jsx("main",{className:"flex-1 container mx-auto px-4 py-6",children:E.jsxs($I,{children:[E.jsx(Wn,{path:"/",element:E.jsx(n2,{})}),E.jsx(Wn,{path:"/about",element:E.jsx(r2,{})}),E.jsx(Wn,{path:"/poojas",element:E.jsx(i2,{})}),E.jsx(Wn,{path:"/notifications",element:E.jsx(p2,{})}),E.jsx(Wn,{path:"/add",element:E.jsx(hf,{children:E.jsx(l2,{})})}),E.jsx(Wn,{path:"/edit/:id",element:E.jsx(hf,{children:E.jsx(u2,{})})}),E.jsx(Wn,{path:"/my",element:E.jsx(hf,{children:E.jsx(c2,{})})}),E.jsx(Wn,{path:"/login",element:E.jsx(h2,{})}),E.jsx(Wn,{path:"/signup",element:E.jsx(d2,{})}),E.jsx(Wn,{path:"*",element:E.jsx(__,{to:"/",replace:!0})})]})}),E.jsx("footer",{className:"text-center text-xs text-gray-500 py-6",children:"Swamiye Sharanam Ayyappa 🙏"})]})})})})}ZT.createRoot(document.getElementById("root")).render(E.jsx(a_.StrictMode,{children:E.jsx(m2,{})}));
