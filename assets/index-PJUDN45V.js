(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Fc={exports:{}},zo={},Oc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function gv(){if(Kp)return _t;Kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function y(U,re,He){this.props=U,this.context=re,this.refs=R,this.updater=He||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,re){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,re,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(U,re,He){this.props=U,this.context=re,this.refs=R,this.updater=He||S}var D=N.prototype=new g;D.constructor=N,T(D,y.prototype),D.isPureReactComponent=!0;var b=Array.isArray,W=Object.prototype.hasOwnProperty,k={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function G(U,re,He){var Q,pe={},Ae=null,ye=null;if(re!=null)for(Q in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Ae=""+re.key),re)W.call(re,Q)&&!I.hasOwnProperty(Q)&&(pe[Q]=re[Q]);var be=arguments.length-2;if(be===1)pe.children=He;else if(1<be){for(var tt=Array(be),De=0;De<be;De++)tt[De]=arguments[De+2];pe.children=tt}if(U&&U.defaultProps)for(Q in be=U.defaultProps,be)pe[Q]===void 0&&(pe[Q]=be[Q]);return{$$typeof:s,type:U,key:Ae,ref:ye,props:pe,_owner:k.current}}function C(U,re){return{$$typeof:s,type:U.type,key:re,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function O(U){var re={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(He){return re[He]})}var ie=/\/+/g;function J(U,re){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):re.toString(36)}function ue(U,re,He,Q,pe){var Ae=typeof U;(Ae==="undefined"||Ae==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(Ae){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,pe=pe(ye),U=Q===""?"."+J(ye,0):Q,b(pe)?(He="",U!=null&&(He=U.replace(ie,"$&/")+"/"),ue(pe,re,He,"",function(De){return De})):pe!=null&&(A(pe)&&(pe=C(pe,He+(!pe.key||ye&&ye.key===pe.key?"":(""+pe.key).replace(ie,"$&/")+"/")+U)),re.push(pe)),1;if(ye=0,Q=Q===""?".":Q+":",b(U))for(var be=0;be<U.length;be++){Ae=U[be];var tt=Q+J(Ae,be);ye+=ue(Ae,re,He,tt,pe)}else if(tt=x(U),typeof tt=="function")for(U=tt.call(U),be=0;!(Ae=U.next()).done;)Ae=Ae.value,tt=Q+J(Ae,be++),ye+=ue(Ae,re,He,tt,pe);else if(Ae==="object")throw re=String(U),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function de(U,re,He){if(U==null)return U;var Q=[],pe=0;return ue(U,Q,"","",function(Ae){return re.call(He,Ae,pe++)}),Q}function oe(U){if(U._status===-1){var re=U._result;re=re(),re.then(function(He){(U._status===0||U._status===-1)&&(U._status=1,U._result=He)},function(He){(U._status===0||U._status===-1)&&(U._status=2,U._result=He)}),U._status===-1&&(U._status=0,U._result=re)}if(U._status===1)return U._result.default;throw U._result}var fe={current:null},B={transition:null},ce={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:de,forEach:function(U,re,He){de(U,function(){re.apply(this,arguments)},He)},count:function(U){var re=0;return de(U,function(){re++}),re},toArray:function(U){return de(U,function(re){return re})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=y,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=N,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,_t.act=se,_t.cloneElement=function(U,re,He){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=T({},U.props),pe=U.key,Ae=U.ref,ye=U._owner;if(re!=null){if(re.ref!==void 0&&(Ae=re.ref,ye=k.current),re.key!==void 0&&(pe=""+re.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(tt in re)W.call(re,tt)&&!I.hasOwnProperty(tt)&&(Q[tt]=re[tt]===void 0&&be!==void 0?be[tt]:re[tt])}var tt=arguments.length-2;if(tt===1)Q.children=He;else if(1<tt){be=Array(tt);for(var De=0;De<tt;De++)be[De]=arguments[De+2];Q.children=be}return{$$typeof:s,type:U.type,key:pe,ref:Ae,props:Q,_owner:ye}},_t.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},_t.createElement=G,_t.createFactory=function(U){var re=G.bind(null,U);return re.type=U,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:f,render:U}},_t.isValidElement=A,_t.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:oe}},_t.memo=function(U,re){return{$$typeof:m,type:U,compare:re===void 0?null:re}},_t.startTransition=function(U){var re=B.transition;B.transition={};try{U()}finally{B.transition=re}},_t.unstable_act=se,_t.useCallback=function(U,re){return fe.current.useCallback(U,re)},_t.useContext=function(U){return fe.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return fe.current.useDeferredValue(U)},_t.useEffect=function(U,re){return fe.current.useEffect(U,re)},_t.useId=function(){return fe.current.useId()},_t.useImperativeHandle=function(U,re,He){return fe.current.useImperativeHandle(U,re,He)},_t.useInsertionEffect=function(U,re){return fe.current.useInsertionEffect(U,re)},_t.useLayoutEffect=function(U,re){return fe.current.useLayoutEffect(U,re)},_t.useMemo=function(U,re){return fe.current.useMemo(U,re)},_t.useReducer=function(U,re,He){return fe.current.useReducer(U,re,He)},_t.useRef=function(U){return fe.current.useRef(U)},_t.useState=function(U){return fe.current.useState(U)},_t.useSyncExternalStore=function(U,re,He){return fe.current.useSyncExternalStore(U,re,He)},_t.useTransition=function(){return fe.current.useTransition()},_t.version="18.3.1",_t}var Zp;function pd(){return Zp||(Zp=1,Oc.exports=gv()),Oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function _v(){if(Jp)return zo;Jp=1;var s=pd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return zo.Fragment=n,zo.jsx=c,zo.jsxs=c,zo}var Qp;function vv(){return Qp||(Qp=1,Fc.exports=_v()),Fc.exports}var bt=vv(),Hr=pd(),hl={},kc={exports:{}},Un={},zc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function xv(){return em||(em=1,(function(s){function e(B,ce){var se=B.length;B.push(ce);e:for(;0<se;){var U=se-1>>>1,re=B[U];if(0<a(re,ce))B[U]=ce,B[se]=re,se=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ce=B[0],se=B.pop();if(se!==ce){B[0]=se;e:for(var U=0,re=B.length,He=re>>>1;U<He;){var Q=2*(U+1)-1,pe=B[Q],Ae=Q+1,ye=B[Ae];if(0>a(pe,se))Ae<re&&0>a(ye,pe)?(B[U]=ye,B[Ae]=se,U=Ae):(B[U]=pe,B[Q]=se,U=Q);else if(Ae<re&&0>a(ye,se))B[U]=ye,B[Ae]=se,U=Ae;else break e}}return ce}function a(B,ce){var se=B.sortIndex-ce.sortIndex;return se!==0?se:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],m=[],_=1,v=null,x=3,S=!1,T=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=B)r(m),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=n(m)}}function b(B){if(R=!1,D(B),!T)if(n(h)!==null)T=!0,oe(W);else{var ce=n(m);ce!==null&&fe(b,ce.startTime-B)}}function W(B,ce){T=!1,R&&(R=!1,g(G),G=-1),S=!0;var se=x;try{for(D(ce),v=n(h);v!==null&&(!(v.expirationTime>ce)||B&&!O());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var re=U(v.expirationTime<=ce);ce=s.unstable_now(),typeof re=="function"?v.callback=re:v===n(h)&&r(h),D(ce)}else r(h);v=n(h)}if(v!==null)var He=!0;else{var Q=n(m);Q!==null&&fe(b,Q.startTime-ce),He=!1}return He}finally{v=null,x=se,S=!1}}var k=!1,I=null,G=-1,C=5,A=-1;function O(){return!(s.unstable_now()-A<C)}function ie(){if(I!==null){var B=s.unstable_now();A=B;var ce=!0;try{ce=I(!0,B)}finally{ce?J():(k=!1,I=null)}}else k=!1}var J;if(typeof N=="function")J=function(){N(ie)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=ie,J=function(){de.postMessage(null)}}else J=function(){y(ie,0)};function oe(B){I=B,k||(k=!0,J())}function fe(B,ce){G=y(function(){B(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,oe(W))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var se=x;x=ce;try{return B()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return ce()}finally{x=se}},s.unstable_scheduleCallback=function(B,ce,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,B={id:_++,callback:ce,priorityLevel:B,startTime:se,expirationTime:re,sortIndex:-1},se>U?(B.sortIndex=se,e(m,B),n(h)===null&&B===n(m)&&(R?(g(G),G=-1):R=!0,fe(b,se-U))):(B.sortIndex=re,e(h,B),T||S||(T=!0,oe(W))),B},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(B){var ce=x;return function(){var se=x;x=ce;try{return B.apply(this,arguments)}finally{x=se}}}})(Bc)),Bc}var tm;function yv(){return tm||(tm=1,zc.exports=xv()),zc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Sv(){if(nm)return Un;nm=1;var s=pd(),e=yv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||S(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function re(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var He=!1;function Q(t,i){if(!t||He)return"";He=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){u=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}t()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,L=p.length-1;1<=M&&0<=L&&d[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(d[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||d[M]!==p[L]){var z=`
`+d[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=L);break}}}finally{He=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function pe(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case k:return"Portal";case C:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Ae(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Ae(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(t){var i=tt(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=De(t))}function wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=tt(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function mt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function F(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Yt(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Te(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function Ue(t,i){Te(t,i);var o=be(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Je(t,i.type,o):i.hasOwnProperty("defaultValue")&&Je(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Re(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Je(t,i,o){(i!=="number"||mt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var he=Array.isArray;function we(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function lt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(he(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:be(o)}}function E(t,i){var o=be(i.value),u=be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function j(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ae(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ae(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var te,Ve=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(te=te||document.createElement("div"),te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=te.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Le(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){Ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function ge(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=ge(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var je=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,ve=null,ze=null;function Me(t){if(t=To(t)){if(typeof Ie!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ca(i),Ie(t.stateNode,t.type,i))}}function me(t){ve?ze?ze.push(t):ze=[t]:ve=t}function $e(){if(ve){var t=ve,i=ze;if(ze=ve=null,Me(t),i)for(t=0;t<i.length;t++)Me(i[t])}}function ct(t,i){return t(i)}function Pt(){}var Mt=!1;function Rn(t,i,o){if(Mt)return t(i,o);Mt=!0;try{return ct(t,i,o)}finally{Mt=!1,(ve!==null||ze!==null)&&(Pt(),$e())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var u=Ca(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var is=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){is=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{is=!1}function wi(t,i,o,u,d,p,M,L,z){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(xe){this.onError(xe)}}var Ai=!1,Rr=null,Cr=!1,Yi=null,oa={onError:function(t){Ai=!0,Rr=t}};function rs(t,i,o,u,d,p,M,L,z){Ai=!1,Rr=null,wi.apply(oa,arguments)}function aa(t,i,o,u,d,p,M,L,z){if(rs.apply(this,arguments),Ai){if(Ai){var ee=Rr;Ai=!1,Rr=null}else throw Error(n(198));Cr||(Cr=!0,Yi=ee)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function la(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ua(t){if(hi(t)!==t)throw Error(n(188))}function su(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ua(d),t;if(p===u)return ua(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var M=!1,L=d.child;L;){if(L===o){M=!0,o=d,u=p;break}if(L===u){M=!0,u=d,o=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===o){M=!0,o=p,u=d;break}if(L===u){M=!0,u=p,o=d;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ca(t){return t=su(t),t!==null?fa(t):null}function fa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fa(t);if(i!==null)return i;t=t.sibling}return null}var da=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,X=e.unstable_shouldYield,ne=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,ot=e.unstable_IdlePriority,st=null,Ye=null;function vt(t){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(st,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:St,Ft=Math.log,zt=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(Ft(t)/zt|0)|0}var nt=64,Gt=4194304;function yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~d;L!==0?u=yt(L):(p&=M,p!==0&&(u=yt(p)))}else M=o&~d,M!==0?u=yt(M):p!==0&&(u=yt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-dt(i),d=1<<o,u|=t[o],i&=~d;return u}function ji(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-dt(p),L=1<<M,z=d[M];z===-1?((L&o)===0||(L&u)!==0)&&(d[M]=ji(L,i)):z<=i&&(t.expiredLanes|=L),p&=~L}}function Ri(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ut(){var t=nt;return nt<<=1,(nt&4194240)===0&&(nt=64),t}function hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-dt(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-dt(o),p=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~p}}function rn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-dt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var Et=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var bd,ou,Pd,Ld,Dd,au=!1,ha=[],qi=null,$i=null,Ki=null,ao=new Map,lo=new Map,Zi=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(t,i,o,u,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=To(i),i!==null&&ou(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function zg(t,i,o,u,d){switch(i){case"focusin":return qi=uo(qi,t,i,o,u,d),!0;case"dragenter":return $i=uo($i,t,i,o,u,d),!0;case"mouseover":return Ki=uo(Ki,t,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return ao.set(p,uo(ao.get(p)||null,t,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,lo.set(p,uo(lo.get(p)||null,t,i,o,u,d)),!0}return!1}function Id(t){var i=br(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=la(o),i!==null){t.blockedOn=i,Dd(t.priority,function(){Pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=uu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return i=To(o),i!==null&&ou(i),t.blockedOn=o,!1;i.shift()}return!0}function Nd(t,i,o){pa(t)&&o.delete(i)}function Bg(){au=!1,qi!==null&&pa(qi)&&(qi=null),$i!==null&&pa($i)&&($i=null),Ki!==null&&pa(Ki)&&(Ki=null),ao.forEach(Nd),lo.forEach(Nd)}function co(t,i){t.blockedOn===i&&(t.blockedOn=null,au||(au=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bg)))}function fo(t){function i(d){return co(d,t)}if(0<ha.length){co(ha[0],t);for(var o=1;o<ha.length;o++){var u=ha[o];u.blockedOn===t&&(u.blockedOn=null)}}for(qi!==null&&co(qi,t),$i!==null&&co($i,t),Ki!==null&&co(Ki,t),ao.forEach(i),lo.forEach(i),o=0;o<Zi.length;o++)u=Zi[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Id(o),o.blockedOn===null&&Zi.shift()}var ss=b.ReactCurrentBatchConfig,ma=!0;function Hg(t,i,o,u){var d=Et,p=ss.transition;ss.transition=null;try{Et=1,lu(t,i,o,u)}finally{Et=d,ss.transition=p}}function Vg(t,i,o,u){var d=Et,p=ss.transition;ss.transition=null;try{Et=4,lu(t,i,o,u)}finally{Et=d,ss.transition=p}}function lu(t,i,o,u){if(ma){var d=uu(t,i,o,u);if(d===null)Au(t,i,u,ga,o),Ud(t,u);else if(zg(d,t,i,o,u))u.stopPropagation();else if(Ud(t,u),i&4&&-1<kg.indexOf(t)){for(;d!==null;){var p=To(d);if(p!==null&&bd(p),p=uu(t,i,o,u),p===null&&Au(t,i,u,ga,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else Au(t,i,u,null,o)}}var ga=null;function uu(t,i,o,u){if(ga=null,t=H(u),t=br(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=la(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ga=t,null}function Fd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ee:return 1;case Ne:return 4;case We:case Ge:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Ji=null,cu=null,_a=null;function Od(){if(_a)return _a;var t,i=cu,o=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(u=1;u<=M&&i[o-u]===d[p-u];u++);return _a=d.slice(t,1<u?1-u:void 0)}function va(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function kd(){return!1}function Fn(t){function i(o,u,d,p,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?xa:kd,this.isPropagationStopped=kd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=Fn(os),ho=se({},os,{view:0,detail:0}),Gg=Fn(ho),du,hu,po,ya=se({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(du=t.screenX-po.screenX,hu=t.screenY-po.screenY):hu=du=0,po=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),zd=Fn(ya),Wg=se({},ya,{dataTransfer:0}),Xg=Fn(Wg),Yg=se({},ho,{relatedTarget:0}),pu=Fn(Yg),jg=se({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),qg=Fn(jg),$g=se({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kg=Fn($g),Zg=se({},os,{data:0}),Bd=Fn(Zg),Jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=e_[t])?!!i[t]:!1}function mu(){return t_}var n_=se({},ho,{key:function(t){if(t.key){var i=Jg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i_=Fn(n_),r_=se({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Fn(r_),s_=se({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),o_=Fn(s_),a_=se({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=Fn(a_),u_=se({},ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=Fn(u_),f_=[9,13,27,32],gu=f&&"CompositionEvent"in window,mo=null;f&&"documentMode"in document&&(mo=document.documentMode);var d_=f&&"TextEvent"in window&&!mo,Vd=f&&(!gu||mo&&8<mo&&11>=mo),Gd=" ",Wd=!1;function Xd(t,i){switch(t){case"keyup":return f_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function h_(t,i){switch(t){case"compositionend":return Yd(i);case"keypress":return i.which!==32?null:(Wd=!0,Gd);case"textInput":return t=i.data,t===Gd&&Wd?null:t;default:return null}}function p_(t,i){if(as)return t==="compositionend"||!gu&&Xd(t,i)?(t=Od(),_a=cu=Ji=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vd&&i.locale!=="ko"?null:i.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!m_[t.type]:i==="textarea"}function qd(t,i,o,u){me(u),i=wa(i,"onChange"),0<i.length&&(o=new fu("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var go=null,_o=null;function g_(t){dh(t,0)}function Sa(t){var i=ds(t);if(wt(i))return t}function __(t,i){if(t==="change")return i}var $d=!1;if(f){var _u;if(f){var vu="oninput"in document;if(!vu){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),vu=typeof Kd.oninput=="function"}_u=vu}else _u=!1;$d=_u&&(!document.documentMode||9<document.documentMode)}function Zd(){go&&(go.detachEvent("onpropertychange",Jd),_o=go=null)}function Jd(t){if(t.propertyName==="value"&&Sa(_o)){var i=[];qd(i,_o,t,H(t)),Rn(g_,i)}}function v_(t,i,o){t==="focusin"?(Zd(),go=i,_o=o,go.attachEvent("onpropertychange",Jd)):t==="focusout"&&Zd()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sa(_o)}function y_(t,i){if(t==="click")return Sa(i)}function S_(t,i){if(t==="input"||t==="change")return Sa(i)}function M_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:M_;function vo(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ni(t[d],i[d]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,i){var o=Qd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function th(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?th(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function nh(){for(var t=window,i=mt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=mt(t.document)}return i}function xu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function E_(t){var i=nh(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&th(o.ownerDocument.documentElement,o)){if(u!==null&&xu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!t.extend&&p>u&&(d=u,u=p,p=d),d=eh(o,p);var M=eh(o,u);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=f&&"documentMode"in document&&11>=document.documentMode,ls=null,yu=null,xo=null,Su=!1;function ih(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Su||ls==null||ls!==mt(u)||(u=ls,"selectionStart"in u&&xu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&vo(xo,u)||(xo=u,u=wa(yu,"onSelect"),0<u.length&&(i=new fu("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=ls)))}function Ma(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var us={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Mu={},rh={};f&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Ea(t){if(Mu[t])return Mu[t];if(!us[t])return t;var i=us[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in rh)return Mu[t]=i[o];return t}var sh=Ea("animationend"),oh=Ea("animationiteration"),ah=Ea("animationstart"),lh=Ea("transitionend"),uh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){uh.set(t,i),l(i,[t])}for(var Eu=0;Eu<ch.length;Eu++){var Tu=ch[Eu],w_=Tu.toLowerCase(),A_=Tu[0].toUpperCase()+Tu.slice(1);Qi(w_,"on"+A_)}Qi(sh,"onAnimationEnd"),Qi(oh,"onAnimationIteration"),Qi(ah,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(lh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function fh(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,aa(u,i,void 0,t),t.currentTarget=null}function dh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var L=u[M],z=L.instance,ee=L.currentTarget;if(L=L.listener,z!==p&&d.isPropagationStopped())break e;fh(d,L,ee),p=z}else for(M=0;M<u.length;M++){if(L=u[M],z=L.instance,ee=L.currentTarget,L=L.listener,z!==p&&d.isPropagationStopped())break e;fh(d,L,ee),p=z}}}if(Cr)throw t=Yi,Cr=!1,Yi=null,t}function Ot(t,i){var o=i[Du];o===void 0&&(o=i[Du]=new Set);var u=t+"__bubble";o.has(u)||(hh(i,t,2,!1),o.add(u))}function wu(t,i,o){var u=0;i&&(u|=4),hh(o,t,u,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[Ta]){t[Ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(R_.has(o)||wu(o,!1,t),wu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,wu("selectionchange",!1,i))}}function hh(t,i,o,u){switch(Fd(i)){case 1:var d=Hg;break;case 4:d=Vg;break;default:d=lu}o=d.bind(null,i,o,t),d=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Au(t,i,o,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var L=u.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;M=M.return}for(;L!==null;){if(M=br(L),M===null)return;if(z=M.tag,z===5||z===6){u=p=M;continue e}L=L.parentNode}}u=u.return}Rn(function(){var ee=p,xe=H(o),Se=[];e:{var _e=uh.get(t);if(_e!==void 0){var Be=fu,Ke=t;switch(t){case"keypress":if(va(o)===0)break e;case"keydown":case"keyup":Be=i_;break;case"focusin":Ke="focus",Be=pu;break;case"focusout":Ke="blur",Be=pu;break;case"beforeblur":case"afterblur":Be=pu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=o_;break;case sh:case oh:case ah:Be=qg;break;case lh:Be=l_;break;case"scroll":Be=Gg;break;case"wheel":Be=c_;break;case"copy":case"cut":case"paste":Be=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Hd}var Qe=(i&4)!==0,jt=!Qe&&t==="scroll",$=Qe?_e!==null?_e+"Capture":null:_e;Qe=[];for(var V=ee,Z;V!==null;){Z=V;var Ce=Z.stateNode;if(Z.tag===5&&Ce!==null&&(Z=Ce,$!==null&&(Ce=Sn(V,$),Ce!=null&&Qe.push(Mo(V,Ce,Z)))),jt)break;V=V.return}0<Qe.length&&(_e=new Be(_e,Ke,null,o,xe),Se.push({event:_e,listeners:Qe}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",_e&&o!==at&&(Ke=o.relatedTarget||o.fromElement)&&(br(Ke)||Ke[Ci]))break e;if((Be||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(Ke=o.relatedTarget||o.toElement,Be=ee,Ke=Ke?br(Ke):null,Ke!==null&&(jt=hi(Ke),Ke!==jt||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(Be=null,Ke=ee),Be!==Ke)){if(Qe=zd,Ce="onMouseLeave",$="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Hd,Ce="onPointerLeave",$="onPointerEnter",V="pointer"),jt=Be==null?_e:ds(Be),Z=Ke==null?_e:ds(Ke),_e=new Qe(Ce,V+"leave",Be,o,xe),_e.target=jt,_e.relatedTarget=Z,Ce=null,br(xe)===ee&&(Qe=new Qe($,V+"enter",Ke,o,xe),Qe.target=Z,Qe.relatedTarget=jt,Ce=Qe),jt=Ce,Be&&Ke)t:{for(Qe=Be,$=Ke,V=0,Z=Qe;Z;Z=cs(Z))V++;for(Z=0,Ce=$;Ce;Ce=cs(Ce))Z++;for(;0<V-Z;)Qe=cs(Qe),V--;for(;0<Z-V;)$=cs($),Z--;for(;V--;){if(Qe===$||$!==null&&Qe===$.alternate)break t;Qe=cs(Qe),$=cs($)}Qe=null}else Qe=null;Be!==null&&ph(Se,_e,Be,Qe,!1),Ke!==null&&jt!==null&&ph(Se,jt,Ke,Qe,!0)}}e:{if(_e=ee?ds(ee):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var et=__;else if(jd(_e))if($d)et=S_;else{et=x_;var it=v_}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(et=y_);if(et&&(et=et(t,ee))){qd(Se,et,o,xe);break e}it&&it(t,_e,ee),t==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Je(_e,"number",_e.value)}switch(it=ee?ds(ee):window,t){case"focusin":(jd(it)||it.contentEditable==="true")&&(ls=it,yu=ee,xo=null);break;case"focusout":xo=yu=ls=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,ih(Se,o,xe);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":ih(Se,o,xe)}var rt;if(gu)e:{switch(t){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else as?Xd(t,o)&&(ut="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Vd&&o.locale!=="ko"&&(as||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&as&&(rt=Od()):(Ji=xe,cu="value"in Ji?Ji.value:Ji.textContent,as=!0)),it=wa(ee,ut),0<it.length&&(ut=new Bd(ut,t,null,o,xe),Se.push({event:ut,listeners:it}),rt?ut.data=rt:(rt=Yd(o),rt!==null&&(ut.data=rt)))),(rt=d_?h_(t,o):p_(t,o))&&(ee=wa(ee,"onBeforeInput"),0<ee.length&&(xe=new Bd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:ee}),xe.data=rt))}dh(Se,i)})}function Mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function wa(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Sn(t,o),p!=null&&u.unshift(Mo(t,p,d)),p=Sn(t,i),p!=null&&u.push(Mo(t,p,d))),t=t.return}return u}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ph(t,i,o,u,d){for(var p=i._reactName,M=[];o!==null&&o!==u;){var L=o,z=L.alternate,ee=L.stateNode;if(z!==null&&z===u)break;L.tag===5&&ee!==null&&(L=ee,d?(z=Sn(o,p),z!=null&&M.unshift(Mo(o,z,L))):d||(z=Sn(o,p),z!=null&&M.push(Mo(o,z,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var C_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function mh(t){return(typeof t=="string"?t:""+t).replace(C_,`
`).replace(b_,"")}function Aa(t,i,o){if(i=mh(i),mh(t)!==i&&o)throw Error(n(425))}function Ra(){}var Ru=null,Cu=null;function bu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,P_=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(t){return gh.resolve(null).then(t).catch(D_)}:Pu;function D_(t){setTimeout(function(){throw t})}function Lu(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),fo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);fo(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function _h(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),mi="__reactFiber$"+fs,Eo="__reactProps$"+fs,Ci="__reactContainer$"+fs,Du="__reactEvents$"+fs,U_="__reactListeners$"+fs,I_="__reactHandles$"+fs;function br(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ci]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=_h(t);t!==null;){if(o=t[mi])return o;t=_h(t)}return i}t=o,o=t.parentNode}return null}function To(t){return t=t[mi]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ca(t){return t[Eo]||null}var Uu=[],hs=-1;function tr(t){return{current:t}}function kt(t){0>hs||(t.current=Uu[hs],Uu[hs]=null,hs--)}function Nt(t,i){hs++,Uu[hs]=t.current,t.current=i}var nr={},pn=tr(nr),Cn=tr(!1),Pr=nr;function ps(t,i){var o=t.type.contextTypes;if(!o)return nr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function bn(t){return t=t.childContextTypes,t!=null}function ba(){kt(Cn),kt(pn)}function vh(t,i,o){if(pn.current!==nr)throw Error(n(168));Nt(pn,i),Nt(Cn,o)}function xh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,ye(t)||"Unknown",d));return se({},o,u)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Pr=pn.current,Nt(pn,t),Nt(Cn,Cn.current),!0}function yh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=xh(t,i,Pr),u.__reactInternalMemoizedMergedChildContext=t,kt(Cn),kt(pn),Nt(pn,t)):kt(Cn),Nt(Cn,o)}var bi=null,La=!1,Iu=!1;function Sh(t){bi===null?bi=[t]:bi.push(t)}function N_(t){La=!0,Sh(t)}function ir(){if(!Iu&&bi!==null){Iu=!0;var t=0,i=Et;try{var o=bi;for(Et=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}bi=null,La=!1}catch(d){throw bi!==null&&(bi=bi.slice(t+1)),da(Ee,ir),d}finally{Et=i,Iu=!1}}return null}var ms=[],gs=0,Da=null,Ua=0,Xn=[],Yn=0,Lr=null,Pi=1,Li="";function Dr(t,i){ms[gs++]=Ua,ms[gs++]=Da,Da=t,Ua=i}function Mh(t,i,o){Xn[Yn++]=Pi,Xn[Yn++]=Li,Xn[Yn++]=Lr,Lr=t;var u=Pi;t=Li;var d=32-dt(u)-1;u&=~(1<<d),o+=1;var p=32-dt(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Pi=1<<32-dt(i)+d|o<<d|u,Li=p+t}else Pi=1<<p|o<<d|u,Li=t}function Nu(t){t.return!==null&&(Dr(t,1),Mh(t,1,0))}function Fu(t){for(;t===Da;)Da=ms[--gs],ms[gs]=null,Ua=ms[--gs],ms[gs]=null;for(;t===Lr;)Lr=Xn[--Yn],Xn[Yn]=null,Li=Xn[--Yn],Xn[Yn]=null,Pi=Xn[--Yn],Xn[Yn]=null}var On=null,kn=null,Bt=!1,ii=null;function Eh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,On=t,kn=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ku(t){if(Bt){var i=kn;if(i){var o=i;if(!Th(t,i)){if(Ou(t))throw Error(n(418));i=er(o.nextSibling);var u=On;i&&Th(t,i)?Eh(u,o):(t.flags=t.flags&-4097|2,Bt=!1,On=t)}}else{if(Ou(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,On=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Ia(t){if(t!==On)return!1;if(!Bt)return wh(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!bu(t.type,t.memoizedProps)),i&&(i=kn)){if(Ou(t))throw Ah(),Error(n(418));for(;i;)Eh(t,i),i=er(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?er(t.stateNode.nextSibling):null;return!0}function Ah(){for(var t=kn;t;)t=er(t.nextSibling)}function _s(){kn=On=null,Bt=!1}function zu(t){ii===null?ii=[t]:ii.push(t)}var F_=b.ReactCurrentBatchConfig;function wo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=d.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Na(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Rh(t){var i=t._init;return i(t._payload)}function Ch(t){function i($,V){if(t){var Z=$.deletions;Z===null?($.deletions=[V],$.flags|=16):Z.push(V)}}function o($,V){if(!t)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function u($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function d($,V){return $=fr($,V),$.index=0,$.sibling=null,$}function p($,V,Z){return $.index=Z,t?(Z=$.alternate,Z!==null?(Z=Z.index,Z<V?($.flags|=2,V):Z):($.flags|=2,V)):($.flags|=1048576,V)}function M($){return t&&$.alternate===null&&($.flags|=2),$}function L($,V,Z,Ce){return V===null||V.tag!==6?(V=Pc(Z,$.mode,Ce),V.return=$,V):(V=d(V,Z),V.return=$,V)}function z($,V,Z,Ce){var et=Z.type;return et===I?xe($,V,Z.props.children,Ce,Z.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===oe&&Rh(et)===V.type)?(Ce=d(V,Z.props),Ce.ref=wo($,V,Z),Ce.return=$,Ce):(Ce=sl(Z.type,Z.key,Z.props,null,$.mode,Ce),Ce.ref=wo($,V,Z),Ce.return=$,Ce)}function ee($,V,Z,Ce){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=Lc(Z,$.mode,Ce),V.return=$,V):(V=d(V,Z.children||[]),V.return=$,V)}function xe($,V,Z,Ce,et){return V===null||V.tag!==7?(V=Br(Z,$.mode,Ce,et),V.return=$,V):(V=d(V,Z),V.return=$,V)}function Se($,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Pc(""+V,$.mode,Z),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return Z=sl(V.type,V.key,V.props,null,$.mode,Z),Z.ref=wo($,null,V),Z.return=$,Z;case k:return V=Lc(V,$.mode,Z),V.return=$,V;case oe:var Ce=V._init;return Se($,Ce(V._payload),Z)}if(he(V)||ce(V))return V=Br(V,$.mode,Z,null),V.return=$,V;Na($,V)}return null}function _e($,V,Z,Ce){var et=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return et!==null?null:L($,V,""+Z,Ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case W:return Z.key===et?z($,V,Z,Ce):null;case k:return Z.key===et?ee($,V,Z,Ce):null;case oe:return et=Z._init,_e($,V,et(Z._payload),Ce)}if(he(Z)||ce(Z))return et!==null?null:xe($,V,Z,Ce,null);Na($,Z)}return null}function Be($,V,Z,Ce,et){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return $=$.get(Z)||null,L(V,$,""+Ce,et);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case W:return $=$.get(Ce.key===null?Z:Ce.key)||null,z(V,$,Ce,et);case k:return $=$.get(Ce.key===null?Z:Ce.key)||null,ee(V,$,Ce,et);case oe:var it=Ce._init;return Be($,V,Z,it(Ce._payload),et)}if(he(Ce)||ce(Ce))return $=$.get(Z)||null,xe(V,$,Ce,et,null);Na(V,Ce)}return null}function Ke($,V,Z,Ce){for(var et=null,it=null,rt=V,ut=V=0,an=null;rt!==null&&ut<Z.length;ut++){rt.index>ut?(an=rt,rt=null):an=rt.sibling;var At=_e($,rt,Z[ut],Ce);if(At===null){rt===null&&(rt=an);break}t&&rt&&At.alternate===null&&i($,rt),V=p(At,V,ut),it===null?et=At:it.sibling=At,it=At,rt=an}if(ut===Z.length)return o($,rt),Bt&&Dr($,ut),et;if(rt===null){for(;ut<Z.length;ut++)rt=Se($,Z[ut],Ce),rt!==null&&(V=p(rt,V,ut),it===null?et=rt:it.sibling=rt,it=rt);return Bt&&Dr($,ut),et}for(rt=u($,rt);ut<Z.length;ut++)an=Be(rt,$,ut,Z[ut],Ce),an!==null&&(t&&an.alternate!==null&&rt.delete(an.key===null?ut:an.key),V=p(an,V,ut),it===null?et=an:it.sibling=an,it=an);return t&&rt.forEach(function(dr){return i($,dr)}),Bt&&Dr($,ut),et}function Qe($,V,Z,Ce){var et=ce(Z);if(typeof et!="function")throw Error(n(150));if(Z=et.call(Z),Z==null)throw Error(n(151));for(var it=et=null,rt=V,ut=V=0,an=null,At=Z.next();rt!==null&&!At.done;ut++,At=Z.next()){rt.index>ut?(an=rt,rt=null):an=rt.sibling;var dr=_e($,rt,At.value,Ce);if(dr===null){rt===null&&(rt=an);break}t&&rt&&dr.alternate===null&&i($,rt),V=p(dr,V,ut),it===null?et=dr:it.sibling=dr,it=dr,rt=an}if(At.done)return o($,rt),Bt&&Dr($,ut),et;if(rt===null){for(;!At.done;ut++,At=Z.next())At=Se($,At.value,Ce),At!==null&&(V=p(At,V,ut),it===null?et=At:it.sibling=At,it=At);return Bt&&Dr($,ut),et}for(rt=u($,rt);!At.done;ut++,At=Z.next())At=Be(rt,$,ut,At.value,Ce),At!==null&&(t&&At.alternate!==null&&rt.delete(At.key===null?ut:At.key),V=p(At,V,ut),it===null?et=At:it.sibling=At,it=At);return t&&rt.forEach(function(mv){return i($,mv)}),Bt&&Dr($,ut),et}function jt($,V,Z,Ce){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case W:e:{for(var et=Z.key,it=V;it!==null;){if(it.key===et){if(et=Z.type,et===I){if(it.tag===7){o($,it.sibling),V=d(it,Z.props.children),V.return=$,$=V;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===oe&&Rh(et)===it.type){o($,it.sibling),V=d(it,Z.props),V.ref=wo($,it,Z),V.return=$,$=V;break e}o($,it);break}else i($,it);it=it.sibling}Z.type===I?(V=Br(Z.props.children,$.mode,Ce,Z.key),V.return=$,$=V):(Ce=sl(Z.type,Z.key,Z.props,null,$.mode,Ce),Ce.ref=wo($,V,Z),Ce.return=$,$=Ce)}return M($);case k:e:{for(it=Z.key;V!==null;){if(V.key===it)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){o($,V.sibling),V=d(V,Z.children||[]),V.return=$,$=V;break e}else{o($,V);break}else i($,V);V=V.sibling}V=Lc(Z,$.mode,Ce),V.return=$,$=V}return M($);case oe:return it=Z._init,jt($,V,it(Z._payload),Ce)}if(he(Z))return Ke($,V,Z,Ce);if(ce(Z))return Qe($,V,Z,Ce);Na($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(o($,V.sibling),V=d(V,Z),V.return=$,$=V):(o($,V),V=Pc(Z,$.mode,Ce),V.return=$,$=V),M($)):o($,V)}return jt}var vs=Ch(!0),bh=Ch(!1),Fa=tr(null),Oa=null,xs=null,Bu=null;function Hu(){Bu=xs=Oa=null}function Vu(t){var i=Fa.current;kt(Fa),t._currentValue=i}function Gu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function ys(t,i){Oa=t,Bu=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Bu!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Oa===null)throw Error(n(308));xs=t,Oa.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Ur=null;function Wu(t){Ur===null?Ur=[t]:Ur.push(t)}function Ph(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Wu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Di(t,u)}function Di(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Di(t,o)}return d=u.interleaved,d===null?(i.next=i,Wu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Di(t,o)}function ka(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}function Dh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function za(t,i,o,u){var d=t.updateQueue;rr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var z=L,ee=z.next;z.next=null,M===null?p=ee:M.next=ee,M=z;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,L=xe.lastBaseUpdate,L!==M&&(L===null?xe.firstBaseUpdate=ee:L.next=ee,xe.lastBaseUpdate=z))}if(p!==null){var Se=d.baseState;M=0,xe=ee=z=null,L=p;do{var _e=L.lane,Be=L.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ke=t,Qe=L;switch(_e=i,Be=o,Qe.tag){case 1:if(Ke=Qe.payload,typeof Ke=="function"){Se=Ke.call(Be,Se,_e);break e}Se=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Qe.payload,_e=typeof Ke=="function"?Ke.call(Be,Se,_e):Ke,_e==null)break e;Se=se({},Se,_e);break e;case 2:rr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[L]:_e.push(L))}else Be={eventTime:Be,lane:_e,tag:L.tag,payload:L.payload,callback:L.callback,next:null},xe===null?(ee=xe=Be,z=Se):xe=xe.next=Be,M|=_e;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;_e=L,L=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=ee,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Fr|=M,t.lanes=M,t.memoizedState=Se}}function Uh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var Ao={},gi=tr(Ao),Ro=tr(Ao),Co=tr(Ao);function Ir(t){if(t===Ao)throw Error(n(174));return t}function Yu(t,i){switch(Nt(Co,i),Nt(Ro,t),Nt(gi,Ao),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:le(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=le(i,t)}kt(gi),Nt(gi,i)}function Ss(){kt(gi),kt(Ro),kt(Co)}function Ih(t){Ir(Co.current);var i=Ir(gi.current),o=le(i,t.type);i!==o&&(Nt(Ro,t),Nt(gi,o))}function ju(t){Ro.current===t&&(kt(gi),kt(Ro))}var Ht=tr(0);function Ba(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qu=[];function $u(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var Ha=b.ReactCurrentDispatcher,Ku=b.ReactCurrentBatchConfig,Nr=0,Vt=null,Kt=null,sn=null,Va=!1,bo=!1,Po=0,O_=0;function mn(){throw Error(n(321))}function Zu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ni(t[o],i[o]))return!1;return!0}function Ju(t,i,o,u,d,p){if(Nr=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=t===null||t.memoizedState===null?H_:V_,t=o(u,d),bo){p=0;do{if(bo=!1,Po=0,25<=p)throw Error(n(301));p+=1,sn=Kt=null,i.updateQueue=null,Ha.current=G_,t=o(u,d)}while(bo)}if(Ha.current=Xa,i=Kt!==null&&Kt.next!==null,Nr=0,sn=Kt=Vt=null,Va=!1,i)throw Error(n(300));return t}function Qu(){var t=Po!==0;return Po=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=t:sn=sn.next=t,sn}function qn(){if(Kt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=sn===null?Vt.memoizedState:sn.next;if(i!==null)sn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},sn===null?Vt.memoizedState=sn=t:sn=sn.next=t}return sn}function Lo(t,i){return typeof i=="function"?i(t):i}function ec(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Kt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var L=M=null,z=null,ee=p;do{var xe=ee.lane;if((Nr&xe)===xe)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:t(u,ee.action);else{var Se={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(L=z=Se,M=u):z=z.next=Se,Vt.lanes|=xe,Fr|=xe}ee=ee.next}while(ee!==null&&ee!==p);z===null?M=u:z.next=L,ni(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=z,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Vt.lanes|=p,Fr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function tc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);ni(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Nh(){}function Fh(t,i){var o=Vt,u=qn(),d=i(),p=!ni(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,nc(zh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Do(9,kh.bind(null,o,u,d,i),void 0,null),on===null)throw Error(n(349));(Nr&30)!==0||Oh(o,i,d)}return d}function Oh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function kh(t,i,o,u){i.value=o,i.getSnapshot=u,Bh(i)&&Hh(t)}function zh(t,i,o){return o(function(){Bh(i)&&Hh(t)})}function Bh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ni(t,o)}catch{return!0}}function Hh(t){var i=Di(t,1);i!==null&&ai(i,t,1,-1)}function Vh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},i.queue=t,t=t.dispatch=B_.bind(null,Vt,t),[i.memoizedState,t]}function Do(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Gh(){return qn().memoizedState}function Ga(t,i,o,u){var d=_i();Vt.flags|=t,d.memoizedState=Do(1|i,o,void 0,u===void 0?null:u)}function Wa(t,i,o,u){var d=qn();u=u===void 0?null:u;var p=void 0;if(Kt!==null){var M=Kt.memoizedState;if(p=M.destroy,u!==null&&Zu(u,M.deps)){d.memoizedState=Do(i,o,p,u);return}}Vt.flags|=t,d.memoizedState=Do(1|i,o,p,u)}function Wh(t,i){return Ga(8390656,8,t,i)}function nc(t,i){return Wa(2048,8,t,i)}function Xh(t,i){return Wa(4,2,t,i)}function Yh(t,i){return Wa(4,4,t,i)}function jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,Wa(4,4,jh.bind(null,i,t),o)}function ic(){}function $h(t,i){var o=qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Kh(t,i){var o=qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Zh(t,i,o){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(ni(o,i)||(o=Ut(),Vt.lanes|=o,Fr|=o,t.baseState=!0),i)}function k_(t,i){var o=Et;Et=o!==0&&4>o?o:4,t(!0);var u=Ku.transition;Ku.transition={};try{t(!1),i()}finally{Et=o,Ku.transition=u}}function Jh(){return qn().memoizedState}function z_(t,i,o){var u=ur(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))ep(i,o);else if(o=Ph(t,i,o,u),o!==null){var d=Tn();ai(o,t,u,d),tp(o,i,u)}}function B_(t,i,o){var u=ur(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))ep(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,o);if(d.hasEagerState=!0,d.eagerState=L,ni(L,M)){var z=i.interleaved;z===null?(d.next=d,Wu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}o=Ph(t,i,d,u),o!==null&&(d=Tn(),ai(o,t,u,d),tp(o,i,u))}}function Qh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function ep(t,i){bo=Va=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function tp(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}var Xa={readContext:jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},H_={readContext:jn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Wh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ga(4194308,4,jh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ga(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ga(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=_i();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=z_.bind(null,Vt,t),[u.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Vh,useDebugValue:ic,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Vh(!1),i=t[0];return t=k_.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Vt,d=_i();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));(Nr&30)!==0||Oh(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Wh(zh.bind(null,u,p,t),[t]),u.flags|=2048,Do(9,kh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=on.identifierPrefix;if(Bt){var o=Li,u=Pi;o=(u&~(1<<32-dt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Po++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=O_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},V_={readContext:jn,useCallback:$h,useContext:jn,useEffect:nc,useImperativeHandle:qh,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:Kh,useReducer:ec,useRef:Gh,useState:function(){return ec(Lo)},useDebugValue:ic,useDeferredValue:function(t){var i=qn();return Zh(i,Kt.memoizedState,t)},useTransition:function(){var t=ec(Lo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Fh,useId:Jh,unstable_isNewReconciler:!1},G_={readContext:jn,useCallback:$h,useContext:jn,useEffect:nc,useImperativeHandle:qh,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:Kh,useReducer:tc,useRef:Gh,useState:function(){return tc(Lo)},useDebugValue:ic,useDeferredValue:function(t){var i=qn();return Kt===null?i.memoizedState=t:Zh(i,Kt.memoizedState,t)},useTransition:function(){var t=tc(Lo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Fh,useId:Jh,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function rc(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ya={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Tn(),d=ur(t),p=Ui(u,d);p.payload=i,o!=null&&(p.callback=o),i=sr(t,p,d),i!==null&&(ai(i,t,d,u),ka(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Tn(),d=ur(t),p=Ui(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=sr(t,p,d),i!==null&&(ai(i,t,d,u),ka(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),u=ur(t),d=Ui(o,u);d.tag=2,i!=null&&(d.callback=i),i=sr(t,d,u),i!==null&&(ai(i,t,u,o),ka(i,t,u))}};function np(t,i,o,u,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!vo(o,u)||!vo(d,p):!0}function ip(t,i,o){var u=!1,d=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(d=bn(i)?Pr:pn.current,u=i.contextTypes,p=(u=u!=null)?ps(t,d):nr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ya,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function rp(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ya.enqueueReplaceState(i,i.state,null)}function sc(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Xu(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=jn(p):(p=bn(i)?Pr:pn.current,d.context=ps(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(rc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ya.enqueueReplaceState(d,d.state,null),za(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var o="",u=i;do o+=pe(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function oc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ac(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var W_=typeof WeakMap=="function"?WeakMap:Map;function sp(t,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Qa||(Qa=!0,Mc=u),ac(t,i)},o}function op(t,i,o){o=Ui(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ac(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ac(t,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function ap(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new W_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=rv.bind(null,t,i,o),i.then(t,t))}function lp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function up(t,i,o,u,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var X_=b.ReactCurrentOwner,Pn=!1;function En(t,i,o,u){i.child=t===null?bh(i,null,o,u):vs(i,t.child,o,u)}function cp(t,i,o,u,d){o=o.render;var p=i.ref;return ys(i,d),u=Ju(t,i,o,u,p,d),o=Qu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ii(t,i,d)):(Bt&&o&&Nu(i),i.flags|=1,En(t,i,u,d),i.child)}function fp(t,i,o,u,d){if(t===null){var p=o.type;return typeof p=="function"&&!bc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,dp(t,i,p,u,d)):(t=sl(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:vo,o(M,u)&&t.ref===i.ref)return Ii(t,i,d)}return i.flags|=1,t=fr(p,u),t.ref=i.ref,t.return=i,i.child=t}function dp(t,i,o,u,d){if(t!==null){var p=t.memoizedProps;if(vo(p,u)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Ii(t,i,d)}return lc(t,i,o,u,d)}function hp(t,i,o){var u=i.pendingProps,d=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ts,zn),zn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ts,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Nt(Ts,zn),zn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Nt(Ts,zn),zn|=u;return En(t,i,d,o),i.child}function pp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function lc(t,i,o,u,d){var p=bn(o)?Pr:pn.current;return p=ps(i,p),ys(i,d),o=Ju(t,i,o,u,p,d),u=Qu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ii(t,i,d)):(Bt&&u&&Nu(i),i.flags|=1,En(t,i,o,d),i.child)}function mp(t,i,o,u,d){if(bn(o)){var p=!0;Pa(i)}else p=!1;if(ys(i,d),i.stateNode===null)qa(t,i),ip(i,o,u),sc(i,o,u,d),u=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var z=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=jn(ee):(ee=bn(o)?Pr:pn.current,ee=ps(i,ee));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==u||z!==ee)&&rp(i,M,u,ee),rr=!1;var _e=i.memoizedState;M.state=_e,za(i,u,M,d),z=i.memoizedState,L!==u||_e!==z||Cn.current||rr?(typeof xe=="function"&&(rc(i,o,xe,u),z=i.memoizedState),(L=rr||np(i,o,L,u,_e,z,ee))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),M.props=u,M.state=z,M.context=ee,u=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Lh(t,i),L=i.memoizedProps,ee=i.type===i.elementType?L:ri(i.type,L),M.props=ee,Se=i.pendingProps,_e=M.context,z=o.contextType,typeof z=="object"&&z!==null?z=jn(z):(z=bn(o)?Pr:pn.current,z=ps(i,z));var Be=o.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||_e!==z)&&rp(i,M,u,z),rr=!1,_e=i.memoizedState,M.state=_e,za(i,u,M,d);var Ke=i.memoizedState;L!==Se||_e!==Ke||Cn.current||rr?(typeof Be=="function"&&(rc(i,o,Be,u),Ke=i.memoizedState),(ee=rr||np(i,o,ee,u,_e,Ke,z)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ke,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ke,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ke),M.props=u,M.state=Ke,M.context=z,u=ee):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),u=!1)}return uc(t,i,o,u,p,d)}function uc(t,i,o,u,d,p){pp(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&yh(i,o,!1),Ii(t,i,p);u=i.stateNode,X_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=vs(i,t.child,null,p),i.child=vs(i,null,L,p)):En(t,i,L,p),i.memoizedState=u.state,d&&yh(i,o,!0),i.child}function gp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),Yu(t,i.containerInfo)}function _p(t,i,o,u,d){return _s(),zu(d),i.flags|=256,En(t,i,o,u),i.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var u=i.pendingProps,d=Ht.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(d&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(Ht,d&1),t===null)return ku(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=ol(M,u,0,null),t=Br(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=fc(o),i.memoizedState=cc,t):dc(i,M));if(d=t.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return Y_(t,i,M,u,L,d,o);if(p){p=u.fallback,M=i.mode,d=t.child,L=d.sibling;var z={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=fr(d,z),u.subtreeFlags=d.subtreeFlags&14680064),L!==null?p=fr(L,p):(p=Br(p,M,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=t.child.memoizedState,M=M===null?fc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=cc,u}return p=t.child,t=p.sibling,u=fr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function dc(t,i){return i=ol({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ja(t,i,o,u){return u!==null&&zu(u),vs(i,t.child,null,o),t=dc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y_(t,i,o,u,d,p,M){if(o)return i.flags&256?(i.flags&=-257,u=oc(Error(n(422))),ja(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=ol({mode:"visible",children:u.children},d,0,null),p=Br(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&vs(i,t.child,null,M),i.child.memoizedState=fc(M),i.memoizedState=cc,p);if((i.mode&1)===0)return ja(t,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var L=u.dgst;return u=L,p=Error(n(419)),u=oc(p,u,void 0),ja(t,i,M,u)}if(L=(M&t.childLanes)!==0,Pn||L){if(u=on,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Di(t,d),ai(u,t,d,-1))}return Cc(),u=oc(Error(n(421))),ja(t,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=sv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,kn=er(d.nextSibling),On=i,Bt=!0,ii=null,t!==null&&(Xn[Yn++]=Pi,Xn[Yn++]=Li,Xn[Yn++]=Lr,Pi=t.id,Li=t.overflow,Lr=i),i=dc(i,u.children),i.flags|=4096,i)}function xp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Gu(t.return,i,o)}function hc(t,i,o,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function yp(t,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(En(t,i,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,o,i);else if(t.tag===19)xp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Nt(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ba(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),hc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ba(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}hc(i,!0,o,null,p);break;case"together":hc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ii(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function j_(t,i,o){switch(i.tag){case 3:gp(i),_s();break;case 5:Ih(i);break;case 1:bn(i.type)&&Pa(i);break;case 4:Yu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Nt(Fa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(Nt(Ht,Ht.current&1),t=Ii(t,i,o),t!==null?t.sibling:null);Nt(Ht,Ht.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return yp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,hp(t,i,o)}return Ii(t,i,o)}var Sp,pc,Mp,Ep;Sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},pc=function(){},Mp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Ir(gi.current);var p=null;switch(o){case"input":d=F(t,d),u=F(t,u),p=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),p=[];break;case"textarea":d=lt(t,d),u=lt(t,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ra)}qe(o,u);var M;o=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var L=d[ee];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in u){var z=u[ee];if(L=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&z!==L&&(z!=null||L!=null))if(ee==="style")if(L){for(M in L)!L.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in z)z.hasOwnProperty(M)&&L[M]!==z[M]&&(o||(o={}),o[M]=z[M])}else o||(p||(p=[]),p.push(ee,o)),o=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,L=L?L.__html:void 0,z!=null&&L!==z&&(p=p||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Ot("scroll",t),p||L===z||(p=[])):(p=p||[]).push(ee,z))}o&&(p=p||[]).push("style",o);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},Ep=function(t,i,o,u){o!==u&&(i.flags|=4)};function Uo(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function q_(t,i,o){var u=i.pendingProps;switch(Fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return bn(i.type)&&ba(),gn(i),null;case 3:return u=i.stateNode,Ss(),kt(Cn),kt(pn),$u(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ia(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(wc(ii),ii=null))),pc(t,i),gn(i),null;case 5:ju(i);var d=Ir(Co.current);if(o=i.type,t!==null&&i.stateNode!=null)Mp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Ir(gi.current),Ia(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[mi]=i,u[Eo]=p,t=(i.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<yo.length;d++)Ot(yo[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Yt(u,p),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ot("invalid",u);break;case"textarea":P(u,p),Ot("invalid",u)}qe(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?u.textContent!==L&&(p.suppressHydrationWarning!==!0&&Aa(u.textContent,L,t),d=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&Aa(u.textContent,L,t),d=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ot("scroll",u)}switch(o){case"input":Ct(u),Re(u,p,!0);break;case"textarea":Ct(u),j(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ra)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ae(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(o,{is:u.is}):(t=M.createElement(o),o==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,o),t[mi]=i,t[Eo]=u,Sp(t,i,!1,!1),i.stateNode=t;e:{switch(M=Pe(o,u),o){case"dialog":Ot("cancel",t),Ot("close",t),d=u;break;case"iframe":case"object":case"embed":Ot("load",t),d=u;break;case"video":case"audio":for(d=0;d<yo.length;d++)Ot(yo[d],t);d=u;break;case"source":Ot("error",t),d=u;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),d=u;break;case"details":Ot("toggle",t),d=u;break;case"input":Yt(t,u),d=F(t,u),Ot("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),Ot("invalid",t);break;case"textarea":P(t,u),d=lt(t,u),Ot("invalid",t);break;default:d=u}qe(o,d),L=d;for(p in L)if(L.hasOwnProperty(p)){var z=L[p];p==="style"?Oe(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ve(t,z)):p==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Le(t,z):typeof z=="number"&&Le(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ot("scroll",t):z!=null&&D(t,p,z,M))}switch(o){case"input":Ct(t),Re(t,u,!1);break;case"textarea":Ct(t),j(t);break;case"option":u.value!=null&&t.setAttribute("value",""+be(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?we(t,!!u.multiple,p,!1):u.defaultValue!=null&&we(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ra)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)Ep(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ir(Co.current),Ir(gi.current),Ia(i)){if(u=i.stateNode,o=i.memoizedProps,u[mi]=i,(p=u.nodeValue!==o)&&(t=On,t!==null))switch(t.tag){case 3:Aa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return gn(i),null;case 13:if(kt(Ht),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ah(),_s(),i.flags|=98560,p=!1;else if(p=Ia(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else ii!==null&&(wc(ii),ii=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Zt===0&&(Zt=3):Cc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ss(),pc(t,i),t===null&&So(i.stateNode.containerInfo),gn(i),null;case 10:return Vu(i.type._context),gn(i),null;case 17:return bn(i.type)&&ba(),gn(i),null;case 19:if(kt(Ht),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Uo(p,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ba(t),M!==null){for(i.flags|=128,Uo(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Nt(Ht,Ht.current&1|2),i.child}t=t.sibling}p.tail!==null&&K()>ws&&(i.flags|=128,u=!0,Uo(p,!1),i.lanes=4194304)}else{if(!u)if(t=Ba(M),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Uo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Bt)return gn(i),null}else 2*K()-p.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,u=!0,Uo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,o=Ht.current,Nt(Ht,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return Rc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function $_(t,i){switch(Fu(i),i.tag){case 1:return bn(i.type)&&ba(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),kt(Cn),kt(pn),$u(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return ju(i),null;case 13:if(kt(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Ss(),null;case 10:return Vu(i.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var $a=!1,_n=!1,K_=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Es(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(t,i,u)}else o.current=null}function mc(t,i,o){try{o()}catch(u){Wt(t,i,u)}}var Tp=!1;function Z_(t,i){if(Ru=ma,t=nh(),xu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,L=-1,z=-1,ee=0,xe=0,Se=t,_e=null;t:for(;;){for(var Be;Se!==o||d!==0&&Se.nodeType!==3||(L=M+d),Se!==p||u!==0&&Se.nodeType!==3||(z=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Be=Se.firstChild)!==null;)_e=Se,Se=Be;for(;;){if(Se===t)break t;if(_e===o&&++ee===d&&(L=M),_e===p&&++xe===u&&(z=M),(Be=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Be}o=L===-1||z===-1?null:{start:L,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cu={focusedElem:t,selectionRange:o},ma=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Qe=Ke.memoizedProps,jt=Ke.memoizedState,$=i.stateNode,V=$.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ri(i.type,Qe),jt);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Wt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return Ke=Tp,Tp=!1,Ke}function Io(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&mc(i,o,p)}d=d.next}while(d!==u)}}function Ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function gc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[Eo],delete i[Du],delete i[U_],delete i[I_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ap(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ra));else if(u!==4&&(t=t.child,t!==null))for(_c(t,i,o),t=t.sibling;t!==null;)_c(t,i,o),t=t.sibling}function vc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(vc(t,i,o),t=t.sibling;t!==null;)vc(t,i,o),t=t.sibling}var cn=null,si=!1;function or(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:_n||Es(o,i);case 6:var u=cn,d=si;cn=null,or(t,i,o),cn=u,si=d,cn!==null&&(si?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(si?(t=cn,o=o.stateNode,t.nodeType===8?Lu(t.parentNode,o):t.nodeType===1&&Lu(t,o),fo(t)):Lu(cn,o.stateNode));break;case 4:u=cn,d=si,cn=o.stateNode.containerInfo,si=!0,or(t,i,o),cn=u,si=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&mc(o,i,M),d=d.next}while(d!==u)}or(t,i,o);break;case 1:if(!_n&&(Es(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(L){Wt(o,i,L)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,or(t,i,o),_n=u):or(t,i,o);break;default:or(t,i,o)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new K_),i.forEach(function(u){var d=ov.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function oi(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:cn=L.stateNode,si=!1;break e;case 3:cn=L.stateNode.containerInfo,si=!0;break e;case 4:cn=L.stateNode.containerInfo,si=!0;break e}L=L.return}if(cn===null)throw Error(n(160));Cp(p,M,d),cn=null,si=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ee){Wt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,t),i=i.sibling}function Pp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),vi(t),u&4){try{Io(3,t,t.return),Ka(3,t)}catch(Qe){Wt(t,t.return,Qe)}try{Io(5,t,t.return)}catch(Qe){Wt(t,t.return,Qe)}}break;case 1:oi(i,t),vi(t),u&512&&o!==null&&Es(o,o.return);break;case 5:if(oi(i,t),vi(t),u&512&&o!==null&&Es(o,o.return),t.flags&32){var d=t.stateNode;try{Le(d,"")}catch(Qe){Wt(t,t.return,Qe)}}if(u&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,L=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&Te(d,p),Pe(L,M);var ee=Pe(L,p);for(M=0;M<z.length;M+=2){var xe=z[M],Se=z[M+1];xe==="style"?Oe(d,Se):xe==="dangerouslySetInnerHTML"?Ve(d,Se):xe==="children"?Le(d,Se):D(d,xe,Se,ee)}switch(L){case"input":Ue(d,p);break;case"textarea":E(d,p);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Be=p.value;Be!=null?we(d,!!p.multiple,Be,!1):_e!==!!p.multiple&&(p.defaultValue!=null?we(d,!!p.multiple,p.defaultValue,!0):we(d,!!p.multiple,p.multiple?[]:"",!1))}d[Eo]=p}catch(Qe){Wt(t,t.return,Qe)}}break;case 6:if(oi(i,t),vi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Qe){Wt(t,t.return,Qe)}}break;case 3:if(oi(i,t),vi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Qe){Wt(t,t.return,Qe)}break;case 4:oi(i,t),vi(t);break;case 13:oi(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Sc=K())),u&4&&bp(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(ee=_n)||xe,oi(i,t),_n=ee):oi(i,t),vi(t),u&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!xe&&(t.mode&1)!==0)for(Xe=t,xe=t.child;xe!==null;){for(Se=Xe=xe;Xe!==null;){switch(_e=Xe,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:Io(4,_e,_e.return);break;case 1:Es(_e,_e.return);var Ke=_e.stateNode;if(typeof Ke.componentWillUnmount=="function"){u=_e,o=_e.return;try{i=u,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Qe){Wt(u,o,Qe)}}break;case 5:Es(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Up(Se);continue}}Be!==null?(Be.return=_e,Xe=Be):Up(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ee?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=Se.stateNode,z=Se.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,L.style.display=ge("display",M))}catch(Qe){Wt(t,t.return,Qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Qe){Wt(t,t.return,Qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:oi(i,t),vi(t),u&4&&bp(t);break;case 21:break;default:oi(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ap(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Le(d,""),u.flags&=-33);var p=Rp(t);vc(t,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,L=Rp(t);_c(t,L,M);break;default:throw Error(n(161))}}catch(z){Wt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function J_(t,i,o){Xe=t,Lp(t)}function Lp(t,i,o){for(var u=(t.mode&1)!==0;Xe!==null;){var d=Xe,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||$a;if(!M){var L=d.alternate,z=L!==null&&L.memoizedState!==null||_n;L=$a;var ee=_n;if($a=M,(_n=z)&&!ee)for(Xe=d;Xe!==null;)M=Xe,z=M.child,M.tag===22&&M.memoizedState!==null?Ip(d):z!==null?(z.return=M,Xe=z):Ip(d);for(;p!==null;)Xe=p,Lp(p),p=p.sibling;Xe=d,$a=L,_n=ee}Dp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Xe=p):Dp(t)}}function Dp(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Ka(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Uh(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Uh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&fo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&gc(i)}catch(_e){Wt(i,i.return,_e)}}if(i===t){Xe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Xe=o;break}Xe=i.return}}function Up(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Xe=o;break}Xe=i.return}}function Ip(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ka(4,i)}catch(z){Wt(i,o,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(z){Wt(i,d,z)}}var p=i.return;try{gc(i)}catch(z){Wt(i,p,z)}break;case 5:var M=i.return;try{gc(i)}catch(z){Wt(i,M,z)}}}catch(z){Wt(i,i.return,z)}if(i===t){Xe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Xe=L;break}Xe=i.return}}var Q_=Math.ceil,Za=b.ReactCurrentDispatcher,xc=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,Tt=0,on=null,qt=null,fn=0,zn=0,Ts=tr(0),Zt=0,No=null,Fr=0,Ja=0,yc=0,Fo=null,Ln=null,Sc=0,ws=1/0,Ni=null,Qa=!1,Mc=null,ar=null,el=!1,lr=null,tl=0,Oo=0,Ec=null,nl=-1,il=0;function Tn(){return(Tt&6)!==0?K():nl!==-1?nl:nl=K()}function ur(t){return(t.mode&1)===0?1:(Tt&2)!==0&&fn!==0?fn&-fn:F_.transition!==null?(il===0&&(il=Ut()),il):(t=Et,t!==0||(t=window.event,t=t===void 0?16:Fd(t.type)),t)}function ai(t,i,o,u){if(50<Oo)throw Oo=0,Ec=null,Error(n(185));nn(t,o,u),((Tt&2)===0||t!==on)&&(t===on&&((Tt&2)===0&&(Ja|=o),Zt===4&&cr(t,fn)),Dn(t,u),o===1&&Tt===0&&(i.mode&1)===0&&(ws=K()+500,La&&ir()))}function Dn(t,i){var o=t.callbackNode;Mn(t,i);var u=dn(t,t===on?fn:0);if(u===0)o!==null&&w(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&w(o),i===1)t.tag===0?N_(Fp.bind(null,t)):Sh(Fp.bind(null,t)),L_(function(){(Tt&6)===0&&ir()}),o=null;else{switch(pi(u)){case 1:o=Ee;break;case 4:o=Ne;break;case 16:o=We;break;case 536870912:o=ot;break;default:o=We}o=Wp(o,Np.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Np(t,i){if(nl=-1,il=0,(Tt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(As()&&t.callbackNode!==o)return null;var u=dn(t,t===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=rl(t,u);else{i=u;var d=Tt;Tt|=2;var p=kp();(on!==t||fn!==i)&&(Ni=null,ws=K()+500,kr(t,i));do try{nv();break}catch(L){Op(t,L)}while(!0);Hu(),Za.current=p,Tt=d,qt!==null?i=0:(on=null,fn=0,i=Zt)}if(i!==0){if(i===2&&(d=Ri(t),d!==0&&(u=d,i=Tc(t,d))),i===1)throw o=No,kr(t,0),cr(t,u),Dn(t,K()),o;if(i===6)cr(t,u);else{if(d=t.current.alternate,(u&30)===0&&!ev(d)&&(i=rl(t,u),i===2&&(p=Ri(t),p!==0&&(u=p,i=Tc(t,p))),i===1))throw o=No,kr(t,0),cr(t,u),Dn(t,K()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:zr(t,Ln,Ni);break;case 3:if(cr(t,u),(u&130023424)===u&&(i=Sc+500-K(),10<i)){if(dn(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){Tn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Pu(zr.bind(null,t,Ln,Ni),i);break}zr(t,Ln,Ni);break;case 4:if(cr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var M=31-dt(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Q_(u/1960))-u,10<u){t.timeoutHandle=Pu(zr.bind(null,t,Ln,Ni),u);break}zr(t,Ln,Ni);break;case 5:zr(t,Ln,Ni);break;default:throw Error(n(329))}}}return Dn(t,K()),t.callbackNode===o?Np.bind(null,t):null}function Tc(t,i){var o=Fo;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=rl(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&wc(i)),t}function wc(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function ev(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!ni(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~yc,i&=~Ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-dt(i),u=1<<o;t[o]=-1,i&=~u}}function Fp(t){if((Tt&6)!==0)throw Error(n(327));As();var i=dn(t,0);if((i&1)===0)return Dn(t,K()),null;var o=rl(t,i);if(t.tag!==0&&o===2){var u=Ri(t);u!==0&&(i=u,o=Tc(t,u))}if(o===1)throw o=No,kr(t,0),cr(t,i),Dn(t,K()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,zr(t,Ln,Ni),Dn(t,K()),null}function Ac(t,i){var o=Tt;Tt|=1;try{return t(i)}finally{Tt=o,Tt===0&&(ws=K()+500,La&&ir())}}function Or(t){lr!==null&&lr.tag===0&&(Tt&6)===0&&As();var i=Tt;Tt|=1;var o=$n.transition,u=Et;try{if($n.transition=null,Et=1,t)return t()}finally{Et=u,$n.transition=o,Tt=i,(Tt&6)===0&&ir()}}function Rc(){zn=Ts.current,kt(Ts)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,P_(o)),qt!==null)for(o=qt.return;o!==null;){var u=o;switch(Fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ba();break;case 3:Ss(),kt(Cn),kt(pn),$u();break;case 5:ju(u);break;case 4:Ss();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Vu(u.type._context);break;case 22:case 23:Rc()}o=o.return}if(on=t,qt=t=fr(t.current,null),fn=zn=i,Zt=0,No=null,yc=Ja=Fr=0,Ln=Fo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}o.pending=u}Ur=null}return t}function Op(t,i){do{var o=qt;try{if(Hu(),Ha.current=Xa,Va){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Va=!1}if(Nr=0,sn=Kt=Vt=null,bo=!1,Po=0,xc.current=null,o===null||o.return===null){Zt=1,No=i,qt=null;break}e:{var p=t,M=o.return,L=o,z=i;if(i=fn,L.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,xe=L,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=lp(M);if(Be!==null){Be.flags&=-257,up(Be,M,L,p,i),Be.mode&1&&ap(p,ee,i),i=Be,z=ee;var Ke=i.updateQueue;if(Ke===null){var Qe=new Set;Qe.add(z),i.updateQueue=Qe}else Ke.add(z);break e}else{if((i&1)===0){ap(p,ee,i),Cc();break e}z=Error(n(426))}}else if(Bt&&L.mode&1){var jt=lp(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),up(jt,M,L,p,i),zu(Ms(z,L));break e}}p=z=Ms(z,L),Zt!==4&&(Zt=2),Fo===null?Fo=[p]:Fo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=sp(p,z,i);Dh(p,$);break e;case 1:L=z;var V=p.type,Z=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ar===null||!ar.has(Z)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ce=op(p,L,i);Dh(p,Ce);break e}}p=p.return}while(p!==null)}Bp(o)}catch(et){i=et,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function kp(){var t=Za.current;return Za.current=Xa,t===null?Xa:t}function Cc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),on===null||(Fr&268435455)===0&&(Ja&268435455)===0||cr(on,fn)}function rl(t,i){var o=Tt;Tt|=2;var u=kp();(on!==t||fn!==i)&&(Ni=null,kr(t,i));do try{tv();break}catch(d){Op(t,d)}while(!0);if(Hu(),Tt=o,Za.current=u,qt!==null)throw Error(n(261));return on=null,fn=0,Zt}function tv(){for(;qt!==null;)zp(qt)}function nv(){for(;qt!==null&&!X();)zp(qt)}function zp(t){var i=Gp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?Bp(t):qt=i,xc.current=null}function Bp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=q_(o,i,zn),o!==null){qt=o;return}}else{if(o=$_(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Zt===0&&(Zt=5)}function zr(t,i,o){var u=Et,d=$n.transition;try{$n.transition=null,Et=1,iv(t,i,o,u)}finally{$n.transition=d,Et=u}return null}function iv(t,i,o,u){do As();while(lr!==null);if((Tt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===on&&(qt=on=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||el||(el=!0,Wp(We,function(){return As(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var M=Et;Et=1;var L=Tt;Tt|=4,xc.current=null,Z_(t,o),Pp(o,t),E_(Cu),ma=!!Ru,Cu=Ru=null,t.current=o,J_(o),ne(),Tt=L,Et=M,$n.transition=p}else t.current=o;if(el&&(el=!1,lr=t,tl=d),p=t.pendingLanes,p===0&&(ar=null),vt(o.stateNode),Dn(t,K()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,t=Mc,Mc=null,t;return(tl&1)!==0&&t.tag!==0&&As(),p=t.pendingLanes,(p&1)!==0?t===Ec?Oo++:(Oo=0,Ec=t):Oo=0,ir(),null}function As(){if(lr!==null){var t=pi(tl),i=$n.transition,o=Et;try{if($n.transition=null,Et=16>t?16:t,lr===null)var u=!1;else{if(t=lr,lr=null,tl=0,(Tt&6)!==0)throw Error(n(331));var d=Tt;for(Tt|=4,Xe=t.current;Xe!==null;){var p=Xe,M=p.child;if((Xe.flags&16)!==0){var L=p.deletions;if(L!==null){for(var z=0;z<L.length;z++){var ee=L[z];for(Xe=ee;Xe!==null;){var xe=Xe;switch(xe.tag){case 0:case 11:case 15:Io(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,Xe=Se;else for(;Xe!==null;){xe=Xe;var _e=xe.sibling,Be=xe.return;if(wp(xe),xe===ee){Xe=null;break}if(_e!==null){_e.return=Be,Xe=_e;break}Xe=Be}}}var Ke=p.alternate;if(Ke!==null){var Qe=Ke.child;if(Qe!==null){Ke.child=null;do{var jt=Qe.sibling;Qe.sibling=null,Qe=jt}while(Qe!==null)}}Xe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Xe=M;else e:for(;Xe!==null;){if(p=Xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Io(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,Xe=$;break e}Xe=p.return}}var V=t.current;for(Xe=V;Xe!==null;){M=Xe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Xe=Z;else e:for(M=V;Xe!==null;){if(L=Xe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ka(9,L)}}catch(et){Wt(L,L.return,et)}if(L===M){Xe=null;break e}var Ce=L.sibling;if(Ce!==null){Ce.return=L.return,Xe=Ce;break e}Xe=L.return}}if(Tt=d,ir(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(st,t)}catch{}u=!0}return u}finally{Et=o,$n.transition=i}}return!1}function Hp(t,i,o){i=Ms(o,i),i=sp(t,i,1),t=sr(t,i,1),i=Tn(),t!==null&&(nn(t,1,i),Dn(t,i))}function Wt(t,i,o){if(t.tag===3)Hp(t,t,o);else for(;i!==null;){if(i.tag===3){Hp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){t=Ms(o,t),t=op(i,t,1),i=sr(i,t,1),t=Tn(),i!==null&&(nn(i,1,t),Dn(i,t));break}}i=i.return}}function rv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(fn&o)===o&&(Zt===4||Zt===3&&(fn&130023424)===fn&&500>K()-Sc?kr(t,0):yc|=o),Dn(t,i)}function Vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var o=Tn();t=Di(t,i),t!==null&&(nn(t,i,o),Dn(t,o))}function sv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(t,o)}function ov(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Vp(t,o)}var Gp;Gp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,j_(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,Bt&&(i.flags&1048576)!==0&&Mh(i,Ua,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qa(t,i),t=i.pendingProps;var d=ps(i,pn.current);ys(i,o),d=Ju(null,i,u,t,d,o);var p=Qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(p=!0,Pa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Xu(i),d.updater=Ya,i.stateNode=d,d._reactInternals=i,sc(i,u,t,o),i=uc(null,i,u,!0,p,o)):(i.tag=0,Bt&&p&&Nu(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(qa(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=lv(u),t=ri(u,t),d){case 0:i=lc(null,i,u,t,o);break e;case 1:i=mp(null,i,u,t,o);break e;case 11:i=cp(null,i,u,t,o);break e;case 14:i=fp(null,i,u,ri(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),lc(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),mp(t,i,u,d,o);case 3:e:{if(gp(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Lh(t,i),za(i,u,null,o);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ms(Error(n(423)),i),i=_p(t,i,u,o,d);break e}else if(u!==d){d=Ms(Error(n(424)),i),i=_p(t,i,u,o,d);break e}else for(kn=er(i.stateNode.containerInfo.firstChild),On=i,Bt=!0,ii=null,o=bh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_s(),u===d){i=Ii(t,i,o);break e}En(t,i,u,o)}i=i.child}return i;case 5:return Ih(i),t===null&&ku(i),u=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,bu(u,d)?M=null:p!==null&&bu(u,p)&&(i.flags|=32),pp(t,i),En(t,i,M,o),i.child;case 6:return t===null&&ku(i),null;case 13:return vp(t,i,o);case 4:return Yu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=vs(i,null,u,o):En(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),cp(t,i,u,d,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Nt(Fa,u._currentValue),u._currentValue=M,p!==null)if(ni(p.value,M)){if(p.children===d.children&&!Cn.current){i=Ii(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var z=L.firstContext;z!==null;){if(z.context===u){if(p.tag===1){z=Ui(-1,o&-o),z.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ee.pending=z}}p.lanes|=o,z=p.alternate,z!==null&&(z.lanes|=o),Gu(p.return,o,i),L.lanes|=o;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Gu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}En(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ys(i,o),d=jn(d),u=u(d),i.flags|=1,En(t,i,u,o),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),fp(t,i,u,d,o);case 15:return dp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),qa(t,i),i.tag=1,bn(u)?(t=!0,Pa(i)):t=!1,ys(i,o),ip(i,u,d),sc(i,u,d,o),uc(null,i,u,!0,t,o);case 19:return yp(t,i,o);case 22:return hp(t,i,o)}throw Error(n(156,i.tag))};function Wp(t,i){return da(t,i)}function av(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,u){return new av(t,i,o,u)}function bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lv(t){if(typeof t=="function")return bc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===de)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sl(t,i,o,u,d,p){var M=2;if(u=t,typeof t=="function")bc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Br(o.children,d,p,i);case G:M=8,d|=8;break;case C:return t=Kn(12,o,i,d|2),t.elementType=C,t.lanes=p,t;case J:return t=Kn(13,o,i,d),t.elementType=J,t.lanes=p,t;case ue:return t=Kn(19,o,i,d),t.elementType=ue,t.lanes=p,t;case fe:return ol(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case O:M=9;break e;case ie:M=11;break e;case de:M=14;break e;case oe:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,o,i,d),i.elementType=t,i.type=u,i.lanes=p,i}function Br(t,i,o,u){return t=Kn(7,t,u,i),t.lanes=o,t}function ol(t,i,o,u){return t=Kn(22,t,u,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function Pc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function Lc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function uv(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Dc(t,i,o,u,d,p,M,L,z){return t=new uv(t,i,o,L,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(p),t}function cv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Xp(t){if(!t)return nr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return xh(t,o,i)}return i}function Yp(t,i,o,u,d,p,M,L,z){return t=Dc(o,u,!0,t,d,p,M,L,z),t.context=Xp(null),o=t.current,u=Tn(),d=ur(o),p=Ui(u,d),p.callback=i??null,sr(o,p,d),t.current.lanes=d,nn(t,d,u),Dn(t,u),t}function al(t,i,o,u){var d=i.current,p=Tn(),M=ur(d);return o=Xp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(p,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=sr(d,i,M),t!==null&&(ai(t,d,M,p),ka(t,d,M)),M}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Uc(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function fv(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ic(t){this._internalRoot=t}ul.prototype.render=Ic.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));al(t,i,null,null)},ul.prototype.unmount=Ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){al(null,t,null,null)}),i[Ci]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ld();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&Id(t)}};function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function dv(t,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var ee=ll(M);p.call(ee)}}var M=Yp(i,u,t,0,null,!1,!1,"",$p);return t._reactRootContainer=M,t[Ci]=M.current,So(t.nodeType===8?t.parentNode:t),Or(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var L=u;u=function(){var ee=ll(z);L.call(ee)}}var z=Dc(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=z,t[Ci]=z.current,So(t.nodeType===8?t.parentNode:t),Or(function(){al(i,z,o,u)}),z}function fl(t,i,o,u,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var L=d;d=function(){var z=ll(M);L.call(z)}}al(i,M,t,d)}else M=dv(o,i,t,d,u);return ll(M)}bd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=yt(i.pendingLanes);o!==0&&(rn(i,o|1),Dn(i,K()),(Tt&6)===0&&(ws=K()+500,ir()))}break;case 13:Or(function(){var u=Di(t,1);if(u!==null){var d=Tn();ai(u,t,1,d)}}),Uc(t,1)}},ou=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var o=Tn();ai(i,t,134217728,o)}Uc(t,134217728)}},Pd=function(t){if(t.tag===13){var i=ur(t),o=Di(t,i);if(o!==null){var u=Tn();ai(o,t,i,u)}Uc(t,i)}},Ld=function(){return Et},Dd=function(t,i){var o=Et;try{return Et=t,i()}finally{Et=o}},Ie=function(t,i,o){switch(i){case"input":if(Ue(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=Ca(u);if(!d)throw Error(n(90));wt(u),Ue(u,d)}}}break;case"textarea":E(t,o);break;case"select":i=o.value,i!=null&&we(t,!!o.multiple,i,!1)}},ct=Ac,Pt=Or;var hv={usingClientEntryPoint:!1,Events:[To,ds,Ca,me,$e,Ac]},ko={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pv={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ca(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{st=dl.inject(pv),Ye=dl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(n(200));return cv(t,i,null,o)},Un.createRoot=function(t,i){if(!Nc(t))throw Error(n(299));var o=!1,u="",d=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Dc(t,1,!1,null,null,o,!1,u,d),t[Ci]=i.current,So(t.nodeType===8?t.parentNode:t),new Ic(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ca(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return Or(t)},Un.hydrate=function(t,i,o){if(!cl(i))throw Error(n(200));return fl(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!Nc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",M=qp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,d,!1,p,M),t[Ci]=i.current,So(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ul(i)},Un.render=function(t,i,o){if(!cl(i))throw Error(n(200));return fl(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!cl(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1},Un.unstable_batchedUpdates=Ac,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!cl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return fl(t,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var im;function Mv(){if(im)return kc.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),kc.exports=Sv(),kc.exports}var rm;function Ev(){if(rm)return hl;rm=1;var s=Mv();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var Tv=Ev();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="177",wv=0,sm=1,Av=2,ug=1,Rv=2,Hi=3,wr=0,In=1,Qn=2,Mr=0,$s=1,om=2,am=3,lm=4,Cv=5,Kr=100,bv=101,Pv=102,Lv=103,Dv=104,Uv=200,Iv=201,Nv=202,Fv=203,Af=204,Rf=205,Ov=206,kv=207,zv=208,Bv=209,Hv=210,Vv=211,Gv=212,Wv=213,Xv=214,Cf=0,bf=1,Pf=2,Qs=3,Lf=4,Df=5,Uf=6,If=7,gd=0,Yv=1,jv=2,Er=0,qv=1,$v=2,Kv=3,Zv=4,Jv=5,Qv=6,e0=7,cg=300,eo=301,to=302,Nf=303,Ff=304,eu=306,$l=1e3,Sr=1001,Of=1002,Wn=1003,t0=1004,pl=1005,Si=1006,Hc=1007,Jr=1008,Ei=1009,fg=1010,dg=1011,Jo=1012,_d=1013,es=1014,Mi=1015,na=1016,vd=1017,xd=1018,Qo=1020,hg=35902,pg=1021,mg=1022,fi=1023,ea=1026,ta=1027,yd=1028,Sd=1029,gg=1030,Md=1031,Ed=1033,Vl=33776,Gl=33777,Wl=33778,Xl=33779,kf=35840,zf=35841,Bf=35842,Hf=35843,Vf=36196,Gf=37492,Wf=37496,Xf=37808,Yf=37809,jf=37810,qf=37811,$f=37812,Kf=37813,Zf=37814,Jf=37815,Qf=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,Yl=36492,sd=36494,od=36495,_g=36283,ad=36284,ld=36285,ud=36286,n0=3200,i0=3201,vg=0,r0=1,yr="",Gn="srgb",no="srgb-linear",Kl="linear",Lt="srgb",Rs=7680,um=519,s0=512,o0=513,a0=514,xg=515,l0=516,u0=517,c0=518,f0=519,cd=35044,cm="300 es",Vi=2e3,Zl=2001;class ro{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,fd=180/Math.PI;function Tr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function d0(s,e){return(s%e+e)%e}function Gc(s,e,n){return(1-n)*s+n*e}function yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ia{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,f){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[c+0],S=l[c+1],T=l[c+2],R=l[c+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=R;return}if(v!==R||h!==x||m!==S||_!==T){let y=1-f;const g=h*x+m*S+_*T+v*R,N=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const W=Math.sqrt(D),k=Math.atan2(W,g*N);y=Math.sin(y*k)/W,f=Math.sin(f*k)/W}const b=f*N;if(h=h*y+x*b,m=m*y+S*b,_=_*y+T*b,v=v*y+R*b,y===1-f){const W=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=W,m*=W,_*=W,v*=W}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,c){const f=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[n]=f*T+_*v+h*S-m*x,e[n+1]=h*T+_*x+m*v-f*S,e[n+2]=m*T+_*S+f*x-h*v,e[n+3]=_*T-f*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(a/2),v=f(l/2),x=h(r/2),S=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"YXZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"ZXY":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"ZYX":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"YZX":this._x=x*_*v+m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v-x*S*T;break;case"XZY":this._x=x*_*v-m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-m)*S,this._z=(c-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(c-a)/S,this._x=(l+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*f+a*m-l*h,this._y=a*_+c*h+l*f-r*m,this._z=l*_+c*m+r*h-a*f,this._w=c*_-r*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*a-f*r),_=2*(f*n-l*a),v=2*(l*r-c*n);return this.x=n+h*m+c*v-f*_,this.y=r+h*_+f*m-l*v,this.z=a+h*v+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,f=n.y,h=n.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new q,fm=new ia;class ht{constructor(e,n,r,a,l,c,f,h,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,h,m)}set(e,n,r,a,l,c,f,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],T=r[8],R=a[0],y=a[3],g=a[6],N=a[1],D=a[4],b=a[7],W=a[2],k=a[5],I=a[8];return l[0]=c*R+f*N+h*W,l[3]=c*y+f*D+h*k,l[6]=c*g+f*b+h*I,l[1]=m*R+_*N+v*W,l[4]=m*y+_*D+v*k,l[7]=m*g+_*b+v*I,l[2]=x*R+S*N+T*W,l[5]=x*y+S*D+T*k,l[8]=x*g+S*b+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*f*m-r*l*_+r*f*h+a*l*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=_*c-f*m,x=f*h-_*l,S=m*l-c*h,T=n*v+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(f*r-a*c)*R,e[3]=x*R,e[4]=(_*n-a*h)*R,e[5]=(a*l-f*n)*R,e[6]=S*R,e[7]=(r*h-m*n)*R,e[8]=(c*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*f)+c+e,-a*m,a*h,-a*(-m*c+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new ht;function yg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function h0(){const s=Jl("canvas");return s.style.display="block",s}const dm={};function Ks(s){s in dm||(dm[s]=!0,console.warn(s))}function p0(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function m0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function g0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){const s={enabled:!0,workingColorSpace:no,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=Zs(a.r),a.g=Zs(a.g),a.b=Zs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Kl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[no]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Rt=_0();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class v0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Jl("canvas")),Cs.width=e.width,Cs.height=e.height;const a=Cs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Wi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Wi(n[r]/255)*255):n[r]=Wi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x0=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Yc(a[c].image)):l.push(Yc(a[c]))}else l=Yc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?v0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y0=0;const jc=new q;class yn extends ro{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,r=Sr,a=Sr,l=Si,c=Jr,f=fi,h=Ei,m=yn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Tr(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=cg;yn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],S=h[5],T=h[9],R=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,b=(S+1)/2,W=(g+1)/2,k=(_+x)/4,I=(v+R)/4,G=(T+y)/4;return D>b&&D>W?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=k/r,l=I/r):b>W?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=k/a,l=G/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=I/l,a=G/l),this.set(r,a,l,n),this}let N=Math.sqrt((y-T)*(y-T)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(v-R)/N,this.z=(x-_)/N,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S0 extends ro{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new yn(a);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Td(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends S0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Sg extends yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M0 extends yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),gl.subVectors(this.max,Bo),bs.subVectors(e.a,Bo),Ps.subVectors(e.b,Bo),Ls.subVectors(e.c,Bo),hr.subVectors(Ps,bs),pr.subVectors(Ls,Ps),Vr.subVectors(bs,Ls);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Vr.z,Vr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Vr.z,0,-Vr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Vr.y,Vr.x,0];return!qc(n,bs,Ps,Ls,gl)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,bs,Ps,Ls,gl))?!1:(_l.crossVectors(hr,pr),n=[_l.x,_l.y,_l.z],qc(n,bs,Ps,Ls,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,ml=new ns,bs=new q,Ps=new q,Ls=new q,hr=new q,pr=new q,Vr=new q,Bo=new q,gl=new q,_l=new q,Gr=new q;function qc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Gr.fromArray(s,l);const f=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),m=n.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const E0=new ns,Ho=new q,$c=new q;class ra{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):E0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ho,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add($c)),this.expandByPoint(Ho.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new q,Kc=new q,vl=new q,mr=new q,Zc=new q,xl=new q,Jc=new q;class T0{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Kc.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Kc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(vl),f=mr.dot(this.direction),h=-mr.dot(vl),m=mr.lengthSq(),_=Math.abs(1-c*c);let v,x,S,T;if(_>0)if(v=c*h-f,x=c*f-h,T=l*_,v>=0)if(x>=-T)if(x<=T){const R=1/_;v*=R,x*=R,S=v*(v+c*x+2*f)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+m;else x<=-T?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m):x<=T?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Kc).addScaledVector(vl,x),S}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const r=Oi.dot(this.direction),a=Oi.dot(Oi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,f,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,r,a,l){Zc.subVectors(n,e),xl.subVectors(r,e),Jc.crossVectors(Zc,xl);let c=this.direction.dot(Jc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;mr.subVectors(this.origin,e);const h=f*this.direction.dot(xl.crossVectors(mr,xl));if(h<0)return null;const m=f*this.direction.dot(Zc.cross(mr));if(m<0||h+m>c)return null;const _=-f*mr.dot(Jc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,r,a,l,c,f,h,m,_,v,x,S,T,R,y){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,h,m,_,v,x,S,T,R,y)}set(e,n,r,a,l,c,f,h,m,_,v,x,S,T,R,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=f,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=T,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*_,S=c*v,T=f*_,R=f*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=S+T*m,n[5]=x-R*m,n[9]=-f*h,n[2]=R-x*m,n[6]=T+S*m,n[10]=c*h}else if(e.order==="YXZ"){const x=h*_,S=h*v,T=m*_,R=m*v;n[0]=x+R*f,n[4]=T*f-S,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=S*f-T,n[6]=R+x*f,n[10]=c*h}else if(e.order==="ZXY"){const x=h*_,S=h*v,T=m*_,R=m*v;n[0]=x-R*f,n[4]=-c*v,n[8]=T+S*f,n[1]=S+T*f,n[5]=c*_,n[9]=R-x*f,n[2]=-c*m,n[6]=f,n[10]=c*h}else if(e.order==="ZYX"){const x=c*_,S=c*v,T=f*_,R=f*v;n[0]=h*_,n[4]=T*m-S,n[8]=x*m+R,n[1]=h*v,n[5]=R*m+x,n[9]=S*m-T,n[2]=-m,n[6]=f*h,n[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*m,T=f*h,R=f*m;n[0]=h*_,n[4]=R-x*v,n[8]=T*v+S,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*v+T,n[10]=x-R*v}else if(e.order==="XZY"){const x=c*h,S=c*m,T=f*h,R=f*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=c*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=f*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,A0)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),gr.crossVectors(r,Bn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),gr.crossVectors(r,Bn)),gr.normalize(),yl.crossVectors(Bn,gr),a[0]=gr.x,a[4]=yl.x,a[8]=Bn.x,a[1]=gr.y,a[5]=yl.y,a[9]=Bn.y,a[2]=gr.z,a[6]=yl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],T=r[2],R=r[6],y=r[10],g=r[14],N=r[3],D=r[7],b=r[11],W=r[15],k=a[0],I=a[4],G=a[8],C=a[12],A=a[1],O=a[5],ie=a[9],J=a[13],ue=a[2],de=a[6],oe=a[10],fe=a[14],B=a[3],ce=a[7],se=a[11],U=a[15];return l[0]=c*k+f*A+h*ue+m*B,l[4]=c*I+f*O+h*de+m*ce,l[8]=c*G+f*ie+h*oe+m*se,l[12]=c*C+f*J+h*fe+m*U,l[1]=_*k+v*A+x*ue+S*B,l[5]=_*I+v*O+x*de+S*ce,l[9]=_*G+v*ie+x*oe+S*se,l[13]=_*C+v*J+x*fe+S*U,l[2]=T*k+R*A+y*ue+g*B,l[6]=T*I+R*O+y*de+g*ce,l[10]=T*G+R*ie+y*oe+g*se,l[14]=T*C+R*J+y*fe+g*U,l[3]=N*k+D*A+b*ue+W*B,l[7]=N*I+D*O+b*de+W*ce,l[11]=N*G+D*ie+b*oe+W*se,l[15]=N*C+D*J+b*fe+W*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],T=e[3],R=e[7],y=e[11],g=e[15];return T*(+l*h*v-a*m*v-l*f*x+r*m*x+a*f*S-r*h*S)+R*(+n*h*S-n*m*x+l*c*x-a*c*S+a*m*_-l*h*_)+y*(+n*m*v-n*f*S-l*c*v+r*c*S+l*f*_-r*m*_)+g*(-a*f*_-n*h*v+n*f*x+a*c*v-r*c*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],T=e[12],R=e[13],y=e[14],g=e[15],N=v*y*m-R*x*m+R*h*S-f*y*S-v*h*g+f*x*g,D=T*x*m-_*y*m-T*h*S+c*y*S+_*h*g-c*x*g,b=_*R*m-T*v*m+T*f*S-c*R*S-_*f*g+c*v*g,W=T*v*h-_*R*h-T*f*x+c*R*x+_*f*y-c*v*y,k=n*N+r*D+a*b+l*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=N*I,e[1]=(R*x*l-v*y*l-R*a*S+r*y*S+v*a*g-r*x*g)*I,e[2]=(f*y*l-R*h*l+R*a*m-r*y*m-f*a*g+r*h*g)*I,e[3]=(v*h*l-f*x*l-v*a*m+r*x*m+f*a*S-r*h*S)*I,e[4]=D*I,e[5]=(_*y*l-T*x*l+T*a*S-n*y*S-_*a*g+n*x*g)*I,e[6]=(T*h*l-c*y*l-T*a*m+n*y*m+c*a*g-n*h*g)*I,e[7]=(c*x*l-_*h*l+_*a*m-n*x*m-c*a*S+n*h*S)*I,e[8]=b*I,e[9]=(T*v*l-_*R*l-T*r*S+n*R*S+_*r*g-n*v*g)*I,e[10]=(c*R*l-T*f*l+T*r*m-n*R*m-c*r*g+n*f*g)*I,e[11]=(_*f*l-c*v*l-_*r*m+n*v*m+c*r*S-n*f*S)*I,e[12]=W*I,e[13]=(_*R*a-T*v*a+T*r*x-n*R*x-_*r*y+n*v*y)*I,e[14]=(T*f*a-c*R*a-T*r*h+n*R*h+c*r*y-n*f*y)*I,e[15]=(c*v*a-_*f*a+_*r*h-n*v*h-c*r*x+n*f*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,f=e.y,h=e.z,m=l*c,_=l*f;return this.set(m*c+r,m*f-a*h,m*h+a*f,0,m*f+a*h,_*f+r,_*h-a*c,0,m*h-a*f,_*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,h=n._w,m=l+l,_=c+c,v=f+f,x=l*m,S=l*_,T=l*v,R=c*_,y=c*v,g=f*v,N=h*m,D=h*_,b=h*v,W=r.x,k=r.y,I=r.z;return a[0]=(1-(R+g))*W,a[1]=(S+b)*W,a[2]=(T-D)*W,a[3]=0,a[4]=(S-b)*k,a[5]=(1-(x+g))*k,a[6]=(y+N)*k,a[7]=0,a[8]=(T+D)*I,a[9]=(y-N)*I,a[10]=(1-(x+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const c=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const m=1/l,_=1/c,v=1/f;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=_,ui.elements[5]*=_,ui.elements[6]*=_,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,n.setFromRotationMatrix(ui),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,a,l,c,f=Vi){const h=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(f===Vi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===Zl)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,f=Vi){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-l),x=(n+e)*m,S=(r+a)*_;let T,R;if(f===Vi)T=(c+l)*v,R=-2*v;else if(f===Zl)T=l*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=R,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new q,ui=new It,w0=new q(0,0,0),A0=new q(1,1,1),gr=new q,yl=new q,Bn=new q,mm=new It,gm=new ia;class Ti{constructor(e=0,n=0,r=0,a=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R0=0;const _m=new q,Us=new ia,ki=new It,Sl=new q,Vo=new q,C0=new q,b0=new ia,vm=new q(1,0,0),xm=new q(0,1,0),ym=new q(0,0,1),Sm={type:"added"},P0={type:"removed"},Is={type:"childadded",child:null},Qc={type:"childremoved",child:null};class Qt extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new q,n=new Ti,r=new ia,a=new q(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new ht}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Sl.copy(e):Sl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Vo,Sl,this.up):ki.lookAt(Sl,Vo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(ki),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sm),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P0),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(n){const f=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Qt.DEFAULT_UP=new q(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new q,zi=new q,ef=new q,Bi=new q,Ns=new q,Fs=new q,Mm=new q,tf=new q,nf=new q,rf=new q,sf=new Xt,of=new Xt,af=new Xt;class ei{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ci.subVectors(a,n),zi.subVectors(r,n),ef.subVectors(e,n);const c=ci.dot(ci),f=ci.dot(zi),h=ci.dot(ef),m=zi.dot(zi),_=zi.dot(ef),v=c*m-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(m*h-f*_)*x,T=(c*_-f*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,r,a,l,c,f,h){return this.getBarycoord(e,n,r,a,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(c,Bi.y),h.addScaledVector(f,Bi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(e,n),of.fromBufferAttribute(e,r),af.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(sf,l.x),c.addScaledVector(of,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),zi.subVectors(e,n),ci.cross(zi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ei.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,f;Ns.subVectors(a,r),Fs.subVectors(l,r),tf.subVectors(e,r);const h=Ns.dot(tf),m=Fs.dot(tf);if(h<=0&&m<=0)return n.copy(r);nf.subVectors(e,a);const _=Ns.dot(nf),v=Fs.dot(nf);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(Ns,c);rf.subVectors(e,l);const S=Ns.dot(rf),T=Fs.dot(rf);if(T>=0&&S<=T)return n.copy(l);const R=S*m-h*T;if(R<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Fs,f);const y=_*T-S*v;if(y<=0&&v-_>=0&&S-T>=0)return Mm.subVectors(l,a),f=(v-_)/(v-_+(S-T)),n.copy(a).addScaledVector(Mm,f);const g=1/(y+R+x);return c=R*g,f=x*g,n.copy(r).addScaledVector(Ns,c).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function lf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ft{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=d0(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=lf(c,l,e+1/3),this.g=lf(c,l,e),this.b=lf(c,l,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,n=Gn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const r=Eg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Rt.workingToColorSpace(xn.copy(this),e),Math.round(xt(xn.r*255,0,255))*65536+Math.round(xt(xn.g*255,0,255))*256+Math.round(xt(xn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,l=xn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,m;const _=(f+c)/2;if(f===c)h=0,m=0;else{const v=c-f;switch(m=_<=.5?v/(c+f):v/(2-c-f),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Gn){Rt.workingToColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(Ml);const r=Gc(_r.h,Ml.h,n),a=Gc(_r.s,Ml.s,n),l=Gc(_r.l,Ml.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ft;ft.NAMES=Eg;let L0=0;class so extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=$s,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Rf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Af&&(r.blendSrc=this.blendSrc),this.blendDst!==Rf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gi extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new q,El=new gt;let D0=0;class ti{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=cd,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=yi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),r=Dt(r,this.array),a=Dt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),r=Dt(r,this.array),a=Dt(a,this.array),l=Dt(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cd&&(e.usage=this.usage),e}}class Tg extends ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class wg extends ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Nn extends ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}let U0=0;const Zn=new It,uf=new Qt,Os=new q,Hn=new ns,Go=new ns,ln=new q;class di extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?wg:Tg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Nn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Go.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Hn.min,Go.min),Hn.expandByPoint(ln),ln.addVectors(Hn.max,Go.max),Hn.expandByPoint(ln)):(Hn.expandByPoint(Go.min),Hn.expandByPoint(Go.max))}Hn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)ln.fromBufferAttribute(f,m),h&&(Os.fromBufferAttribute(e,m),ln.add(Os)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<r.count;G++)f[G]=new q,h[G]=new q;const m=new q,_=new q,v=new q,x=new gt,S=new gt,T=new gt,R=new q,y=new q;function g(G,C,A){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,C),T.fromBufferAttribute(l,A),_.sub(m),v.sub(m),S.sub(x),T.sub(x);const O=1/(S.x*T.y-T.x*S.y);isFinite(O)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(O),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(O),f[G].add(R),f[C].add(R),f[A].add(R),h[G].add(y),h[C].add(y),h[A].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,C=N.length;G<C;++G){const A=N[G],O=A.start,ie=A.count;for(let J=O,ue=O+ie;J<ue;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new q,b=new q,W=new q,k=new q;function I(G){W.fromBufferAttribute(a,G),k.copy(W);const C=f[G];D.copy(C),D.sub(W.multiplyScalar(W.dot(C))).normalize(),b.crossVectors(k,C);const O=b.dot(h[G])<0?-1:1;c.setXYZW(G,D.x,D.y,D.z,O)}for(let G=0,C=N.length;G<C;++G){const A=N[G],O=A.start,ie=A.count;for(let J=O,ue=O+ie;J<ue;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new q,l=new q,c=new q,f=new q,h=new q,m=new q,_=new q,v=new q;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,y),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),f.add(_),h.add(_),m.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(h.length*_);let S=0,T=0;for(let R=0,y=h.length;R<y;R++){f.isInterleavedBufferAttribute?S=h[R]*f.data.stride+f.offset:S=h[R]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new ti(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const m=c[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Em=new It,Wr=new T0,Tl=new ra,Tm=new q,wl=new q,Al=new q,Rl=new q,cf=new q,Cl=new q,wm=new q,bl=new q;class Jt extends Qt{constructor(e=new di,n=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=f[h],v=l[h];_!==0&&(cf.fromBufferAttribute(v,e),c?Cl.addScaledVector(cf,_):Cl.addScaledVector(cf.sub(n),_))}n.add(Cl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Tl,Tm)===null||Wr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(Em.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(Em),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,R=x.length;T<R;T++){const y=x[T],g=c[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,W=D;b<W;b+=3){const k=f.getX(b),I=f.getX(b+1),G=f.getX(b+2);a=Pl(this,g,e,r,m,_,v,k,I,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=T,g=R;y<g;y+=3){const N=f.getX(y),D=f.getX(y+1),b=f.getX(y+2);a=Pl(this,c,e,r,m,_,v,N,D,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,R=x.length;T<R;T++){const y=x[T],g=c[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,W=D;b<W;b+=3){const k=b,I=b+1,G=b+2;a=Pl(this,g,e,r,m,_,v,k,I,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=T,g=R;y<g;y+=3){const N=y,D=y+1,b=y+2;a=Pl(this,c,e,r,m,_,v,N,D,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function I0(s,e,n,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===wr,f),h===null)return null;bl.copy(f),bl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(bl);return m<n.near||m>n.far?null:{distance:m,point:bl.clone(),object:s}}function Pl(s,e,n,r,a,l,c,f,h,m){s.getVertexPosition(f,wl),s.getVertexPosition(h,Al),s.getVertexPosition(m,Rl);const _=I0(s,e,n,r,wl,Al,Rl,wm);if(_){const v=new q;ei.getBarycoord(wm,wl,Al,Rl,v),a&&(_.uv=ei.getInterpolatedAttribute(a,f,h,m,v,new gt)),l&&(_.uv1=ei.getInterpolatedAttribute(l,f,h,m,v,new gt)),c&&(_.normal=ei.getInterpolatedAttribute(c,f,h,m,v,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new q,materialIndex:0};ei.getNormal(wl,Al,Rl,x.normal),_.face=x,_.barycoord=v}return _}class sa extends di{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],_=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,c,l,0),T("z","y","x",1,-1,r,n,-e,c,l,1),T("x","z","y",1,1,e,r,n,a,c,2),T("x","z","y",1,-1,e,r,-n,a,c,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(v,2));function T(R,y,g,N,D,b,W,k,I,G,C){const A=b/I,O=W/G,ie=b/2,J=W/2,ue=k/2,de=I+1,oe=G+1;let fe=0,B=0;const ce=new q;for(let se=0;se<oe;se++){const U=se*O-J;for(let re=0;re<de;re++){const He=re*A-ie;ce[R]=He*N,ce[y]=U*D,ce[g]=ue,m.push(ce.x,ce.y,ce.z),ce[R]=0,ce[y]=0,ce[g]=k>0?1:-1,_.push(ce.x,ce.y,ce.z),v.push(re/I),v.push(1-se/G),fe+=1}}for(let se=0;se<G;se++)for(let U=0;U<I;U++){const re=x+U+de*se,He=x+U+de*(se+1),Q=x+(U+1)+de*(se+1),pe=x+(U+1)+de*se;h.push(re,He,pe),h.push(He,Q,pe),B+=6}f.addGroup(S,B,C),S+=B,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=io(s[n]);for(const a in r)e[a]=r[a]}return e}function N0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Ag(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const F0={clone:io,merge:An};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Rg extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new q,Am=new gt,Rm=new gt;class Jn extends Rg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,Am,Rm),n.subVectors(Rm,Am)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,zs=1;class z0 extends Qt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Jn(ks,zs,e,n);a.layers=this.layers,this.add(a);const l=new Jn(ks,zs,e,n);l.layers=this.layers,this.add(l);const c=new Jn(ks,zs,e,n);c.layers=this.layers,this.add(c);const f=new Jn(ks,zs,e,n);f.layers=this.layers,this.add(f);const h=new Jn(ks,zs,e,n);h.layers=this.layers,this.add(h);const m=new Jn(ks,zs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Cg extends yn{constructor(e=[],n=eo,r,a,l,c,f,h,m,_){super(e,n,r,a,l,c,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B0 extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Cg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new sa(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Mr});l.uniforms.tEquirect.value=n;const c=new Jt(a,l),f=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Si),new z0(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class js extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new js;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class wd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(e),this.density=n}clone(){return new wd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class V0 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class G0{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=cd,this.updateRanges=[],this.version=0,this.uuid=Tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new q;class Ql{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=yi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=yi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=yi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=yi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=yi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),r=Dt(r,this.array),a=Dt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),r=Dt(r,this.array),a=Dt(a,this.array),l=Dt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return new ti(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dd extends so{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Wo=new q,Hs=new q,Vs=new q,Gs=new gt,Xo=new gt,bg=new It,Ll=new q,Yo=new q,Dl=new q,Cm=new gt,df=new gt,bm=new gt;class Pm extends Qt{constructor(e=new dd){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new di;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new G0(n,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Ql(r,3,0,!1)),Bs.setAttribute("uv",new Ql(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new gt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),bg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const c=this.center;Ul(Ll.set(-.5,-.5,0),Vs,c,Hs,a,l),Ul(Yo.set(.5,-.5,0),Vs,c,Hs,a,l),Ul(Dl.set(.5,.5,0),Vs,c,Hs,a,l),Cm.set(0,0),df.set(1,0),bm.set(1,1);let f=e.ray.intersectTriangle(Ll,Yo,Dl,!1,Wo);if(f===null&&(Ul(Yo.set(-.5,.5,0),Vs,c,Hs,a,l),df.set(0,1),f=e.ray.intersectTriangle(Ll,Dl,Yo,!1,Wo),f===null))return;const h=e.ray.origin.distanceTo(Wo);h<e.near||h>e.far||n.push({distance:h,point:Wo.clone(),uv:ei.getInterpolation(Wo,Ll,Yo,Dl,Cm,df,bm,new gt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ul(s,e,n,r,a,l){Gs.subVectors(s,n).addScalar(.5).multiply(r),a!==void 0?(Xo.x=l*Gs.x-a*Gs.y,Xo.y=a*Gs.x+l*Gs.y):Xo.copy(Gs),s.copy(e),s.x+=Xo.x,s.y+=Xo.y,s.applyMatrix4(bg)}class W0 extends yn{constructor(e=null,n=1,r=1,a,l,c,f,h,m=Wn,_=Wn,v,x){super(null,c,f,h,m,_,a,l,v,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lm extends ti{constructor(e,n,r,a=1){super(e,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new It,Dm=new It,Il=[],Um=new ns,X0=new It,jo=new Jt,qo=new ra;class Y0 extends Jt{constructor(e,n,r){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Lm(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,X0)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Ws),Um.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Um)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ra),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Ws),qo.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(qo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const r=n.morphTargetInfluences,a=this.morphTexture.source.data.data,l=r.length+1,c=e*l+1;for(let f=0;f<r.length;f++)r[f]=a[c+f]}raycast(e,n){const r=this.matrixWorld,a=this.count;if(jo.geometry=this.geometry,jo.material=this.material,jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(r),e.ray.intersectsSphere(qo)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,Ws),Dm.multiplyMatrices(r,Ws),jo.matrixWorld=Dm,jo.raycast(e,Il);for(let c=0,f=Il.length;c<f;c++){const h=Il[c];h.instanceId=l,h.object=this,n.push(h)}Il.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Lm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const r=n.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new W0(new Float32Array(a*this.count),a,this.count,yd,Mi));const l=this.morphTexture.source.data.data;let c=0;for(let m=0;m<r.length;m++)c+=r[m];const f=this.geometry.morphTargetsRelative?1:1-c,h=a*e;l[h]=f,l.set(r,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hf=new q,j0=new q,q0=new ht;class qr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=hf.subVectors(r,n).cross(j0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(hf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||q0.getNormalMatrix(e),a=this.coplanarPoint(hf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ra,Nl=new q;class Ad{constructor(e=new qr,n=new qr,r=new qr,a=new qr,l=new qr,c=new qr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],T=a[9],R=a[10],y=a[11],g=a[12],N=a[13],D=a[14],b=a[15];if(r[0].setComponents(h-l,x-m,y-S,b-g).normalize(),r[1].setComponents(h+l,x+m,y+S,b+g).normalize(),r[2].setComponents(h+c,x+_,y+T,b+N).normalize(),r[3].setComponents(h-c,x-_,y-T,b-N).normalize(),r[4].setComponents(h-f,x-v,y-R,b-D).normalize(),n===Vi)r[5].setComponents(h+f,x+v,y+R,b+D).normalize();else if(n===Zl)r[5].setComponents(f,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Nl.x=a.normal.x>0?e.max.x:e.min.x,Nl.y=a.normal.y>0?e.max.y:e.min.y,Nl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends yn{constructor(e,n,r,a,l,c,f,h,m){super(e,n,r,a,l,c,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pg extends yn{constructor(e,n,r=es,a,l,c,f=Wn,h=Wn,m,_=ea,v=1){if(_!==ea&&_!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:v};super(x,a,l,c,f,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Td(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nu extends di{constructor(e=1,n=1,r=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const _=[],v=[],x=[],S=[];let T=0;const R=[],y=r/2;let g=0;N(),c===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(S,2));function N(){const b=new q,W=new q;let k=0;const I=(n-e)/r;for(let G=0;G<=l;G++){const C=[],A=G/l,O=A*(n-e)+e;for(let ie=0;ie<=a;ie++){const J=ie/a,ue=J*h+f,de=Math.sin(ue),oe=Math.cos(ue);W.x=O*de,W.y=-A*r+y,W.z=O*oe,v.push(W.x,W.y,W.z),b.set(de,I,oe).normalize(),x.push(b.x,b.y,b.z),S.push(J,1-A),C.push(T++)}R.push(C)}for(let G=0;G<a;G++)for(let C=0;C<l;C++){const A=R[C][G],O=R[C+1][G],ie=R[C+1][G+1],J=R[C][G+1];(e>0||C!==0)&&(_.push(A,O,J),k+=3),(n>0||C!==l-1)&&(_.push(O,ie,J),k+=3)}m.addGroup(g,k,0),g+=k}function D(b){const W=T,k=new gt,I=new q;let G=0;const C=b===!0?e:n,A=b===!0?1:-1;for(let ie=1;ie<=a;ie++)v.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),T++;const O=T;for(let ie=0;ie<=a;ie++){const ue=ie/a*h+f,de=Math.cos(ue),oe=Math.sin(ue);I.x=C*oe,I.y=y*A,I.z=C*de,v.push(I.x,I.y,I.z),x.push(0,A,0),k.x=de*.5+.5,k.y=oe*.5*A+.5,S.push(k.x,k.y),T++}for(let ie=0;ie<a;ie++){const J=W+ie,ue=O+ie;b===!0?_.push(ue,ue+1,J):_.push(ue+1,ue,J),G+=3}m.addGroup(g,G,b===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class iu extends nu{constructor(e=1,n=1,r=32,a=1,l=!1,c=0,f=Math.PI*2){super(0,e,n,r,a,l,c,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:f}}static fromJSON(e){return new iu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,a=this.getPoint(0),l=0;n.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),n.push(l),a=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let a=0;const l=r.length;let c;n?c=n:c=e*r[l-1];let f=0,h=l-1,m;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),m=r[a]-c,m<0)f=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const _=r[a],x=r[a+1]-_,S=(c-_)/x;return(a+S)/(l-1)}getTangent(e,n){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=n||(c.isVector2?new gt:new q);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new q,a=[],l=[],c=[],f=new q,h=new It;for(let S=0;S<=e;S++){const T=S/e;a[S]=this.getTangentAt(T,new q)}l[0]=new q,c[0]=new q;let m=Number.MAX_VALUE;const _=Math.abs(a[0].x),v=Math.abs(a[0].y),x=Math.abs(a[0].z);_<=m&&(m=_,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),x<=m&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(a[S-1],a[S]),f.length()>Number.EPSILON){f.normalize();const T=Math.acos(xt(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,T))}c[S].crossVectors(a[S],l[S])}if(n===!0){let S=Math.acos(xt(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let T=1;T<=e;T++)l[T].applyMatrix4(h.makeRotationAxis(a[T],S*T)),c[T].crossVectors(a[T],l[T])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Rd(){let s=0,e=0,n=0,r=0;function a(l,c,f,h){s=l,e=f,n=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,m){a(c,f,m*(f-l),m*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,m,_,v){let x=(c-l)/m-(f-l)/(m+_)+(f-c)/_,S=(f-c)/_-(h-c)/(_+v)+(h-f)/v;x*=_,S*=_,a(c,f,x,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+n*c+r*f}}}const Fl=new q,pf=new Rd,mf=new Rd,gf=new Rd;class jl extends $0{constructor(e=[],n=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=a}getPoint(e,n=new q){const r=n,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,_;this.closed||f>0?m=a[(f-1)%l]:(Fl.subVectors(a[0],a[1]).add(a[0]),m=Fl);const v=a[f%l],x=a[(f+1)%l];if(this.closed||f+2<l?_=a[(f+2)%l]:(Fl.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(v),S),R=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(_),S);R<1e-4&&(R=1),T<1e-4&&(T=R),y<1e-4&&(y=R),pf.initNonuniformCatmullRom(m.x,v.x,x.x,_.x,T,R,y),mf.initNonuniformCatmullRom(m.y,v.y,x.y,_.y,T,R,y),gf.initNonuniformCatmullRom(m.z,v.z,x.z,_.z,T,R,y)}else this.curveType==="catmullrom"&&(pf.initCatmullRom(m.x,v.x,x.x,_.x,this.tension),mf.initCatmullRom(m.y,v.y,x.y,_.y,this.tension),gf.initCatmullRom(m.z,v.z,x.z,_.z,this.tension));return r.set(pf.calc(h),mf.calc(h),gf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(new q().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qr extends di{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,_=h+1,v=e/f,x=n/h,S=[],T=[],R=[],y=[];for(let g=0;g<_;g++){const N=g*x-c;for(let D=0;D<m;D++){const b=D*v-l;T.push(b,-N,0),R.push(0,0,1),y.push(D/f),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let N=0;N<f;N++){const D=N+m*g,b=N+m*(g+1),W=N+1+m*(g+1),k=N+1+m*g;S.push(D,b,k),S.push(b,W,k)}this.setIndex(S),this.setAttribute("position",new Nn(T,3)),this.setAttribute("normal",new Nn(R,3)),this.setAttribute("uv",new Nn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Im extends so{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K0 extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z0 extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lg extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class J0 extends Lg{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const _f=new It,Nm=new q,Fm=new q;class Q0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nm),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dg extends Rg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ex extends Q0{constructor(){super(new Dg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tx extends Lg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nx extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Om(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Om();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Om(){return performance.now()}function km(s,e,n,r){const a=rx(r);switch(n){case pg:return s*e;case yd:return s*e/a.components*a.byteLength;case Sd:return s*e/a.components*a.byteLength;case gg:return s*e*2/a.components*a.byteLength;case Md:return s*e*2/a.components*a.byteLength;case mg:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case Ed:return s*e*4/a.components*a.byteLength;case Vl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:case Hf:return Math.max(s,16)*Math.max(e,8)/4;case kf:case Bf:return Math.max(s,8)*Math.max(e,8)/2;case Vf:case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yl:case sd:case od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _g:case ad:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ld:case ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rx(s){switch(s){case Ei:case fg:return{byteLength:1,components:1};case Jo:case dg:case na:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case es:case _d:case Mi:return{byteLength:4,components:1};case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ug(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function sx(s){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],R=v[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:c}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ry=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:lx,alphamap_pars_fragment:ux,alphatest_fragment:cx,alphatest_pars_fragment:fx,aomap_fragment:dx,aomap_pars_fragment:hx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:_x,bsdfs:vx,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Tx,color_fragment:wx,color_pars_fragment:Ax,color_pars_vertex:Rx,color_vertex:Cx,common:bx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ux,emissivemap_fragment:Ix,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:kx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Bx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Jx,envmap_vertex:Vx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:Yx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:qx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Kx,lights_pars_begin:Zx,lights_toon_fragment:Qx,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:hy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:vy,morphcolor_vertex:xy,morphnormal_vertex:yy,morphtarget_pars_vertex:Sy,morphtarget_vertex:My,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:wy,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Uy,packing:Iy,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:ky,roughnessmap_fragment:zy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:Yy,skinning_vertex:jy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Ky,tonemapping_fragment:Zy,tonemapping_pars_fragment:Jy,transmission_fragment:Qy,transmission_pars_fragment:eS,uv_pars_fragment:tS,uv_pars_vertex:nS,uv_vertex:iS,worldpos_vertex:rS,background_vert:sS,background_frag:oS,backgroundCube_vert:aS,backgroundCube_frag:lS,cube_vert:uS,cube_frag:cS,depth_vert:fS,depth_frag:dS,distanceRGBA_vert:hS,distanceRGBA_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:_S,linedashed_frag:vS,meshbasic_vert:xS,meshbasic_frag:yS,meshlambert_vert:SS,meshlambert_frag:MS,meshmatcap_vert:ES,meshmatcap_frag:TS,meshnormal_vert:wS,meshnormal_frag:AS,meshphong_vert:RS,meshphong_frag:CS,meshphysical_vert:bS,meshphysical_frag:PS,meshtoon_vert:LS,meshtoon_frag:DS,points_vert:US,points_frag:IS,shadow_vert:NS,shadow_frag:FS,sprite_vert:OS,sprite_frag:kS},Fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},xi={basic:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:An([Fe.common,Fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:An([Fe.lights,Fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ol={r:0,b:0,g:0},Yr=new Ti,zS=new It;function BS(s,e,n,r,a,l,c){const f=new ft(0);let h=l===!0?0:1,m,_,v=null,x=0,S=null;function T(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function R(D){let b=!1;const W=T(D);W===null?g(f,h):W&&W.isColor&&(g(W,1),b=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,b){const W=T(b);W&&(W.isCubeTexture||W.mapping===eu)?(_===void 0&&(_=new Jt(new sa(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:io(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Yr.copy(b.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),_.material.uniforms.envMap.value=W,_.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(Yr)),_.material.toneMapped=Rt.getTransfer(W.colorSpace)!==Lt,(v!==W||x!==W.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=W,x=W.version,S=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new Jt(new Qr(2,2),new Ar({name:"BackgroundMaterial",uniforms:io(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(W.colorSpace)!==Lt,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||x!==W.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=W,x=W.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,b){D.getRGB(Ol,Ag(s)),r.buffers.color.setClear(Ol.r,Ol.g,Ol.b,b,c)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,b=1){f.set(D),h=b,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(f,h)},render:R,addToRenderList:y,dispose:N}}function HS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(A,O,ie,J,ue){let de=!1;const oe=v(J,ie,O);l!==oe&&(l=oe,m(l.object)),de=S(A,J,ie,ue),de&&T(A,J,ie,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,b(A,O,ie,J),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,O,ie){const J=ie.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let de=ue[O.id];de===void 0&&(de={},ue[O.id]=de);let oe=de[J];return oe===void 0&&(oe=x(h()),de[J]=oe),oe}function x(A){const O=[],ie=[],J=[];for(let ue=0;ue<n;ue++)O[ue]=0,ie[ue]=0,J[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ie,attributeDivisors:J,object:A,attributes:{},index:null}}function S(A,O,ie,J){const ue=l.attributes,de=O.attributes;let oe=0;const fe=ie.getAttributes();for(const B in fe)if(fe[B].location>=0){const se=ue[B];let U=de[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return l.attributesNum!==oe||l.index!==J}function T(A,O,ie,J){const ue={},de=O.attributes;let oe=0;const fe=ie.getAttributes();for(const B in fe)if(fe[B].location>=0){let se=de[B];se===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ue[B]=U,oe++}l.attributes=ue,l.attributesNum=oe,l.index=J}function R(){const A=l.newAttributes;for(let O=0,ie=A.length;O<ie;O++)A[O]=0}function y(A){g(A,0)}function g(A,O){const ie=l.newAttributes,J=l.enabledAttributes,ue=l.attributeDivisors;ie[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),ue[A]!==O&&(s.vertexAttribDivisor(A,O),ue[A]=O)}function N(){const A=l.newAttributes,O=l.enabledAttributes;for(let ie=0,J=O.length;ie<J;ie++)O[ie]!==A[ie]&&(s.disableVertexAttribArray(ie),O[ie]=0)}function D(A,O,ie,J,ue,de,oe){oe===!0?s.vertexAttribIPointer(A,O,ie,ue,de):s.vertexAttribPointer(A,O,ie,J,ue,de)}function b(A,O,ie,J){R();const ue=J.attributes,de=ie.getAttributes(),oe=O.defaultAttributeValues;for(const fe in de){const B=de[fe];if(B.location>=0){let ce=ue[fe];if(ce===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const se=ce.normalized,U=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const He=re.buffer,Q=re.type,pe=re.bytesPerElement,Ae=Q===s.INT||Q===s.UNSIGNED_INT||ce.gpuType===_d;if(ce.isInterleavedBufferAttribute){const ye=ce.data,be=ye.stride,tt=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let De=0;De<B.locationSize;De++)g(B.location+De,ye.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let De=0;De<B.locationSize;De++)y(B.location+De);s.bindBuffer(s.ARRAY_BUFFER,He);for(let De=0;De<B.locationSize;De++)D(B.location+De,U/B.locationSize,Q,se,be*pe,(tt+U/B.locationSize*De)*pe,Ae)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)g(B.location+ye,ce.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<B.locationSize;ye++)y(B.location+ye);s.bindBuffer(s.ARRAY_BUFFER,He);for(let ye=0;ye<B.locationSize;ye++)D(B.location+ye,U/B.locationSize,Q,se,U*pe,U/B.locationSize*ye*pe,Ae)}}else if(oe!==void 0){const se=oe[fe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}N()}function W(){G();for(const A in r){const O=r[A];for(const ie in O){const J=O[ie];for(const ue in J)_(J[ue].object),delete J[ue];delete O[ie]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const O=r[A.id];for(const ie in O){const J=O[ie];for(const ue in J)_(J[ue].object),delete J[ue];delete O[ie]}delete r[A.id]}function I(A){for(const O in r){const ie=r[O];if(ie[A.id]===void 0)continue;const J=ie[A.id];for(const ue in J)_(J[ue].object),delete J[ue];delete ie[A.id]}}function G(){C(),c=!0,l!==a&&(l=a,m(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function VS(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=_[T];n.update(S,r,1)}function h(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)c(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let T=0;for(let R=0;R<v;R++)T+=_[R]*x[R];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function GS(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==fi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const G=I===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ei&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Mi&&!G)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:W,maxSamples:k}}function WS(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new qr,f=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||T===null||T.length===0||l&&!y)l?_(null):m();else{const N=l?0:r,D=N*4;let b=g.clippingState||null;h.value=b,b=_(T,x,D,S);for(let W=0;W!==D;++W)b[W]=n[W];g.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,T){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=h.value,T!==!0||y===null){const g=S+R*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,b=S;D!==R;++D,b+=4)c.copy(v[D]).applyMatrix4(N,f),c.normal.toArray(y,b),y[b+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function XS(s){let e=new WeakMap;function n(c,f){return f===Nf?c.mapping=eo:f===Ff&&(c.mapping=to),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Nf||f===Ff)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new B0(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const qs=4,zm=[.125,.215,.35,.446,.526,.582],Zr=20,vf=new Dg,Bm=new ft;let xf=null,yf=0,Sf=0,Mf=!1;const $r=(1+Math.sqrt(5))/2,Xs=1/$r,Hm=[new q(-$r,Xs,0),new q($r,Xs,0),new q(-Xs,0,$r),new q(Xs,0,$r),new q(0,$r,-Xs),new q(0,$r,Xs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],YS=new q;class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:c=256,position:f=YS}=l;xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,yf,Sf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:na,format:fi,colorSpace:no,depthBuffer:!1},a=Gm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(l)),this._blurMaterial=qS(l,e,n)}return a}_compileMaterial(e){const n=new Jt(this._lodPlanes[0],e);this._renderer.compile(n,vf)}_sceneToCubeUV(e,n,r,a,l){const h=new Jn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Bm),v.toneMapping=Er,v.autoClear=!1;const T=new Gi({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),R=new Jt(new sa,T);let y=!1;const g=e.background;g?g.isColor&&(T.color.copy(g),e.background=null,y=!0):(T.color.copy(Bm),y=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[N],l.y,l.z)):D===1?(h.up.set(0,0,m[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[N],l.z)):(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[N]));const b=this._cubeSize;kl(a,D*b,N>2?b:0,b,b),v.setRenderTarget(a),y&&v.render(R,h),v.render(e,h)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===eo||e.mapping===to;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Jt(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;kl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,vf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Hm[(a-l-1)%Hm.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,f){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Jt(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),R=l/T,y=isFinite(l)?1+Math.floor(_*R):Zr;y>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const g=[];let N=0;for(let I=0;I<Zr;++I){const G=I/R,C=Math.exp(-G*G/2);g.push(C),I===0?N+=C:I<y&&(N+=2*C)}for(let I=0;I<g.length;I++)g[I]=g[I]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:D}=this;x.dTheta.value=T,x.mipInt.value=D-r;const b=this._sizeLods[a],W=3*b*(a>D-qs?a-D+qs:0),k=4*(this._cubeSize-b);kl(n,W,k,3*b,2*b),h.setRenderTarget(n),h.render(v,vf)}}function jS(s){const e=[],n=[],r=[];let a=s;const l=s-qs+1+zm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let h=1/f;c>s-qs?h=zm[c-s+qs-1]:c===0&&(h=0),r.push(h);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,R=3,y=2,g=1,N=new Float32Array(R*T*S),D=new Float32Array(y*T*S),b=new Float32Array(g*T*S);for(let k=0;k<S;k++){const I=k%3*2/3-1,G=k>2?0:-1,C=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];N.set(C,R*T*k),D.set(x,y*T*k);const A=[k,k,k,k,k,k];b.set(A,g*T*k)}const W=new di;W.setAttribute("position",new ti(N,R)),W.setAttribute("uv",new ti(D,y)),W.setAttribute("faceIndex",new ti(b,g)),e.push(W),a>qs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Gm(s,e,n){const r=new ts(s,e,n);return r.texture.mapping=eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function kl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function qS(s,e,n){const r=new Float32Array(Zr),a=new q(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Wm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Xm(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===Nf||h===Ff,_=h===eo||h===to;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Vm(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Vm(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function KS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ks("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function ZS(s,e,n,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,T=v.attributes.position;let R=0;if(S!==null){const N=S.array;R=S.version;for(let D=0,b=N.length;D<b;D+=3){const W=N[D+0],k=N[D+1],I=N[D+2];x.push(W,k,k,I,I,W)}}else if(T!==void 0){const N=T.array;R=T.version;for(let D=0,b=N.length/3-1;D<b;D+=3){const W=D+0,k=D+1,I=D+2;x.push(W,k,k,I,I,W)}}else return;const y=new(yg(x)?wg:Tg)(x,1);y.version=R;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function _(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function JS(s,e,n){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*c,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function v(x,S,T,R){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,R,0,T);let g=0;for(let N=0;N<T;N++)g+=S[N]*R[N];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function QS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function eM(s,e,n){const r=new WeakMap,a=new Xt;function l(c,f,h){const m=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let A=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let b=0;T===!0&&(b=1),R===!0&&(b=2),y===!0&&(b=3);let W=f.attributes.position.count*b,k=1;W>e.maxTextureSize&&(k=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const I=new Float32Array(W*k*4*v),G=new Sg(I,W,k,v);G.type=Mi,G.needsUpdate=!0;const C=b*4;for(let O=0;O<v;O++){const ie=g[O],J=N[O],ue=D[O],de=W*k*4*O;for(let oe=0;oe<ie.count;oe++){const fe=oe*C;T===!0&&(a.fromBufferAttribute(ie,oe),I[de+fe+0]=a.x,I[de+fe+1]=a.y,I[de+fe+2]=a.z,I[de+fe+3]=0),R===!0&&(a.fromBufferAttribute(J,oe),I[de+fe+4]=a.x,I[de+fe+5]=a.y,I[de+fe+6]=a.z,I[de+fe+7]=0),y===!0&&(a.fromBufferAttribute(ue,oe),I[de+fe+8]=a.x,I[de+fe+9]=a.y,I[de+fe+10]=a.z,I[de+fe+11]=ue.itemSize===4?a.w:1)}}x={count:v,texture:G,size:new gt(W,k)},r.set(f,x),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const R=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function tM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}const Ig=new yn,Ym=new Pg(1,1),Ng=new Sg,Fg=new M0,Og=new Cg,jm=[],qm=[],$m=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function oo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=jm[a];if(l===void 0&&(l=new Float32Array(a),jm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function ru(s,e){let n=qm[e];n===void 0&&(n=new Int32Array(e),qm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function nM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function oM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Zm.set(r),s.uniformMatrix2fv(this.addr,!1,Zm),tn(n,r)}}function aM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),tn(n,r)}}function lM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;$m.set(r),s.uniformMatrix4fv(this.addr,!1,$m),tn(n,r)}}function uM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function hM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function _M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Ym.compareFunction=xg,l=Ym):l=Ig,n.setTexture2D(e||l,a)}function vM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Fg,a)}function xM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Og,a)}function yM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Ng,a)}function SM(s){switch(s){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return oM;case 35675:return aM;case 35676:return lM;case 5124:case 35670:return uM;case 35667:case 35671:return cM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return hM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function MM(s,e){s.uniform1fv(this.addr,e)}function EM(s,e){const n=oo(e,this.size,2);s.uniform2fv(this.addr,n)}function TM(s,e){const n=oo(e,this.size,3);s.uniform3fv(this.addr,n)}function wM(s,e){const n=oo(e,this.size,4);s.uniform4fv(this.addr,n)}function AM(s,e){const n=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function RM(s,e){const n=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function CM(s,e){const n=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function bM(s,e){s.uniform1iv(this.addr,e)}function PM(s,e){s.uniform2iv(this.addr,e)}function LM(s,e){s.uniform3iv(this.addr,e)}function DM(s,e){s.uniform4iv(this.addr,e)}function UM(s,e){s.uniform1uiv(this.addr,e)}function IM(s,e){s.uniform2uiv(this.addr,e)}function NM(s,e){s.uniform3uiv(this.addr,e)}function FM(s,e){s.uniform4uiv(this.addr,e)}function OM(s,e,n){const r=this.cache,a=e.length,l=ru(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Ig,l[c])}function kM(s,e,n){const r=this.cache,a=e.length,l=ru(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Fg,l[c])}function zM(s,e,n){const r=this.cache,a=e.length,l=ru(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Og,l[c])}function BM(s,e,n){const r=this.cache,a=e.length,l=ru(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Ng,l[c])}function HM(s){switch(s){case 5126:return MM;case 35664:return EM;case 35665:return TM;case 35666:return wM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return bM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return UM;case 36294:return IM;case 36295:return NM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return BM}}class VM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=SM(n.type)}}class GM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HM(n.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function Jm(s,e){s.seq.push(e),s.map[e.id]=e}function XM(s,e,n){const r=s.name,a=r.length;for(Ef.lastIndex=0;;){const l=Ef.exec(r),c=Ef.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===a){Jm(n,m===void 0?new VM(f,s,e):new GM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new WM(f),Jm(n,v)),n=v}}}class ql{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);XM(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Qm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const YM=37297;let jM=0;function qM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const eg=new ht;function $M(s){Rt._getMatrix(eg,Rt.workingColorSpace,s);const e=`mat3( ${eg.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function tg(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+qM(s.getShaderSource(e),c)}else return a}function KM(s,e){const n=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ZM(s,e){let n;switch(e){case qv:n="Linear";break;case $v:n="Reinhard";break;case Kv:n="Cineon";break;case Zv:n="ACESFilmic";break;case Qv:n="AgX";break;case e0:n="Neutral";break;case Jv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new q;function JM(){Rt.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function eE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return n}function Ko(s){return s!==""}function ng(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nE=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(s){return s.replace(nE,rE)}const iE=new Map;function rE(s,e){let n=pt[e];if(n===void 0){const r=iE.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hd(n)}const sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(s){return s.replace(sE,oE)}function oE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function sg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function lE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function cE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gd:e="ENVMAP_BLENDING_MULTIPLY";break;case Yv:e="ENVMAP_BLENDING_MIX";break;case jv:e="ENVMAP_BLENDING_ADD";break}return e}function fE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function dE(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const h=aE(n),m=lE(n),_=uE(n),v=cE(n),x=fE(n),S=QM(n),T=eE(l),R=a.createProgram();let y,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ko).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ko).join(`
`),g.length>0&&(g+=`
`)):(y=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),g=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?pt.tonemapping_pars_fragment:"",n.toneMapping!==Er?ZM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,KM("linearToOutputTexel",n.outputColorSpace),JM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),c=hd(c),c=ng(c,n),c=ig(c,n),f=hd(f),f=ng(f,n),f=ig(f,n),c=rg(c),f=rg(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=N+y+c,b=N+g+f,W=Qm(a,a.VERTEX_SHADER,D),k=Qm(a,a.FRAGMENT_SHADER,b);a.attachShader(R,W),a.attachShader(R,k),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(O){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(R).trim(),J=a.getShaderInfoLog(W).trim(),ue=a.getShaderInfoLog(k).trim();let de=!0,oe=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,W,k);else{const fe=tg(a,W,"vertex"),B=tg(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ie+`
`+fe+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(J===""||ue==="")&&(oe=!1);oe&&(O.diagnostics={runnable:de,programLog:ie,vertexShader:{log:J,prefix:y},fragmentShader:{log:ue,prefix:g}})}a.deleteShader(W),a.deleteShader(k),G=new ql(a,R),C=tE(a,R)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,YM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=W,this.fragmentShader=k,this}let hE=0;class pE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new mE(e),n.set(e,r)),r}}class mE{constructor(e){this.id=hE++,this.code=e,this.usedTimes=0}}function gE(s,e,n,r,a,l,c){const f=new Mg,h=new pE,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,A,O,ie,J){const ue=ie.fog,de=J.geometry,oe=C.isMeshStandardMaterial?ie.environment:null,fe=(C.isMeshStandardMaterial?n:e).get(C.envMap||oe),B=fe&&fe.mapping===eu?fe.image.height:null,ce=T[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const se=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=se!==void 0?se.length:0;let re=0;de.morphAttributes.position!==void 0&&(re=1),de.morphAttributes.normal!==void 0&&(re=2),de.morphAttributes.color!==void 0&&(re=3);let He,Q,pe,Ae;if(ce){const Mt=xi[ce];He=Mt.vertexShader,Q=Mt.fragmentShader}else He=C.vertexShader,Q=C.fragmentShader,h.update(C),pe=h.getVertexShaderID(C),Ae=h.getFragmentShaderID(C);const ye=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),tt=J.isInstancedMesh===!0,De=J.isBatchedMesh===!0,Ct=!!C.map,wt=!!C.matcap,mt=!!fe,F=!!C.aoMap,Yt=!!C.lightMap,Te=!!C.bumpMap,Ue=!!C.normalMap,Re=!!C.displacementMap,Je=!!C.emissiveMap,he=!!C.metalnessMap,we=!!C.roughnessMap,lt=C.anisotropy>0,P=C.clearcoat>0,E=C.dispersion>0,j=C.iridescence>0,ae=C.sheen>0,le=C.transmission>0,te=lt&&!!C.anisotropyMap,Ve=P&&!!C.clearcoatMap,Le=P&&!!C.clearcoatNormalMap,ke=P&&!!C.clearcoatRoughnessMap,Ze=j&&!!C.iridescenceMap,ge=j&&!!C.iridescenceThicknessMap,Oe=ae&&!!C.sheenColorMap,je=ae&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Pe=!!C.specularColorMap,at=!!C.specularIntensityMap,H=le&&!!C.transmissionMap,Ie=le&&!!C.thicknessMap,ve=!!C.gradientMap,ze=!!C.alphaMap,Me=C.alphaTest>0,me=!!C.alphaHash,$e=!!C.extensions;let ct=Er;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ct=s.toneMapping);const Pt={shaderID:ce,shaderType:C.type,shaderName:C.name,vertexShader:He,fragmentShader:Q,defines:C.defines,customVertexShaderID:pe,customFragmentShaderID:Ae,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:De,batchingColor:De&&J._colorsTexture!==null,instancing:tt,instancingColor:tt&&J.instanceColor!==null,instancingMorph:tt&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:no,alphaToCoverage:!!C.alphaToCoverage,map:Ct,matcap:wt,envMap:mt,envMapMode:mt&&fe.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Yt,bumpMap:Te,normalMap:Ue,displacementMap:x&&Re,emissiveMap:Je,normalMapObjectSpace:Ue&&C.normalMapType===r0,normalMapTangentSpace:Ue&&C.normalMapType===vg,metalnessMap:he,roughnessMap:we,anisotropy:lt,anisotropyMap:te,clearcoat:P,clearcoatMap:Ve,clearcoatNormalMap:Le,clearcoatRoughnessMap:ke,dispersion:E,iridescence:j,iridescenceMap:Ze,iridescenceThicknessMap:ge,sheen:ae,sheenColorMap:Oe,sheenRoughnessMap:je,specularMap:qe,specularColorMap:Pe,specularIntensityMap:at,transmission:le,transmissionMap:H,thicknessMap:Ie,gradientMap:ve,opaque:C.transparent===!1&&C.blending===$s&&C.alphaToCoverage===!1,alphaMap:ze,alphaTest:Me,alphaHash:me,combine:C.combine,mapUv:Ct&&R(C.map.channel),aoMapUv:F&&R(C.aoMap.channel),lightMapUv:Yt&&R(C.lightMap.channel),bumpMapUv:Te&&R(C.bumpMap.channel),normalMapUv:Ue&&R(C.normalMap.channel),displacementMapUv:Re&&R(C.displacementMap.channel),emissiveMapUv:Je&&R(C.emissiveMap.channel),metalnessMapUv:he&&R(C.metalnessMap.channel),roughnessMapUv:we&&R(C.roughnessMap.channel),anisotropyMapUv:te&&R(C.anisotropyMap.channel),clearcoatMapUv:Ve&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Le&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:je&&R(C.sheenRoughnessMap.channel),specularMapUv:qe&&R(C.specularMap.channel),specularColorMapUv:Pe&&R(C.specularColorMap.channel),specularIntensityMapUv:at&&R(C.specularIntensityMap.channel),transmissionMapUv:H&&R(C.transmissionMap.channel),thicknessMapUv:Ie&&R(C.thicknessMap.channel),alphaMapUv:ze&&R(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ue||lt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!de.attributes.uv&&(Ct||ze),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:be,skinning:J.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ct&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Lt,decodeVideoTextureEmissive:Je&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Qn,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$e&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&C.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)A.push(O),A.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(N(A,C),D(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function N(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),C.push(f.mask)}function b(C){const A=T[C.type];let O;if(A){const ie=xi[A];O=F0.clone(ie.uniforms)}else O=C.uniforms;return O}function W(C,A){let O;for(let ie=0,J=_.length;ie<J;ie++){const ue=_[ie];if(ue.cacheKey===A){O=ue,++O.usedTimes;break}}return O===void 0&&(O=new dE(s,A,C,l),_.push(O)),O}function k(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function I(C){h.remove(C)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:W,releaseProgram:k,releaseShaderCache:I,programs:_,dispose:G}}function _E(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function vE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ag(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,S,T,R,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:R,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function f(v,x,S,T,R,y){const g=c(v,x,S,T,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(v,x,S,T,R,y){const g=c(v,x,S,T,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||vE),r.length>1&&r.sort(x||og),a.length>1&&a.sort(x||og)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:_,sort:m}}function xE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new ag,s.set(r,[c])):a>=l.length?(c=new ag,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function yE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new ft};break;case"SpotLight":n={position:new q,direction:new q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ME=0;function EE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TE(s){const e=new yE,n=SE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,l=new It,c=new It;function f(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,T=0,R=0,y=0,g=0,N=0,D=0,b=0,W=0,k=0,I=0;m.sort(EE);for(let C=0,A=m.length;C<A;C++){const O=m[C],ie=O.color,J=O.intensity,ue=O.distance,de=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)_+=ie.r*J,v+=ie.g*J,x+=ie.b*J;else if(O.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(O.sh.coefficients[oe],J);I++}else if(O.isDirectionalLight){const oe=e.get(O);if(oe.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const fe=O.shadow,B=n.get(O);B.shadowIntensity=fe.intensity,B.shadowBias=fe.bias,B.shadowNormalBias=fe.normalBias,B.shadowRadius=fe.radius,B.shadowMapSize=fe.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=O.shadow.matrix,N++}r.directional[S]=oe,S++}else if(O.isSpotLight){const oe=e.get(O);oe.position.setFromMatrixPosition(O.matrixWorld),oe.color.copy(ie).multiplyScalar(J),oe.distance=ue,oe.coneCos=Math.cos(O.angle),oe.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),oe.decay=O.decay,r.spot[R]=oe;const fe=O.shadow;if(O.map&&(r.spotLightMap[W]=O.map,W++,fe.updateMatrices(O),O.castShadow&&k++),r.spotLightMatrix[R]=fe.matrix,O.castShadow){const B=n.get(O);B.shadowIntensity=fe.intensity,B.shadowBias=fe.bias,B.shadowNormalBias=fe.normalBias,B.shadowRadius=fe.radius,B.shadowMapSize=fe.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=de,b++}R++}else if(O.isRectAreaLight){const oe=e.get(O);oe.color.copy(ie).multiplyScalar(J),oe.halfWidth.set(O.width*.5,0,0),oe.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=oe,y++}else if(O.isPointLight){const oe=e.get(O);if(oe.color.copy(O.color).multiplyScalar(O.intensity),oe.distance=O.distance,oe.decay=O.decay,O.castShadow){const fe=O.shadow,B=n.get(O);B.shadowIntensity=fe.intensity,B.shadowBias=fe.bias,B.shadowNormalBias=fe.normalBias,B.shadowRadius=fe.radius,B.shadowMapSize=fe.mapSize,B.shadowCameraNear=fe.camera.near,B.shadowCameraFar=fe.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=O.shadow.matrix,D++}r.point[T]=oe,T++}else if(O.isHemisphereLight){const oe=e.get(O);oe.skyColor.copy(O.color).multiplyScalar(J),oe.groundColor.copy(O.groundColor).multiplyScalar(J),r.hemi[g]=oe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==R||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==N||G.numPointShadows!==D||G.numSpotShadows!==b||G.numSpotMaps!==W||G.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=b+W-k,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,G.directionalLength=S,G.pointLength=T,G.spotLength=R,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=N,G.numPointShadows=D,G.numSpotShadows=b,G.numSpotMaps=W,G.numLightProbes=I,r.version=ME++)}function h(m,_){let v=0,x=0,S=0,T=0,R=0;const y=_.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const D=m[g];if(D.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),v++}else if(D.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(D.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),T++}else if(D.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(y),R++}}}return{setup:f,setupView:h,state:r}}function lg(s){const e=new TE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function f(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function wE(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new lg(s),e.set(a,[f])):l>=c.length?(f=new lg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CE(s,e,n){let r=new Ad;const a=new gt,l=new gt,c=new Xt,f=new K0({depthPacking:i0}),h=new Z0,m={},_=n.maxTextureSize,v={[wr]:In,[In]:wr,[Qn]:Qn},x=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:AE,fragmentShader:RE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new di;T.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Jt(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug;let g=this.type;this.render=function(k,I,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Mr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=g!==Hi&&this.type===Hi,ue=g===Hi&&this.type!==Hi;for(let de=0,oe=k.length;de<oe;de++){const fe=k[de],B=fe.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ce=B.getFrameExtents();if(a.multiply(ce),l.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ce.x),a.x=l.x*ce.x,B.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ce.y),a.y=l.y*ce.y,B.mapSize.y=l.y)),B.map===null||J===!0||ue===!0){const U=this.type!==Hi?{minFilter:Wn,magFilter:Wn}:{};B.map!==null&&B.map.dispose(),B.map=new ts(a.x,a.y,U),B.map.texture.name=fe.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let U=0;U<se;U++){const re=B.getViewport(U);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ie.viewport(c),B.updateMatrices(fe,U),r=B.getFrustum(),b(I,G,B.camera,fe,this.type)}B.isPointLightShadow!==!0&&this.type===Hi&&N(B,G),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(C,A,O)};function N(k,I){const G=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ts(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(I,null,G,x,R,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(I,null,G,S,R,null)}function D(k,I,G,C){let A=null;const O=G.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(O!==void 0)A=O;else if(A=G.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ie=A.uuid,J=I.uuid;let ue=m[ie];ue===void 0&&(ue={},m[ie]=ue);let de=ue[J];de===void 0&&(de=A.clone(),ue[J]=de,I.addEventListener("dispose",W)),A=de}if(A.visible=I.visible,A.wireframe=I.wireframe,C===Hi?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:v[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ie=s.properties.get(A);ie.light=G}return A}function b(k,I,G,C,A){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Hi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,k.matrixWorld);const J=e.update(k),ue=k.material;if(Array.isArray(ue)){const de=J.groups;for(let oe=0,fe=de.length;oe<fe;oe++){const B=de[oe],ce=ue[B.materialIndex];if(ce&&ce.visible){const se=D(k,ce,C,A);k.onBeforeShadow(s,k,I,G,J,se,B),s.renderBufferDirect(G,null,J,se,k,B),k.onAfterShadow(s,k,I,G,J,se,B)}}}else if(ue.visible){const de=D(k,ue,C,A);k.onBeforeShadow(s,k,I,G,J,de,null),s.renderBufferDirect(G,null,J,de,k,null),k.onAfterShadow(s,k,I,G,J,de,null)}}const ie=k.children;for(let J=0,ue=ie.length;J<ue;J++)b(ie[J],I,G,C,A)}function W(k){k.target.removeEventListener("dispose",W);for(const G in m){const C=m[G],A=k.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const bE={[Cf]:bf,[Pf]:Uf,[Lf]:If,[Qs]:Df,[bf]:Cf,[Uf]:Pf,[If]:Lf,[Df]:Qs};function PE(s,e){function n(){let H=!1;const Ie=new Xt;let ve=null;const ze=new Xt(0,0,0,0);return{setMask:function(Me){ve!==Me&&!H&&(s.colorMask(Me,Me,Me,Me),ve=Me)},setLocked:function(Me){H=Me},setClear:function(Me,me,$e,ct,Pt){Pt===!0&&(Me*=ct,me*=ct,$e*=ct),Ie.set(Me,me,$e,ct),ze.equals(Ie)===!1&&(s.clearColor(Me,me,$e,ct),ze.copy(Ie))},reset:function(){H=!1,ve=null,ze.set(-1,0,0,0)}}}function r(){let H=!1,Ie=!1,ve=null,ze=null,Me=null;return{setReversed:function(me){if(Ie!==me){const $e=e.get("EXT_clip_control");me?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ie=me;const ct=Me;Me=null,this.setClear(ct)}},getReversed:function(){return Ie},setTest:function(me){me?ye(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(me){ve!==me&&!H&&(s.depthMask(me),ve=me)},setFunc:function(me){if(Ie&&(me=bE[me]),ze!==me){switch(me){case Cf:s.depthFunc(s.NEVER);break;case bf:s.depthFunc(s.ALWAYS);break;case Pf:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case Lf:s.depthFunc(s.EQUAL);break;case Df:s.depthFunc(s.GEQUAL);break;case Uf:s.depthFunc(s.GREATER);break;case If:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=me}},setLocked:function(me){H=me},setClear:function(me){Me!==me&&(Ie&&(me=1-me),s.clearDepth(me),Me=me)},reset:function(){H=!1,ve=null,ze=null,Me=null,Ie=!1}}}function a(){let H=!1,Ie=null,ve=null,ze=null,Me=null,me=null,$e=null,ct=null,Pt=null;return{setTest:function(Mt){H||(Mt?ye(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Mt){Ie!==Mt&&!H&&(s.stencilMask(Mt),Ie=Mt)},setFunc:function(Mt,Rn,Sn){(ve!==Mt||ze!==Rn||Me!==Sn)&&(s.stencilFunc(Mt,Rn,Sn),ve=Mt,ze=Rn,Me=Sn)},setOp:function(Mt,Rn,Sn){(me!==Mt||$e!==Rn||ct!==Sn)&&(s.stencilOp(Mt,Rn,Sn),me=Mt,$e=Rn,ct=Sn)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Pt!==Mt&&(s.clearStencil(Mt),Pt=Mt)},reset:function(){H=!1,Ie=null,ve=null,ze=null,Me=null,me=null,$e=null,ct=null,Pt=null}}}const l=new n,c=new r,f=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],T=null,R=!1,y=null,g=null,N=null,D=null,b=null,W=null,k=null,I=new ft(0,0,0),G=0,C=!1,A=null,O=null,ie=null,J=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,fe=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=fe>=1):B.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=fe>=2);let ce=null,se={};const U=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),He=new Xt().fromArray(U),Q=new Xt().fromArray(re);function pe(H,Ie,ve,ze){const Me=new Uint8Array(4),me=s.createTexture();s.bindTexture(H,me),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ve;$e++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Ie+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return me}const Ae={};Ae[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Qs),Te(!1),Ue(sm),ye(s.CULL_FACE),F(Mr);function ye(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function be(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function tt(H,Ie){return v[H]!==Ie?(s.bindFramebuffer(H,Ie),v[H]=Ie,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ie),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function De(H,Ie){let ve=S,ze=!1;if(H){ve=x.get(Ie),ve===void 0&&(ve=[],x.set(Ie,ve));const Me=H.textures;if(ve.length!==Me.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let me=0,$e=Me.length;me<$e;me++)ve[me]=s.COLOR_ATTACHMENT0+me;ve.length=Me.length,ze=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,ze=!0);ze&&s.drawBuffers(ve)}function Ct(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const wt={[Kr]:s.FUNC_ADD,[bv]:s.FUNC_SUBTRACT,[Pv]:s.FUNC_REVERSE_SUBTRACT};wt[Lv]=s.MIN,wt[Dv]=s.MAX;const mt={[Uv]:s.ZERO,[Iv]:s.ONE,[Nv]:s.SRC_COLOR,[Af]:s.SRC_ALPHA,[Hv]:s.SRC_ALPHA_SATURATE,[zv]:s.DST_COLOR,[Ov]:s.DST_ALPHA,[Fv]:s.ONE_MINUS_SRC_COLOR,[Rf]:s.ONE_MINUS_SRC_ALPHA,[Bv]:s.ONE_MINUS_DST_COLOR,[kv]:s.ONE_MINUS_DST_ALPHA,[Vv]:s.CONSTANT_COLOR,[Gv]:s.ONE_MINUS_CONSTANT_COLOR,[Wv]:s.CONSTANT_ALPHA,[Xv]:s.ONE_MINUS_CONSTANT_ALPHA};function F(H,Ie,ve,ze,Me,me,$e,ct,Pt,Mt){if(H===Mr){R===!0&&(be(s.BLEND),R=!1);return}if(R===!1&&(ye(s.BLEND),R=!0),H!==Cv){if(H!==y||Mt!==C){if((g!==Kr||b!==Kr)&&(s.blendEquation(s.FUNC_ADD),g=Kr,b=Kr),Mt)switch(H){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.ONE,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,D=null,W=null,k=null,I.set(0,0,0),G=0,y=H,C=Mt}return}Me=Me||Ie,me=me||ve,$e=$e||ze,(Ie!==g||Me!==b)&&(s.blendEquationSeparate(wt[Ie],wt[Me]),g=Ie,b=Me),(ve!==N||ze!==D||me!==W||$e!==k)&&(s.blendFuncSeparate(mt[ve],mt[ze],mt[me],mt[$e]),N=ve,D=ze,W=me,k=$e),(ct.equals(I)===!1||Pt!==G)&&(s.blendColor(ct.r,ct.g,ct.b,Pt),I.copy(ct),G=Pt),y=H,C=!1}function Yt(H,Ie){H.side===Qn?be(s.CULL_FACE):ye(s.CULL_FACE);let ve=H.side===In;Ie&&(ve=!ve),Te(ve),H.blending===$s&&H.transparent===!1?F(Mr):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const ze=H.stencilWrite;f.setTest(ze),ze&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(H){A!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),A=H)}function Ue(H){H!==wv?(ye(s.CULL_FACE),H!==O&&(H===sm?s.cullFace(s.BACK):H===Av?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),O=H}function Re(H){H!==ie&&(oe&&s.lineWidth(H),ie=H)}function Je(H,Ie,ve){H?(ye(s.POLYGON_OFFSET_FILL),(J!==Ie||ue!==ve)&&(s.polygonOffset(Ie,ve),J=Ie,ue=ve)):be(s.POLYGON_OFFSET_FILL)}function he(H){H?ye(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function we(H){H===void 0&&(H=s.TEXTURE0+de-1),ce!==H&&(s.activeTexture(H),ce=H)}function lt(H,Ie,ve){ve===void 0&&(ce===null?ve=s.TEXTURE0+de-1:ve=ce);let ze=se[ve];ze===void 0&&(ze={type:void 0,texture:void 0},se[ve]=ze),(ze.type!==H||ze.texture!==Ie)&&(ce!==ve&&(s.activeTexture(ve),ce=ve),s.bindTexture(H,Ie||Ae[H]),ze.type=H,ze.texture=Ie)}function P(){const H=se[ce];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{s.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{s.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{s.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{s.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(H){He.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),He.copy(H))}function je(H){Q.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function qe(H,Ie){let ve=m.get(Ie);ve===void 0&&(ve=new WeakMap,m.set(Ie,ve));let ze=ve.get(H);ze===void 0&&(ze=s.getUniformBlockIndex(Ie,H.name),ve.set(H,ze))}function Pe(H,Ie){const ze=m.get(Ie).get(H);h.get(Ie)!==ze&&(s.uniformBlockBinding(Ie,ze,H.__bindingPointIndex),h.set(Ie,ze))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ce=null,se={},v={},x=new WeakMap,S=[],T=null,R=!1,y=null,g=null,N=null,D=null,b=null,W=null,k=null,I=new ft(0,0,0),G=0,C=!1,A=null,O=null,ie=null,J=null,ue=null,He.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:be,bindFramebuffer:tt,drawBuffers:De,useProgram:Ct,setBlending:F,setMaterial:Yt,setFlipSided:Te,setCullFace:Ue,setLineWidth:Re,setPolygonOffset:Je,setScissorTest:he,activeTexture:we,bindTexture:lt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:Ze,texImage3D:ge,updateUBOMapping:qe,uniformBlockBinding:Pe,texStorage2D:Le,texStorage3D:ke,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:te,compressedTexSubImage3D:Ve,scissor:Oe,viewport:je,reset:at}}function LE(s,e,n,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return S?new OffscreenCanvas(P,E):Jl("canvas")}function R(P,E,j){let ae=1;const le=lt(P);if((le.width>j||le.height>j)&&(ae=j/Math.max(le.width,le.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ae*le.width),Ve=Math.floor(ae*le.height);v===void 0&&(v=T(te,Ve));const Le=E?T(te,Ve):v;return Le.width=te,Le.height=Ve,Le.getContext("2d").drawImage(P,0,0,te,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+te+"x"+Ve+")."),Le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,E,j,ae,le=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=E;if(E===s.RED&&(j===s.FLOAT&&(te=s.R32F),j===s.HALF_FLOAT&&(te=s.R16F),j===s.UNSIGNED_BYTE&&(te=s.R8)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.R8UI),j===s.UNSIGNED_SHORT&&(te=s.R16UI),j===s.UNSIGNED_INT&&(te=s.R32UI),j===s.BYTE&&(te=s.R8I),j===s.SHORT&&(te=s.R16I),j===s.INT&&(te=s.R32I)),E===s.RG&&(j===s.FLOAT&&(te=s.RG32F),j===s.HALF_FLOAT&&(te=s.RG16F),j===s.UNSIGNED_BYTE&&(te=s.RG8)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.RG8UI),j===s.UNSIGNED_SHORT&&(te=s.RG16UI),j===s.UNSIGNED_INT&&(te=s.RG32UI),j===s.BYTE&&(te=s.RG8I),j===s.SHORT&&(te=s.RG16I),j===s.INT&&(te=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.RGB8UI),j===s.UNSIGNED_SHORT&&(te=s.RGB16UI),j===s.UNSIGNED_INT&&(te=s.RGB32UI),j===s.BYTE&&(te=s.RGB8I),j===s.SHORT&&(te=s.RGB16I),j===s.INT&&(te=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),j===s.UNSIGNED_INT&&(te=s.RGBA32UI),j===s.BYTE&&(te=s.RGBA8I),j===s.SHORT&&(te=s.RGBA16I),j===s.INT&&(te=s.RGBA32I)),E===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),E===s.RGBA){const Ve=le?Kl:Rt.getTransfer(ae);j===s.FLOAT&&(te=s.RGBA32F),j===s.HALF_FLOAT&&(te=s.RGBA16F),j===s.UNSIGNED_BYTE&&(te=Ve===Lt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(P,E){let j;return P?E===null||E===es||E===Qo?j=s.DEPTH24_STENCIL8:E===Mi?j=s.DEPTH32F_STENCIL8:E===Jo&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===Qo?j=s.DEPTH_COMPONENT24:E===Mi?j=s.DEPTH_COMPONENT32F:E===Jo&&(j=s.DEPTH_COMPONENT16),j}function W(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wn&&P.minFilter!==Si?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function k(P){const E=P.target;E.removeEventListener("dispose",k),G(E),E.isVideoTexture&&_.delete(E)}function I(P){const E=P.target;E.removeEventListener("dispose",I),A(E)}function G(P){const E=r.get(P);if(E.__webglInit===void 0)return;const j=P.source,ae=x.get(j);if(ae){const le=ae[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(P),Object.keys(ae).length===0&&x.delete(j)}r.remove(P)}function C(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const j=P.source,ae=x.get(j);delete ae[E.__cacheKey],c.memory.textures--}function A(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let le=0;le<E.__webglFramebuffer[ae].length;le++)s.deleteFramebuffer(E.__webglFramebuffer[ae][le]);else s.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)s.deleteFramebuffer(E.__webglFramebuffer[ae]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=P.textures;for(let ae=0,le=j.length;ae<le;ae++){const te=r.get(j[ae]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),c.memory.textures--),r.remove(j[ae])}r.remove(P)}let O=0;function ie(){O=0}function J(){const P=O;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),O+=1,P}function ue(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function de(P,E){const j=r.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(j,P,E);return}}n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function oe(P,E){const j=r.get(P);if(P.version>0&&j.__version!==P.version){Ae(j,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function fe(P,E){const j=r.get(P);if(P.version>0&&j.__version!==P.version){Ae(j,P,E);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function B(P,E){const j=r.get(P);if(P.version>0&&j.__version!==P.version){ye(j,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const ce={[$l]:s.REPEAT,[Sr]:s.CLAMP_TO_EDGE,[Of]:s.MIRRORED_REPEAT},se={[Wn]:s.NEAREST,[t0]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Hc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},U={[s0]:s.NEVER,[f0]:s.ALWAYS,[o0]:s.LESS,[xg]:s.LEQUAL,[a0]:s.EQUAL,[c0]:s.GEQUAL,[l0]:s.GREATER,[u0]:s.NOTEQUAL};function re(P,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Si||E.magFilter===Hc||E.magFilter===pl||E.magFilter===Jr||E.minFilter===Si||E.minFilter===Hc||E.minFilter===pl||E.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ce[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ce[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ce[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wn||E.minFilter!==pl&&E.minFilter!==Jr||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function He(P,E){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",k));const ae=E.source;let le=x.get(ae);le===void 0&&(le={},x.set(ae,le));const te=ue(E);if(te!==P.__cacheKey){le[te]===void 0&&(le[te]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,j=!0),le[te].usedTimes++;const Ve=le[P.__cacheKey];Ve!==void 0&&(le[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(E)),P.__cacheKey=te,P.__webglTexture=le[te].texture}return j}function Q(P,E,j){return Math.floor(Math.floor(P/j)/E)}function pe(P,E,j,ae){const te=P.updateRanges;if(te.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,ae,E.data);else{te.sort((ge,Oe)=>ge.start-Oe.start);let Ve=0;for(let ge=1;ge<te.length;ge++){const Oe=te[Ve],je=te[ge],qe=Oe.start+Oe.count,Pe=Q(je.start,E.width,4),at=Q(Oe.start,E.width,4);je.start<=qe+1&&Pe===at&&Q(je.start+je.count-1,E.width,4)===Pe?Oe.count=Math.max(Oe.count,je.start+je.count-Oe.start):(++Ve,te[Ve]=je)}te.length=Ve+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),ke=s.getParameter(s.UNPACK_SKIP_PIXELS),Ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ge=0,Oe=te.length;ge<Oe;ge++){const je=te[ge],qe=Math.floor(je.start/4),Pe=Math.ceil(je.count/4),at=qe%E.width,H=Math.floor(qe/E.width),Ie=Pe,ve=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,at,H,Ie,ve,j,ae,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ze)}}function Ae(P,E,j){let ae=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=s.TEXTURE_3D);const le=He(P,E),te=E.source;n.bindTexture(ae,P.__webglTexture,s.TEXTURE0+j);const Ve=r.get(te);if(te.version!==Ve.__version||le===!0){n.activeTexture(s.TEXTURE0+j);const Le=Rt.getPrimaries(Rt.workingColorSpace),ke=E.colorSpace===yr?null:Rt.getPrimaries(E.colorSpace),Ze=E.colorSpace===yr||Le===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ge=R(E.image,!1,a.maxTextureSize);ge=we(E,ge);const Oe=l.convert(E.format,E.colorSpace),je=l.convert(E.type);let qe=D(E.internalFormat,Oe,je,E.colorSpace,E.isVideoTexture);re(ae,E);let Pe;const at=E.mipmaps,H=E.isVideoTexture!==!0,Ie=Ve.__version===void 0||le===!0,ve=te.dataReady,ze=W(E,ge);if(E.isDepthTexture)qe=b(E.format===ta,E.type),Ie&&(H?n.texStorage2D(s.TEXTURE_2D,1,qe,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,qe,ge.width,ge.height,0,Oe,je,null));else if(E.isDataTexture)if(at.length>0){H&&Ie&&n.texStorage2D(s.TEXTURE_2D,ze,qe,at[0].width,at[0].height);for(let Me=0,me=at.length;Me<me;Me++)Pe=at[Me],H?ve&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Oe,je,Pe.data):n.texImage2D(s.TEXTURE_2D,Me,qe,Pe.width,Pe.height,0,Oe,je,Pe.data);E.generateMipmaps=!1}else H?(Ie&&n.texStorage2D(s.TEXTURE_2D,ze,qe,ge.width,ge.height),ve&&pe(E,ge,Oe,je)):n.texImage2D(s.TEXTURE_2D,0,qe,ge.width,ge.height,0,Oe,je,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ze,qe,at[0].width,at[0].height,ge.depth);for(let Me=0,me=at.length;Me<me;Me++)if(Pe=at[Me],E.format!==fi)if(Oe!==null)if(H){if(ve)if(E.layerUpdates.size>0){const $e=km(Pe.width,Pe.height,E.format,E.type);for(const ct of E.layerUpdates){const Pt=Pe.data.subarray(ct*$e/Pe.data.BYTES_PER_ELEMENT,(ct+1)*$e/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,ct,Pe.width,Pe.height,1,Oe,Pt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ge.depth,Oe,Pe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,qe,Pe.width,Pe.height,ge.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ge.depth,Oe,je,Pe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Me,qe,Pe.width,Pe.height,ge.depth,0,Oe,je,Pe.data)}else{H&&Ie&&n.texStorage2D(s.TEXTURE_2D,ze,qe,at[0].width,at[0].height);for(let Me=0,me=at.length;Me<me;Me++)Pe=at[Me],E.format!==fi?Oe!==null?H?ve&&n.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Oe,Pe.data):n.compressedTexImage2D(s.TEXTURE_2D,Me,qe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Oe,je,Pe.data):n.texImage2D(s.TEXTURE_2D,Me,qe,Pe.width,Pe.height,0,Oe,je,Pe.data)}else if(E.isDataArrayTexture)if(H){if(Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ze,qe,ge.width,ge.height,ge.depth),ve)if(E.layerUpdates.size>0){const Me=km(ge.width,ge.height,E.format,E.type);for(const me of E.layerUpdates){const $e=ge.data.subarray(me*Me/ge.data.BYTES_PER_ELEMENT,(me+1)*Me/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ge.width,ge.height,1,Oe,je,$e)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Oe,je,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,ge.width,ge.height,ge.depth,0,Oe,je,ge.data);else if(E.isData3DTexture)H?(Ie&&n.texStorage3D(s.TEXTURE_3D,ze,qe,ge.width,ge.height,ge.depth),ve&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Oe,je,ge.data)):n.texImage3D(s.TEXTURE_3D,0,qe,ge.width,ge.height,ge.depth,0,Oe,je,ge.data);else if(E.isFramebufferTexture){if(Ie)if(H)n.texStorage2D(s.TEXTURE_2D,ze,qe,ge.width,ge.height);else{let Me=ge.width,me=ge.height;for(let $e=0;$e<ze;$e++)n.texImage2D(s.TEXTURE_2D,$e,qe,Me,me,0,Oe,je,null),Me>>=1,me>>=1}}else if(at.length>0){if(H&&Ie){const Me=lt(at[0]);n.texStorage2D(s.TEXTURE_2D,ze,qe,Me.width,Me.height)}for(let Me=0,me=at.length;Me<me;Me++)Pe=at[Me],H?ve&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Oe,je,Pe):n.texImage2D(s.TEXTURE_2D,Me,qe,Oe,je,Pe);E.generateMipmaps=!1}else if(H){if(Ie){const Me=lt(ge);n.texStorage2D(s.TEXTURE_2D,ze,qe,Me.width,Me.height)}ve&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,je,ge)}else n.texImage2D(s.TEXTURE_2D,0,qe,Oe,je,ge);y(E)&&g(ae),Ve.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ye(P,E,j){if(E.image.length!==6)return;const ae=He(P,E),le=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const te=r.get(le);if(le.version!==te.__version||ae===!0){n.activeTexture(s.TEXTURE0+j);const Ve=Rt.getPrimaries(Rt.workingColorSpace),Le=E.colorSpace===yr?null:Rt.getPrimaries(E.colorSpace),ke=E.colorSpace===yr||Ve===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,ge=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!Ze&&!ge?Oe[me]=R(E.image[me],!0,a.maxCubemapSize):Oe[me]=ge?E.image[me].image:E.image[me],Oe[me]=we(E,Oe[me]);const je=Oe[0],qe=l.convert(E.format,E.colorSpace),Pe=l.convert(E.type),at=D(E.internalFormat,qe,Pe,E.colorSpace),H=E.isVideoTexture!==!0,Ie=te.__version===void 0||ae===!0,ve=le.dataReady;let ze=W(E,je);re(s.TEXTURE_CUBE_MAP,E);let Me;if(Ze){H&&Ie&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ze,at,je.width,je.height);for(let me=0;me<6;me++){Me=Oe[me].mipmaps;for(let $e=0;$e<Me.length;$e++){const ct=Me[$e];E.format!==fi?qe!==null?H?ve&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,0,0,ct.width,ct.height,qe,ct.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,at,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,0,0,ct.width,ct.height,qe,Pe,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,at,ct.width,ct.height,0,qe,Pe,ct.data)}}}else{if(Me=E.mipmaps,H&&Ie){Me.length>0&&ze++;const me=lt(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ze,at,me.width,me.height)}for(let me=0;me<6;me++)if(ge){H?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,qe,Pe,Oe[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Oe[me].width,Oe[me].height,0,qe,Pe,Oe[me].data);for(let $e=0;$e<Me.length;$e++){const Pt=Me[$e].image[me].image;H?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,0,0,Pt.width,Pt.height,qe,Pe,Pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,at,Pt.width,Pt.height,0,qe,Pe,Pt.data)}}else{H?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,qe,Pe,Oe[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,qe,Pe,Oe[me]);for(let $e=0;$e<Me.length;$e++){const ct=Me[$e];H?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,0,0,qe,Pe,ct.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,at,qe,Pe,ct.image[me])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),te.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function be(P,E,j,ae,le,te){const Ve=l.convert(j.format,j.colorSpace),Le=l.convert(j.type),ke=D(j.internalFormat,Ve,Le,j.colorSpace),Ze=r.get(E),ge=r.get(j);if(ge.__renderTarget=E,!Ze.__hasExternalTextures){const Oe=Math.max(1,E.width>>te),je=Math.max(1,E.height>>te);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?n.texImage3D(le,te,ke,Oe,je,E.depth,0,Ve,Le,null):n.texImage2D(le,te,ke,Oe,je,0,Ve,Le,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),Je(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,le,ge.__webglTexture,0,Re(E)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,le,ge.__webglTexture,te),n.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(P,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const ae=E.depthTexture,le=ae&&ae.isDepthTexture?ae.type:null,te=b(E.stencilBuffer,le),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Re(E);Je(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,te,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,P)}else{const ae=E.textures;for(let le=0;le<ae.length;le++){const te=ae[le],Ve=l.convert(te.format,te.colorSpace),Le=l.convert(te.type),ke=D(te.internalFormat,Ve,Le,te.colorSpace),Ze=Re(E);j&&Je(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,ke,E.width,E.height):Je(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=r.get(E.depthTexture);ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const le=ae.__webglTexture,te=Re(E);if(E.depthTexture.format===ea)Je(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(E.depthTexture.format===ta)Je(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ct(P){const E=r.get(P),j=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",le)};ae.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=ae}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const ae=P.texture.mipmaps;ae&&ae.length>0?De(E.__webglFramebuffer[0],P):De(E.__webglFramebuffer,P)}else if(j){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=s.createRenderbuffer(),tt(E.__webglDepthbuffer[ae],P,!1);else{const le=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,te)}}else{const ae=P.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),tt(E.__webglDepthbuffer,P,!1);else{const le=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,te)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(P,E,j){const ae=r.get(P);E!==void 0&&be(ae.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Ct(P)}function mt(P){const E=P.texture,j=r.get(P),ae=r.get(E);P.addEventListener("dispose",I);const le=P.textures,te=P.isWebGLCubeRenderTarget===!0,Ve=le.length>1;if(Ve||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=E.version,c.memory.textures++),te){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let ke=0;ke<E.mipmaps.length;ke++)j.__webglFramebuffer[Le][ke]=s.createFramebuffer()}else j.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)j.__webglFramebuffer[Le]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Le=0,ke=le.length;Le<ke;Le++){const Ze=r.get(le[Le]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&Je(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Le=0;Le<le.length;Le++){const ke=le[Le];j.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Le]);const Ze=l.convert(ke.format,ke.colorSpace),ge=l.convert(ke.type),Oe=D(ke.internalFormat,Ze,ge,ke.colorSpace,P.isXRRenderTarget===!0),je=Re(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,j.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(j.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){n.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),re(s.TEXTURE_CUBE_MAP,E);for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)be(j.__webglFramebuffer[Le][ke],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,ke);else be(j.__webglFramebuffer[Le],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Le=0,ke=le.length;Le<ke;Le++){const Ze=le[Le],ge=r.get(Ze);n.bindTexture(s.TEXTURE_2D,ge.__webglTexture),re(s.TEXTURE_2D,Ze),be(j.__webglFramebuffer,P,Ze,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),y(Ze)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Le,ae.__webglTexture),re(Le,E),E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)be(j.__webglFramebuffer[ke],P,E,s.COLOR_ATTACHMENT0,Le,ke);else be(j.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Le,0);y(E)&&g(Le),n.unbindTexture()}P.depthBuffer&&Ct(P)}function F(P){const E=P.textures;for(let j=0,ae=E.length;j<ae;j++){const le=E[j];if(y(le)){const te=N(P),Ve=r.get(le).__webglTexture;n.bindTexture(te,Ve),g(te),n.unbindTexture()}}}const Yt=[],Te=[];function Ue(P){if(P.samples>0){if(Je(P)===!1){const E=P.textures,j=P.width,ae=P.height;let le=s.COLOR_BUFFER_BIT;const te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(P),Le=E.length>1;if(Le)for(let Ze=0;Ze<E.length;Ze++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const ke=P.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ze=0;Ze<E.length;Ze++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ze]);const ge=r.get(E[Ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,j,ae,0,0,j,ae,le,s.NEAREST),h===!0&&(Yt.length=0,Te.length=0,Yt.push(s.COLOR_ATTACHMENT0+Ze),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Yt.push(te),Te.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let Ze=0;Ze<E.length;Ze++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ze]);const ge=r.get(E[Ze]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,ge,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Re(P){return Math.min(a.maxSamples,P.samples)}function Je(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function he(P){const E=c.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function we(P,E){const j=P.colorSpace,ae=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==no&&j!==yr&&(Rt.getTransfer(j)===Lt?(ae!==fi||le!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.setTexture2D=de,this.setTexture2DArray=oe,this.setTexture3D=fe,this.setTextureCube=B,this.rebindTextures=wt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Je}function DE(s,e){function n(r,a=yr){let l;const c=Rt.getTransfer(a);if(r===Ei)return s.UNSIGNED_BYTE;if(r===vd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return s.BYTE;if(r===dg)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===_d)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Mi)return s.FLOAT;if(r===na)return s.HALF_FLOAT;if(r===pg)return s.ALPHA;if(r===mg)return s.RGB;if(r===fi)return s.RGBA;if(r===ea)return s.DEPTH_COMPONENT;if(r===ta)return s.DEPTH_STENCIL;if(r===yd)return s.RED;if(r===Sd)return s.RED_INTEGER;if(r===gg)return s.RG;if(r===Md)return s.RG_INTEGER;if(r===Ed)return s.RGBA_INTEGER;if(r===Vl||r===Gl||r===Wl||r===Xl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kf||r===zf||r===Bf||r===Hf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vf||r===Gf||r===Wf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vf||r===Gf)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xf||r===Yf||r===jf||r===qf||r===$f||r===Kf||r===Zf||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id||r===rd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$f)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ed)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===td)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===id)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yl||r===sd||r===od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Yl)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_g||r===ad||r===ld||r===ud)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Yl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ad)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ld)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new yn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ar({vertexShader:UE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jt(new Qr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends ro{constructor(e,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,m=null,_=null,v=null,x=null,S=null,T=null;const R=new NE,y=n.getContextAttributes();let g=null,N=null;const D=[],b=[],W=new gt;let k=null;const I=new Jn;I.viewport=new Xt;const G=new Jn;G.viewport=new Xt;const C=[I,G],A=new nx;let O=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=D[Q];return pe===void 0&&(pe=new ff,D[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=D[Q];return pe===void 0&&(pe=new ff,D[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=D[Q];return pe===void 0&&(pe=new ff,D[Q]=pe),pe.getHandSpace()};function J(Q){const pe=b.indexOf(Q.inputSource);if(pe===-1)return;const Ae=D[pe];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,m||c),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",de);for(let Q=0;Q<D.length;Q++){const pe=b[Q];pe!==null&&(b[Q]=null,D[Q].disconnect(pe))}O=null,ie=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,N=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ye=null,be=null;y.depth&&(be=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=y.stencil?ta:ea,ye=y.stencil?Qo:es);const tt={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(tt),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new ts(x.textureWidth,x.textureHeight,{format:fi,type:Ei,depthTexture:new Pg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,Ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ts(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(f),He.setContext(a),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function de(Q){for(let pe=0;pe<Q.removed.length;pe++){const Ae=Q.removed[pe],ye=b.indexOf(Ae);ye>=0&&(b[ye]=null,D[ye].disconnect(Ae))}for(let pe=0;pe<Q.added.length;pe++){const Ae=Q.added[pe];let ye=b.indexOf(Ae);if(ye===-1){for(let tt=0;tt<D.length;tt++)if(tt>=b.length){b.push(Ae),ye=tt;break}else if(b[tt]===null){b[tt]=Ae,ye=tt;break}if(ye===-1)break}const be=D[ye];be&&be.connect(Ae)}}const oe=new q,fe=new q;function B(Q,pe,Ae){oe.setFromMatrixPosition(pe.matrixWorld),fe.setFromMatrixPosition(Ae.matrixWorld);const ye=oe.distanceTo(fe),be=pe.projectionMatrix.elements,tt=Ae.projectionMatrix.elements,De=be[14]/(be[10]-1),Ct=be[14]/(be[10]+1),wt=(be[9]+1)/be[5],mt=(be[9]-1)/be[5],F=(be[8]-1)/be[0],Yt=(tt[8]+1)/tt[0],Te=De*F,Ue=De*Yt,Re=ye/(-F+Yt),Je=Re*-F;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Je),Q.translateZ(Re),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const he=De+Re,we=Ct+Re,lt=Te-Je,P=Ue+(ye-Je),E=wt*Ct/we*he,j=mt*Ct/we*he;Q.projectionMatrix.makePerspective(lt,P,E,j,he,we),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let pe=Q.near,Ae=Q.far;R.texture!==null&&(R.depthNear>0&&(pe=R.depthNear),R.depthFar>0&&(Ae=R.depthFar)),A.near=G.near=I.near=pe,A.far=G.far=I.far=Ae,(O!==A.near||ie!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,ie=A.far),I.layers.mask=Q.layers.mask|2,G.layers.mask=Q.layers.mask|4,A.layers.mask=I.layers.mask|G.layers.mask;const ye=Q.parent,be=A.cameras;ce(A,ye);for(let tt=0;tt<be.length;tt++)ce(be[tt],ye);be.length===2?B(A,I,G):A.projectionMatrix.copy(I.projectionMatrix),se(Q,A,ye)};function se(Q,pe,Ae){Ae===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function re(Q,pe){if(_=pe.getViewerPose(m||c),T=pe,_!==null){const Ae=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ye=!1;Ae.length!==A.cameras.length&&(A.cameras.length=0,ye=!0);for(let De=0;De<Ae.length;De++){const Ct=Ae[De];let wt=null;if(S!==null)wt=S.getViewport(Ct);else{const F=v.getViewSubImage(x,Ct);wt=F.viewport,De===0&&(e.setRenderTargetTextures(N,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(N))}let mt=C[De];mt===void 0&&(mt=new Jn,mt.layers.enable(De),mt.viewport=new Xt,C[De]=mt),mt.matrix.fromArray(Ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(wt.x,wt.y,wt.width,wt.height),De===0&&(A.matrix.copy(mt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ye===!0&&A.cameras.push(mt)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const De=v.getDepthInformation(Ae[0]);De&&De.isValid&&De.texture&&R.init(e,De,a.renderState)}}for(let Ae=0;Ae<D.length;Ae++){const ye=b[Ae],be=D[Ae];ye!==null&&be!==void 0&&be.update(ye,pe,m||c)}U&&U(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const He=new Ug;He.setAnimationLoop(re),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const jr=new Ti,OE=new It;function kE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Ag(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,N,D,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,b)):g.isMeshMatcapMaterial?(l(y,g),T(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),R(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?h(y,g,N,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===In&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===In&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),D=N.envMap,b=N.envMapRotation;D&&(y.envMap.value=D,jr.copy(b),jr.x*=-1,jr.y*=-1,jr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),y.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(jr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,N,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function zE(s,e,n,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,D){const b=D.program;r.uniformBlockBinding(N,b)}function m(N,D){let b=a[N.id];b===void 0&&(T(N),b=_(N),a[N.id]=b,N.addEventListener("dispose",y));const W=D.program;r.updateUBOMapping(N,W);const k=e.render.frame;l[N.id]!==k&&(x(N),l[N.id]=k)}function _(N){const D=v();N.__bindingPointIndex=D;const b=s.createBuffer(),W=N.__size,k=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,W,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,b),b}function v(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=a[N.id],b=N.uniforms,W=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let k=0,I=b.length;k<I;k++){const G=Array.isArray(b[k])?b[k]:[b[k]];for(let C=0,A=G.length;C<A;C++){const O=G[C];if(S(O,k,C,W)===!0){const ie=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let ue=0;for(let de=0;de<J.length;de++){const oe=J[de],fe=R(oe);typeof oe=="number"||typeof oe=="boolean"?(O.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ie+ue,O.__data)):oe.isMatrix3?(O.__data[0]=oe.elements[0],O.__data[1]=oe.elements[1],O.__data[2]=oe.elements[2],O.__data[3]=0,O.__data[4]=oe.elements[3],O.__data[5]=oe.elements[4],O.__data[6]=oe.elements[5],O.__data[7]=0,O.__data[8]=oe.elements[6],O.__data[9]=oe.elements[7],O.__data[10]=oe.elements[8],O.__data[11]=0):(oe.toArray(O.__data,ue),ue+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,D,b,W){const k=N.value,I=D+"_"+b;if(W[I]===void 0)return typeof k=="number"||typeof k=="boolean"?W[I]=k:W[I]=k.clone(),!0;{const G=W[I];if(typeof k=="number"||typeof k=="boolean"){if(G!==k)return W[I]=k,!0}else if(G.equals(k)===!1)return G.copy(k),!0}return!1}function T(N){const D=N.uniforms;let b=0;const W=16;for(let I=0,G=D.length;I<G;I++){const C=Array.isArray(D[I])?D[I]:[D[I]];for(let A=0,O=C.length;A<O;A++){const ie=C[A],J=Array.isArray(ie.value)?ie.value:[ie.value];for(let ue=0,de=J.length;ue<de;ue++){const oe=J[ue],fe=R(oe),B=b%W,ce=B%fe.boundary,se=B+ce;b+=ce,se!==0&&W-se<fe.storage&&(b+=W-se),ie.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=b,b+=fe.storage}}}const k=b%W;return k>0&&(b+=W-k),N.__size=b,N.__cache={},this}function R(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const b=c.indexOf(D.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function g(){for(const N in a)s.deleteBuffer(a[N]);c=[],a={},l={}}return{bind:h,update:m,dispose:g}}class BE{constructor(e={}){const{canvas:n=h0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const N=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let W=!1;this._outputColorSpace=Gn;let k=0,I=0,G=null,C=-1,A=null;const O=new Xt,ie=new Xt;let J=null;const ue=new ft(0);let de=0,oe=n.width,fe=n.height,B=1,ce=null,se=null;const U=new Xt(0,0,oe,fe),re=new Xt(0,0,oe,fe);let He=!1;const Q=new Ad;let pe=!1,Ae=!1;const ye=new It,be=new It,tt=new q,De=new Xt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function mt(){return G===null?B:1}let F=r;function Yt(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${md}`),n.addEventListener("webglcontextlost",ze,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",me,!1),F===null){const X="webgl2";if(F=Yt(X,w),F===null)throw Yt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,Ue,Re,Je,he,we,lt,P,E,j,ae,le,te,Ve,Le,ke,Ze,ge,Oe,je,qe,Pe,at,H;function Ie(){Te=new KS(F),Te.init(),Pe=new DE(F,Te),Ue=new GS(F,Te,e,Pe),Re=new PE(F,Te),Ue.reverseDepthBuffer&&x&&Re.buffers.depth.setReversed(!0),Je=new QS(F),he=new _E,we=new LE(F,Te,Re,he,Ue,Pe,Je),lt=new XS(b),P=new $S(b),E=new sx(F),at=new HS(F,E),j=new ZS(F,E,Je,at),ae=new tM(F,j,E,Je),Oe=new eM(F,Ue,we),ke=new WS(he),le=new gE(b,lt,P,Te,Ue,at,ke),te=new kE(b,he),Ve=new xE,Le=new wE(Te),ge=new BS(b,lt,P,Re,ae,S,h),Ze=new CE(b,ae,Ue),H=new zE(F,Je,Ue,Re),je=new VS(F,Te,Je),qe=new JS(F,Te,Je),Je.programs=le.programs,b.capabilities=Ue,b.extensions=Te,b.properties=he,b.renderLists=Ve,b.shadowMap=Ze,b.state=Re,b.info=Je}Ie();const ve=new FE(b,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(oe,fe,!1))},this.getSize=function(w){return w.set(oe,fe)},this.setSize=function(w,X,ne=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,fe=X,n.width=Math.floor(w*B),n.height=Math.floor(X*B),ne===!0&&(n.style.width=w+"px",n.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(oe*B,fe*B).floor()},this.setDrawingBufferSize=function(w,X,ne){oe=w,fe=X,B=ne,n.width=Math.floor(w*ne),n.height=Math.floor(X*ne),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,X,ne,K){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,X,ne,K),Re.viewport(O.copy(U).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,X,ne,K){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,X,ne,K),Re.scissor(ie.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){Re.setScissorTest(He=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,ne=!0){let K=0;if(w){let Y=!1;if(G!==null){const Ee=G.texture.format;Y=Ee===Ed||Ee===Md||Ee===Sd}if(Y){const Ee=G.texture.type,Ne=Ee===Ei||Ee===es||Ee===Jo||Ee===Qo||Ee===vd||Ee===xd,We=ge.getClearColor(),Ge=ge.getClearAlpha(),ot=We.r,st=We.g,Ye=We.b;Ne?(T[0]=ot,T[1]=st,T[2]=Ye,T[3]=Ge,F.clearBufferuiv(F.COLOR,0,T)):(R[0]=ot,R[1]=st,R[2]=Ye,R[3]=Ge,F.clearBufferiv(F.COLOR,0,R))}else K|=F.COLOR_BUFFER_BIT}X&&(K|=F.DEPTH_BUFFER_BIT),ne&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ge.dispose(),Ve.dispose(),Le.dispose(),he.dispose(),lt.dispose(),P.dispose(),ae.dispose(),at.dispose(),H.dispose(),le.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",is),ve.removeEventListener("sessionend",Xi),wi.stop()};function ze(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const w=Je.autoReset,X=Ze.enabled,ne=Ze.autoUpdate,K=Ze.needsUpdate,Y=Ze.type;Ie(),Je.autoReset=w,Ze.enabled=X,Ze.autoUpdate=ne,Ze.needsUpdate=K,Ze.type=Y}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const X=w.target;X.removeEventListener("dispose",$e),ct(X)}function ct(w){Pt(w),he.remove(w)}function Pt(w){const X=he.get(w).programs;X!==void 0&&(X.forEach(function(ne){le.releaseProgram(ne)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,ne,K,Y,Ee){X===null&&(X=Ct);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,We=la(w,X,ne,K,Y);Re.setMaterial(K,Ne);let Ge=ne.index,ot=1;if(K.wireframe===!0){if(Ge=j.getWireframeAttribute(ne),Ge===void 0)return;ot=2}const st=ne.drawRange,Ye=ne.attributes.position;let vt=st.start*ot,dt=(st.start+st.count)*ot;Ee!==null&&(vt=Math.max(vt,Ee.start*ot),dt=Math.min(dt,(Ee.start+Ee.count)*ot)),Ge!==null?(vt=Math.max(vt,0),dt=Math.min(dt,Ge.count)):Ye!=null&&(vt=Math.max(vt,0),dt=Math.min(dt,Ye.count));const Ft=dt-vt;if(Ft<0||Ft===1/0)return;at.setup(Y,K,We,ne,Ge);let zt,St=je;if(Ge!==null&&(zt=E.get(Ge),St=qe,St.setIndex(zt)),Y.isMesh)K.wireframe===!0?(Re.setLineWidth(K.wireframeLinewidth*mt()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(Y.isLine){let nt=K.linewidth;nt===void 0&&(nt=1),Re.setLineWidth(nt*mt()),Y.isLineSegments?St.setMode(F.LINES):Y.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else Y.isPoints?St.setMode(F.POINTS):Y.isSprite&&St.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const nt=Y._multiDrawStarts,Gt=Y._multiDrawCounts,yt=Y._multiDrawCount,dn=Ge?E.get(Ge).bytesPerElement:1,ji=he.get(K).currentProgram.getUniforms();for(let Mn=0;Mn<yt;Mn++)ji.setValue(F,"_gl_DrawID",Mn),St.render(nt[Mn]/dn,Gt[Mn])}else if(Y.isInstancedMesh)St.renderInstances(vt,Ft,Y.count);else if(ne.isInstancedBufferGeometry){const nt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Gt=Math.min(ne.instanceCount,nt);St.renderInstances(vt,Ft,Gt)}else St.render(vt,Ft)};function Mt(w,X,ne){w.transparent===!0&&w.side===Qn&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,rs(w,X,ne),w.side=wr,w.needsUpdate=!0,rs(w,X,ne),w.side=Qn):rs(w,X,ne)}this.compile=function(w,X,ne=null){ne===null&&(ne=w),g=Le.get(ne),g.init(X),D.push(g),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),w!==ne&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const K=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let Ne=0;Ne<Ee.length;Ne++){const We=Ee[Ne];Mt(We,ne,Y),K.add(We)}else Mt(Ee,ne,Y),K.add(Ee)}),g=D.pop(),K},this.compileAsync=function(w,X,ne=null){const K=this.compile(w,X,ne);return new Promise(Y=>{function Ee(){if(K.forEach(function(Ne){he.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){Y(w);return}setTimeout(Ee,10)}Te.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Rn=null;function Sn(w){Rn&&Rn(w)}function is(){wi.stop()}function Xi(){wi.start()}const wi=new Ug;wi.setAnimationLoop(Sn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){Rn=w,ve.setAnimationLoop(w),w===null?wi.stop():wi.start()},ve.addEventListener("sessionstart",is),ve.addEventListener("sessionend",Xi),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(X),X=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,X,G),g=Le.get(w,D.length),g.init(X),D.push(g),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(be),Ae=this.localClippingEnabled,pe=ke.init(this.clippingPlanes,Ae),y=Ve.get(w,N.length),y.init(),N.push(y),ve.enabled===!0&&ve.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Ai(Ee,X,-1/0,b.sortObjects)}Ai(w,X,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ce,se),wt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,wt&&ge.addToRenderList(y,w),this.info.render.frame++,pe===!0&&ke.beginShadows();const ne=g.state.shadowsArray;Ze.render(ne,w,X),pe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,Y=y.transmissive;if(g.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(Y.length>0)for(let Ne=0,We=Ee.length;Ne<We;Ne++){const Ge=Ee[Ne];Cr(K,Y,w,Ge)}wt&&ge.render(w);for(let Ne=0,We=Ee.length;Ne<We;Ne++){const Ge=Ee[Ne];Rr(y,w,Ge,Ge.viewport)}}else Y.length>0&&Cr(K,Y,w,X),wt&&ge.render(w),Rr(y,w,X);G!==null&&I===0&&(we.updateMultisampleRenderTarget(G),we.updateRenderTargetMipmap(G)),w.isScene===!0&&w.onAfterRender(b,w,X),at.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],pe===!0&&ke.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Ai(w,X,ne,K){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){K&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const Ne=ae.update(w),We=w.material;We.visible&&y.push(w,Ne,We,ne,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Ne=ae.update(w),We=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),De.copy(Ne.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(We)){const Ge=Ne.groups;for(let ot=0,st=Ge.length;ot<st;ot++){const Ye=Ge[ot],vt=We[Ye.materialIndex];vt&&vt.visible&&y.push(w,Ne,vt,ne,De.z,Ye)}}else We.visible&&y.push(w,Ne,We,ne,De.z,null)}}const Ee=w.children;for(let Ne=0,We=Ee.length;Ne<We;Ne++)Ai(Ee[Ne],X,ne,K)}function Rr(w,X,ne,K){const Y=w.opaque,Ee=w.transmissive,Ne=w.transparent;g.setupLightsView(ne),pe===!0&&ke.setGlobalState(b.clippingPlanes,ne),K&&Re.viewport(O.copy(K)),Y.length>0&&Yi(Y,X,ne),Ee.length>0&&Yi(Ee,X,ne),Ne.length>0&&Yi(Ne,X,ne),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Cr(w,X,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new ts(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?na:Ei,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[K.id],Ne=K.viewport||O;Ee.setSize(Ne.z*b.transmissionResolutionScale,Ne.w*b.transmissionResolutionScale);const We=b.getRenderTarget();b.setRenderTarget(Ee),b.getClearColor(ue),de=b.getClearAlpha(),de<1&&b.setClearColor(16777215,.5),b.clear(),wt&&ge.render(ne);const Ge=b.toneMapping;b.toneMapping=Er;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),pe===!0&&ke.setGlobalState(b.clippingPlanes,K),Yi(w,ne,K),we.updateMultisampleRenderTarget(Ee),we.updateRenderTargetMipmap(Ee),Te.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ye=0,vt=X.length;Ye<vt;Ye++){const dt=X[Ye],Ft=dt.object,zt=dt.geometry,St=dt.material,nt=dt.group;if(St.side===Qn&&Ft.layers.test(K.layers)){const Gt=St.side;St.side=In,St.needsUpdate=!0,oa(Ft,ne,K,zt,St,nt),St.side=Gt,St.needsUpdate=!0,st=!0}}st===!0&&(we.updateMultisampleRenderTarget(Ee),we.updateRenderTargetMipmap(Ee))}b.setRenderTarget(We),b.setClearColor(ue,de),ot!==void 0&&(K.viewport=ot),b.toneMapping=Ge}function Yi(w,X,ne){const K=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ee=w.length;Y<Ee;Y++){const Ne=w[Y],We=Ne.object,Ge=Ne.geometry,ot=Ne.group;let st=Ne.material;st.allowOverride===!0&&K!==null&&(st=K),We.layers.test(ne.layers)&&oa(We,X,ne,Ge,st,ot)}}function oa(w,X,ne,K,Y,Ee){w.onBeforeRender(b,X,ne,K,Y,Ee),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(b,X,ne,K,w,Ee),Y.transparent===!0&&Y.side===Qn&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,b.renderBufferDirect(ne,X,K,Y,w,Ee),Y.side=wr,Y.needsUpdate=!0,b.renderBufferDirect(ne,X,K,Y,w,Ee),Y.side=Qn):b.renderBufferDirect(ne,X,K,Y,w,Ee),w.onAfterRender(b,X,ne,K,Y,Ee)}function rs(w,X,ne){X.isScene!==!0&&(X=Ct);const K=he.get(w),Y=g.state.lights,Ee=g.state.shadowsArray,Ne=Y.state.version,We=le.getParameters(w,Y.state,Ee,X,ne),Ge=le.getProgramCacheKey(We);let ot=K.programs;K.environment=w.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(w.isMeshStandardMaterial?P:lt).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,ot===void 0&&(w.addEventListener("dispose",$e),ot=new Map,K.programs=ot);let st=ot.get(Ge);if(st!==void 0){if(K.currentProgram===st&&K.lightsStateVersion===Ne)return hi(w,We),st}else We.uniforms=le.getUniforms(w),w.onBeforeCompile(We,b),st=le.acquireProgram(We,Ge),ot.set(Ge,st),K.uniforms=We.uniforms;const Ye=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=ke.uniform),hi(w,We),K.needsLights=su(w),K.lightsStateVersion=Ne,K.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMap.value=Y.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotShadowMap.value=Y.state.spotShadowMap,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMap.value=Y.state.pointShadowMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=st,K.uniformsList=null,st}function aa(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=ql.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function hi(w,X){const ne=he.get(w);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function la(w,X,ne,K,Y){X.isScene!==!0&&(X=Ct),we.resetTextureUnits();const Ee=X.fog,Ne=K.isMeshStandardMaterial?X.environment:null,We=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:no,Ge=(K.isMeshStandardMaterial?P:lt).get(K.envMap||Ne),ot=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,st=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,dt=!!ne.morphAttributes.color;let Ft=Er;K.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ft=b.toneMapping);const zt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,St=zt!==void 0?zt.length:0,nt=he.get(K),Gt=g.state.lights;if(pe===!0&&(Ae===!0||w!==A)){const un=w===A&&K.id===C;ke.setState(K,w,un)}let yt=!1;K.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Gt.state.version||nt.outputColorSpace!==We||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isBatchedMesh&&nt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&nt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&nt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&nt.instancingMorph===!1&&Y.morphTexture!==null||nt.envMap!==Ge||K.fog===!0&&nt.fog!==Ee||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ke.numPlanes||nt.numIntersection!==ke.numIntersection)||nt.vertexAlphas!==ot||nt.vertexTangents!==st||nt.morphTargets!==Ye||nt.morphNormals!==vt||nt.morphColors!==dt||nt.toneMapping!==Ft||nt.morphTargetsCount!==St)&&(yt=!0):(yt=!0,nt.__version=K.version);let dn=nt.currentProgram;yt===!0&&(dn=rs(K,X,Y));let ji=!1,Mn=!1,Ri=!1;const Ut=dn.getUniforms(),hn=nt.uniforms;if(Re.useProgram(dn.program)&&(ji=!0,Mn=!0,Ri=!0),K.id!==C&&(C=K.id,Mn=!0),ji||A!==w){Re.buffers.depth.getReversed()?(ye.copy(w.projectionMatrix),m0(ye),g0(ye),Ut.setValue(F,"projectionMatrix",ye)):Ut.setValue(F,"projectionMatrix",w.projectionMatrix),Ut.setValue(F,"viewMatrix",w.matrixWorldInverse);const rn=Ut.map.cameraPosition;rn!==void 0&&rn.setValue(F,tt.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Ut.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Mn=!0,Ri=!0)}if(Y.isSkinnedMesh){Ut.setOptional(F,Y,"bindMatrix"),Ut.setOptional(F,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ut.setValue(F,"boneTexture",un.boneTexture,we))}Y.isBatchedMesh&&(Ut.setOptional(F,Y,"batchingTexture"),Ut.setValue(F,"batchingTexture",Y._matricesTexture,we),Ut.setOptional(F,Y,"batchingIdTexture"),Ut.setValue(F,"batchingIdTexture",Y._indirectTexture,we),Ut.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ut.setValue(F,"batchingColorTexture",Y._colorsTexture,we));const nn=ne.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Oe.update(Y,ne,dn),(Mn||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,Ut.setValue(F,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=Ge,hn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),Mn&&(Ut.setValue(F,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&ua(hn,Ri),Ee&&K.fog===!0&&te.refreshFogUniforms(hn,Ee),te.refreshMaterialUniforms(hn,K,B,fe,g.state.transmissionRenderTarget[w.id]),ql.upload(F,aa(nt),hn,we)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ql.upload(F,aa(nt),hn,we),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(F,"center",Y.center),Ut.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ut.setValue(F,"normalMatrix",Y.normalMatrix),Ut.setValue(F,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let rn=0,Et=un.length;rn<Et;rn++){const pi=un[rn];H.update(pi,dn),H.bind(pi,dn)}}return dn}function ua(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function su(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,X,ne){const K=he.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),he.get(w.texture).__webglTexture=X,he.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const ne=he.get(w);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const ca=F.createFramebuffer();this.setRenderTarget=function(w,X=0,ne=0){G=w,k=X,I=ne;let K=!0,Y=null,Ee=!1,Ne=!1;if(w){const Ge=he.get(w);if(Ge.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Ge.__webglFramebuffer===void 0)we.setupRenderTarget(w);else if(Ge.__hasExternalTextures)we.rebindTextures(w,he.get(w.texture).__webglTexture,he.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ye=w.depthTexture;if(Ge.__boundDepthTexture!==Ye){if(Ye!==null&&he.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(w)}}const ot=w.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ne=!0);const st=he.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(st[X])?Y=st[X][ne]:Y=st[X],Ee=!0):w.samples>0&&we.useMultisampledRTT(w)===!1?Y=he.get(w).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[ne]:Y=st,O.copy(w.viewport),ie.copy(w.scissor),J=w.scissorTest}else O.copy(U).multiplyScalar(B).floor(),ie.copy(re).multiplyScalar(B).floor(),J=He;if(ne!==0&&(Y=ca),Re.bindFramebuffer(F.FRAMEBUFFER,Y)&&K&&Re.drawBuffers(w,Y),Re.viewport(O),Re.scissor(ie),Re.setScissorTest(J),Ee){const Ge=he.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,ne)}else if(Ne){const Ge=he.get(w.texture),ot=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,ne,ot)}else if(w!==null&&ne!==0){const Ge=he.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,ne)}C=-1},this.readRenderTargetPixels=function(w,X,ne,K,Y,Ee,Ne,We=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=he.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Re.bindFramebuffer(F.FRAMEBUFFER,Ge);try{const ot=w.textures[We],st=ot.format,Ye=ot.type;if(!Ue.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-K&&ne>=0&&ne<=w.height-Y&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We),F.readPixels(X,ne,K,Y,Pe.convert(st),Pe.convert(Ye),Ee))}finally{const ot=G!==null?he.get(G).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(w,X,ne,K,Y,Ee,Ne,We=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=he.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge)if(X>=0&&X<=w.width-K&&ne>=0&&ne<=w.height-Y){Re.bindFramebuffer(F.FRAMEBUFFER,Ge);const ot=w.textures[We],st=ot.format,Ye=ot.type;if(!Ue.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We),F.readPixels(X,ne,K,Y,Pe.convert(st),Pe.convert(Ye),0);const dt=G!==null?he.get(G).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,dt);const Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await p0(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.deleteBuffer(vt),F.deleteSync(Ft),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,ne=0){const K=Math.pow(2,-ne),Y=Math.floor(w.image.width*K),Ee=Math.floor(w.image.height*K),Ne=X!==null?X.x:0,We=X!==null?X.y:0;we.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,Ne,We,Y,Ee),Re.unbindTexture()};const fa=F.createFramebuffer(),da=F.createFramebuffer();this.copyTextureToTexture=function(w,X,ne=null,K=null,Y=0,Ee=null){Ee===null&&(Y!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let Ne,We,Ge,ot,st,Ye,vt,dt,Ft;const zt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(ne!==null)Ne=ne.max.x-ne.min.x,We=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,ot=ne.min.x,st=ne.min.y,Ye=ne.isBox3?ne.min.z:0;else{const nn=Math.pow(2,-Y);Ne=Math.floor(zt.width*nn),We=Math.floor(zt.height*nn),w.isDataArrayTexture?Ge=zt.depth:w.isData3DTexture?Ge=Math.floor(zt.depth*nn):Ge=1,ot=0,st=0,Ye=0}K!==null?(vt=K.x,dt=K.y,Ft=K.z):(vt=0,dt=0,Ft=0);const St=Pe.convert(X.format),nt=Pe.convert(X.type);let Gt;X.isData3DTexture?(we.setTexture3D(X,0),Gt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(we.setTexture2DArray(X,0),Gt=F.TEXTURE_2D_ARRAY):(we.setTexture2D(X,0),Gt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const yt=F.getParameter(F.UNPACK_ROW_LENGTH),dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ji=F.getParameter(F.UNPACK_SKIP_PIXELS),Mn=F.getParameter(F.UNPACK_SKIP_ROWS),Ri=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,zt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const Ut=w.isDataArrayTexture||w.isData3DTexture,hn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const nn=he.get(w),un=he.get(X),rn=he.get(nn.__renderTarget),Et=he.get(un.__renderTarget);Re.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let pi=0;pi<Ge;pi++)Ut&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,he.get(w).__webglTexture,Y,Ye+pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,he.get(X).__webglTexture,Ee,Ft+pi)),F.blitFramebuffer(ot,st,Ne,We,vt,dt,Ne,We,F.DEPTH_BUFFER_BIT,F.NEAREST);Re.bindFramebuffer(F.READ_FRAMEBUFFER,null),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||he.has(w)){const nn=he.get(w),un=he.get(X);Re.bindFramebuffer(F.READ_FRAMEBUFFER,fa),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,da);for(let rn=0;rn<Ge;rn++)Ut?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,Y,Ye+rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,Y),hn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Ee,Ft+rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Ee),Y!==0?F.blitFramebuffer(ot,st,Ne,We,vt,dt,Ne,We,F.COLOR_BUFFER_BIT,F.NEAREST):hn?F.copyTexSubImage3D(Gt,Ee,vt,dt,Ft+rn,ot,st,Ne,We):F.copyTexSubImage2D(Gt,Ee,vt,dt,ot,st,Ne,We);Re.bindFramebuffer(F.READ_FRAMEBUFFER,null),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Gt,Ee,vt,dt,Ft,Ne,We,Ge,St,nt,zt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Gt,Ee,vt,dt,Ft,Ne,We,Ge,St,zt.data):F.texSubImage3D(Gt,Ee,vt,dt,Ft,Ne,We,Ge,St,nt,zt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,vt,dt,Ne,We,St,nt,zt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,vt,dt,zt.width,zt.height,St,zt.data):F.texSubImage2D(F.TEXTURE_2D,Ee,vt,dt,Ne,We,St,nt,zt);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ji),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ri),Ee===0&&X.generateMipmaps&&F.generateMipmap(Gt),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,X,ne=null,K=null,Y=0){return Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,ne,K,Y)},this.initRenderTarget=function(w){he.get(w).__webglFramebuffer===void 0&&we.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?we.setTextureCube(w,0):w.isData3DTexture?we.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?we.setTexture2DArray(w,0):we.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){k=0,I=0,G=null,Re.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const Zo=14042428,Ys=4157358;function $o(s,e,n,r,a,l){const c=s-n,f=e-r;return l*Math.exp(-(c*c+f*f)/(a*a))}function xr(s,e){let n=0;return n+=26*Math.exp(-((e+100)*(e+100))/1444)*(1+.25*Math.sin(s*.045)),n+=20*Math.exp(-((e-105)*(e-105))/1764)*(1+.2*Math.cos(s*.05)),n+=15*Math.exp(-((s+112)*(s+112))/1024),n+=$o(s,e,-52,58,19,13),n+=$o(s,e,-64,-44,13,7),n+=$o(s,e,72,62,27,17),n+=$o(s,e,76,-12,13,5),n+=$o(s,e,-38,16,11,3),n+=.55*Math.sin(s*.31)*Math.cos(e*.27)+.3*Math.sin(s*.11+e*.13),n}const Tf=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Bl=s=>Math.max(0,Math.min(1,s)),Js='"Hiragino Mincho ProN","Yu Mincho","BIZ UDMincho","Noto Serif JP",serif',HE=[{id:"ishida",name:"石田三成",kanji:"石",side:"west",pos:[-62,-40],n:36,face:.9,big:!0},{id:"shimazu",name:"島津義弘",kanji:"島",side:"west",pos:[-46,-24],n:22,face:1.2},{id:"konishi",name:"小西行長",kanji:"小",side:"west",pos:[-41,-8],n:26,face:1.4},{id:"ukita",name:"宇喜多秀家",kanji:"宇",side:"west",pos:[-35,13],n:40,face:1.5},{id:"otani",name:"大谷吉継",kanji:"大",side:"west",pos:[-43,33],n:22,face:1.8},{id:"kobaya",name:"小早川秀秋",kanji:"小早川",side:"turn",pos:[-50,54],n:38,face:-.6,big:!0},{id:"mori",name:"毛利秀元",kanji:"毛",side:"west",pos:[68,56],n:34,face:-1.6},{id:"kuroda",name:"黒田長政",kanji:"黒",side:"east",pos:[-30,-36],n:28,face:-2},{id:"hosokawa",name:"細川忠興",kanji:"細",side:"east",pos:[-22,-26],n:24,face:-2},{id:"ii",name:"井伊直政",kanji:"井",side:"east",pos:[-8,5],n:26,face:-1.6},{id:"fukushima",name:"福島正則",kanji:"福",side:"east",pos:[-12,18],n:32,face:-1.6},{id:"todo",name:"藤堂高虎",kanji:"藤",side:"east",pos:[-16,32],n:24,face:-1.9},{id:"honda",name:"本多忠勝",kanji:"本",side:"east",pos:[16,-14],n:18,face:-1.6},{id:"ieyasu",name:"徳川家康",kanji:"徳",side:"east",pos:[74,-12],n:44,face:-1.6,big:!0}],VE=[{},{ii:[-27,9],fukushima:[-27,15]},{kuroda:[-48,-38],hosokawa:[-44,-30],ukita:[-24,14],todo:[-33,32]},{ieyasu:[12,-6],honda:[2,-2]},{kobaya:[-45,38]},{ishida:[-82,-58],konishi:[-74,-34],ukita:[-64,-4],shimazu:[34,44],ii:[-40,4],fukushima:[-42,12],kuroda:[-58,-42],kobaya:[-42,30]}],GE=[{},{},{},{},{otani:.55},{otani:0,ishida:.35,konishi:.3,ukita:.35,mori:.7}],WE=[[],[{pts:[[-8,5],[-18,7],[-29,10]],side:"east",t0:.05,t1:.5},{pts:[[-12,18],[-20,16],[-30,13]],side:"east",t0:.2,t1:.7}],[{pts:[[-28,-34],[-42,-38],[-55,-42]],side:"east",t0:.05,t1:.5},{pts:[[-33,13],[-26,14],[-19,15]],side:"west",t0:.2,t1:.6},{pts:[[-17,31],[-26,32],[-35,32]],side:"east",t0:.35,t1:.8}],[{pts:[[72,-12],[44,-10],[14,-6]],side:"east",t0:.05,t1:.65}],[{pts:[[-50,52],[-49,45],[-45,38]],side:"east",t0:.25,t1:.65,wide:!0}],[{pts:[[-60,-42],[-72,-50],[-84,-58]],side:"west",t0:.1,t1:.5,flee:!0},{pts:[[-44,-22],[-2,2],[22,24],[34,46]],side:"west",t0:.2,t1:.85},{pts:[[-30,12],[-44,4],[-56,-2]],side:"east",t0:.15,t1:.6}]],Vn=[{key:"布陣",time:"夜明け前 ─ 慶長五年九月十五日",dur:13,fog:1,desc:"深い霧が盆地を覆う。西軍およそ八万は山々を結ぶ鶴翼の陣。東軍七万五千が中山道沿いに対峙する。",sky:{top:1712691,bot:7040646,fog:10133680,sun:[-80,18,-40],sc:11186376,si:.5}},{key:"開戦",time:"午前八時頃",dur:12,fog:.55,desc:"霧が薄れた一瞬、井伊直政隊が抜け駆けで発砲。福島正則隊が宇喜多隊へ突撃し、戦端が開かれる。",sky:{top:3493998,bot:14207400,fog:13616814,sun:[-60,30,30],sc:16769712,si:.85}},{key:"激戦",time:"午前十時頃",dur:12,fog:.22,desc:"黒田・細川勢が笹尾山の石田隊に殺到。大谷吉継は藤堂・京極勢を相手に一歩も退かず、戦線は膠着する。",sky:{top:4088979,bot:14277842,fog:13160130,sun:[-20,60,20],sc:16773848,si:1}},{key:"家康、本陣を進める",time:"午前十一時過ぎ",dur:11,fog:.14,desc:"戦況に焦れた家康は桃配山を下り、最前線・陣場野へ本陣を移す。松尾山へ催促の鉄砲を放ったとも伝わる。",sky:{top:4221082,bot:14672598,fog:13423300,sun:[10,70,0],sc:16774882,si:1.05}},{key:"小早川秀秋、寝返る",time:"正午過ぎ",dur:13,fog:.08,desc:"一万五千の小早川勢が松尾山を駆け下り、味方であるはずの大谷隊へ襲いかかる。脇坂ら四隊も呼応し、戦局は一変する。",sky:{top:3957135,bot:14867912,fog:13683894,sun:[30,65,-10],sc:16773324,si:1.1}},{key:"西軍崩壊・島津の退き口",time:"午後二時頃",dur:14,fog:.04,desc:"大谷隊は壊滅、宇喜多・石田隊も潰走。島津義弘はわずかな手勢で敵中を正面突破し戦場を離脱。天下分け目の合戦は、わずか半日で決した。",sky:{top:4864598,bot:15247722,fog:14262384,sun:[70,22,50],sc:16758896,si:.9}}],XE=[[{p:[-150,95,155],l:[0,0,0]},{p:[-45,42,110],l:[-35,8,25]},{p:[55,58,35],l:[-15,5,0]}],[{p:[32,30,58],l:[-20,3,12]},{p:[0,13,34],l:[-28,4,12]},{p:[-17,9,23],l:[-34,5,13]}],[{p:[-8,16,-6],l:[-45,6,-28]},{p:[-24,14,-54],l:[-58,8,-42]},{p:[-68,22,-66],l:[-62,9,-44]}],[{p:[88,30,18],l:[72,6,-12]},{p:[42,18,12],l:[30,5,-8]},{p:[4,9,8],l:[15,5,-6]}],[{p:[-18,18,76],l:[-52,15,55]},{p:[-44,36,88],l:[-51,17,56]},{p:[-60,17,50],l:[-46,6,40]},{p:[-54,12,28],l:[-44,4,36]}],[{p:[-28,18,18],l:[-52,5,-12]},{p:[22,42,58],l:[-8,5,2]},{p:[95,78,118],l:[0,10,-8]}]];function wf(s,e){const n=document.createElement("canvas");n.width=96,n.height=192;const r=n.getContext("2d");r.fillStyle="#"+new ft(e).getHexString(),r.fillRect(0,0,96,192),r.fillStyle="rgba(255,255,255,0.92)",r.font=s.length>1?`700 30px ${Js}`:`700 64px ${Js}`,r.textAlign="center",r.textBaseline="middle",s.length>1?[...s].forEach((l,c)=>r.fillText(l,48,42+c*38)):(r.fillText(s,48,78),r.beginPath(),r.arc(48,152,16,0,Math.PI*2),r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.85)",r.stroke());const a=new tu(n);return a.anisotropy=4,a}function Hl(s,e,n){const r=document.createElement("canvas");r.width=512,r.height=128;const a=r.getContext("2d");a.clearRect(0,0,512,128);const l="#"+new ft(e).getHexString();return n||(a.fillStyle=l,a.fillRect(70,30,10,68)),a.font=(n?"500 40px ":"700 56px ")+Js,a.textAlign="left",a.textBaseline="middle",a.shadowColor="rgba(0,0,0,0.85)",a.shadowBlur=10,a.fillStyle=n?"rgba(235,235,225,0.85)":"#f5f1e6",a.fillText(s,n?80:96,66),new tu(r)}function YE(){const s=document.createElement("canvas");s.width=128,s.height=64;const e=s.getContext("2d");e.clearRect(0,0,128,64),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(28,6),e.lineTo(78,32),e.lineTo(28,58),e.lineTo(52,32),e.closePath(),e.fill();const n=new tu(s);return n.wrapS=$l,n.wrapT=Sr,n}function jE(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d"),n=e.createRadialGradient(128,128,10,128,128,128);return n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.6,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),new tu(s)}function qE(s,e){const n=e.pts.map(([b,W])=>new q(b,0,W)),r=new jl(n),a=60,l=e.wide?4.2:2.6,c=[],f=[],h=[];let m=null;for(let b=0;b<a;b++){const W=b/(a-1),k=r.getPoint(W),I=r.getTangent(W),G=new q(-I.z,0,I.x).normalize(),C=l*(.35+.65*W),A=xr(k.x,k.z)+.7;if(c.push(k.x+G.x*C,A,k.z+G.z*C),c.push(k.x-G.x*C,A,k.z-G.z*C),f.push(W*6,1,W*6,0),b>0){const O=(b-1)*2;h.push(O,O+1,O+2,O+1,O+3,O+2)}m={p:k,tan:I}}const _=new di;_.setAttribute("position",new Nn(c,3)),_.setAttribute("uv",new Nn(f,2)),_.setIndex(h),_.setDrawRange(0,0);const v=e.side==="east"?Zo:Ys,x=new Gi({color:v,transparent:!0,opacity:.32,depthWrite:!1,side:Qn}),S=new Gi({map:YE(),color:v,transparent:!0,opacity:.95,depthWrite:!1,side:Qn}),T=new Jt(_,x),R=new Jt(_,S);R.position.y=.05;const y=new iu(l*1.5,l*3.2,3),g=new Jt(y,new Gi({color:v,transparent:!0,opacity:.9,depthWrite:!1}));g.rotation.x=Math.PI/2;const N=xr(m.p.x,m.p.z)+.8;g.position.set(m.p.x+m.tan.x*l*1.4,N,m.p.z+m.tan.z*l*1.4),g.rotation.z=-Math.atan2(m.tan.x,m.tan.z),g.visible=!1;const D=new js;return D.add(T,R,g),D.visible=!1,s.add(D),{grp:D,geo:_,chevMat:S,head:g,idxCount:h.length,t0:e.t0,t1:e.t1,flee:!!e.flee}}function $E(){const s=Hr.useRef(null),e=Hr.useRef(null),n=Hr.useRef({playing:!1,phase:0,t:0,jump:null}),[r,a]=Hr.useState(0),[l,c]=Hr.useState(!1),[f,h]=Hr.useState(!1);Hr.useEffect(()=>{const S=s.current,T=S.clientWidth,R=S.clientHeight,y=new BE({antialias:!0});y.setSize(T,R),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.outputColorSpace=Gn,S.appendChild(y.domElement);const g=new V0;g.fog=new wd(10133680,.007);const N=new Jn(46,T/R,.5,900),D=new tx(16769712,.8);g.add(D);const b=new J0(12372186,3817524,.7);g.add(b);const W=150,k=120,I=280,G=230,C=new Qr(I,G,W,k);C.rotateX(-Math.PI/2);const A=C.attributes.position,O=[],ie=new ft(9083486),J=new ft(10726250),ue=new ft(4481087),de=new ft(5926488),oe=new ft(7174790);for(let Te=0;Te<A.count;Te++){const Ue=A.getX(Te),Re=A.getZ(Te),Je=xr(Ue,Re);A.setY(Te,Je);let he;Je<1.6?he=((Math.floor(Ue/7)+Math.floor(Re/5))%2===0?ie:J).clone():Je<7?he=ue.clone().lerp(ie,(7-Je)/6):Je<15?he=ue.clone().lerp(de,(Je-7)/8):he=de.clone().lerp(oe,Math.min(1,(Je-15)/10));const we=.92+.08*Math.sin(Ue*1.7)*Math.cos(Re*1.9);O.push(he.r*we,he.g*we,he.b*we)}C.setAttribute("color",new Nn(O,3)),C.computeVertexNormals();const fe=new Jt(C,new Im({vertexColors:!0}));g.add(fe);function B(Te){const Ue=new jl(Te.map(([P,E])=>new q(P,0,E))),Re=80,Je=[],he=[];for(let P=0;P<Re;P++){const E=P/(Re-1),j=Ue.getPoint(E),ae=Ue.getTangent(E),le=new q(-ae.z,0,ae.x).normalize().multiplyScalar(1.3),te=xr(j.x,j.z)+.18;if(Je.push(j.x+le.x,te,j.z+le.z,j.x-le.x,te,j.z-le.z),P>0){const Ve=(P-1)*2;he.push(Ve,Ve+1,Ve+2,Ve+1,Ve+3,Ve+2)}}const we=new di;we.setAttribute("position",new Nn(Je,3)),we.setIndex(he);const lt=new Jt(we,new Gi({color:13482894,transparent:!0,opacity:.55,depthWrite:!1}));g.add(lt)}B([[-130,-2],[-60,2],[-20,8],[30,2],[80,-6],[135,-10]]),B([[-60,0],[-72,-30],[-86,-70],[-95,-105]]),[["松尾山",-52,58,14],["笹尾山",-64,-44,8.5],["南宮山",72,62,18.5],["桃配山",76,-12,6.5],["伊吹山地",-10,-95,24]].forEach(([Te,Ue,Re,Je])=>{const he=new Pm(new dd({map:Hl(Te,16777215,!0),transparent:!0,opacity:.75,depthTest:!1}));he.position.set(Ue,xr(Ue,Re)+5+(Je-xr(Ue,Re))*0,Re),he.position.y=Je+5,he.scale.set(15,3.75,1),g.add(he)});const ce=new iu(.45,1.5,5);ce.translate(0,.75,0);const se={};HE.forEach(Te=>{const Ue=new js,Re=Te.side==="east"?Zo:Ys,Je=new Im({color:Re,transparent:!0}),he=new Y0(ce,Je,Te.n),we=new Qt,lt=Math.ceil(Math.sqrt(Te.n*1.6));let P=0;for(let je=0;P<Te.n;je++)for(let qe=0;qe<lt&&P<Te.n;qe++,P++)we.position.set((qe-lt/2)*1.3+je%2*.6,0,je*1.5),we.rotation.y=Math.random()*.4,we.scale.setScalar(.9+Math.random()*.25),we.updateMatrix(),he.setMatrixAt(P,we.matrix);Ue.add(he);const E=new Gi({map:wf(Te.kanji,Re),transparent:!0,side:Qn}),j=Te.big?3:2;for(let je=0;je<j;je++){const qe=new Jt(new nu(.07,.07,7),new Gi({color:4864552}));qe.position.set((je-(j-1)/2)*3.2,3.5,4+je%2);const Pe=new Jt(new Qr(1.7,3.6),E);Pe.position.set(qe.position.x+.9,5,qe.position.z),Ue.add(qe,Pe)}const ae=new Pm(new dd({map:Hl(Te.name,Re),transparent:!0,depthTest:!1}));ae.position.set(0,Te.big?12:9.5,0),ae.scale.set(Te.big?19:15,Te.big?4.75:3.75,1),Ue.add(ae),Ue.rotation.y=Te.face,g.add(Ue);const le=[],te=[],Ve=[],Le=[];let ke=Te.pos,Ze=1;for(let je=0;je<Vn.length;je++){le.push(ke),ke=VE[je][Te.id]||ke,te.push(ke),Ve.push(Ze);const Pe=GE[je][Te.id];Ze=Pe!==void 0?Pe:Ze,Le.push(Ze)}se[Te.id]={grp:Ue,mat:Je,flagMat:E,sp:ae,starts:le,ends:te,fadeS:Ve,fadeE:Le,turn:Te.side==="turn"};const[ge,Oe]=Te.pos;Ue.position.set(ge,xr(ge,Oe),Oe)});const U=jE(),re=[];for(let Te=0;Te<9;Te++){const Ue=new Jt(new Qr(150+Math.random()*90,100+Math.random()*60),new Gi({map:U,transparent:!0,opacity:.4,depthWrite:!1}));Ue.rotation.x=-Math.PI/2,Ue.position.set((Math.random()-.5)*180,3.5+Math.random()*7,(Math.random()-.5)*140),Ue.userData={vx:.6+Math.random()*.8,base:.22+Math.random()*.25},g.add(Ue),re.push(Ue)}const He=WE.map(Te=>Te.map(Ue=>qE(g,Ue))),Q=XE.map(Te=>({p:new jl(Te.map(Ue=>new q(...Ue.p)),!1,"catmullrom",.4),l:new jl(Te.map(Ue=>new q(...Ue.l)),!1,"catmullrom",.4)})),pe=new ft;function Ae(Te,Ue,Re,Je){const he=Vn[Te],we=Vn[Math.min(Te+1,Vn.length-1)],lt=Bl((Ue-.85)/.15),P=(le,te)=>new ft(le).lerp(new ft(te),lt);pe.copy(P(he.sky.bot,we.sky.bot)),g.background=pe;const E=P(he.sky.fog,we.sky.fog);g.fog.color.copy(E);const j=he.fog+(we.fog-he.fog)*lt;g.fog.density=.0012+j*.0085;const ae=he.sky.sun.map((le,te)=>le+(we.sky.sun[te]-le)*lt);D.position.set(ae[0],ae[1],ae[2]),D.color.copy(P(he.sky.sc,we.sky.sc)),D.intensity=he.sky.si+(we.sky.si-he.sky.si)*lt,re.forEach((le,te)=>{le.position.x+=le.userData.vx*Re,le.position.x>160&&(le.position.x=-160),le.material.opacity=le.userData.base*j*(.85+.15*Math.sin(Je*.4+te))})}const ye=new ft(Ys);function be(Te,Ue){const Re=Tf(Ue);for(const Je in se){const he=se[Je],[we,lt]=he.starts[Te],[P,E]=he.ends[Te],j=we+(P-we)*Re,ae=lt+(E-lt)*Re;he.grp.position.set(j,xr(j,ae),ae),(P!==we||E!==lt)&&(he.grp.rotation.y=-Math.atan2(P-we,E-lt)+Math.PI);const le=he.fadeS[Te]+(he.fadeE[Te]-he.fadeS[Te])*Re;if(he.mat.opacity=le,he.sp.material.opacity=Math.max(.12,le),he.turn){let te=0;Te>4?te=1:Te===4&&(te=Bl((Ue-.18)/.2)),ye.set(Ys).lerp(new ft(Zo),te),he.mat.color.copy(ye),he.flagMat.color.setScalar(1),he.flagMat.map=he.flagMap||he.flagMat.map,te>0&&he.flippedTex,te>=.5&&!he.flagSwapped?(he.flagMat.map=wf("小早川",Zo),he.flagMat.needsUpdate=!0,he.sp.material.map=Hl("小早川秀秋",Zo),he.flagSwapped=!0):te<.5&&he.flagSwapped&&(he.flagMat.map=wf("小早川",Ys),he.sp.material.map=Hl("小早川秀秋",Ys),he.flagSwapped=!1)}}}function tt(Te,Ue,Re){He.forEach((Je,he)=>{Je.forEach(we=>{if(he!==Te){we.grp.visible=!1,we.geo.setDrawRange(0,0),we.head.visible=!1;return}const lt=Bl((Ue-we.t0)/(we.t1-we.t0));if(we.grp.visible=lt>0,lt<=0)return;const P=Math.floor(we.idxCount/6*Tf(lt))*6;we.geo.setDrawRange(0,P),we.head.visible=lt>.97,we.chevMat.map.offset.x-=Re*.9;const E=Ue>.92?1-(Ue-.92)/.08:1;we.chevMat.opacity=.95*E,we.grp.children[0].material.opacity=.32*E,we.head.material.opacity=.9*E})})}const De=n.current,Ct=new ix;let wt=0,mt;function F(){mt=requestAnimationFrame(F);const Te=Math.min(Ct.getDelta(),.05);wt+=Te,De.jump!==null&&(De.phase=De.jump,De.t=0,De.jump=null,a(De.phase)),De.playing&&(De.t+=Te,De.t>=Vn[De.phase].dur&&(De.phase<Vn.length-1?(De.phase++,De.t=0,a(De.phase)):(De.t=Vn[De.phase].dur-.001,De.playing=!1,c(!1))));const Ue=De.phase,Re=Bl(De.t/Vn[Ue].dur),Je=Q[Ue],he=Tf(Re),we=Je.p.getPoint(he),lt=Je.l.getPoint(he);we.x+=Math.sin(wt*.55)*.5,we.y+=Math.sin(wt*.4+2)*.35,lt.x+=Math.sin(wt*.3+1)*.4,N.position.copy(we),N.lookAt(lt),Ae(Ue,Re,Te,wt),be(Ue,Re),tt(Ue,Re,Te),e.current&&(e.current.style.width=((Ue+Re)/Vn.length*100).toFixed(2)+"%"),y.render(g,N)}F();const Yt=()=>{const Te=S.clientWidth,Ue=S.clientHeight;N.aspect=Te/Ue,N.updateProjectionMatrix(),y.setSize(Te,Ue)};return window.addEventListener("resize",Yt),()=>{cancelAnimationFrame(mt),window.removeEventListener("resize",Yt),y.dispose(),S.removeChild(y.domElement)}},[]);const m=()=>{const S=n.current;f||h(!0),!S.playing&&S.phase===Vn.length-1&&S.t>=Vn[S.phase].dur-.01&&(S.jump=0),S.playing=!S.playing,c(S.playing)},_=S=>{const T=n.current;T.jump=S,f||h(!0),T.playing||(T.playing=!0,c(!0))},v=Vn[r],x=`
    .skg-root{position:relative;width:100%;height:100vh;min-height:560px;background:#0c0e13;overflow:hidden;
      font-family:"Hiragino Kaku Gothic ProN","Yu Gothic","Noto Sans JP",sans-serif;color:#f2ead8;}
    .skg-canvas{position:absolute;inset:0;}
    .skg-bar{position:absolute;left:0;right:0;height:7vh;min-height:34px;background:#07080b;z-index:5;pointer-events:none;}
    .skg-grain{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:.5;mix-blend-mode:overlay;
      background-image:radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px);background-size:3px 3px;}
    .skg-vig{position:absolute;inset:0;z-index:4;pointer-events:none;box-shadow:inset 0 0 180px rgba(5,6,10,.75);}
    .skg-title{position:absolute;top:11vh;right:3.5vw;z-index:8;writing-mode:vertical-rl;text-orientation:upright;
      font-family:${Js};font-size:clamp(26px,4.2vmin,46px);font-weight:700;letter-spacing:.45em;color:#f5efe0;
      text-shadow:0 2px 14px rgba(0,0,0,.8);transition:opacity 1.2s;}
    .skg-title small{font-size:.42em;letter-spacing:.3em;color:#c9a227;margin-top:1.2em;display:block;}
    .skg-card{position:absolute;left:3.5vw;bottom:13vh;z-index:8;max-width:min(460px,62vw);
      background:rgba(10,12,17,.72);backdrop-filter:blur(6px);border-left:3px solid #c9a227;
      padding:14px 18px 16px;box-shadow:0 8px 30px rgba(0,0,0,.45);}
    .skg-eyebrow{font-size:11px;letter-spacing:.28em;color:#c9a227;margin-bottom:6px;}
    .skg-phase{font-family:${Js};font-size:clamp(18px,2.6vmin,26px);font-weight:700;letter-spacing:.08em;line-height:1.3;}
    .skg-desc{font-size:12.5px;line-height:1.85;color:#d9d2c0;margin-top:8px;}
    .skg-ctrl{position:absolute;left:50%;transform:translateX(-50%);bottom:1.4vh;z-index:9;display:flex;
      align-items:center;gap:10px;max-width:94vw;}
    .skg-play{width:42px;height:42px;border-radius:50%;border:1px solid rgba(201,162,39,.7);background:rgba(12,14,19,.85);
      color:#f2ead8;font-size:15px;cursor:pointer;flex:none;display:flex;align-items:center;justify-content:center;
      transition:background .2s;}
    .skg-play:hover{background:rgba(201,162,39,.25);}
    .skg-play:focus-visible{outline:2px solid #c9a227;outline-offset:2px;}
    .skg-chips{display:flex;gap:6px;overflow-x:auto;padding:4px 2px;scrollbar-width:none;}
    .skg-chip{flex:none;border:1px solid rgba(242,234,216,.25);background:rgba(12,14,19,.7);color:#cfc7b2;
      font-size:11px;letter-spacing:.06em;padding:7px 11px;cursor:pointer;white-space:nowrap;transition:all .2s;}
    .skg-chip:hover{border-color:#c9a227;color:#f2ead8;}
    .skg-chip.on{background:#c9a227;color:#14110a;border-color:#c9a227;font-weight:700;}
    .skg-chip:focus-visible{outline:2px solid #c9a227;outline-offset:2px;}
    .skg-prog{position:absolute;bottom:7vh;left:0;right:0;height:2px;background:rgba(242,234,216,.12);z-index:9;}
    .skg-prog>div{height:100%;background:#c9a227;width:0;}
    .skg-legend{position:absolute;top:9vh;left:3.5vw;z-index:8;display:flex;gap:14px;font-size:11px;letter-spacing:.12em;
      background:rgba(10,12,17,.55);padding:7px 12px;border:1px solid rgba(242,234,216,.12);}
    .skg-dot{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:6px;vertical-align:-1px;}
    .skg-intro{position:absolute;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(7,8,11,.78);transition:opacity 1s;cursor:pointer;}
    .skg-intro.off{opacity:0;pointer-events:none;}
    .skg-intro h1{font-family:${Js};font-size:clamp(34px,7vmin,72px);font-weight:700;letter-spacing:.3em;margin:0 0 14px;
      color:#f5efe0;text-shadow:0 0 40px rgba(201,162,39,.35);}
    .skg-intro p{letter-spacing:.32em;font-size:13px;color:#c9a227;margin:0 0 36px;}
    .skg-intro button{font-family:inherit;border:1px solid #c9a227;background:transparent;color:#f2ead8;
      letter-spacing:.3em;font-size:14px;padding:13px 38px 13px 42px;cursor:pointer;transition:background .25s;}
    .skg-intro button:hover{background:rgba(201,162,39,.2);}
    @media (prefers-reduced-motion: reduce){ .skg-grain{display:none;} }
    @media (max-width:640px){ .skg-title{display:none;} .skg-card{bottom:15vh;} }
  `;return bt.jsxs("div",{className:"skg-root",children:[bt.jsx("style",{children:x}),bt.jsx("div",{className:"skg-canvas",ref:s}),bt.jsx("div",{className:"skg-bar",style:{top:0}}),bt.jsx("div",{className:"skg-bar",style:{bottom:0}}),bt.jsx("div",{className:"skg-vig"}),bt.jsx("div",{className:"skg-grain"}),bt.jsxs("div",{className:"skg-title",style:{opacity:f?.92:0},children:["決戦・関ヶ原",bt.jsx("small",{children:"慶長五年九月十五日"})]}),bt.jsxs("div",{className:"skg-legend",style:{opacity:f?1:0,transition:"opacity 1s"},children:[bt.jsxs("span",{children:[bt.jsx("i",{className:"skg-dot",style:{background:"#d6453c"}}),"東軍 約七万五千"]}),bt.jsxs("span",{children:[bt.jsx("i",{className:"skg-dot",style:{background:"#3f6fae"}}),"西軍 約八万"]})]}),bt.jsxs("div",{className:"skg-card",style:{opacity:f?1:0,transition:"opacity .8s"},children:[bt.jsxs("div",{className:"skg-eyebrow",children:["第",["一","二","三","四","五","六"][r],"幕 ｜ ",v.time]}),bt.jsx("div",{className:"skg-phase",children:v.key}),bt.jsx("div",{className:"skg-desc",children:v.desc})]}),bt.jsx("div",{className:"skg-prog",children:bt.jsx("div",{ref:e})}),bt.jsxs("div",{className:"skg-ctrl",children:[bt.jsx("button",{className:"skg-play",onClick:m,"aria-label":l?"一時停止":"再生",children:l?"❚❚":"▶"}),bt.jsx("div",{className:"skg-chips",children:Vn.map((S,T)=>bt.jsx("button",{className:"skg-chip"+(T===r?" on":""),onClick:()=>_(T),children:S.key},S.key))})]}),bt.jsxs("div",{className:"skg-intro"+(f?" off":""),onClick:m,children:[bt.jsx("h1",{children:"決戦・関ヶ原"}),bt.jsx("p",{children:"慶長五年九月十五日 ── 天下分け目、半日の攻防"}),bt.jsx("button",{children:"再生する ▶"})]})]})}Tv.createRoot(document.getElementById("root")).render(bt.jsx($E,{}));
