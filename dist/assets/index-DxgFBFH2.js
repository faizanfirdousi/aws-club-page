(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var gd={exports:{}},Go={};var Yg;function fy(){if(Yg)return Go;Yg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var Zg;function dy(){return Zg||(Zg=1,gd.exports=fy()),gd.exports}var F=dy(),vd={exports:{}},ot={};var Kg;function hy(){if(Kg)return ot;Kg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(P,Y,xe){this.props=P,this.context=Y,this.refs=S,this.updater=xe||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=y.prototype;function D(P,Y,xe){this.props=P,this.context=Y,this.refs=S,this.updater=xe||b}var U=D.prototype=new w;U.constructor=D,C(U,y.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,Y,xe){var Ce=xe.ref;return{$$typeof:s,type:P,key:Y,ref:Ce!==void 0?Ce:null,props:xe}}function he(P,Y){return N(P.type,Y,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function ee(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return Y[xe]})}var re=/\/+/g;function ue(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?ee(""+P.key):Y.toString(36)}function K(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,xe,Ce,Be){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(ne){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case s:case e:Se=!0;break;case _:return Se=P._init,O(Se(P._payload),Y,xe,Ce,Be)}}if(Se)return Be=Be(P),Se=Ce===""?"."+ue(P,0):Ce,G(Be)?(xe="",Se!=null&&(xe=Se.replace(re,"$&/")+"/"),O(Be,Y,xe,"",function(Qe){return Qe})):Be!=null&&(V(Be)&&(Be=he(Be,xe+(Be.key==null||P&&P.key===Be.key?"":(""+Be.key).replace(re,"$&/")+"/")+Se)),Y.push(Be)),1;Se=0;var Ae=Ce===""?".":Ce+":";if(G(P))for(var Xe=0;Xe<P.length;Xe++)Ce=P[Xe],ne=Ae+ue(Ce,Xe),Se+=O(Ce,Y,xe,ne,Be);else if(Xe=M(P),typeof Xe=="function")for(P=Xe.call(P),Xe=0;!(Ce=P.next()).done;)Ce=Ce.value,ne=Ae+ue(Ce,Xe++),Se+=O(Ce,Y,xe,ne,Be);else if(ne==="object"){if(typeof P.then=="function")return O(K(P),Y,xe,Ce,Be);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Se}function B(P,Y,xe){if(P==null)return P;var Ce=[],Be=0;return O(P,Ce,"","",function(ne){return Y.call(xe,ne,Be++)}),Ce}function le(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Te={map:B,forEach:function(P,Y,xe){B(P,function(){Y.apply(this,arguments)},xe)},count:function(P){var Y=0;return B(P,function(){Y++}),Y},toArray:function(P){return B(P,function(Y){return Y})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ot.Activity=g,ot.Children=Te,ot.Component=y,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=D,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ot.cache=function(P){return function(){return P.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(P,Y,xe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ce=C({},P.props),Be=P.key;if(Y!=null)for(ne in Y.key!==void 0&&(Be=""+Y.key),Y)!T.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(Ce[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)Ce.children=xe;else if(1<ne){for(var Se=Array(ne),Ae=0;Ae<ne;Ae++)Se[Ae]=arguments[Ae+2];Ce.children=Se}return N(P.type,Be,Ce)},ot.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},ot.createElement=function(P,Y,xe){var Ce,Be={},ne=null;if(Y!=null)for(Ce in Y.key!==void 0&&(ne=""+Y.key),Y)T.call(Y,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Be[Ce]=Y[Ce]);var Se=arguments.length-2;if(Se===1)Be.children=xe;else if(1<Se){for(var Ae=Array(Se),Xe=0;Xe<Se;Xe++)Ae[Xe]=arguments[Xe+2];Be.children=Ae}if(P&&P.defaultProps)for(Ce in Se=P.defaultProps,Se)Be[Ce]===void 0&&(Be[Ce]=Se[Ce]);return N(P,ne,Be)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(P){return{$$typeof:p,render:P}},ot.isValidElement=V,ot.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:le}},ot.memo=function(P,Y){return{$$typeof:h,type:P,compare:Y===void 0?null:Y}},ot.startTransition=function(P){var Y=z.T,xe={};z.T=xe;try{var Ce=P(),Be=z.S;Be!==null&&Be(xe,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(H,me)}catch(ne){me(ne)}finally{Y!==null&&xe.types!==null&&(Y.types=xe.types),z.T=Y}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(P){return z.H.use(P)},ot.useActionState=function(P,Y,xe){return z.H.useActionState(P,Y,xe)},ot.useCallback=function(P,Y){return z.H.useCallback(P,Y)},ot.useContext=function(P){return z.H.useContext(P)},ot.useDebugValue=function(){},ot.useDeferredValue=function(P,Y){return z.H.useDeferredValue(P,Y)},ot.useEffect=function(P,Y){return z.H.useEffect(P,Y)},ot.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(P,Y,xe){return z.H.useImperativeHandle(P,Y,xe)},ot.useInsertionEffect=function(P,Y){return z.H.useInsertionEffect(P,Y)},ot.useLayoutEffect=function(P,Y){return z.H.useLayoutEffect(P,Y)},ot.useMemo=function(P,Y){return z.H.useMemo(P,Y)},ot.useOptimistic=function(P,Y){return z.H.useOptimistic(P,Y)},ot.useReducer=function(P,Y,xe){return z.H.useReducer(P,Y,xe)},ot.useRef=function(P){return z.H.useRef(P)},ot.useState=function(P){return z.H.useState(P)},ot.useSyncExternalStore=function(P,Y,xe){return z.H.useSyncExternalStore(P,Y,xe)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.4",ot}var Qg;function Jh(){return Qg||(Qg=1,vd.exports=hy()),vd.exports}var pe=Jh(),_d={exports:{}},Vo={},xd={exports:{}},Sd={};var Jg;function py(){return Jg||(Jg=1,(function(s){function e(O,B){var le=O.length;O.push(B);e:for(;0<le;){var me=le-1>>>1,Te=O[me];if(0<l(Te,B))O[me]=B,O[le]=Te,le=me;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],le=O.pop();if(le!==B){O[0]=le;e:for(var me=0,Te=O.length,P=Te>>>1;me<P;){var Y=2*(me+1)-1,xe=O[Y],Ce=Y+1,Be=O[Ce];if(0>l(xe,le))Ce<Te&&0>l(Be,xe)?(O[me]=Be,O[Ce]=le,me=Ce):(O[me]=xe,O[Y]=le,me=Y);else if(Ce<Te&&0>l(Be,le))O[me]=Be,O[Ce]=le,me=Ce;else break e}}return B}function l(O,B){var le=O.sortIndex-B.sortIndex;return le!==0?le:O.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,g=null,v=3,M=!1,b=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var B=i(h);B!==null;){if(B.callback===null)r(h);else if(B.startTime<=O)r(h),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(h)}}function G(O){if(C=!1,U(O),!b)if(i(m)!==null)b=!0,H||(H=!0,ee());else{var B=i(h);B!==null&&K(G,B.startTime-O)}}var H=!1,z=-1,T=5,N=-1;function he(){return S?!0:!(s.unstable_now()-N<T)}function V(){if(S=!1,H){var O=s.unstable_now();N=O;var B=!0;try{e:{b=!1,C&&(C=!1,w(z),z=-1),M=!0;var le=v;try{t:{for(U(O),g=i(m);g!==null&&!(g.expirationTime>O&&he());){var me=g.callback;if(typeof me=="function"){g.callback=null,v=g.priorityLevel;var Te=me(g.expirationTime<=O);if(O=s.unstable_now(),typeof Te=="function"){g.callback=Te,U(O),B=!0;break t}g===i(m)&&r(m),U(O)}else r(m);g=i(m)}if(g!==null)B=!0;else{var P=i(h);P!==null&&K(G,P.startTime-O),B=!1}}break e}finally{g=null,v=le,M=!1}B=void 0}}finally{B?ee():H=!1}}}var ee;if(typeof D=="function")ee=function(){D(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ue=re.port2;re.port1.onmessage=V,ee=function(){ue.postMessage(null)}}else ee=function(){y(V,0)};function K(O,B){z=y(function(){O(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var le=v;v=B;try{return O()}finally{v=le}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var le=v;v=O;try{return B()}finally{v=le}},s.unstable_scheduleCallback=function(O,B,le){var me=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?me+le:me):le=me,O){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=le+Te,O={id:_++,callback:B,priorityLevel:O,startTime:le,expirationTime:Te,sortIndex:-1},le>me?(O.sortIndex=le,e(h,O),i(m)===null&&O===i(h)&&(C?(w(z),z=-1):C=!0,K(G,le-me))):(O.sortIndex=Te,e(m,O),b||M||(b=!0,H||(H=!0,ee()))),O},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(O){var B=v;return function(){var le=v;v=B;try{return O.apply(this,arguments)}finally{v=le}}}})(Sd)),Sd}var $g;function my(){return $g||($g=1,xd.exports=py()),xd.exports}var yd={exports:{}},An={};var ev;function gy(){if(ev)return An;ev=1;var s=Jh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:h,implementation:_}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,_)},An.flushSync=function(m){var h=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=_,r.d.f()}},An.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,g=p(_,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},An.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},An.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,g=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},An.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,h){return m(h)},An.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.4",An}var tv;function vy(){if(tv)return yd.exports;tv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=gy(),yd.exports}var nv;function _y(){if(nv)return Vo;nv=1;var s=my(),e=Jh(),i=vy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,A=c.child;A;){if(A===a){x=!0,a=c,o=f;break}if(A===o){x=!0,o=c,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,o=c;break}if(A===o){x=!0,o=f,a=c;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var K=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function P(t){return{current:t}}function Y(t){0>Te||(t.current=me[Te],me[Te]=null,Te--)}function xe(t,n){Te++,me[Te]=t.current,t.current=n}var Ce=P(null),Be=P(null),ne=P(null),Se=P(null);function Ae(t,n){switch(xe(ne,n),xe(Be,t),xe(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?vg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=vg(n),t=_g(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Ce),xe(Ce,t)}function Xe(){Y(Ce),Y(Be),Y(ne)}function Qe(t){t.memoizedState!==null&&xe(Se,t);var n=Ce.current,a=_g(n,t.type);n!==a&&(xe(Be,t),xe(Ce,a))}function et(t){Be.current===t&&(Y(Ce),Y(Be)),Se.current===t&&(Y(Se),zo._currentValue=le)}var Jt,_t;function mt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+_t}var Dt=!1;function lt(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(oe){var ie=oe}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(oe){ie=oe}t.call(_e.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var I=x.split(`
`),$=A.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===$.length)for(o=I.length-1,c=$.length-1;1<=o&&0<=c&&I[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==$[c]){var de=`
`+I[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=c);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return mt("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,Ut=s.unstable_cancelCallback,qe=s.unstable_shouldYield,L=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,fe=s.unstable_NormalPriority,We=s.unstable_LowPriority,De=s.unstable_IdlePriority,Ke=s.log,tt=s.unstable_setDisableYieldValue,be=null,Me=null;function Pe(t){if(typeof Ke=="function"&&tt(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(be,t)}catch{}}var Oe=Math.clz32?Math.clz32:j,Fe=Math.log,ct=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Fe(t)/ct|0)|0}var we=256,Re=262144,ze=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ce(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?c=Ee(o):(x&=A,x!==0?c=Ee(x):a||(a=A&~t,a!==0&&(c=Ee(a))))):(A=o&~f,A!==0?c=Ee(A):x!==0?c=Ee(x):a||(a=o&~t,a!==0&&(c=Ee(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var t=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,o,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var de=31-Oe(a),_e=1<<de;A[de]=0,I[de]=-1;var ie=$[de];if(ie!==null)for($[de]=null,de=0;de<ie.length;de++){var oe=ie[de];oe!==null&&(oe.lane&=-536870913)}a&=~_e}o!==0&&Qs(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Qs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Oe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Hr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Oe(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function cl(t,n){var a=n&-n;return a=(a&42)!==0?1:Gr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Gr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wi(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Gg(t.type))}function kr(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var vi=Math.random().toString(36).slice(2),rn="__reactFiber$"+vi,pn="__reactProps$"+vi,ji="__reactContainer$"+vi,Ra="__reactEvents$"+vi,fl="__reactListeners$"+vi,dl="__reactHandles$"+vi,hl="__reactResources$"+vi,cr="__reactMarker$"+vi;function Js(t){delete t[rn],delete t[pn],delete t[Ra],delete t[fl],delete t[dl]}function Ca(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ji]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Tg(t);t!==null;){if(a=t[rn])return a;t=Tg(t)}return n}t=a,a=t.parentNode}return null}function wa(t){if(t=t[rn]||t[ji]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function R(t){var n=t[hl];return n||(n=t[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[cr]=!0}var se=new Set,te={};function Q(t,n){Ne(t,n),Ne(t+"Capture",n)}function Ne(t,n){for(te[t]=n,t=0;t<n.length;t++)se.add(n[t])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},je={};function Ze(t){return jt.call(je,t)?!0:jt.call(Ue,t)?!1:Ie.test(t)?je[t]=!0:(Ue[t]=!0,!1)}function nt(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function st(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=qt(t)?"checked":"value";t._valueTracker=Yt(t,n,""+t[n])}}function mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=qt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function at(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(t,n,a,o,c,f,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ft(n)):t.value!==""+ft(n)&&(t.value=""+ft(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?_i(t,x,ft(n)):a!=null?_i(t,x,ft(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ft(A):t.removeAttribute("name")}function Wn(t,n,a,o,c,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(t);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),At(t)}function _i(t,n,a){n==="number"&&ke(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function jn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Lt(t,n,a){if(n!=null&&(n=""+ft(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ft(a):""}function sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(K(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ft(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xi(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&xi(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&xi(t,f,n[f])}function Xr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return lx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var dc=null;function hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,jr=null;function gp(t){var n=wa(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ln(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[pn]||null;if(!c)throw Error(r(90));Ln(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&mn(o)}break e;case"textarea":Lt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&jn(t,!!a.multiple,n,!1)}}}var pc=!1;function vp(t,n,a){if(pc)return t(n,a);pc=!0;try{var o=t(n);return o}finally{if(pc=!1,(Wr!==null||jr!==null)&&(tu(),Wr&&(n=Wr,t=jr,jr=Wr=null,gp(n),t)))for(n=0;n<t.length;n++)gp(t[n])}}function $s(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=!1;if(Zi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){mc=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{mc=!1}var Da=null,gc=null,ml=null;function _p(){if(ml)return ml;var t,n=gc,a=n.length,o,c="value"in Da?Da.value:Da.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return ml=c.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function xp(){return!1}function zn(t){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:xp,this.isPropagationStopped=xp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=zn(dr),to=g({},dr,{view:0,detail:0}),ux=zn(to),vc,_c,no,xl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(vc=t.screenX-no.screenX,_c=t.screenY-no.screenY):_c=vc=0,no=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Sp=zn(xl),cx=g({},xl,{dataTransfer:0}),fx=zn(cx),dx=g({},to,{relatedTarget:0}),xc=zn(dx),hx=g({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),px=zn(hx),mx=g({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=zn(mx),vx=g({},dr,{data:0}),yp=zn(vx),_x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Sx[t])?!!n[t]:!1}function Sc(){return yx}var Mx=g({},to,{key:function(t){if(t.key){var n=_x[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=zn(Mx),bx=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=zn(bx),Tx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),Ax=zn(Tx),Rx=g({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=zn(Rx),wx=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=zn(wx),Nx=g({},dr,{newState:0,oldState:0}),Ux=zn(Nx),Lx=[9,13,27,32],yc=Zi&&"CompositionEvent"in window,io=null;Zi&&"documentMode"in document&&(io=document.documentMode);var Ox=Zi&&"TextEvent"in window&&!io,Ep=Zi&&(!yc||io&&8<io&&11>=io),bp=" ",Tp=!1;function Ap(t,n){switch(t){case"keyup":return Lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function Px(t,n){switch(t){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,bp);case"textInput":return t=n.data,t===bp&&Tp?null:t;default:return null}}function Fx(t,n){if(qr)return t==="compositionend"||!yc&&Ap(t,n)?(t=_p(),ml=gc=Da=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ep&&n.locale!=="ko"?null:n.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zx[t.type]:n==="textarea"}function wp(t,n,a,o){Wr?jr?jr.push(o):jr=[o]:Wr=o,n=lu(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,ro=null;function Bx(t){fg(t,0)}function Sl(t){var n=fr(t);if(mn(n))return t}function Dp(t,n){if(t==="change")return n}var Np=!1;if(Zi){var Mc;if(Zi){var Ec="oninput"in document;if(!Ec){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Ec=typeof Up.oninput=="function"}Mc=Ec}else Mc=!1;Np=Mc&&(!document.documentMode||9<document.documentMode)}function Lp(){ao&&(ao.detachEvent("onpropertychange",Op),ro=ao=null)}function Op(t){if(t.propertyName==="value"&&Sl(ro)){var n=[];wp(n,ro,t,hc(t)),vp(Bx,n)}}function Ix(t,n,a){t==="focusin"?(Lp(),ao=n,ro=a,ao.attachEvent("onpropertychange",Op)):t==="focusout"&&Lp()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ro)}function Gx(t,n){if(t==="click")return Sl(n)}function Vx(t,n){if(t==="input"||t==="change")return Sl(n)}function kx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:kx;function so(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!jt.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,n){var a=Pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ke(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ke(t.document)}return n}function bc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Xx=Zi&&"documentMode"in document&&11>=document.documentMode,Yr=null,Tc=null,oo=null,Ac=!1;function Ip(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||Yr==null||Yr!==ke(o)||(o=Yr,"selectionStart"in o&&bc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=lu(Tc,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Yr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Rc={},Hp={};Zi&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function pr(t){if(Rc[t])return Rc[t];if(!Zr[t])return t;var n=Zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Rc[t]=n[a];return t}var Gp=pr("animationend"),Vp=pr("animationiteration"),kp=pr("animationstart"),Wx=pr("transitionrun"),jx=pr("transitionstart"),qx=pr("transitioncancel"),Xp=pr("transitionend"),Wp=new Map,Cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cc.push("scrollEnd");function Si(t,n){Wp.set(t,n),Q(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Kr=0,wc=0;function Ml(){for(var t=Kr,n=wc=Kr=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&jp(a,c,f)}}function El(t,n,a,o){ii[Kr++]=t,ii[Kr++]=n,ii[Kr++]=a,ii[Kr++]=o,wc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Dc(t,n,a,o){return El(t,n,a,o),bl(t)}function mr(t,n){return El(t,null,null,n),bl(t)}function jp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Oe(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function bl(t){if(50<Do)throw Do=0,Hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qr={};function Yx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,o){return new Yx(t,n,a,o)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,c,f){var x=0;if(o=t,typeof t=="function")Nc(t)&&(x=1);else if(typeof t=="string")x=$S(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Yn(31,a,n,c),t.elementType=N,t.lanes=f,t;case C:return gr(a.children,c,f,n);case S:x=8,c|=24;break;case y:return t=Yn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case G:return t=Yn(13,a,n,c),t.elementType=G,t.lanes=f,t;case H:return t=Yn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:x=10;break e;case w:x=9;break e;case U:x=11;break e;case z:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Yn(x,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function gr(t,n,a,o){return t=Yn(7,t,o,n),t.lanes=a,t}function Uc(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Yp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Lc(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Zp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},Zp.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var Jr=[],$r=0,Al=null,lo=0,ri=[],si=0,Na=null,Di=1,Ni="";function Qi(t,n){Jr[$r++]=lo,Jr[$r++]=Al,Al=t,lo=n}function Kp(t,n,a){ri[si++]=Di,ri[si++]=Ni,ri[si++]=Na,Na=t;var o=Di;t=Ni;var c=32-Oe(o)-1;o&=~(1<<c),a+=1;var f=32-Oe(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Di=1<<32-Oe(n)+c|a<<c|o,Ni=f+t}else Di=1<<f|a<<c|o,Ni=t}function Oc(t){t.return!==null&&(Qi(t,1),Kp(t,1,0))}function Pc(t){for(;t===Al;)Al=Jr[--$r],Jr[$r]=null,lo=Jr[--$r],Jr[$r]=null;for(;t===Na;)Na=ri[--si],ri[si]=null,Ni=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null}function Qp(t,n){ri[si++]=Di,ri[si++]=Ni,ri[si++]=Na,Di=n.id,Ni=n.overflow,Na=t}var yn=null,Xt=null,yt=!1,Ua=null,oi=!1,Fc=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(ai(n,t)),Fc}function Jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[rn]=t,n[pn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)vt(Uo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Wn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),sn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||mg(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||La(t,!0)}function $p(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:yn=yn.return}}function es(t){if(t!==yn)return!1;if(!yt)return $p(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||td(t.type,t.memoizedProps)),a=!a),a&&Xt&&La(t),$p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xt=bg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xt=bg(t)}else n===27?(n=Xt,qa(t.type)?(t=sd,sd=null,Xt=t):Xt=n):Xt=yn?ui(t.stateNode.nextSibling):null;return!0}function vr(){Xt=yn=null,yt=!1}function zc(){var t=Ua;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Ua=null),t}function uo(t){Ua===null?Ua=[t]:Ua.push(t)}var Bc=P(null),_r=null,Ji=null;function Oa(t,n,a){xe(Bc,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Bc.current,Y(Bc)}function Ic(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Hc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ic(f.return,a,t),o||(x=null);break e}f=A.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Ic(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function ts(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=c.type;qn(c.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(c===Se.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}c=c.return}t!==null&&Hc(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){_r=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return em(_r,t)}function Cl(t,n){return _r===null&&xr(t),em(t,n)}function em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var Zx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Kx=s.unstable_scheduleCallback,Qx=s.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new Zx,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&Kx(Qx,function(){t.controller.abort()})}var fo=null,Vc=0,ns=0,is=null;function Jx(t,n){if(fo===null){var a=fo=[];Vc=0,ns=jf(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vc++,n.then(tm,tm),n}function tm(){if(--Vc===0&&fo!==null){is!==null&&(is.status="fulfilled");var t=fo;fo=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $x(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var nm=O.S;O.S=function(t,n){I0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jx(t,n),nm!==null&&nm(t,n)};var Sr=P(null);function kc(){var t=Sr.current;return t!==null?t:kt.pooledCache}function wl(t,n){n===null?xe(Sr,Sr.current):xe(Sr,n.pool)}function im(){var t=kc();return t===null?null:{parent:ln._currentValue,pool:t}}var as=Error(r(460)),Xc=Error(r(474)),Dl=Error(r(542)),Nl={then:function(){}};function am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t}throw Mr=n,as}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,as):a}}var Mr=null;function sm(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function om(t){if(t===as||t===Dl)throw Error(r(483))}var rs=null,ho=0;function Ul(t){var n=ho;return ho+=1,rs===null&&(rs=[]),rm(rs,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function lm(t){function n(Z,X){if(t){var J=Z.deletions;J===null?(Z.deletions=[X],Z.flags|=16):J.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function c(Z,X){return Z=Ki(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<X?(Z.flags|=67108866,X):J):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,J,ve){return X===null||X.tag!==6?(X=Uc(J,Z.mode,ve),X.return=Z,X):(X=c(X,J),X.return=Z,X)}function I(Z,X,J,ve){var Je=J.type;return Je===C?de(Z,X,J.props.children,ve,J.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&yr(Je)===X.type)?(X=c(X,J.props),po(X,J),X.return=Z,X):(X=Tl(J.type,J.key,J.props,null,Z.mode,ve),po(X,J),X.return=Z,X)}function $(Z,X,J,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Lc(J,Z.mode,ve),X.return=Z,X):(X=c(X,J.children||[]),X.return=Z,X)}function de(Z,X,J,ve,Je){return X===null||X.tag!==7?(X=gr(J,Z.mode,ve,Je),X.return=Z,X):(X=c(X,J),X.return=Z,X)}function _e(Z,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uc(""+X,Z.mode,J),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return J=Tl(X.type,X.key,X.props,null,Z.mode,J),po(J,X),J.return=Z,J;case b:return X=Lc(X,Z.mode,J),X.return=Z,X;case T:return X=yr(X),_e(Z,X,J)}if(K(X)||ee(X))return X=gr(X,Z.mode,J,null),X.return=Z,X;if(typeof X.then=="function")return _e(Z,Ul(X),J);if(X.$$typeof===D)return _e(Z,Cl(Z,X),J);Ll(Z,X)}return null}function ie(Z,X,J,ve){var Je=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Je!==null?null:A(Z,X,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Je?I(Z,X,J,ve):null;case b:return J.key===Je?$(Z,X,J,ve):null;case T:return J=yr(J),ie(Z,X,J,ve)}if(K(J)||ee(J))return Je!==null?null:de(Z,X,J,ve,null);if(typeof J.then=="function")return ie(Z,X,Ul(J),ve);if(J.$$typeof===D)return ie(Z,X,Cl(Z,J),ve);Ll(Z,J)}return null}function oe(Z,X,J,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(J)||null,A(X,Z,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return Z=Z.get(ve.key===null?J:ve.key)||null,I(X,Z,ve,Je);case b:return Z=Z.get(ve.key===null?J:ve.key)||null,$(X,Z,ve,Je);case T:return ve=yr(ve),oe(Z,X,J,ve,Je)}if(K(ve)||ee(ve))return Z=Z.get(J)||null,de(X,Z,ve,Je,null);if(typeof ve.then=="function")return oe(Z,X,J,Ul(ve),Je);if(ve.$$typeof===D)return oe(Z,X,J,Cl(X,ve),Je);Ll(X,ve)}return null}function Ve(Z,X,J,ve){for(var Je=null,Rt=null,Ye=X,dt=X=0,St=null;Ye!==null&&dt<J.length;dt++){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var Ct=ie(Z,Ye,J[dt],ve);if(Ct===null){Ye===null&&(Ye=St);break}t&&Ye&&Ct.alternate===null&&n(Z,Ye),X=f(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct,Ye=St}if(dt===J.length)return a(Z,Ye),yt&&Qi(Z,dt),Je;if(Ye===null){for(;dt<J.length;dt++)Ye=_e(Z,J[dt],ve),Ye!==null&&(X=f(Ye,X,dt),Rt===null?Je=Ye:Rt.sibling=Ye,Rt=Ye);return yt&&Qi(Z,dt),Je}for(Ye=o(Ye);dt<J.length;dt++)St=oe(Ye,Z,dt,J[dt],ve),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?dt:St.key),X=f(St,X,dt),Rt===null?Je=St:Rt.sibling=St,Rt=St);return t&&Ye.forEach(function(Ja){return n(Z,Ja)}),yt&&Qi(Z,dt),Je}function $e(Z,X,J,ve){if(J==null)throw Error(r(151));for(var Je=null,Rt=null,Ye=X,dt=X=0,St=null,Ct=J.next();Ye!==null&&!Ct.done;dt++,Ct=J.next()){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var Ja=ie(Z,Ye,Ct.value,ve);if(Ja===null){Ye===null&&(Ye=St);break}t&&Ye&&Ja.alternate===null&&n(Z,Ye),X=f(Ja,X,dt),Rt===null?Je=Ja:Rt.sibling=Ja,Rt=Ja,Ye=St}if(Ct.done)return a(Z,Ye),yt&&Qi(Z,dt),Je;if(Ye===null){for(;!Ct.done;dt++,Ct=J.next())Ct=_e(Z,Ct.value,ve),Ct!==null&&(X=f(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return yt&&Qi(Z,dt),Je}for(Ye=o(Ye);!Ct.done;dt++,Ct=J.next())Ct=oe(Ye,Z,dt,Ct.value,ve),Ct!==null&&(t&&Ct.alternate!==null&&Ye.delete(Ct.key===null?dt:Ct.key),X=f(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Ye.forEach(function(cy){return n(Z,cy)}),yt&&Qi(Z,dt),Je}function Vt(Z,X,J,ve){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var Je=J.key;X!==null;){if(X.key===Je){if(Je=J.type,Je===C){if(X.tag===7){a(Z,X.sibling),ve=c(X,J.props.children),ve.return=Z,Z=ve;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===T&&yr(Je)===X.type){a(Z,X.sibling),ve=c(X,J.props),po(ve,J),ve.return=Z,Z=ve;break e}a(Z,X);break}else n(Z,X);X=X.sibling}J.type===C?(ve=gr(J.props.children,Z.mode,ve,J.key),ve.return=Z,Z=ve):(ve=Tl(J.type,J.key,J.props,null,Z.mode,ve),po(ve,J),ve.return=Z,Z=ve)}return x(Z);case b:e:{for(Je=J.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(Z,X.sibling),ve=c(X,J.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}ve=Lc(J,Z.mode,ve),ve.return=Z,Z=ve}return x(Z);case T:return J=yr(J),Vt(Z,X,J,ve)}if(K(J))return Ve(Z,X,J,ve);if(ee(J)){if(Je=ee(J),typeof Je!="function")throw Error(r(150));return J=Je.call(J),$e(Z,X,J,ve)}if(typeof J.then=="function")return Vt(Z,X,Ul(J),ve);if(J.$$typeof===D)return Vt(Z,X,Cl(Z,J),ve);Ll(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(Z,X.sibling),ve=c(X,J),ve.return=Z,Z=ve):(a(Z,X),ve=Uc(J,Z.mode,ve),ve.return=Z,Z=ve),x(Z)):a(Z,X)}return function(Z,X,J,ve){try{ho=0;var Je=Vt(Z,X,J,ve);return rs=null,Je}catch(Ye){if(Ye===as||Ye===Dl)throw Ye;var Rt=Yn(29,Ye,null,Z.mode);return Rt.lanes=ve,Rt.return=Z,Rt}}}var Er=lm(!0),um=lm(!1),Pa=!1;function Wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=bl(t),jp(t,null,a),n}return El(t,o,n,a),bl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Hr(t,a)}}function qc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Yc=!1;function go(){if(Yc){var t=is;if(t!==null)throw t}}function vo(t,n,a,o){Yc=!1;var c=t.updateQueue;Pa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,$=I.next;I.next=null,x===null?f=$:x.next=$,x=I;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==x&&(A===null?de.firstBaseUpdate=$:A.next=$,de.lastBaseUpdate=I))}if(f!==null){var _e=c.baseState;x=0,de=$=I=null,A=f;do{var ie=A.lane&-536870913,oe=ie!==A.lane;if(oe?(xt&ie)===ie:(o&ie)===ie){ie!==0&&ie===ns&&(Yc=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ve=t,$e=A;ie=n;var Vt=a;switch($e.tag){case 1:if(Ve=$e.payload,typeof Ve=="function"){_e=Ve.call(Vt,_e,ie);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=$e.payload,ie=typeof Ve=="function"?Ve.call(Vt,_e,ie):Ve,ie==null)break e;_e=g({},_e,ie);break e;case 2:Pa=!0}}ie=A.callback,ie!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?($=de=oe,I=_e):de=de.next=oe,x|=ie;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);de===null&&(I=_e),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Va|=x,t.lanes=x,t.memoizedState=_e}}function cm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function fm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cm(a[t],n)}var ss=P(null),Ol=P(0);function dm(t,n){t=la,xe(Ol,t),xe(ss,n),la=t|n.baseLanes}function Zc(){xe(Ol,la),xe(ss,ss.current)}function Kc(){la=Ol.current,Y(ss),Y(Ol)}var Zn=P(null),li=null;function Ba(t){var n=t.alternate;xe(tn,tn.current&1),xe(Zn,t),li===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(li=t)}function Qc(t){xe(tn,tn.current),xe(Zn,t),li===null&&(li=t)}function hm(t){t.tag===22?(xe(tn,tn.current),xe(Zn,t),li===null&&(li=t)):Ia()}function Ia(){xe(tn,tn.current),xe(Zn,Zn.current)}function Kn(t){Y(Zn),li===t&&(li=null),Y(tn)}var tn=P(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||rd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ut=null,Ht=null,un=null,Fl=!1,os=!1,br=!1,zl=0,_o=0,ls=null,eS=0;function $t(){throw Error(r(321))}function Jc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function $c(t,n,a,o,c,f){return ea=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Km:mf,br=!1,f=a(o,c),br=!1,os&&(f=mm(n,a,o,c)),pm(t),f}function pm(t){O.H=yo;var n=Ht!==null&&Ht.next!==null;if(ea=0,un=Ht=ut=null,Fl=!1,_o=0,ls=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&Rl(t)&&(cn=!0))}function mm(t,n,a,o){ut=t;var c=0;do{if(os&&(ls=null),_o=0,os=!1,25<=c)throw Error(r(301));if(c+=1,un=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Qm,f=n(a,o)}while(os);return f}function tS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ut.flags|=1024),n}function ef(){var t=zl!==0;return zl=0,t}function tf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function nf(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}ea=0,un=Ht=ut=null,os=!1,_o=zl=0,ls=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ut.memoizedState=un=t:un=un.next=t,un}function nn(){if(Ht===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=un===null?ut.memoizedState:un.next;if(n!==null)un=n,Ht=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},un===null?ut.memoizedState=un=t:un=un.next=t}return un}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=_o;return _o+=1,ls===null&&(ls=[]),t=rm(ls,t,n),n=ut,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Km:mf),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===D)return Mn(t)}throw Error(r(438,String(t)))}function af(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=he;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=nn();return rf(n,Ht,t)}function rf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=x=null,I=null,$=n,de=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(xt&_e)===_e:(ea&_e)===_e){var ie=$.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===ns&&(de=!0);else if((ea&ie)===ie){$=$.next,ie===ns&&(de=!0);continue}else _e={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=_e,x=f):I=I.next=_e,ut.lanes|=ie,Va|=ie;_e=$.action,br&&a(f,_e),f=$.hasEagerState?$.eagerState:a(f,_e)}else ie={lane:_e,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=ie,x=f):I=I.next=ie,ut.lanes|=_e,Va|=_e;$=$.next}while($!==null&&$!==n);if(I===null?x=f:I.next=A,!qn(f,t.memoizedState)&&(cn=!0,de&&(a=is,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=I,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function sf(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);qn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function gm(t,n,a){var o=ut,c=nn(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!qn((Ht||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,uf(xm.bind(null,o,c,t),[t]),c.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,us(9,{destroy:void 0},_m.bind(null,o,c,a,n),null),kt===null)throw Error(r(349));f||(ea&127)!==0||vm(o,n,a)}return a}function vm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Bl(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _m(t,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&ym(t)}function xm(t,n,a){return a(function(){Sm(n)&&ym(t)})}function Sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function ym(t){var n=mr(t,2);n!==null&&Vn(n,t,2)}function of(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),br){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function Mm(t,n,a,o){return t.baseState=a,rf(t,Ht,typeof o=="function"?o:ta)}function nS(t,n,a,o,c){if(kl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Em(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var A=a(c,o),I=O.S;I!==null&&I(x,A),bm(t,n,A)}catch($){lf(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(c,o),bm(t,n,f)}catch($){lf(t,n,$)}}function bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(t,n,o)},function(o){return lf(t,n,o)}):Tm(t,n,a)}function Tm(t,n,a){n.status="fulfilled",n.value=a,Am(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Em(t,a)))}function lf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}t.action=null}function Am(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rm(t,n){return n}function Cm(t,n){if(yt){var a=kt.formState;if(a!==null){e:{var o=ut;if(yt){if(Xt){t:{for(var c=Xt,f=oi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xt=ui(c.nextSibling),o=c.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=qm.bind(null,ut,o),o.dispatch=a,o=of(!1),f=pf.bind(null,ut,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=nS.bind(null,ut,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function wm(t){var n=nn();return Dm(n,Ht,t)}function Dm(t,n,a){if(n=rf(t,n,Rm)[0],t=Hl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(x){throw x===as?Dl:x}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,us(9,{destroy:void 0},iS.bind(null,c,a),null)),[o,f,t]}function iS(t,n){t.action=n}function Nm(t){var n=nn(),a=Ht;if(a!==null)return Dm(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function us(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Bl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Um(){return nn().memoizedState}function Gl(t,n,a,o){var c=Pn();ut.flags|=t,c.memoizedState=us(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ht!==null&&o!==null&&Jc(o,Ht.memoizedState.deps)?c.memoizedState=us(n,f,a,o):(ut.flags|=t,c.memoizedState=us(1|n,f,a,o))}function Lm(t,n){Gl(8390656,8,t,n)}function uf(t,n){Vl(2048,8,t,n)}function aS(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Bl(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Om(t){var n=nn().memoizedState;return aS({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Pm(t,n){return Vl(4,2,t,n)}function Fm(t,n){return Vl(4,4,t,n)}function zm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,zm.bind(null,n,t),a)}function cf(){}function Im(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Jc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Hm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Jc(n,o[1]))return o[0];if(o=t(),br){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function ff(t,n,a){return a===void 0||(ea&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=G0(),ut.lanes|=t,Va|=t,a)}function Gm(t,n,a,o){return qn(a,n)?a:ss.current!==null?(t=ff(t,a,o),qn(t,n)||(cn=!0),t):(ea&42)===0||(ea&1073741824)!==0&&(xt&261930)===0?(cn=!0,t.memoizedState=a):(t=G0(),ut.lanes|=t,Va|=t,n)}function Vm(t,n,a,o,c){var f=B.p;B.p=f!==0&&8>f?f:8;var x=O.T,A={};O.T=A,pf(t,!1,n,a);try{var I=c(),$=O.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=$x(I,o);So(t,n,de,$n(t))}else So(t,n,o,$n(t))}catch(_e){So(t,n,{then:function(){},status:"rejected",reason:_e},$n())}finally{B.p=f,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function rS(){}function df(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=km(t).queue;Vm(t,c,n,le,a===null?rS:function(){return Xm(t),a(o)})}function km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Xm(t){var n=km(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},$n())}function hf(){return Mn(zo)}function Wm(){return nn().memoizedState}function jm(){return nn().memoizedState}function sS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Fa(a);var o=za(n,t,a);o!==null&&(Vn(o,n,a),mo(o,n,a)),n={cache:Gc()},t.payload=n;return}n=n.return}}function oS(t,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?Ym(n,a):(a=Dc(t,n,a,o),a!==null&&(Vn(a,t,o),Zm(a,n,o)))}function qm(t,n,a){var o=$n();So(t,n,a,o)}function So(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))Ym(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(c.hasEagerState=!0,c.eagerState=A,qn(A,x))return El(t,n,c,0),kt===null&&Ml(),!1}catch{}if(a=Dc(t,n,c,o),a!==null)return Vn(a,t,o),Zm(a,n,o),!0}return!1}function pf(t,n,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(r(479))}else n=Dc(t,a,o,2),n!==null&&Vn(n,t,2)}function kl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function Ym(t,n){os=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Hr(t,a)}}var yo={readContext:Mn,use:Il,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};yo.useEffectEvent=$t;var Km={readContext:Mn,use:Il,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Lm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Gl(4194308,4,zm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(br){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(br){Pe(!0);try{a(n)}finally{Pe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=oS.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=of(t);var n=t.queue,a=qm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(t,n){var a=Pn();return ff(a,t,n)},useTransition:function(){var t=of(!1);return t=Vm.bind(null,ut,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,c=Pn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(xt&127)!==0||vm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Lm(xm.bind(null,o,f,t),[t]),o.flags|=2048,us(9,{destroy:void 0},_m.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=kt.identifierPrefix;if(yt){var a=Ni,o=Di;a=(o&~(1<<32-Oe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=eS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:hf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:af,useCacheRefresh:function(){return Pn().memoizedState=sS.bind(null,ut)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Mn,use:Il,useCallback:Im,useContext:Mn,useEffect:uf,useImperativeHandle:Bm,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:Hl,useRef:Um,useState:function(){return Hl(ta)},useDebugValue:cf,useDeferredValue:function(t,n){var a=nn();return Gm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Hl(ta)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:hf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=nn();return Mm(a,Ht,t,n)},useMemoCache:af,useCacheRefresh:jm};mf.useEffectEvent=Om;var Qm={readContext:Mn,use:Il,useCallback:Im,useContext:Mn,useEffect:uf,useImperativeHandle:Bm,useInsertionEffect:Pm,useLayoutEffect:Fm,useMemo:Hm,useReducer:sf,useRef:Um,useState:function(){return sf(ta)},useDebugValue:cf,useDeferredValue:function(t,n){var a=nn();return Ht===null?ff(a,t,n):Gm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=sf(ta)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:hf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,n){var a=nn();return Ht!==null?Mm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:jm};Qm.useEffectEvent=Om;function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=$n(),c=Fa(o);c.payload=n,a!=null&&(c.callback=a),n=za(t,c,o),n!==null&&(Vn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=$n(),c=Fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=za(t,c,o),n!==null&&(Vn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Vn(n,t,a),mo(n,t,a))}};function Jm(t,n,a,o,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(c,f):!0}function $m(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function e0(t){yl(t)}function t0(t){console.error(t)}function n0(t){yl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function i0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function _f(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function a0(t){return t=Fa(t),t.tag=3,t}function r0(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){i0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){i0(n,a,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function lS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?nu():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(t,o,c)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(t,o,c)),!1}throw Error(r(435,a.tag))}return kf(t,o,c),nu(),!1}if(yt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Fc&&(t=Error(r(422),{cause:o}),uo(ai(t,a)))):(o!==Fc&&(n=Error(r(423),{cause:o}),uo(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ai(o,a),c=_f(t.stateNode,o,c),qc(t,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:o});if(f=ai(f,a),wo===null?wo=[f]:wo.push(f),en!==4&&(en=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=_f(a.stateNode,o,t),qc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=a0(c),r0(c,t,a,o),qc(a,c),!1}a=a.return}while(a!==null);return!1}var xf=Error(r(461)),cn=!1;function En(t,n,a,o){n.child=t===null?um(n,null,a,o):Er(n,t.child,a,o)}function s0(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return xr(n),o=$c(t,n,a,x,f,c),A=ef(),t!==null&&!cn?(tf(t,n,c),na(t,n,c)):(yt&&A&&Oc(n),n.flags|=1,En(t,n,o,c),n.child)}function o0(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!Nc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,l0(t,n,f,o,c)):(t=Tl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Rf(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(x,o)&&t.ref===n.ref)return na(t,n,c)}return n.flags|=1,t=Ki(f,o),t.ref=n.ref,t.return=n,n.child=t}function l0(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(so(f,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=f,Rf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,na(t,n,c)}return Sf(t,n,a,o,c)}function u0(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return c0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,f!==null?f.cachePool:null),f!==null?dm(n,f):Zc(),hm(n);else return o=n.lanes=536870912,c0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(wl(n,f.cachePool),dm(n,f),Ia(),n.memoizedState=null):(t!==null&&wl(n,null),Zc(),Ia());return En(t,n,c,a),n.child}function Mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c0(t,n,a,o,c){var f=kc();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&wl(n,null),Zc(),hm(n),t!==null&&ts(t,n,o,!0),n.childLanes=c,null}function Wl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function f0(t,n,a){return Er(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function uS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,Mo(null,t);if(Qc(n),(t=Xt)?(t=Eg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Yp(t),a.return=n,n.child=a,yn=n,Xt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Wl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Qc(n),c)if(n.flags&256)n.flags&=-257,n=f0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||ts(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(o=kt,o!==null&&(x=cl(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,mr(t,x),Vn(o,t,x),xf;nu(),n=f0(t,n,a)}else t=f.treeContext,Xt=ui(x.nextSibling),yn=n,yt=!0,Ua=null,oi=!1,t!==null&&Qp(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=Ki(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,c){return xr(n),a=$c(t,n,a,o,void 0,c),o=ef(),t!==null&&!cn?(tf(t,n,c),na(t,n,c)):(yt&&o&&Oc(n),n.flags|=1,En(t,n,a,c),n.child)}function d0(t,n,a,o,c,f){return xr(n),n.updateQueue=null,a=mm(n,o,a,c),pm(t),o=ef(),t!==null&&!cn?(tf(t,n,f),na(t,n,f)):(yt&&o&&Oc(n),n.flags|=1,En(t,n,a,f),n.child)}function h0(t,n,a,o,c){if(xr(n),n.stateNode===null){var f=Qr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=vf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Qr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(gf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&vf.enqueueReplaceState(f,f.state,null),vo(n,o,f,c),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,I=Tr(a,A);f.props=I;var $=f.context,de=a.contextType;x=Qr,typeof de=="object"&&de!==null&&(x=Mn(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==x)&&$m(n,f,o,x),Pa=!1;var ie=n.memoizedState;f.state=ie,vo(n,o,f,c),go(),$=n.memoizedState,A||ie!==$||Pa?(typeof _e=="function"&&(gf(n,a,_e,o),$=n.memoizedState),(I=Pa||Jm(n,a,I,o,ie,$,x))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,jc(t,n),x=n.memoizedProps,de=Tr(a,x),f.props=de,_e=n.pendingProps,ie=f.context,$=a.contextType,I=Qr,typeof $=="object"&&$!==null&&(I=Mn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_e||ie!==I)&&$m(n,f,o,I),Pa=!1,ie=n.memoizedState,f.state=ie,vo(n,o,f,c),go();var oe=n.memoizedState;x!==_e||ie!==oe||Pa||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof A=="function"&&(gf(n,a,A,o),oe=n.memoizedState),(de=Pa||Jm(n,a,de,o,ie,oe,I)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,oe,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,oe,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),f.props=o,f.state=oe,f.context=I,o=de):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,jl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Er(n,t.child,null,c),n.child=Er(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=na(t,n,c),t}function p0(t,n,a,o){return vr(),n.flags|=256,En(t,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:im()}}function Ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function m0(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(c?Ba(n):Ia(),(t=Xt)?(t=Eg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Yp(t),a.return=n,n.child=a,yn=n,Xt=null)):t=null,t===null)throw La(n);return rd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Ia(),c=n.mode,A=ql({mode:"hidden",children:A},c),o=gr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,x,a),n.memoizedState=yf,Mo(null,o)):(Ba(n),bf(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),A=o.fallback,c=n.mode,o=ql({mode:"visible",children:o.children},c),A=gr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Er(n,t.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,x,a),n.memoizedState=yf,n=Mo(null,o));else if(Ba(n),rd(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(r(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(cn||ts(t,n,a,!1),x=(a&t.childLanes)!==0,cn||x){if(x=kt,x!==null&&(o=cl(x,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,mr(t,o),Vn(x,t,o),xf;ad(A)||nu(),n=Tf(t,n,a)}else ad(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Xt=ui(A.nextSibling),yn=n,yt=!0,Ua=null,oi=!1,t!==null&&Qp(n,t),n=bf(n,o.children),n.flags|=4096);return n}return c?(Ia(),A=o.fallback,c=n.mode,I=t.child,$=I.sibling,o=Ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?A=Ki($,A):(A=gr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Mo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Mf(a):(c=A.cachePool,c!==null?(I=ln._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=im(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Ef(t,x,a),n.memoizedState=yf,Mo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function bf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Tf(t,n,a){return Er(n,t.child,null,a),t=bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function g0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ic(t.return,n,a)}function Af(t,n,a,o,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function v0(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=tn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,xe(tn,x),En(t,n,o,a),o=yt?lo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,a,n);else if(t.tag===19)g0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Af(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Af(n,!0,a,null,f,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function cS(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Oa(n,ln,t.memoizedState.cache),vr();break;case 27:case 5:Qe(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?m0(t,n,a):(Ba(n),t=na(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return v0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xe(tn,tn.current),o)break;return null;case 22:return n.lanes=0,u0(t,n,a,n.pendingProps);case 24:Oa(n,ln,t.memoizedState.cache)}return na(t,n,a)}function _0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return cn=!1,cS(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,yt&&(n.flags&1048576)!==0&&Kp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")Nc(t)?(o=Tr(t,o),n.tag=1,n=h0(null,n,t,o,a)):(n.tag=0,n=Sf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=s0(null,n,t,o,a);break e}else if(c===z){n.tag=14,n=o0(null,n,t,o,a);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Tr(o,n.pendingProps),h0(t,n,o,c,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,jc(t,n),vo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Oa(n,ln,o),o!==f.cache&&Hc(n,[ln],a,!0),go(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=p0(t,n,o,a);break e}else if(o!==c){c=ai(Error(r(424)),n),uo(c),n=p0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xt=ui(t.firstChild),yn=n,yt=!0,Ua=null,oi=!0,a=um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vr(),o===c){n=na(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return jl(t,n),t===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=uu(ne.current).createElement(a),o[rn]=n,o[pn]=t,bn(o,a,t),W(o),n.stateNode=o):n.memoizedState=wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&yt&&(o=n.stateNode=Ag(n.type,n.pendingProps,ne.current),yn=n,oi=!0,c=Xt,qa(n.type)?(sd=c,Xt=ui(o.firstChild)):Xt=c),En(t,n,n.pendingProps.children,a),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((c=o=Xt)&&(o=HS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,yn=n,Xt=ui(o.firstChild),oi=!1,c=!0):c=!1),c||La(n)),Qe(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,td(c,f)?o=null:x!==null&&td(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=$c(t,n,tS,null,null,a),zo._currentValue=c),jl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Xt)&&(a=GS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,yn=n,Xt=null,t=!0):t=!1),t||La(n)),null;case 13:return m0(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Er(n,null,o,a):En(t,n,o,a),n.child;case 11:return s0(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,xr(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return o0(t,n,n.type,n.pendingProps,a);case 15:return l0(t,n,n.type,n.pendingProps,a);case 19:return v0(t,n,a);case 31:return uS(t,n,a);case 22:return u0(t,n,a,n.pendingProps);case 24:return xr(n),o=Mn(ln),t===null?(c=kc(),c===null&&(c=kt,f=Gc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Wc(n),Oa(n,ln,c)):((t.lanes&a)!==0&&(jc(t,n),vo(n,null,null,a),go()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Oa(n,ln,o)):(o=f.cache,Oa(n,ln,o),o!==c.cache&&Hc(n,[ln],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function Cf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(W0())t.flags|=8192;else throw Mr=Nl,Xc}else t.flags&=-16777217}function x0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Og(n))if(W0())t.flags|=8192;else throw Mr=Nl,Xc}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,hs|=n)}function Eo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function fS(t,n,a){var o=n.pendingProps;switch(Pc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(ln),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(es(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zc())),Wt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(Wt(n),x0(n,f)):(Wt(n),Cf(n,c,null,o,a))):f?f!==t.memoizedState?(ia(n),Wt(n),x0(n,f)):(Wt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ia(n),Wt(n),Cf(n,c,t,o,a)),null;case 27:if(et(n),a=ne.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}t=Ce.current,es(n)?Jp(n):(t=Ag(c,o,a),n.stateNode=t,ia(n))}return Wt(n),null;case 5:if(et(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(f=Ce.current,es(n))Jp(n);else{var x=uu(ne.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[rn]=n,f[pn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(bn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return Wt(n),Cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,es(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||mg(t.nodeValue,a)),t||La(n,!0)}else t=uu(t).createTextNode(o),t[rn]=n,n.stateNode=t}return Wt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),t=!1}else a=zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Wt(n),null);case 4:return Xe(),t===null&&Kf(n.stateNode.containerInfo),Wt(n),null;case 10:return $i(n.type),Wt(n),null;case 19:if(Y(tn),o=n.memoizedState,o===null)return Wt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)Eo(o,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,Eo(o,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)qp(a,t),a=a.sibling;return xe(tn,tn.current&1|2),yt&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>$l&&(n.flags|=128,c=!0,Eo(o,!1),n.lanes=4194304)}else{if(!c)if(t=Pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!yt)return Wt(n),null}else 2*E()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,c=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=tn.current,xe(tn,c?a&1|2:a&1),yt&&Qi(n,o.treeForkCount),t):(Wt(n),null);case 22:case 23:return Kn(n),Kc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(ln),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dS(t,n){switch(Pc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(ln),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(tn),null;case 4:return Xe(),null;case 10:return $i(n.type),null;case 22:case 23:return Kn(n),Kc(),t!==null&&Y(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(ln),null;case 25:return null;default:return null}}function S0(t,n){switch(Pc(n),n.tag){case 3:$i(ln),Xe();break;case 26:case 27:case 5:et(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y(tn);break;case 10:$i(n.type);break;case 22:case 23:Kn(n),Kc(),t!==null&&Y(Sr);break;case 24:$i(ln)}}function bo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(A){Ft(n,n.return,A)}}function Ha(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,c=n;var I=a,$=A;try{$()}catch(de){Ft(c,I,de)}}}o=o.next}while(o!==f)}}catch(de){Ft(n,n.return,de)}}function y0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fm(n,a)}catch(o){Ft(t,t.return,o)}}}function M0(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ft(t,n,c)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ft(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(t,n,c)}else a.current=null}function E0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ft(t,t.return,c)}}function wf(t,n,a){try{var o=t.stateNode;OS(o,t.type,a,n),o[pn]=n}catch(c){Ft(t,t.return,c)}}function b0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nf(t,n,a),t=t.sibling;t!==null;)Nf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function T0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[rn]=t,n[pn]=a}catch(f){Ft(t,t.return,f)}}var aa=!1,fn=!1,Uf=!1,A0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function hS(t,n){if(t=t.containerInfo,$f=gu,t=Bp(t),bc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,A=-1,I=-1,$=0,de=0,_e=t,ie=null;t:for(;;){for(var oe;_e!==a||c!==0&&_e.nodeType!==3||(A=x+c),_e!==f||o!==0&&_e.nodeType!==3||(I=x+o),_e.nodeType===3&&(x+=_e.nodeValue.length),(oe=_e.firstChild)!==null;)ie=_e,_e=oe;for(;;){if(_e===t)break t;if(ie===a&&++$===c&&(A=x),ie===f&&++de===o&&(I=x),(oe=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=oe}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(ed={focusedElem:t,selectionRange:a},gu=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ve=Tr(a.type,c);t=o.getSnapshotBeforeUpdate(Ve,f),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Ft(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)id(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function R0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),o&4&&bo(5,a);break;case 1:if(sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ft(a,a.return,x)}else{var c=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ft(a,a.return,x)}}o&64&&y0(a),o&512&&To(a,a.return);break;case 3:if(sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(t,n)}catch(x){Ft(a,a.return,x)}}break;case 27:n===null&&o&4&&T0(a);case 26:case 5:sa(t,a),n===null&&o&4&&E0(a),o&512&&To(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),o&4&&D0(t,a);break;case 13:sa(t,a),o&4&&N0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=MS.bind(null,a),VS(t,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||fn,c=aa;var f=fn;aa=o,(fn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),aa=c,fn=f}break;case 30:break;default:sa(t,a)}}function C0(t){var n=t.alternate;n!==null&&(t.alternate=null,C0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Js(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Bn=!1;function ra(t,n,a){for(a=a.child;a!==null;)w0(t,n,a),a=a.sibling}function w0(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:fn||Ui(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ui(a,n);var o=Zt,c=Bn;qa(a.type)&&(Zt=a.stateNode,Bn=!1),ra(t,n,a),Oo(a.stateNode),Zt=o,Bn=c;break;case 5:fn||Ui(a,n);case 6:if(o=Zt,c=Bn,Zt=null,ra(t,n,a),Zt=o,Bn=c,Zt!==null)if(Bn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Zt!==null&&(Bn?(t=Zt,yg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ys(t)):yg(Zt,a.stateNode));break;case 4:o=Zt,c=Bn,Zt=a.stateNode.containerInfo,Bn=!0,ra(t,n,a),Zt=o,Bn=c;break;case 0:case 11:case 14:case 15:Ha(2,a,n),fn||Ha(4,a,n),ra(t,n,a);break;case 1:fn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&M0(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ra(t,n,a),fn=o;break;default:ra(t,n,a)}}function D0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ys(t)}catch(a){Ft(n,n.return,a)}}}function N0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ys(t)}catch(a){Ft(n,n.return,a)}}function pS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new A0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new A0),n;default:throw Error(r(435,t.tag))}}function Kl(t,n){var a=pS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=ES.bind(null,t,o);o.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,x=n,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){Zt=A.stateNode,Bn=!1;break e}break;case 5:Zt=A.stateNode,Bn=!1;break e;case 3:case 4:Zt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(Zt===null)throw Error(r(160));w0(f,x,c),Zt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)U0(n,t),n=n.sibling}var yi=null;function U0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Hn(t),o&4&&(Ha(3,t,t.return),bo(3,t),Ha(5,t,t.return));break;case 1:In(n,t),Hn(t),o&512&&(fn||a===null||Ui(a,a.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=yi;if(In(n,t),Hn(t),o&512&&(fn||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[cr]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,o,a),f[rn]=t,W(f),o=f;break e;case"link":var x=Ug("link","href",c).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break t}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=Ug("meta","content",c).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break t}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[rn]=t,W(f),o=f}t.stateNode=o}else Lg(c,t.type,t.stateNode);else t.stateNode=Ng(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Lg(c,t.type,t.stateNode):Ng(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Hn(t),o&512&&(fn||a===null||Ui(a,a.return)),a!==null&&o&4&&wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Hn(t),o&512&&(fn||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{On(c,"")}catch(Ve){Ft(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,wf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Uf=!0);break;case 6:if(In(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){Ft(t,t.return,Ve)}}break;case 3:if(du=null,c=yi,yi=cu(n.containerInfo),In(n,t),yi=c,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ys(n.containerInfo)}catch(Ve){Ft(t,t.return,Ve)}Uf&&(Uf=!1,L0(t));break;case 4:o=yi,yi=cu(t.stateNode.containerInfo),In(n,t),Hn(t),yi=o;break;case 12:In(n,t),Hn(t);break;case 31:In(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:In(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=aa,de=fn;if(aa=$||c,fn=de||I,In(n,t),fn=de,aa=$,Hn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||aa||fn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=I.stateNode;var _e=I.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var oe=I.stateNode;c?Mg(oe,!0):Mg(I.stateNode,!1)}catch(Ve){Ft(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:In(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:In(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(b0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Df(t);Zl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(On(x,""),a.flags&=-33);var A=Df(t);Zl(t,A,x);break;case 3:case 4:var I=a.stateNode.containerInfo,$=Df(t);Nf(t,$,I);break;default:throw Error(r(161))}}catch(de){Ft(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function L0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;L0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R0(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Ar(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&M0(n,n.return,a),Ar(n);break;case 27:Oo(n.stateNode);case 26:case 5:Ui(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:oa(c,f,a),bo(4,f);break;case 1:if(oa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ft(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)cm(I[c],A)}catch($){Ft(o,o.return,$)}}a&&x&64&&y0(f),To(f,f.return);break;case 27:T0(f);case 26:case 5:oa(c,f,a),a&&o===null&&x&4&&E0(f),To(f,f.return);break;case 12:oa(c,f,a);break;case 31:oa(c,f,a),a&&x&4&&D0(c,f);break;case 13:oa(c,f,a),a&&x&4&&N0(c,f);break;case 22:f.memoizedState===null&&oa(c,f,a),To(f,f.return);break;case 30:break;default:oa(c,f,a)}n=n.sibling}}function Lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&co(a))}function Of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O0(t,n,a,o),n=n.sibling}function O0(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,o),c&2048&&bo(9,n);break;case 1:Mi(t,n,a,o);break;case 3:Mi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(c&2048){Mi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else Mi(t,n,a,o);break;case 31:Mi(t,n,a,o);break;case 13:Mi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,o):Ao(t,n):f._visibility&2?Mi(t,n,a,o):(f._visibility|=2,cs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Lf(x,n);break;case 24:Mi(t,n,a,o),c&2048&&Of(n.alternate,n);break;default:Mi(t,n,a,o)}}function cs(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,A=a,I=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:cs(f,x,A,I,c),bo(8,x);break;case 23:break;case 22:var de=x.stateNode;x.memoizedState!==null?de._visibility&2?cs(f,x,A,I,c):Ao(f,x):(de._visibility|=2,cs(f,x,A,I,c)),c&&$&2048&&Lf(x.alternate,x);break;case 24:cs(f,x,A,I,c),c&&$&2048&&Of(x.alternate,x);break;default:cs(f,x,A,I,c)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:Ao(a,o),c&2048&&Lf(o.alternate,o);break;case 24:Ao(a,o),c&2048&&Of(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function fs(t,n,a){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)P0(t,n,a),t=t.sibling}function P0(t,n,a){switch(t.tag){case 26:fs(t,n,a),t.flags&Ro&&t.memoizedState!==null&&ey(a,yi,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,a);break;case 3:case 4:var o=yi;yi=cu(t.stateNode.containerInfo),fs(t,n,a),yi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,fs(t,n,a),Ro=o):fs(t,n,a));break;default:fs(t,n,a)}}function F0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,B0(o,t)}F0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Co(t);break;default:Co(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,B0(o,t)}F0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function B0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var c=o.sibling,f=o.return;if(C0(o),o===a){xn=null;break e}if(c!==null){c.return=f,xn=c;break e}xn=f}}}var mS={getCacheForType:function(t){var n=Mn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,kt=null,gt=null,xt=0,Pt=0,Qn=null,Ga=!1,ds=!1,Pf=!1,la=0,en=0,Va=0,Rr=0,Ff=0,Jn=0,hs=0,wo=null,Gn=null,zf=!1,Jl=0,I0=0,$l=1/0,eu=null,ka=null,gn=0,Xa=null,ps=null,ua=0,Bf=0,If=null,H0=null,Do=0,Hf=null;function $n(){return(Nt&2)!==0&&xt!==0?xt&-xt:O.T!==null?jf():wi()}function G0(){if(Jn===0)if((xt&536870912)===0||yt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Vn(t,n,a){(t===kt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(ms(t,0),Wa(t,xt,Jn,!1)),Nn(t,a),((Nt&2)===0||t!==kt)&&(t===kt&&((Nt&2)===0&&(Rr|=a),en===4&&Wa(t,xt,Jn,!1)),Li(t))}function V0(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),c=o?xS(t,n):Vf(t,n,!0),f=o;do{if(c===0){ds&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!vS(a)){c=Vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;c=wo;var I=A.current.memoizedState.isDehydrated;if(I&&(ms(A,x).flags|=256),x=Vf(A,x,!1),x!==2){if(Pf&&!I){A.errorRecoveryDisabledLanes|=f,Rr|=f,c=4;break e}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){ms(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,Jn,!Ga);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Jl+300-E(),10<c)){if(Wa(o,n,Jn,!Ga),ce(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=xg(k0.bind(null,o,a,Gn,eu,zf,n,Jn,Rr,hs,Ga,f,"Throttled",-0,0),c);break e}k0(o,a,Gn,eu,zf,n,Jn,Rr,hs,Ga,f,null,-0,0)}}break}while(!0);Li(t)}function k0(t,n,a,o,c,f,x,A,I,$,de,_e,ie,oe){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},P0(n,f,_e);var Ve=(f&62914560)===f?Jl-E():(f&4194048)===f?I0-E():0;if(Ve=ty(_e,Ve),Ve!==null){ua=f,t.cancelPendingCommit=Ve(Q0.bind(null,t,n,f,a,o,c,x,A,I,de,_e,null,ie,oe)),Wa(t,f,x,!$);return}}Q0(t,n,f,a,o,c,x,A,I)}function vS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~Ff,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Oe(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&Qs(t,a,n)}function tu(){return(Nt&6)===0?(No(0),!1):!0}function Gf(){if(gt!==null){if(Pt===0)var t=gt.return;else t=gt,Ji=_r=null,nf(t),rs=null,ho=0,t=gt;for(;t!==null;)S0(t.alternate,t),t=t.return;gt=null}}function ms(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Gf(),kt=t,gt=a=Ki(t.current,null),xt=n,Pt=0,Qn=null,Ga=!1,ds=He(t,n),Pf=!1,hs=Jn=Ff=Rr=Va=en=0,Gn=wo=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Oe(o),f=1<<c;n|=t[c],o&=~f}return la=n,Ml(),a}function X0(t,n){ut=null,O.H=yo,n===as||n===Dl?(n=sm(),Pt=3):n===Xc?(n=sm(),Pt=4):Pt=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&(en=1,Xl(t,ai(n,t.current)))}function W0(){var t=Zn.current;return t===null?!0:(xt&4194048)===xt?li===null:(xt&62914560)===xt||(xt&536870912)!==0?t===li:!1}function j0(){var t=O.H;return O.H=yo,t===null?yo:t}function q0(){var t=O.A;return O.A=mS,t}function nu(){en=4,Ga||(xt&4194048)!==xt&&Zn.current!==null||(ds=!0),(Va&134217727)===0&&(Rr&134217727)===0||kt===null||Wa(kt,xt,Jn,!1)}function Vf(t,n,a){var o=Nt;Nt|=2;var c=j0(),f=q0();(kt!==t||xt!==n)&&(eu=null,ms(t,n)),n=!1;var x=en;e:do try{if(Pt!==0&&gt!==null){var A=gt,I=Qn;switch(Pt){case 8:Gf(),x=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var $=Pt;if(Pt=0,Qn=null,gs(t,A,I,$),a&&ds){x=0;break e}break;default:$=Pt,Pt=0,Qn=null,gs(t,A,I,$)}}_S(),x=en;break}catch(de){X0(t,de)}while(!0);return n&&t.shellSuspendCounter++,Ji=_r=null,Nt=o,O.H=c,O.A=f,gt===null&&(kt=null,xt=0,Ml()),x}function _S(){for(;gt!==null;)Y0(gt)}function xS(t,n){var a=Nt;Nt|=2;var o=j0(),c=q0();kt!==t||xt!==n?(eu=null,$l=E()+500,ms(t,n)):ds=He(t,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=Qn;t:switch(Pt){case 1:Pt=0,Qn=null,gs(t,n,f,1);break;case 2:case 9:if(am(f)){Pt=0,Qn=null,Z0(n);break}n=function(){Pt!==2&&Pt!==9||kt!==t||(Pt=7),Li(t)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:am(f)?(Pt=0,Qn=null,Z0(n)):(Pt=0,Qn=null,gs(t,n,f,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var A=gt;if(x?Og(x):A.stateNode.complete){Pt=0,Qn=null;var I=A.sibling;if(I!==null)gt=I;else{var $=A.return;$!==null?(gt=$,iu($)):gt=null}break t}}Pt=0,Qn=null,gs(t,n,f,5);break;case 6:Pt=0,Qn=null,gs(t,n,f,6);break;case 8:Gf(),en=6;break e;default:throw Error(r(462))}}SS();break}catch(de){X0(t,de)}while(!0);return Ji=_r=null,O.H=o,O.A=c,Nt=a,gt!==null?0:(kt=null,xt=0,Ml(),en)}function SS(){for(;gt!==null&&!qe();)Y0(gt)}function Y0(t){var n=_0(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?iu(t):gt=n}function Z0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=d0(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=d0(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:nf(n);default:S0(a,n),n=gt=qp(n,la),n=_0(a,n,la)}t.memoizedProps=t.pendingProps,n===null?iu(t):gt=n}function gs(t,n,a,o){Ji=_r=null,nf(n),rs=null,ho=0;var c=n.return;try{if(lS(t,c,n,a,xt)){en=1,Xl(t,ai(a,t.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;en=1,Xl(t,ai(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:ds||(xt&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),K0(n,t)):iu(n)}function iu(t){var n=t;do{if((n.flags&32768)!==0){K0(n,Ga);return}t=n.return;var a=fS(n.alternate,n,la);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);en===0&&(en=5)}function K0(t,n){do{var a=dS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);en=6,gt=null}function Q0(t,n,a,o,c,f,x,A,I){t.cancelPendingCommit=null;do au();while(gn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=wc,gi(t,a,f,x,A,I),t===kt&&(gt=kt=null,xt=0),ps=n,Xa=t,ua=a,Bf=f,If=c,H0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bS(fe,function(){return ng(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=B.p,B.p=2,x=Nt,Nt|=4;try{hS(t,n,a)}finally{Nt=x,B.p=c,O.T=o}}gn=1,J0(),$0(),eg()}}function J0(){if(gn===1){gn=0;var t=Xa,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var c=Nt;Nt|=4;try{U0(n,t);var f=ed,x=Bp(t.containerInfo),A=f.focusedElem,I=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&zp(A.ownerDocument.documentElement,A)){if(I!==null&&bc(A)){var $=I.start,de=I.end;if(de===void 0&&(de=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(de,A.value.length);else{var _e=A.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),Ve=A.textContent.length,$e=Math.min(I.start,Ve),Vt=I.end===void 0?$e:Math.min(I.end,Ve);!oe.extend&&$e>Vt&&(x=Vt,Vt=$e,$e=x);var Z=Fp(A,$e),X=Fp(A,Vt);if(Z&&X&&(oe.rangeCount!==1||oe.anchorNode!==Z.node||oe.anchorOffset!==Z.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var J=_e.createRange();J.setStart(Z.node,Z.offset),oe.removeAllRanges(),$e>Vt?(oe.addRange(J),oe.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),oe.addRange(J))}}}}for(_e=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&_e.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var ve=_e[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}gu=!!$f,ed=$f=null}finally{Nt=c,B.p=o,O.T=a}}t.current=n,gn=2}}function $0(){if(gn===2){gn=0;var t=Xa,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var c=Nt;Nt|=4;try{R0(t,n.alternate,n)}finally{Nt=c,B.p=o,O.T=a}}gn=3}}function eg(){if(gn===4||gn===3){gn=0,L();var t=Xa,n=ps,a=ua,o=H0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ps=Xa=null,tg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ka=null),Vr(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=B.p,B.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var A=o[x];f(A.value,{componentStack:A.stack})}}finally{O.T=n,B.p=c}}(ua&3)!==0&&au(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Hf?Do++:(Do=0,Hf=t):Do=0,No(0)}}function tg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function au(){return J0(),$0(),eg(),ng()}function ng(){if(gn!==5)return!1;var t=Xa,n=Bf;Bf=0;var a=Vr(ua),o=O.T,c=B.p;try{B.p=32>a?32:a,O.T=null,a=If,If=null;var f=Xa,x=ua;if(gn=0,ps=Xa=null,ua=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,z0(f.current),O0(f,f.current,x,a),Nt=A,No(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{B.p=c,O.T=o,tg(t,n)}}function ig(t,n,a){n=ai(a,n),n=_f(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Nn(t,2),Li(t))}function Ft(t,n,a){if(t.tag===3)ig(t,t,a);else for(;n!==null;){if(n.tag===3){ig(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=ai(a,t),a=a0(2),o=za(n,a,2),o!==null&&(r0(a,o,n,t),Nn(o,2),Li(o));break}}n=n.return}}function kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new gS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Pf=!0,c.add(a),t=yS.bind(null,t,n,a),n.then(t,t))}function yS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(xt&a)===a&&(en===4||en===3&&(xt&62914560)===xt&&300>E()-Jl?(Nt&2)===0&&ms(t,0):Ff|=a,hs===xt&&(hs=0)),Li(t)}function ag(t,n){n===0&&(n=Ot()),t=mr(t,n),t!==null&&(Nn(t,n),Li(t))}function MS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ag(t,a)}function ES(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),ag(t,a)}function bS(t,n){return Et(t,n)}var ru=null,vs=null,Xf=!1,su=!1,Wf=!1,ja=0;function Li(t){t!==vs&&t.next===null&&(vs===null?ru=vs=t:vs=vs.next=t),su=!0,Xf||(Xf=!0,AS())}function No(t,n){if(!Wf&&su){Wf=!0;do for(var a=!1,o=ru;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Oe(42|t)+1)-1,f&=c&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,lg(o,f))}else f=xt,f=ce(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||He(o,f)||(a=!0,lg(o,f));o=o.next}while(a);Wf=!1}}function TS(){rg()}function rg(){su=Xf=!1;var t=0;ja!==0&&FS()&&(t=ja);for(var n=E(),a=null,o=ru;o!==null;){var c=o.next,f=sg(o,n);f===0?(o.next=null,a===null?ru=c:a.next=c,c===null&&(vs=a)):(a=o,(t!==0||(f&3)!==0)&&(su=!0)),o=c}gn!==0&&gn!==5||No(t),ja!==0&&(ja=0)}function sg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Oe(f),A=1<<x,I=c[x];I===-1?((A&a)===0||(A&o)!==0)&&(c[x]=it(A,n)):I<=n&&(t.expiredLanes|=A),f&=~A}if(n=kt,a=xt,a=ce(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ut(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ut(o),Vr(a)){case 2:case 8:a=ye;break;case 32:a=fe;break;case 268435456:a=De;break;default:a=fe}return o=og.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ut(o),t.callbackPriority=2,t.callbackNode=null,2}function og(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(au()&&t.callbackNode!==a)return null;var o=xt;return o=ce(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(V0(t,o,n),sg(t,E()),t.callbackNode!=null&&t.callbackNode===a?og.bind(null,t):null)}function lg(t,n){if(au())return null;V0(t,n,!0)}function AS(){BS(function(){(Nt&6)!==0?Et(ge,TS):rg()})}function jf(){if(ja===0){var t=ns;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),ja=t}return ja}function ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function cg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function RS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=ug((c[pn]||null).action),x=o.submitter;x&&(n=(n=x[pn]||null)?ug(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new _l("action","action",null,o,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var I=x?cg(c,x):new FormData(c);df(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=x?cg(c,x):new FormData(c),df(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var qf=0;qf<Cc.length;qf++){var Yf=Cc[qf],CS=Yf.toLowerCase(),wS=Yf[0].toUpperCase()+Yf.slice(1);Si(CS,"on"+wS)}Si(Gp,"onAnimationEnd"),Si(Vp,"onAnimationIteration"),Si(kp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Wx,"onTransitionRun"),Si(jx,"onTransitionStart"),Si(qx,"onTransitionCancel"),Si(Xp,"onTransitionEnd"),Ne("onMouseEnter",["mouseout","mouseover"]),Ne("onMouseLeave",["mouseout","mouseover"]),Ne("onPointerEnter",["pointerout","pointerover"]),Ne("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function fg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=$;try{f(c)}catch(de){yl(de)}c.currentTarget=null,f=I}else for(x=0;x<o.length;x++){if(A=o[x],I=A.instance,$=A.currentTarget,A=A.listener,I!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=$;try{f(c)}catch(de){yl(de)}c.currentTarget=null,f=I}}}}function vt(t,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=t+"__bubble";a.has(o)||(dg(n,t,2,!1),a.add(o))}function Zf(t,n,a){var o=0;n&&(o|=4),dg(a,t,o,n)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[ou]){t[ou]=!0,se.forEach(function(a){a!=="selectionchange"&&(DS.has(a)||Zf(a,!1,t),Zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ou]||(n[ou]=!0,Zf("selectionchange",!1,n))}}function dg(t,n,a,o){switch(Gg(n)){case 2:var c=ay;break;case 8:c=ry;break;default:c=fd}a=c.bind(null,n,a,t),c=void 0,!mc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Qf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===c)break;if(x===4)for(x=o.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;A!==null;){if(x=Ca(A),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){o=f=x;continue e}A=A.parentNode}}o=o.return}vp(function(){var $=f,de=hc(a),_e=[];e:{var ie=Wp.get(t);if(ie!==void 0){var oe=_l,Ve=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":oe=Ex;break;case"focusin":Ve="focus",oe=xc;break;case"focusout":Ve="blur",oe=xc;break;case"beforeblur":case"afterblur":oe=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Ax;break;case Gp:case Vp:case kp:oe=px;break;case Xp:oe=Cx;break;case"scroll":case"scrollend":oe=ux;break;case"wheel":oe=Dx;break;case"copy":case"cut":case"paste":oe=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Mp;break;case"toggle":case"beforetoggle":oe=Ux}var $e=(n&4)!==0,Vt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?ie!==null?ie+"Capture":null:ie;$e=[];for(var X=$,J;X!==null;){var ve=X;if(J=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||J===null||Z===null||(ve=$s(X,Z),ve!=null&&$e.push(Lo(X,ve,J))),Vt)break;X=X.return}0<$e.length&&(ie=new oe(ie,Ve,null,a,de),_e.push({event:ie,listeners:$e}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ie&&a!==dc&&(Ve=a.relatedTarget||a.fromElement)&&(Ca(Ve)||Ve[ji]))break e;if((oe||ie)&&(ie=de.window===de?de:(ie=de.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(Ve=a.relatedTarget||a.toElement,oe=$,Ve=Ve?Ca(Ve):null,Ve!==null&&(Vt=u(Ve),$e=Ve.tag,Ve!==Vt||$e!==5&&$e!==27&&$e!==6)&&(Ve=null)):(oe=null,Ve=$),oe!==Ve)){if($e=Sp,ve="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=Mp,ve="onPointerLeave",Z="onPointerEnter",X="pointer"),Vt=oe==null?ie:fr(oe),J=Ve==null?ie:fr(Ve),ie=new $e(ve,X+"leave",oe,a,de),ie.target=Vt,ie.relatedTarget=J,ve=null,Ca(de)===$&&($e=new $e(Z,X+"enter",Ve,a,de),$e.target=J,$e.relatedTarget=Vt,ve=$e),Vt=ve,oe&&Ve)t:{for($e=NS,Z=oe,X=Ve,J=0,ve=Z;ve;ve=$e(ve))J++;ve=0;for(var Je=X;Je;Je=$e(Je))ve++;for(;0<J-ve;)Z=$e(Z),J--;for(;0<ve-J;)X=$e(X),ve--;for(;J--;){if(Z===X||X!==null&&Z===X.alternate){$e=Z;break t}Z=$e(Z),X=$e(X)}$e=null}else $e=null;oe!==null&&hg(_e,ie,oe,$e,!1),Ve!==null&&Vt!==null&&hg(_e,Vt,Ve,$e,!0)}}e:{if(ie=$?fr($):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Rt=Dp;else if(Cp(ie))if(Np)Rt=Vx;else{Rt=Hx;var Ye=Ix}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Xr($.elementType)&&(Rt=Dp):Rt=Gx;if(Rt&&(Rt=Rt(t,$))){wp(_e,Rt,a,de);break e}Ye&&Ye(t,ie,$),t==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&_i(ie,"number",ie.value)}switch(Ye=$?fr($):window,t){case"focusin":(Cp(Ye)||Ye.contentEditable==="true")&&(Yr=Ye,Tc=$,oo=null);break;case"focusout":oo=Tc=Yr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Ip(_e,a,de);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Ip(_e,a,de)}var dt;if(yc)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else qr?Ap(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Ep&&a.locale!=="ko"&&(qr||St!=="onCompositionStart"?St==="onCompositionEnd"&&qr&&(dt=_p()):(Da=de,gc="value"in Da?Da.value:Da.textContent,qr=!0)),Ye=lu($,St),0<Ye.length&&(St=new yp(St,t,null,a,de),_e.push({event:St,listeners:Ye}),dt?St.data=dt:(dt=Rp(a),dt!==null&&(St.data=dt)))),(dt=Ox?Px(t,a):Fx(t,a))&&(St=lu($,"onBeforeInput"),0<St.length&&(Ye=new yp("onBeforeInput","beforeinput",null,a,de),_e.push({event:Ye,listeners:St}),Ye.data=dt)),RS(_e,t,$,a,de)}fg(_e,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lu(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=$s(t,a),c!=null&&o.unshift(Lo(t,c,f)),c=$s(t,n),c!=null&&o.push(Lo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function NS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function hg(t,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var A=a,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||$===null||(I=$,c?($=$s(a,f),$!=null&&x.unshift(Lo(a,$,I))):c||($=$s(a,f),$!=null&&x.push(Lo(a,$,I)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var US=/\r\n?/g,LS=/\u0000|\uFFFD/g;function pg(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(LS,"")}function mg(t,n){return n=pg(n),pg(t)===n}function Gt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":st(t,"class",o);break;case"tabIndex":st(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":st(t,a,o);break;case"style":qi(t,o,f);break;case"data":if(n!=="object"){st(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",c.name,c,null),Gt(t,n,"formEncType",c.formEncType,c,null),Gt(t,n,"formMethod",c.formMethod,c,null),Gt(t,n,"formTarget",c.formTarget,c,null)):(Gt(t,n,"encType",c.encType,c,null),Gt(t,n,"method",c.method,c,null),Gt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),nt(t,"popover",o);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ox.get(a)||a,nt(t,a,o))}}function Jf(t,n,a,o,c,f){switch(a){case"style":qi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):nt(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,x,a,null)}}c&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var A=f=x=c=null,I=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":c=de;break;case"type":x=de;break;case"checked":I=de;break;case"defaultChecked":$=de;break;case"value":f=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Gt(t,n,o,de,a,null)}}Wn(t,f,A,I,$,x,c,!1);return;case"select":vt("invalid",t),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Gt(t,n,c,A,a,null)}n=f,a=x,t.multiple=!!o,n!=null?jn(t,!!o,n,!1):a!=null&&jn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Gt(t,n,x,A,a,null)}sn(t,o,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(t,n,I,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)vt(Uo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,$,o,a,null)}return;default:if(Xr(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Jf(t,n,de,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Gt(t,n,A,o,a,null))}function OS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,A=null,I=null,$=null,de=null;for(oe in a){var _e=a[oe];if(a.hasOwnProperty(oe)&&_e!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":I=_e;default:o.hasOwnProperty(oe)||Gt(t,n,oe,null,o,_e)}}for(var ie in o){var oe=o[ie];if(_e=a[ie],o.hasOwnProperty(ie)&&(oe!=null||_e!=null))switch(ie){case"type":f=oe;break;case"name":c=oe;break;case"checked":$=oe;break;case"defaultChecked":de=oe;break;case"value":x=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==_e&&Gt(t,n,ie,oe,o,_e)}}Ln(t,x,A,I,$,de,f,c);return;case"select":oe=x=A=ie=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":oe=I;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,I)}for(c in o)if(f=o[c],I=a[c],o.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":ie=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==I&&Gt(t,n,c,f,o,I)}n=A,a=x,o=oe,ie!=null?jn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?jn(t,!!a,n,!0):jn(t,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(t,n,A,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":ie=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(t,n,x,c,o,f)}Lt(t,ie,oe);return;case"option":for(var Ve in a)ie=a[Ve],a.hasOwnProperty(Ve)&&ie!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Gt(t,n,Ve,null,o,ie));for(I in o)ie=o[I],oe=a[I],o.hasOwnProperty(I)&&ie!==oe&&(ie!=null||oe!=null)&&(I==="selected"?t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol":Gt(t,n,I,ie,o,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ie=a[$e],a.hasOwnProperty($e)&&ie!=null&&!o.hasOwnProperty($e)&&Gt(t,n,$e,null,o,ie);for($ in o)if(ie=o[$],oe=a[$],o.hasOwnProperty($)&&ie!==oe&&(ie!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Gt(t,n,$,ie,o,oe)}return;default:if(Xr(n)){for(var Vt in a)ie=a[Vt],a.hasOwnProperty(Vt)&&ie!==void 0&&!o.hasOwnProperty(Vt)&&Jf(t,n,Vt,void 0,o,ie);for(de in o)ie=o[de],oe=a[de],!o.hasOwnProperty(de)||ie===oe||ie===void 0&&oe===void 0||Jf(t,n,de,ie,o,oe);return}}for(var Z in a)ie=a[Z],a.hasOwnProperty(Z)&&ie!=null&&!o.hasOwnProperty(Z)&&Gt(t,n,Z,null,o,ie);for(_e in o)ie=o[_e],oe=a[_e],!o.hasOwnProperty(_e)||ie===oe||ie==null&&oe==null||Gt(t,n,_e,ie,o,oe)}function gg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,A=c.duration;if(f&&A&&gg(x)){for(x=0,A=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],$=I.startTime;if($>A)break;var de=I.transferSize,_e=I.initiatorType;de&&gg(_e)&&(I=I.responseEnd,x+=de*(I<A?1:(A-$)/(I-$)))}if(--o,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $f=null,ed=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function vg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function td(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nd=null;function FS(){var t=window.event;return t&&t.type==="popstate"?t===nd?!1:(nd=t,!0):(nd=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(t){return Sg.resolve(null).then(t).catch(IS)}:xg;function IS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function yg(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),ys(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[cr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Oo(t.ownerDocument.body);a=c}while(a);ys(n)}function Mg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),Js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function HS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function GS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Eg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function ad(t){return t.data==="$?"||t.data==="$~"}function rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var sd=null;function bg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Tg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ag(t,n,a){switch(n=uu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Js(t)}var ci=new Map,Rg=new Set;function cu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=B.d;B.d={f:kS,r:XS,D:WS,C:jS,L:qS,m:YS,X:KS,S:ZS,M:QS};function kS(){var t=ca.f(),n=tu();return t||n}function XS(t){var n=wa(t);n!==null&&n.tag===5&&n.type==="form"?Xm(n):ca.r(t)}var _s=typeof document>"u"?null:document;function Cg(t,n,a){var o=_s;if(o&&typeof n=="string"&&n){var c=at(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Rg.has(c)||(Rg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",t),W(n),o.head.appendChild(n)))}}function WS(t){ca.D(t),Cg("dns-prefetch",t,null)}function jS(t,n){ca.C(t,n),Cg("preconnect",t,n)}function qS(t,n,a){ca.L(t,n,a);var o=_s;if(o&&t&&n){var c='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+at(a.imageSizes)+'"]')):c+='[href="'+at(t)+'"]';var f=c;switch(n){case"style":f=xs(t);break;case"script":f=Ss(t)}ci.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),bn(n,"link",t),W(n),o.head.appendChild(n)))}}function YS(t,n){ca.m(t,n);var a=_s;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ss(t)}if(!ci.has(f)&&(t=g({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),bn(o,"link",t),W(o),a.head.appendChild(o)}}}function ZS(t,n,a){ca.S(t,n,a);var o=_s;if(o&&t){var c=R(o).hoistableStyles,f=xs(t);n=n||"default";var x=c.get(f);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Po(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&od(t,a);var I=x=o.createElement("link");W(I),bn(I,"link",t),I._p=new Promise(function($,de){I.onload=$,I.onerror=de}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,fu(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},c.set(f,x)}}}function KS(t,n){ca.X(t,n);var a=_s;if(a&&t){var o=R(a).hoistableScripts,c=Ss(t),f=o.get(c);f||(f=a.querySelector(Fo(c)),f||(t=g({src:t,async:!0},n),(n=ci.get(c))&&ld(t,n),f=a.createElement("script"),W(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function QS(t,n){ca.M(t,n);var a=_s;if(a&&t){var o=R(a).hoistableScripts,c=Ss(t),f=o.get(c);f||(f=a.querySelector(Fo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&ld(t,n),f=a.createElement("script"),W(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function wg(t,n,a,o){var c=(c=ne.current)?cu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=R(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var f=R(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(Po(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||JS(c,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(a),a=R(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function xs(t){return'href="'+at(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function Dg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function JS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),W(n),t.head.appendChild(n))}function Ss(t){return'[src="'+at(t)+'"]'}function Fo(t){return"script[async]"+t}function Ng(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,W(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),W(o),bn(o,"style",c),fu(o,a.precedence,t),n.instance=o;case"stylesheet":c=xs(a.href);var f=t.querySelector(Po(c));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=Dg(a),(c=ci.get(c))&&od(o,c),f=(t.ownerDocument||t).createElement("link"),W(f);var x=f;return x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),bn(f,"link",o),n.state.loading|=4,fu(f,a.precedence,t),n.instance=f;case"script":return f=Ss(a.src),(c=t.querySelector(Fo(f)))?(n.instance=c,W(c),c):(o=a,(c=ci.get(f))&&(o=g({},a),ld(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),W(c),bn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fu(o,a.precedence,t));return n.instance}function fu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var du=null;function Ug(t,n,a){if(du===null){var o=new Map,c=du=new Map;c.set(a,o)}else c=du,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[cr]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(f):o.set(x,[f])}}return o}function Lg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function $S(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Og(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ey(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=xs(o.href),f=n.querySelector(Po(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,o=Dg(o),(c=ci.get(c))&&od(o,c),f=f.createElement("link"),W(f);var x=f;x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ud=0;function ty(t,n){return t.stylesheets&&t.count===0&&mu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ud===0&&(ud=62500*PS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ud?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pu=null;function mu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pu=new Map,n.forEach(ny,t),pu=null,hu.call(t))}function ny(t,n){if(!(n.state.loading&4)){var a=pu.get(t);if(a)var o=a.get(null);else{a=new Map,pu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=hu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:D,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function iy(t,n,a,o,c,f,x,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Pg(t,n,a,o,c,f,x,A,I,$,de,_e){return t=new iy(t,n,a,x,I,$,de,_e,A),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=Gc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wc(f),t}function Fg(t){return t?(t=Qr,t):Qr}function zg(t,n,a,o,c,f){c=Fg(c),o.context===null?o.context=c:o.pendingContext=c,o=Fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Vn(a,t,n),mo(a,t,n))}function Bg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function cd(t,n){Bg(t,n),(t=t.alternate)&&Bg(t,n)}function Ig(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Vn(n,t,67108864),cd(t,67108864)}}function Hg(t){if(t.tag===13||t.tag===31){var n=$n();n=Gr(n);var a=mr(t,n);a!==null&&Vn(a,t,n),cd(t,n)}}var gu=!0;function ay(t,n,a,o){var c=O.T;O.T=null;var f=B.p;try{B.p=2,fd(t,n,a,o)}finally{B.p=f,O.T=c}}function ry(t,n,a,o){var c=O.T;O.T=null;var f=B.p;try{B.p=8,fd(t,n,a,o)}finally{B.p=f,O.T=c}}function fd(t,n,a,o){if(gu){var c=dd(o);if(c===null)Qf(t,n,o,vu,a),Vg(t,o);else if(oy(c,t,n,a,o))o.stopPropagation();else if(Vg(t,o),n&4&&-1<sy.indexOf(t)){for(;c!==null;){var f=wa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ee(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var I=1<<31-Oe(x);A.entanglements[1]|=I,x&=~I}Li(f),(Nt&6)===0&&($l=E()+500,No(0))}}break;case 31:case 13:A=mr(f,2),A!==null&&Vn(A,f,2),tu(),cd(f,2)}if(f=dd(o),f===null&&Qf(t,n,o,vu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Qf(t,n,o,null,a)}}function dd(t){return t=hc(t),hd(t)}var vu=null;function hd(t){if(vu=null,t=Ca(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vu=t,null}function Gg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ge:return 2;case ye:return 8;case fe:case We:return 32;case De:return 268435456;default:return 32}default:return 32}}var pd=!1,Ya=null,Za=null,Ka=null,Bo=new Map,Io=new Map,Qa=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Ho(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=wa(n),n!==null&&Ig(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function oy(t,n,a,o,c){switch(n){case"focusin":return Ya=Ho(Ya,t,n,a,o,c),!0;case"dragenter":return Za=Ho(Za,t,n,a,o,c),!0;case"mouseover":return Ka=Ho(Ka,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Bo.set(f,Ho(Bo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Io.set(f,Ho(Io.get(f)||null,t,n,a,o,c)),!0}return!1}function kg(t){var n=Ca(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,kr(t.priority,function(){Hg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,kr(t.priority,function(){Hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);dc=o,a.target.dispatchEvent(o),dc=null}else return n=wa(a),n!==null&&Ig(n),t.blockedOn=a,!1;n.shift()}return!0}function Xg(t,n,a){_u(t)&&a.delete(n)}function ly(){pd=!1,Ya!==null&&_u(Ya)&&(Ya=null),Za!==null&&_u(Za)&&(Za=null),Ka!==null&&_u(Ka)&&(Ka=null),Bo.forEach(Xg),Io.forEach(Xg)}function xu(t,n){t.blockedOn===n&&(t.blockedOn=null,pd||(pd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ly)))}var Su=null;function Wg(t){Su!==t&&(Su=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Su===t&&(Su=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var f=wa(a);f!==null&&(t.splice(n,3),n-=3,df(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ys(t){function n(I){return xu(I,t)}Ya!==null&&xu(Ya,t),Za!==null&&xu(Za,t),Ka!==null&&xu(Ka,t),Bo.forEach(n),Io.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[pn]||null;if(typeof f=="function")x||Wg(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[pn]||null)A=x.formAction;else if(hd(c)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Wg(a)}}}function jg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function md(t){this._internalRoot=t}yu.prototype.render=md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();zg(a,o,t,n,null,null)},yu.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;zg(t.current,2,null,t,null,null),tu(),n[ji]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=wi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&kg(t)}};var qg=e.version;if(qg!=="19.2.4")throw Error(r(527,qg,"19.2.4"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var uy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{be=Mu.inject(uy),Me=Mu}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=e0,f=t0,x=n0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Pg(t,1,!1,null,null,a,o,null,c,f,x,jg),t[ji]=n.current,Kf(t),new md(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=e0,x=t0,A=n0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Pg(t,1,!0,n,a??null,o,c,I,f,x,A,jg),n.context=Fg(null),a=n.current,o=$n(),o=Gr(o),c=Fa(o),c.callback=null,za(a,c,o),a=o,n.current.lanes=a,Nn(n,a),Li(n),t[ji]=n.current,Kf(t),new yu(n)},Vo.version="19.2.4",Vo}var iv;function xy(){if(iv)return _d.exports;iv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_d.exports=_y(),_d.exports}var Sy=xy();var av="popstate";function rv(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function yy(s={}){function e(r,l){let u=l.state?.masked,{pathname:d,search:p,hash:m}=u||r.location;return ah("",{pathname:d,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:el(l)}return Ey(e,i,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ki(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function My(){return Math.random().toString(36).substring(2,10)}function sv(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function ah(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?js(e):e,state:i,key:e&&e.key||r||My(),unstable_mask:l}}function el({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function js(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Ey(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,d=l.history,p="POP",m=null,h=_();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function _(){return(d.state||{idx:null}).idx}function g(){p="POP";let S=_(),y=S==null?null:S-h;h=S,m&&m({action:p,location:C.location,delta:y})}function v(S,y){p="PUSH";let w=rv(S)?S:ah(C.location,S,y);h=_()+1;let D=sv(w,h),U=C.createHref(w.unstable_mask||w);try{d.pushState(D,"",U)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(U)}u&&m&&m({action:p,location:C.location,delta:1})}function M(S,y){p="REPLACE";let w=rv(S)?S:ah(C.location,S,y);h=_();let D=sv(w,h),U=C.createHref(w.unstable_mask||w);d.replaceState(D,"",U),u&&m&&m({action:p,location:C.location,delta:0})}function b(S){return by(S)}let C={get action(){return p},get location(){return s(l,d)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(av,g),m=S,()=>{l.removeEventListener(av,g),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let y=b(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:M,go(S){return d.go(S)}};return C}function by(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:el(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function o_(s,e,i="/"){return Ty(s,e,i,!1)}function Ty(s,e,i,r){let l=typeof e=="string"?js(e):e,u=ya(l.pathname||"/",i);if(u==null)return null;let d=l_(s);Ay(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let h=zy(u);p=Py(d[m],h,r)}return p}function l_(s,e=[],i=[],r="",l=!1){let u=(d,p,m=l,h)=>{let _={relativePath:h===void 0?d.path||"":h,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;Qt(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let g=Ii([r,_.relativePath]),v=i.concat(_);d.children&&d.children.length>0&&(Qt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),l_(d.children,e,v,g,m)),!(d.path==null&&!d.index)&&e.push({path:g,score:Ly(g,d.index),routesMeta:v})};return s.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let m of u_(d.path))u(d,p,!0,m)}),e}function u_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let d=u_(r.join("/")),p=[];return p.push(...d.map(m=>m===""?u:[u,m].join("/"))),l&&p.push(...d),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ay(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Oy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Ry=/^:[\w-]+$/,Cy=3,wy=2,Dy=1,Ny=10,Uy=-2,ov=s=>s==="*";function Ly(s,e){let i=s.split("/"),r=i.length;return i.some(ov)&&(r+=Uy),e&&(r+=wy),i.filter(l=>!ov(l)).reduce((l,u)=>l+(Ry.test(u)?Cy:u===""?Dy:Ny),r)}function Oy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Py(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",d=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,_=u==="/"?e:e.slice(u.length)||"/",g=tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_),v=m.route;if(!g&&h&&i&&!r[r.length-1].route.index&&(g=tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),d.push({params:l,pathname:Ii([u,g.pathname]),pathnameBase:Gy(Ii([u,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(u=Ii([u,g.pathnameBase]))}return d}function tc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Fy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:_,isOptional:g},v)=>{if(_==="*"){let b=p[v]||"";d=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=p[v];return g&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:d,pattern:s}}function Fy(s,e=!1,i=!0){ki(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m,h,_)=>{if(r.push({paramName:p,isOptional:m!=null}),m){let g=_.charAt(h+d.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function zy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ya(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var By=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Iy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?js(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=lv(i.substring(1),"/"):u=lv(i,e)):u=e,{pathname:u,search:Vy(r),hash:ky(l)}}function lv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Md(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function c_(s){let e=Hy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function $h(s,e,i,r=!1){let l;typeof s=="string"?l=js(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),Md("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),Md("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),Md("#","search","hash",l)));let u=s===""||l.pathname==="",d=u?"/":l.pathname,p;if(d==null)p=i;else{let g=e.length-1;if(!r&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),g-=1;l.pathname=v.join("/")}p=g>=0?e[g]:"/"}let m=Iy(l,p),h=d&&d!=="/"&&d.endsWith("/"),_=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||_)&&(m.pathname+="/"),m}var Ii=s=>s.join("/").replace(/\/\/+/g,"/"),Gy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Vy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ky=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Xy=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Wy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function jy(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var f_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function d_(s,e){let i=s;if(typeof i!="string"||!By.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(f_)try{let u=new URL(window.location.href),d=i.startsWith("//")?new URL(u.protocol+i):new URL(i),p=ya(d.pathname,e);d.origin===u.origin&&p!=null?i=p+d.search+d.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var h_=["POST","PUT","PATCH","DELETE"];new Set(h_);var qy=["GET",...h_];new Set(qy);var qs=pe.createContext(null);qs.displayName="DataRouter";var sc=pe.createContext(null);sc.displayName="DataRouterState";var Yy=pe.createContext(!1),p_=pe.createContext({isTransitioning:!1});p_.displayName="ViewTransition";var Zy=pe.createContext(new Map);Zy.displayName="Fetchers";var Ky=pe.createContext(null);Ky.displayName="Await";var mi=pe.createContext(null);mi.displayName="Navigation";var al=pe.createContext(null);al.displayName="Location";var Ta=pe.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var ep=pe.createContext(null);ep.displayName="RouteError";var m_="REACT_ROUTER_ERROR",Qy="REDIRECT",Jy="ROUTE_ERROR_RESPONSE";function $y(s){if(s.startsWith(`${m_}:${Qy}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function eM(s){if(s.startsWith(`${m_}:${Jy}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Xy(e.status,e.statusText,e.data)}catch{}}function tM(s,{relative:e}={}){Qt(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=pe.useContext(mi),{hash:l,pathname:u,search:d}=sl(s,{relative:e}),p=u;return i!=="/"&&(p=u==="/"?i:Ii([i,u])),r.createHref({pathname:p,search:d,hash:l})}function rl(){return pe.useContext(al)!=null}function ur(){return Qt(rl(),"useLocation() may be used only in the context of a <Router> component."),pe.useContext(al).location}var g_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v_(s){pe.useContext(mi).static||pe.useLayoutEffect(s)}function nM(){let{isDataRoute:s}=pe.useContext(Ta);return s?mM():iM()}function iM(){Qt(rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=pe.useContext(qs),{basename:e,navigator:i}=pe.useContext(mi),{matches:r}=pe.useContext(Ta),{pathname:l}=ur(),u=JSON.stringify(c_(r)),d=pe.useRef(!1);return v_(()=>{d.current=!0}),pe.useCallback((m,h={})=>{if(ki(d.current,g_),!d.current)return;if(typeof m=="number"){i.go(m);return}let _=$h(m,JSON.parse(u),l,h.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ii([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,u,l,s])}pe.createContext(null);function sl(s,{relative:e}={}){let{matches:i}=pe.useContext(Ta),{pathname:r}=ur(),l=JSON.stringify(c_(i));return pe.useMemo(()=>$h(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function aM(s,e){return __(s,e)}function __(s,e,i){Qt(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=pe.useContext(mi),{matches:l}=pe.useContext(Ta),u=l[l.length-1],d=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",h=u&&u.route;{let S=h&&h.path||"";S_(p,!h||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let _=ur(),g;if(e){let S=typeof e=="string"?js(e):e;Qt(m==="/"||S.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${S.pathname}" was given in the \`location\` prop.`),g=S}else g=_;let v=g.pathname||"/",M=v;if(m!=="/"){let S=m.replace(/^\//,"").split("/");M="/"+v.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=o_(s,{pathname:M});ki(h||b!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),ki(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=uM(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:Ii([m,r.encodeLocation?r.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Ii([m,r.encodeLocation?r.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i);return e&&C?pe.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},C):C}function rM(){let s=pM(),e=Wy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=pe.createElement(pe.Fragment,null,pe.createElement("p",null,"💿 Hey developer 👋"),pe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pe.createElement("code",{style:u},"ErrorBoundary")," or"," ",pe.createElement("code",{style:u},"errorElement")," prop on your route.")),pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),i?pe.createElement("pre",{style:l},i):null,d)}var sM=pe.createElement(rM,null),x_=class extends pe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=eM(s.digest);i&&(s=i)}let e=s!==void 0?pe.createElement(Ta.Provider,{value:this.props.routeContext},pe.createElement(ep.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?pe.createElement(oM,{error:s},e):e}};x_.contextType=Yy;var Ed=new WeakMap;function oM({children:s,error:e}){let{basename:i}=pe.useContext(mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=$y(e.digest);if(r){let l=Ed.get(e);if(l)throw l;let u=d_(r.location,i);if(f_&&!Ed.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Ed.set(e,d),d}return pe.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function lM({routeContext:s,match:e,children:i}){let r=pe.useContext(qs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),pe.createElement(Ta.Provider,{value:s},i)}function uM(s,e=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r?.errors;if(u!=null){let _=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Qt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let d=!1,p=-1;if(i&&r){d=r.renderFallback;for(let _=0;_<l.length;_++){let g=l[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=_),g.route.id){let{loaderData:v,errors:M}=r,b=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){i.isStatic&&(d=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,h=r&&m?(_,g)=>{m(_,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:jy(r.matches),errorInfo:g})}:void 0;return l.reduceRight((_,g,v)=>{let M,b=!1,C=null,S=null;r&&(M=u&&g.route.id?u[g.route.id]:void 0,C=g.route.errorElement||sM,d&&(p<0&&v===0?(S_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):p===v&&(b=!0,S=g.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,v+1)),w=()=>{let D;return M?D=C:b?D=S:g.route.Component?D=pe.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=_,pe.createElement(lM,{match:g,routeContext:{outlet:_,matches:y,isDataRoute:r!=null},children:D})};return r&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?pe.createElement(x_,{location:r.location,revalidation:r.revalidation,component:C,error:M,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:h}):w()},null)}function tp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cM(s){let e=pe.useContext(qs);return Qt(e,tp(s)),e}function fM(s){let e=pe.useContext(sc);return Qt(e,tp(s)),e}function dM(s){let e=pe.useContext(Ta);return Qt(e,tp(s)),e}function np(s){let e=dM(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function hM(){return np("useRouteId")}function pM(){let s=pe.useContext(ep),e=fM("useRouteError"),i=np("useRouteError");return s!==void 0?s:e.errors?.[i]}function mM(){let{router:s}=cM("useNavigate"),e=np("useNavigate"),i=pe.useRef(!1);return v_(()=>{i.current=!0}),pe.useCallback(async(l,u={})=>{ki(i.current,g_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var uv={};function S_(s,e,i){!e&&!uv[s]&&(uv[s]=!0,ki(!1,i))}pe.memo(gM);function gM({routes:s,future:e,state:i,isStatic:r,onError:l}){return __(s,void 0,{state:i,isStatic:r,onError:l})}function Fs(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:d}){Qt(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=pe.useMemo(()=>({basename:p,navigator:l,static:u,unstable_useTransitions:d,future:{}}),[p,l,u,d]);typeof i=="string"&&(i=js(i));let{pathname:h="/",search:_="",hash:g="",state:v=null,key:M="default",unstable_mask:b}=i,C=pe.useMemo(()=>{let S=ya(h,p);return S==null?null:{location:{pathname:S,search:_,hash:g,state:v,key:M,unstable_mask:b},navigationType:r}},[p,h,_,g,v,M,r,b]);return ki(C!=null,`<Router basename="${p}"> is not able to match the URL "${h}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:pe.createElement(mi.Provider,{value:m},pe.createElement(al.Provider,{children:e,value:C}))}function _M({children:s,location:e}){return aM(rh(s),e)}function rh(s,e=[]){let i=[];return pe.Children.forEach(s,(r,l)=>{if(!pe.isValidElement(r))return;let u=[...e,l];if(r.type===pe.Fragment){i.push.apply(i,rh(r.props.children,u));return}Qt(r.type===Fs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=rh(r.props.children,u)),i.push(d)}),i}var qu="get",Yu="application/x-www-form-urlencoded";function oc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function xM(s){return oc(s)&&s.tagName.toLowerCase()==="button"}function SM(s){return oc(s)&&s.tagName.toLowerCase()==="form"}function yM(s){return oc(s)&&s.tagName.toLowerCase()==="input"}function MM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function EM(s,e){return s.button===0&&(!e||e==="_self")&&!MM(s)}var Eu=null;function bM(){if(Eu===null)try{new FormData(document.createElement("form"),0),Eu=!1}catch{Eu=!0}return Eu}var TM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(s){return s!=null&&!TM.has(s)?(ki(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`),null):s}function AM(s,e){let i,r,l,u,d;if(SM(s)){let p=s.getAttribute("action");r=p?ya(p,e):null,i=s.getAttribute("method")||qu,l=bd(s.getAttribute("enctype"))||Yu,u=new FormData(s)}else if(xM(s)||yM(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?ya(m,e):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||qu,l=bd(s.getAttribute("formenctype"))||bd(p.getAttribute("enctype"))||Yu,u=new FormData(p,s),!bM()){let{name:h,type:_,value:g}=s;if(_==="image"){let v=h?`${h}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else h&&u.append(h,g)}}else{if(oc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=qu,r=null,l=Yu,d=s}return u&&l==="text/plain"&&(d=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ip(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function RM(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&ya(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function CM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function DM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await CM(u,i);return d.links?d.links():[]}return[]}));return OM(r.flat(1).filter(wM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function cv(s,e,i,r,l,u){let d=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,h)=>d(m,h)||p(m,h)):u==="data"?e.filter((m,h)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(d(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function NM(s,e,{includeHydrateFallback:i}={}){return UM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function UM(s){return[...new Set(s)]}function LM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function OM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(LM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function y_(){let s=pe.useContext(qs);return ip(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function PM(){let s=pe.useContext(sc);return ip(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ap=pe.createContext(void 0);ap.displayName="FrameworkContext";function M_(){let s=pe.useContext(ap);return ip(s,"You must render this element inside a <HydratedRouter> element"),s}function FM(s,e){let i=pe.useContext(ap),[r,l]=pe.useState(!1),[u,d]=pe.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:_,onTouchStart:g}=e,v=pe.useRef(null);pe.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let C=y=>{y.forEach(w=>{d(w.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),pe.useEffect(()=>{if(r){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),d(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:ko(p,M),onBlur:ko(m,b),onMouseEnter:ko(h,M),onMouseLeave:ko(_,b),onTouchStart:ko(g,M)}]:[!1,v,{}]}function ko(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function zM({page:s,...e}){let{router:i}=y_(),r=pe.useMemo(()=>o_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?pe.createElement(IM,{page:s,matches:r,...e}):null}function BM(s){let{manifest:e,routeModules:i}=M_(),[r,l]=pe.useState([]);return pe.useEffect(()=>{let u=!1;return DM(s,e,i).then(d=>{u||l(d)}),()=>{u=!0}},[s,e,i]),r}function IM({page:s,matches:e,...i}){let r=ur(),{future:l,manifest:u,routeModules:d}=M_(),{basename:p}=y_(),{loaderData:m,matches:h}=PM(),_=pe.useMemo(()=>cv(s,e,h,u,r,"data"),[s,e,h,u,r]),g=pe.useMemo(()=>cv(s,e,h,u,r,"assets"),[s,e,h,u,r]),v=pe.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let C=new Set,S=!1;if(e.forEach(w=>{let D=u.routes[w.route.id];!D||!D.hasLoader||(!_.some(U=>U.route.id===w.route.id)&&w.route.id in m&&d[w.route.id]?.shouldRevalidate||D.hasClientLoader?S=!0:C.add(w.route.id))}),C.size===0)return[];let y=RM(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return S&&C.size>0&&y.searchParams.set("_routes",e.filter(w=>C.has(w.route.id)).map(w=>w.route.id).join(",")),[y.pathname+y.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,u,_,e,s,d]),M=pe.useMemo(()=>NM(g,u),[g,u]),b=BM(g);return pe.createElement(pe.Fragment,null,v.map(C=>pe.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>pe.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),b.map(({key:C,link:S})=>pe.createElement("link",{key:C,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function HM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var GM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{GM&&(window.__reactRouterVersion="7.13.1")}catch{}function VM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=pe.useRef();l.current==null&&(l.current=yy({window:r,v5Compat:!0}));let u=l.current,[d,p]=pe.useState({action:u.action,location:u.location}),m=pe.useCallback(h=>{i===!1?p(h):pe.startTransition(()=>p(h))},[i]);return pe.useLayoutEffect(()=>u.listen(m),[u,m]),pe.createElement(vM,{basename:s,children:e,location:d.location,navigationType:d.action,navigator:u,unstable_useTransitions:i})}var E_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b_=pe.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:d,unstable_mask:p,state:m,target:h,to:_,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:M,...b},C){let{basename:S,navigator:y,unstable_useTransitions:w}=pe.useContext(mi),D=typeof _=="string"&&E_.test(_),U=d_(_,S);_=U.to;let G=tM(_,{relative:l}),H=ur(),z=null;if(p){let K=$h(p,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);S!=="/"&&(K.pathname=K.pathname==="/"?S:Ii([S,K.pathname])),z=y.createHref(K)}let[T,N,he]=FM(r,b),V=WM(_,{replace:d,unstable_mask:p,state:m,target:h,preventScrollReset:g,relative:l,viewTransition:v,unstable_defaultShouldRevalidate:M,unstable_useTransitions:w});function ee(K){e&&e(K),K.defaultPrevented||V(K)}let re=!(U.isExternal||u),ue=pe.createElement("a",{...b,...he,href:(re?z:void 0)||U.absoluteURL||G,onClick:re?ee:e,ref:HM(C,N),target:h,"data-discover":!D&&i==="render"?"true":void 0});return T&&!D?pe.createElement(pe.Fragment,null,ue,pe.createElement(zM,{page:G})):ue});b_.displayName="Link";var zs=pe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:d,viewTransition:p,children:m,...h},_){let g=sl(d,{relative:h.relative}),v=ur(),M=pe.useContext(sc),{navigator:b,basename:C}=pe.useContext(mi),S=M!=null&&KM(g)&&p===!0,y=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,w=v.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),D=D?D.toLowerCase():null,y=y.toLowerCase()),D&&C&&(D=ya(D,C)||D);const U=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let G=w===y||!l&&w.startsWith(y)&&w.charAt(U)==="/",H=D!=null&&(D===y||!l&&D.startsWith(y)&&D.charAt(y.length)==="/"),z={isActive:G,isPending:H,isTransitioning:S},T=G?e:void 0,N;typeof r=="function"?N=r(z):N=[r,G?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let he=typeof u=="function"?u(z):u;return pe.createElement(b_,{...h,"aria-current":T,className:N,ref:_,style:he,to:d,viewTransition:p},typeof m=="function"?m(z):m)});zs.displayName="NavLink";var kM=pe.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:d=qu,action:p,onSubmit:m,relative:h,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v,...M},b)=>{let{unstable_useTransitions:C}=pe.useContext(mi),S=YM(),y=ZM(p,{relative:h}),w=d.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&E_.test(p),U=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let H=G.nativeEvent.submitter,z=H?.getAttribute("formmethod")||d,T=()=>S(H||G.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:u,relative:h,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v});C&&i!==!1?pe.startTransition(()=>T()):T()};return pe.createElement("form",{ref:b,method:w,action:y,onSubmit:r?m:U,...M,"data-discover":!D&&s==="render"?"true":void 0})});kM.displayName="Form";function XM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T_(s){let e=pe.useContext(qs);return Qt(e,XM(s)),e}function WM(s,{target:e,replace:i,unstable_mask:r,state:l,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:h}={}){let _=nM(),g=ur(),v=sl(s,{relative:d});return pe.useCallback(M=>{if(EM(M,e)){M.preventDefault();let b=i!==void 0?i:el(g)===el(v),C=()=>_(s,{replace:b,unstable_mask:r,state:l,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:m});h?pe.startTransition(()=>C()):C()}},[g,_,v,i,r,l,e,s,u,d,p,m,h])}var jM=0,qM=()=>`__${String(++jM)}__`;function YM(){let{router:s}=T_("useSubmit"),{basename:e}=pe.useContext(mi),i=hM(),r=s.fetch,l=s.navigate;return pe.useCallback(async(u,d={})=>{let{action:p,method:m,encType:h,formData:_,body:g}=AM(u,e);if(d.navigate===!1){let v=d.fetcherKey||qM();await r(v,i,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:_,body:g,formMethod:d.method||m,formEncType:d.encType||h,flushSync:d.flushSync})}else await l(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:_,body:g,formMethod:d.method||m,formEncType:d.encType||h,replace:d.replace,state:d.state,fromRouteId:i,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,l,e,i])}function ZM(s,{relative:e}={}){let{basename:i}=pe.useContext(mi),r=pe.useContext(Ta);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...sl(s||".",{relative:e})},d=ur();if(s==null){u.search=d.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(g=>g).forEach(g=>p.append("index",g));let _=p.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ii([i,u.pathname])),el(u)}function KM(s,{relative:e}={}){let i=pe.useContext(p_);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=T_("useViewTransitionState"),l=sl(s,{relative:e});if(!i.isTransitioning)return!1;let u=ya(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=ya(i.nextLocation.pathname,r)||i.nextLocation.pathname;return tc(l.pathname,d)!=null||tc(l.pathname,u)!=null}const fv=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Events",path:"/events"},{name:"Gallery",path:"/gallery"},{name:"FAQ",path:"/faq"}];function QM(){const[s,e]=pe.useState(!1);return F.jsxs("nav",{className:"bg-black/30 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 shadow-md",children:[F.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:F.jsxs("div",{className:"flex justify-between items-center h-16",children:[F.jsx("div",{className:"flex items-center",children:F.jsx(zs,{to:"/",className:"flex-shrink-0 flex items-center",children:F.jsxs("span",{className:"text-xl font-bold tracking-wider flex items-center gap-2",children:[F.jsx("span",{className:"bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent",children:"AWS Cloud Club"}),F.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full border border-white/10 text-gray-300",children:"I²IT"})]})})}),F.jsx("div",{className:"hidden md:block",children:F.jsx("div",{className:"ml-10 flex items-baseline space-x-6",children:fv.map(i=>F.jsx(zs,{to:i.path,className:({isActive:r})=>`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${r?"text-fuchsia-300 bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:i.name},i.name))})}),F.jsx("div",{className:"-mr-2 flex md:hidden",children:F.jsxs("button",{onClick:()=>e(!s),type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200","aria-controls":"mobile-menu","aria-expanded":"false",children:[F.jsx("span",{className:"sr-only",children:"Open main menu"}),s?F.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):F.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),s&&F.jsx("div",{className:"md:hidden",id:"mobile-menu",children:F.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:fv.map(i=>F.jsx(zs,{to:i.path,onClick:()=>e(!1),className:({isActive:r})=>`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${r?"text-fuchsia-300 bg-white/5":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:i.name},i.name))})})]})}function JM(){const s=new Date().getFullYear();return F.jsx("footer",{className:"bg-black/30 backdrop-blur-xl border-t border-white/10 text-gray-400 py-8",children:F.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[F.jsxs("div",{className:"mb-4 md:mb-0",children:[F.jsxs("span",{className:"text-xl font-bold tracking-wider flex items-center gap-2",children:[F.jsx("span",{className:"bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent",children:"AWS Cloud Club"}),F.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full border border-white/10 text-gray-300",children:"I²IT"})]}),F.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Student-led AWS Cloud Club at I²IT"})]}),F.jsxs("div",{className:"flex space-x-6",children:[F.jsxs("a",{href:"#",className:"text-gray-400 hover:text-fuchsia-400 transition-colors duration-200",children:[F.jsx("span",{className:"sr-only",children:"LinkedIn"}),F.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:F.jsx("path",{fillRule:"evenodd",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",clipRule:"evenodd"})})]}),F.jsxs("a",{href:"#",className:"text-gray-400 hover:text-fuchsia-400 transition-colors duration-200",children:[F.jsx("span",{className:"sr-only",children:"Instagram"}),F.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:F.jsx("path",{fillRule:"evenodd",d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",clipRule:"evenodd"})})]}),F.jsxs("a",{href:"#",className:"text-gray-400 hover:text-fuchsia-400 transition-colors duration-200",children:[F.jsx("span",{className:"sr-only",children:"Twitter/X"}),F.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:F.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.833z"})})]})]})]}),F.jsxs("div",{className:"mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center",children:[F.jsxs("p",{className:"text-sm text-gray-500",children:["© ",s," AWS Cloud Club I²IT. All rights reserved."]}),F.jsxs("div",{className:"mt-4 md:mt-0 space-x-4 text-sm",children:[F.jsx("a",{href:"#",className:"text-gray-500 hover:text-white transition-colors duration-200",children:"Privacy Policy"}),F.jsx("a",{href:"#",className:"text-gray-500 hover:text-white transition-colors duration-200",children:"Terms of Service"})]})]})]})})}const rp="183",$M=0,dv=1,eE=2,Zu=1,tE=2,Qo=3,lr=0,Xn=1,ga=2,_a=0,Bs=1,hv=2,pv=3,mv=4,nE=5,Pr=100,iE=101,aE=102,rE=103,sE=104,oE=200,lE=201,uE=202,cE=203,sh=204,oh=205,fE=206,dE=207,hE=208,pE=209,mE=210,gE=211,vE=212,_E=213,xE=214,lh=0,uh=1,ch=2,Hs=3,fh=4,dh=5,hh=6,ph=7,A_=0,SE=1,yE=2,Hi=0,R_=1,C_=2,w_=3,D_=4,N_=5,U_=6,L_=7,O_=300,Ir=301,Gs=302,Td=303,Ad=304,lc=306,mh=1e3,va=1001,gh=1002,Tn=1003,ME=1004,bu=1005,wn=1006,Rd=1007,zr=1008,pi=1009,P_=1010,F_=1011,tl=1012,sp=1013,Xi=1014,zi=1015,Ma=1016,op=1017,lp=1018,nl=1020,z_=35902,B_=35899,I_=1021,H_=1022,Ri=1023,Ea=1026,Br=1027,G_=1028,up=1029,Vs=1030,cp=1031,fp=1033,Ku=33776,Qu=33777,Ju=33778,$u=33779,vh=35840,_h=35841,xh=35842,Sh=35843,yh=36196,Mh=37492,Eh=37496,bh=37488,Th=37489,Ah=37490,Rh=37491,Ch=37808,wh=37809,Dh=37810,Nh=37811,Uh=37812,Lh=37813,Oh=37814,Ph=37815,Fh=37816,zh=37817,Bh=37818,Ih=37819,Hh=37820,Gh=37821,Vh=36492,kh=36494,Xh=36495,Wh=36283,jh=36284,qh=36285,Yh=36286,EE=3200,bE=0,TE=1,rr="",di="srgb",ks="srgb-linear",nc="linear",zt="srgb",Ms=7680,gv=519,AE=512,RE=513,CE=514,dp=515,wE=516,DE=517,hp=518,NE=519,vv=35044,_v="300 es",Bi=2e3,ic=2001;function UE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function LE(){const s=ac("canvas");return s.style.display="block",s}const xv={};function Sv(...s){const e="THREE."+s.shift();console.log(e,...s)}function V_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=V_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function wt(...s){s=V_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function rc(...s){const e=s.join(" ");e in xv||(xv[e]=!0,rt(...s))}function OE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const PE={[lh]:uh,[ch]:hh,[fh]:ph,[Hs]:dh,[uh]:lh,[hh]:ch,[ph]:fh,[dh]:Hs};class Ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,Zh=180/Math.PI;function ol(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function FE(s,e){return(s%e+e)%e}function wd(s,e,i){return(1-i)*s+i*e}function Xo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,p){let m=r[l+0],h=r[l+1],_=r[l+2],g=r[l+3],v=u[d+0],M=u[d+1],b=u[d+2],C=u[d+3];if(g!==C||m!==v||h!==M||_!==b){let S=m*v+h*M+_*b+g*C;S<0&&(v=-v,M=-M,b=-b,C=-C,S=-S);let y=1-p;if(S<.9995){const w=Math.acos(S),D=Math.sin(w);y=Math.sin(y*w)/D,p=Math.sin(p*w)/D,m=m*y+v*p,h=h*y+M*p,_=_*y+b*p,g=g*y+C*p}else{m=m*y+v*p,h=h*y+M*p,_=_*y+b*p,g=g*y+C*p;const w=1/Math.sqrt(m*m+h*h+_*_+g*g);m*=w,h*=w,_*=w,g*=w}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const p=r[l],m=r[l+1],h=r[l+2],_=r[l+3],g=u[d],v=u[d+1],M=u[d+2],b=u[d+3];return e[i]=p*b+_*g+m*M-h*v,e[i+1]=m*b+_*v+h*g-p*M,e[i+2]=h*b+_*M+p*v-m*g,e[i+3]=_*b-p*g-m*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(l/2),g=p(u/2),v=m(r/2),M=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=v*_*g+h*M*b,this._y=h*M*g-v*_*b,this._z=h*_*b+v*M*g,this._w=h*_*g-v*M*b;break;case"YXZ":this._x=v*_*g+h*M*b,this._y=h*M*g-v*_*b,this._z=h*_*b-v*M*g,this._w=h*_*g+v*M*b;break;case"ZXY":this._x=v*_*g-h*M*b,this._y=h*M*g+v*_*b,this._z=h*_*b+v*M*g,this._w=h*_*g-v*M*b;break;case"ZYX":this._x=v*_*g-h*M*b,this._y=h*M*g+v*_*b,this._z=h*_*b-v*M*g,this._w=h*_*g+v*M*b;break;case"YZX":this._x=v*_*g+h*M*b,this._y=h*M*g+v*_*b,this._z=h*_*b-v*M*g,this._w=h*_*g-v*M*b;break;case"XZY":this._x=v*_*g-h*M*b,this._y=h*M*g-v*_*b,this._z=h*_*b+v*M*g,this._w=h*_*g+v*M*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],g=i[10],v=r+p+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-h)*M,this._z=(d-l)*M}else if(r>p&&r>g){const M=2*Math.sqrt(1+r-p-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+h)/M}else if(p>g){const M=2*Math.sqrt(1+p-r-g);this._w=(u-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-p);this._w=(d-l)/M,this._x=(u+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+d*p+l*h-u*m,this._y=l*_+d*m+u*p-r*h,this._z=u*_+d*h+r*m-l*p,this._w=d*_-r*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(yv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(yv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),_=2*(p*i-u*l),g=2*(u*r-d*i);return this.x=i+m*h+d*g-p*_,this.y=r+m*_+p*h-u*g,this.z=l+m*g+u*_-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new ae,yv=new Zs;class ht{constructor(e,i,r,l,u,d,p,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h)}set(e,i,r,l,u,d,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],_=r[4],g=r[7],v=r[2],M=r[5],b=r[8],C=l[0],S=l[3],y=l[6],w=l[1],D=l[4],U=l[7],G=l[2],H=l[5],z=l[8];return u[0]=d*C+p*w+m*G,u[3]=d*S+p*D+m*H,u[6]=d*y+p*U+m*z,u[1]=h*C+_*w+g*G,u[4]=h*S+_*D+g*H,u[7]=h*y+_*U+g*z,u[2]=v*C+M*w+b*G,u[5]=v*S+M*D+b*H,u[8]=v*y+M*U+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*d*_-i*p*h-r*u*_+r*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],g=_*d-p*h,v=p*m-_*u,M=h*u-d*m,b=i*g+r*v+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(l*h-_*r)*C,e[2]=(p*r-l*d)*C,e[3]=v*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Nd.makeScale(e,i)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new ht,Mv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zE(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===zt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ks]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Tt=zE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class BE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Es===void 0&&(Es=ac("canvas")),Es.width=e.width,Es.height=e.height;const l=Es.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Es}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ac("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=xa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IE=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(Ud(l[d].image)):u.push(Ud(l[d]))}else u=Ud(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Ud(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?BE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let HE=0;const Ld=new ae;class Dn extends Ys{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=va,l=va,u=wn,d=zr,p=Ri,m=pi,h=Dn.DEFAULT_ANISOTROPY,_=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=ol(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=O_;Dn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,h=m[0],_=m[4],g=m[8],v=m[1],M=m[5],b=m[9],C=m[2],S=m[6],y=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+C)<.1&&Math.abs(b+S)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(h+1)/2,U=(M+1)/2,G=(y+1)/2,H=(_+v)/4,z=(g+C)/4,T=(b+S)/4;return D>U&&D>G?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=H/r,u=z/r):U>G?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=H/l,u=T/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=z/u,l=T/u),this.set(r,l,u,i),this}let w=Math.sqrt((S-b)*(S-b)+(g-C)*(g-C)+(v-_)*(v-_));return Math.abs(w)<.001&&(w=1),this.x=(S-b)/w,this.y=(g-C)/w,this.z=(v-_)/w,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends Ys{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Dn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends GE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class k_ extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VE extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e,i,r,l,u,d,p,m,h,_,g,v,M,b,C,S){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h,_,g,v,M,b,C,S)}set(e,i,r,l,u,d,p,m,h,_,g,v,M,b,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=u,y[5]=d,y[9]=p,y[13]=m,y[2]=h,y[6]=_,y[10]=g,y[14]=v,y[3]=M,y[7]=b,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),u=1/bs.setFromMatrixColumn(e,1).length(),d=1/bs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const v=d*_,M=d*g,b=p*_,C=p*g;i[0]=m*_,i[4]=-m*g,i[8]=h,i[1]=M+b*h,i[5]=v-C*h,i[9]=-p*m,i[2]=C-v*h,i[6]=b+M*h,i[10]=d*m}else if(e.order==="YXZ"){const v=m*_,M=m*g,b=h*_,C=h*g;i[0]=v+C*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*g,i[5]=d*_,i[9]=-p,i[2]=M*p-b,i[6]=C+v*p,i[10]=d*m}else if(e.order==="ZXY"){const v=m*_,M=m*g,b=h*_,C=h*g;i[0]=v-C*p,i[4]=-d*g,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*_,i[9]=C-v*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const v=d*_,M=d*g,b=p*_,C=p*g;i[0]=m*_,i[4]=b*h-M,i[8]=v*h+C,i[1]=m*g,i[5]=C*h+v,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,M=d*h,b=p*m,C=p*h;i[0]=m*_,i[4]=C-v*g,i[8]=b*g+M,i[1]=g,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*g+b,i[10]=v-C*g}else if(e.order==="XZY"){const v=d*m,M=d*h,b=p*m,C=p*h;i[0]=m*_,i[4]=-g,i[8]=h*_,i[1]=v*g+C,i[5]=d*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=p*_,i[10]=C*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kE,e,XE)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),$a.crossVectors(r,ei),$a.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),$a.crossVectors(r,ei)),$a.normalize(),Tu.crossVectors(ei,$a),l[0]=$a.x,l[4]=Tu.x,l[8]=ei.x,l[1]=$a.y,l[5]=Tu.y,l[9]=ei.y,l[2]=$a.z,l[6]=Tu.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],_=r[1],g=r[5],v=r[9],M=r[13],b=r[2],C=r[6],S=r[10],y=r[14],w=r[3],D=r[7],U=r[11],G=r[15],H=l[0],z=l[4],T=l[8],N=l[12],he=l[1],V=l[5],ee=l[9],re=l[13],ue=l[2],K=l[6],O=l[10],B=l[14],le=l[3],me=l[7],Te=l[11],P=l[15];return u[0]=d*H+p*he+m*ue+h*le,u[4]=d*z+p*V+m*K+h*me,u[8]=d*T+p*ee+m*O+h*Te,u[12]=d*N+p*re+m*B+h*P,u[1]=_*H+g*he+v*ue+M*le,u[5]=_*z+g*V+v*K+M*me,u[9]=_*T+g*ee+v*O+M*Te,u[13]=_*N+g*re+v*B+M*P,u[2]=b*H+C*he+S*ue+y*le,u[6]=b*z+C*V+S*K+y*me,u[10]=b*T+C*ee+S*O+y*Te,u[14]=b*N+C*re+S*B+y*P,u[3]=w*H+D*he+U*ue+G*le,u[7]=w*z+D*V+U*K+G*me,u[11]=w*T+D*ee+U*O+G*Te,u[15]=w*N+D*re+U*B+G*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],_=e[2],g=e[6],v=e[10],M=e[14],b=e[3],C=e[7],S=e[11],y=e[15],w=m*M-h*v,D=p*M-h*g,U=p*v-m*g,G=d*M-h*_,H=d*v-m*_,z=d*g-p*_;return i*(C*w-S*D+y*U)-r*(b*w-S*G+y*H)+l*(b*D-C*G+y*z)-u*(b*U-C*H+S*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],g=e[9],v=e[10],M=e[11],b=e[12],C=e[13],S=e[14],y=e[15],w=i*p-r*d,D=i*m-l*d,U=i*h-u*d,G=r*m-l*p,H=r*h-u*p,z=l*h-u*m,T=_*C-g*b,N=_*S-v*b,he=_*y-M*b,V=g*S-v*C,ee=g*y-M*C,re=v*y-M*S,ue=w*re-D*ee+U*V+G*he-H*N+z*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ue;return e[0]=(p*re-m*ee+h*V)*K,e[1]=(l*ee-r*re-u*V)*K,e[2]=(C*z-S*H+y*G)*K,e[3]=(v*H-g*z-M*G)*K,e[4]=(m*he-d*re-h*N)*K,e[5]=(i*re-l*he+u*N)*K,e[6]=(S*U-b*z-y*D)*K,e[7]=(_*z-v*U+M*D)*K,e[8]=(d*ee-p*he+h*T)*K,e[9]=(r*he-i*ee-u*T)*K,e[10]=(b*H-C*U+y*w)*K,e[11]=(g*U-_*H-M*w)*K,e[12]=(p*N-d*V-m*T)*K,e[13]=(i*V-r*N+l*T)*K,e[14]=(C*D-b*G-S*w)*K,e[15]=(_*G-g*D+v*w)*K,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,p=e.y,m=e.z,h=u*d,_=u*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+r,_*m-l*d,0,h*m-l*p,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,_=d+d,g=p+p,v=u*h,M=u*_,b=u*g,C=d*_,S=d*g,y=p*g,w=m*h,D=m*_,U=m*g,G=r.x,H=r.y,z=r.z;return l[0]=(1-(C+y))*G,l[1]=(M+U)*G,l[2]=(b-D)*G,l[3]=0,l[4]=(M-U)*H,l[5]=(1-(v+y))*H,l[6]=(S+w)*H,l[7]=0,l[8]=(b+D)*z,l[9]=(S-w)*z,l[10]=(1-(v+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let d=bs.set(l[0],l[1],l[2]).length();const p=bs.set(l[4],l[5],l[6]).length(),m=bs.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ei.copy(this);const h=1/d,_=1/p,g=1/m;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,d,p=Bi,m=!1){const h=this.elements,_=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),M=(r+l)/(r-l);let b,C;if(m)b=u/(d-u),C=d*u/(d-u);else if(p===Bi)b=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(p===ic)b=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d,p=Bi,m=!1){const h=this.elements,_=2/(i-e),g=2/(r-l),v=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,C;if(m)b=1/(d-u),C=d/(d-u);else if(p===Bi)b=-2/(d-u),C=-(d+u)/(d-u);else if(p===ic)b=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const bs=new ae,Ei=new hn,kE=new ae(0,0,0),XE=new ae(1,1,1),$a=new ae,Tu=new ae,ei=new ae,bv=new hn,Tv=new Zs;class ba{constructor(e=0,i=0,r=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],g=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return bv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const Av=new ae,Ts=new Zs,fa=new hn,Au=new ae,Wo=new ae,jE=new ae,qE=new Zs,Rv=new ae(1,0,0),Cv=new ae(0,1,0),wv=new ae(0,0,1),Dv={type:"added"},YE={type:"removed"},As={type:"childadded",child:null},Od={type:"childremoved",child:null};class ni extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new ae,i=new ba,r=new Zs,l=new ae(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ht}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,i){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Au.copy(e):Au.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Wo,Au,this.up):fa.lookAt(Au,Wo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(fa),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),As.child=e,this.dispatchEvent(As),As.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(YE),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,qE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const g=m[h];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),_=d(e.images),g=d(e.shapes),v=d(e.skeletons),M=d(e.animations),b=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new ae(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ru extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZE={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),y=this._getHandJoint(h,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=_.position.distanceTo(g.position),M=.02,b=.005;h.inputState.pinching&&v>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function Fd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=FE(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Fd(d,u,e+1/3),this.g=Fd(d,u,e),this.b=Fd(d,u,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=W_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Tt.workingToColorSpace(Cn.copy(this),e),Math.round(Mt(Cn.r*255,0,255))*65536+Math.round(Mt(Cn.g*255,0,255))*256+Math.round(Mt(Cn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,d=Math.max(r,l,u),p=Math.min(r,l,u);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const g=d-p;switch(h=_<=.5?g/(d+p):g/(2-d-p),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=di){Tt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(Cu);const r=wd(er.h,Cu.h,i),l=wd(er.s,Cu.s,i),u=wd(er.l,Cu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Bt;Bt.NAMES=W_;class KE extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bi=new ae,da=new ae,zd=new ae,ha=new ae,Rs=new ae,Cs=new ae,Nv=new ae,Bd=new ae,Id=new ae,Hd=new ae,Gd=new an,Vd=new an,kd=new an;class Ai{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){bi.subVectors(l,i),da.subVectors(r,i),zd.subVectors(e,i);const d=bi.dot(bi),p=bi.dot(da),m=bi.dot(zd),h=da.dot(da),_=da.dot(zd),g=d*h-p*p;if(g===0)return u.set(0,0,0),null;const v=1/g,M=(h*m-p*_)*v,b=(d*_-p*m)*v;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,u,d,p,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Gd,u.x),d.addScaledVector(Vd,u.y),d.addScaledVector(kd,u.z),d}static isFrontFacing(e,i,r,l){return bi.subVectors(r,i),da.subVectors(e,i),bi.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),da.subVectors(this.a,this.b),bi.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,p;Rs.subVectors(l,r),Cs.subVectors(u,r),Bd.subVectors(e,r);const m=Rs.dot(Bd),h=Cs.dot(Bd);if(m<=0&&h<=0)return i.copy(r);Id.subVectors(e,l);const _=Rs.dot(Id),g=Cs.dot(Id);if(_>=0&&g<=_)return i.copy(l);const v=m*g-_*h;if(v<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(Rs,d);Hd.subVectors(e,u);const M=Rs.dot(Hd),b=Cs.dot(Hd);if(b>=0&&M<=b)return i.copy(u);const C=M*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(Cs,p);const S=_*b-M*g;if(S<=0&&g-_>=0&&M-b>=0)return Nv.subVectors(u,l),p=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(Nv,p);const y=1/(S+C+v);return d=C*y,p=v*y,i.copy(r).addScaledVector(Rs,d).addScaledVector(Cs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ll{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(u,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wu.copy(r.boundingBox)),wu.applyMatrix4(e.matrixWorld),this.union(wu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Du.subVectors(this.max,jo),ws.subVectors(e.a,jo),Ds.subVectors(e.b,jo),Ns.subVectors(e.c,jo),tr.subVectors(Ds,ws),nr.subVectors(Ns,Ds),Cr.subVectors(ws,Ns);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Cr.z,Cr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Cr.z,0,-Cr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Cr.y,Cr.x,0];return!Xd(i,ws,Ds,Ns,Du)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,ws,Ds,Ns,Du))?!1:(Nu.crossVectors(tr,nr),i=[Nu.x,Nu.y,Nu.z],Xd(i,ws,Ds,Ns,Du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ti=new ae,wu=new ll,ws=new ae,Ds=new ae,Ns=new ae,tr=new ae,nr=new ae,Cr=new ae,jo=new ae,Du=new ae,Nu=new ae,wr=new ae;function Xd(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){wr.fromArray(s,u);const p=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),m=e.dot(wr),h=i.dot(wr),_=r.dot(wr);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const dn=new ae,Uu=new It;let QE=0;class Vi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=vv,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uu.fromBufferAttribute(this,i),Uu.applyMatrix3(e),this.setXY(i,Uu.x,Uu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vv&&(e.usage=this.usage),e}}class j_ extends Vi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class q_ extends Vi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Sa extends Vi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const JE=new ll,qo=new ae,Wd=new ae;class mp{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):JE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(qo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Wd)),this.expandByPoint(qo.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $E=0;const fi=new hn,jd=new ni,Us=new ae,ti=new ll,Yo=new ll,Sn=new ae;class Aa extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UE(e)?q_:j_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return jd.lookAt(e),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Sa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Yo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ti.min,Yo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,Yo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(Yo.min),ti.expandByPoint(Yo.max))}ti.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Sn.fromBufferAttribute(p,h),m&&(Us.fromBufferAttribute(e,h),Sn.add(Us)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new ae,m[T]=new ae;const h=new ae,_=new ae,g=new ae,v=new It,M=new It,b=new It,C=new ae,S=new ae;function y(T,N,he){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,N),g.fromBufferAttribute(r,he),v.fromBufferAttribute(u,T),M.fromBufferAttribute(u,N),b.fromBufferAttribute(u,he),_.sub(h),g.sub(h),M.sub(v),b.sub(v);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(V),p[T].add(C),p[N].add(C),p[he].add(C),m[T].add(S),m[N].add(S),m[he].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,N=w.length;T<N;++T){const he=w[T],V=he.start,ee=he.count;for(let re=V,ue=V+ee;re<ue;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const D=new ae,U=new ae,G=new ae,H=new ae;function z(T){G.fromBufferAttribute(l,T),H.copy(G);const N=p[T];D.copy(N),D.sub(G.multiplyScalar(G.dot(N))).normalize(),U.crossVectors(H,N);const V=U.dot(m[T])<0?-1:1;d.setXYZW(T,D.x,D.y,D.z,V)}for(let T=0,N=w.length;T<N;++T){const he=w[T],V=he.start,ee=he.count;for(let re=V,ue=V+ee;re<ue;re+=3)z(e.getX(re+0)),z(e.getX(re+1)),z(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new ae,u=new ae,d=new ae,p=new ae,m=new ae,h=new ae,_=new ae,g=new ae;if(e)for(let v=0,M=e.count;v<M;v+=3){const b=e.getX(v+0),C=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(_),m.add(_),h.add(_),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,g=p.normalized,v=new h.constructor(m.length*_);let M=0,b=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*_;for(let y=0;y<_;y++)v[b++]=h[M++]}return new Vi(v,_,g)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Aa,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let _=0,g=h.length;_<g;_++){const v=h[_],M=e(v,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let g=0,v=h.length;g<v;g++){const M=h[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const u=e.morphAttributes;for(const h in u){const _=[],g=u[h];for(let v=0,M=g.length;v<M;v++)_.push(g[v].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,_=d.length;h<_;h++){const g=d[h];this.addGroup(g.start,g.count,g.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eb=0;class uc extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Bs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new ae,qd=new ae,Lu=new ae,ir=new ae,Yd=new ae,Ou=new ae,Zd=new ae;class tb{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){qd.copy(e).add(i).multiplyScalar(.5),Lu.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(qd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Lu),p=ir.dot(this.direction),m=-ir.dot(Lu),h=ir.lengthSq(),_=Math.abs(1-d*d);let g,v,M,b;if(_>0)if(g=d*m-p,v=d*p-m,b=u*_,g>=0)if(v>=-b)if(v<=b){const C=1/_;g*=C,v*=C,M=g*(g+d*v+2*p)+v*(d*g+v+2*m)+h}else v=u,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*m)+h;else v=-u,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*m)+h;else v<=-b?(g=Math.max(0,-(-d*u+p)),v=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+v*(v+2*m)+h):v<=b?(g=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+h):(g=Math.max(0,-(d*u+p)),v=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+v*(v+2*m)+h);else v=d>0?-u:u,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(qd).addScaledVector(Lu,v),M}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,l=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,l=(e.min.x-v.x)*h),_>=0?(u=(e.min.y-v.y)*_,d=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,d=(e.min.y-v.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(p=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(p=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,r,l,u){Yd.subVectors(i,e),Ou.subVectors(r,e),Zd.crossVectors(Yd,Ou);let d=this.direction.dot(Zd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ir.subVectors(this.origin,e);const m=p*this.direction.dot(Ou.crossVectors(ir,Ou));if(m<0)return null;const h=p*this.direction.dot(Yd.cross(ir));if(h<0||m+h>d)return null;const _=-p*ir.dot(Zd);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Y_ extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uv=new hn,Dr=new tb,Pu=new mp,Lv=new ae,Fu=new ae,zu=new ae,Bu=new ae,Kd=new ae,Iu=new ae,Ov=new ae,Hu=new ae;class Wi extends ni{constructor(e=new Aa,i=new Y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Iu.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const _=p[m],g=u[m];_!==0&&(Kd.fromBufferAttribute(g,e),d?Iu.addScaledVector(Kd,_):Iu.addScaledVector(Kd.sub(i),_))}i.add(Iu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pu.copy(r.boundingSphere),Pu.applyMatrix4(u),Dr.copy(e.ray).recast(e.near),!(Pu.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Pu,Lv)===null||Dr.origin.distanceToSquared(Lv)>(e.far-e.near)**2))&&(Uv.copy(u).invert(),Dr.copy(e.ray).applyMatrix4(Uv),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Dr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,M=u.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,C=v.length;b<C;b++){const S=v[b],y=d[S.materialIndex],w=Math.max(S.start,M.start),D=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=w,G=D;U<G;U+=3){const H=p.getX(U),z=p.getX(U+1),T=p.getX(U+2);l=Gu(this,y,e,r,h,_,g,H,z,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=b,y=C;S<y;S+=3){const w=p.getX(S),D=p.getX(S+1),U=p.getX(S+2);l=Gu(this,d,e,r,h,_,g,w,D,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,C=v.length;b<C;b++){const S=v[b],y=d[S.materialIndex],w=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=w,G=D;U<G;U+=3){const H=U,z=U+1,T=U+2;l=Gu(this,y,e,r,h,_,g,H,z,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=b,y=C;S<y;S+=3){const w=S,D=S+1,U=S+2;l=Gu(this,d,e,r,h,_,g,w,D,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function nb(s,e,i,r,l,u,d,p){let m;if(e.side===Xn?m=r.intersectTriangle(d,u,l,!0,p):m=r.intersectTriangle(l,u,d,e.side===lr,p),m===null)return null;Hu.copy(p),Hu.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Hu);return h<i.near||h>i.far?null:{distance:h,point:Hu.clone(),object:s}}function Gu(s,e,i,r,l,u,d,p,m,h){s.getVertexPosition(p,Fu),s.getVertexPosition(m,zu),s.getVertexPosition(h,Bu);const _=nb(s,e,i,r,Fu,zu,Bu,Ov);if(_){const g=new ae;Ai.getBarycoord(Ov,Fu,zu,Bu,g),l&&(_.uv=Ai.getInterpolatedAttribute(l,p,m,h,g,new It)),u&&(_.uv1=Ai.getInterpolatedAttribute(u,p,m,h,g,new It)),d&&(_.normal=Ai.getInterpolatedAttribute(d,p,m,h,g,new ae),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new ae,materialIndex:0};Ai.getNormal(Fu,zu,Bu,v.normal),_.face=v,_.barycoord=g}return _}class ib extends Dn{constructor(e=null,i=1,r=1,l,u,d,p,m,h=Tn,_=Tn,g,v){super(null,d,p,m,h,_,l,u,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new ae,ab=new ae,rb=new ht;class Or{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qd.subVectors(r,i).cross(ab.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Qd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||rb.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new mp,sb=new It(.5,.5),Vu=new ae;class Z_{constructor(e=new Or,i=new Or,r=new Or,l=new Or,u=new Or,d=new Or){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Bi,r=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],_=u[4],g=u[5],v=u[6],M=u[7],b=u[8],C=u[9],S=u[10],y=u[11],w=u[12],D=u[13],U=u[14],G=u[15];if(l[0].setComponents(h-d,M-_,y-b,G-w).normalize(),l[1].setComponents(h+d,M+_,y+b,G+w).normalize(),l[2].setComponents(h+p,M+g,y+C,G+D).normalize(),l[3].setComponents(h-p,M-g,y-C,G-D).normalize(),r)l[4].setComponents(m,v,S,U).normalize(),l[5].setComponents(h-m,M-v,y-S,G-U).normalize();else if(l[4].setComponents(h-m,M-v,y-S,G-U).normalize(),i===Bi)l[5].setComponents(h+m,M+v,y+S,G+U).normalize();else if(i===ic)l[5].setComponents(m,v,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=sb.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vu.x=l.normal.x>0?e.max.x:e.min.x,Vu.y=l.normal.y>0?e.max.y:e.min.y,Vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K_ extends Dn{constructor(e=[],i=Ir,r,l,u,d,p,m,h,_){super(e,i,r,l,u,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class il extends Dn{constructor(e,i,r=Xi,l,u,d,p=Tn,m=Tn,h,_=Ea,g=1){if(_!==Ea&&_!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,u,d,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ob extends il{constructor(e,i=Xi,r=Ir,l,u,d=Tn,p=Tn,m,h=Ea){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,u,d,p,m,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Q_ extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends Aa{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],_=[],g=[];let v=0,M=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Sa(h,3)),this.setAttribute("normal",new Sa(_,3)),this.setAttribute("uv",new Sa(g,2));function b(C,S,y,w,D,U,G,H,z,T,N){const he=U/z,V=G/T,ee=U/2,re=G/2,ue=H/2,K=z+1,O=T+1;let B=0,le=0;const me=new ae;for(let Te=0;Te<O;Te++){const P=Te*V-re;for(let Y=0;Y<K;Y++){const xe=Y*he-ee;me[C]=xe*w,me[S]=P*D,me[y]=ue,h.push(me.x,me.y,me.z),me[C]=0,me[S]=0,me[y]=H>0?1:-1,_.push(me.x,me.y,me.z),g.push(Y/z),g.push(1-Te/T),B+=1}}for(let Te=0;Te<T;Te++)for(let P=0;P<z;P++){const Y=v+P+K*Te,xe=v+P+K*(Te+1),Ce=v+(P+1)+K*(Te+1),Be=v+(P+1)+K*Te;m.push(Y,xe,Be),m.push(xe,Ce,Be),le+=6}p.addGroup(M,le,N),M+=le,v+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xs extends Aa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,_=m+1,g=e/p,v=i/m,M=[],b=[],C=[],S=[];for(let y=0;y<_;y++){const w=y*v-d;for(let D=0;D<h;D++){const U=D*g-u;b.push(U,-w,0),C.push(0,0,1),S.push(D/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let w=0;w<p;w++){const D=w+h*y,U=w+h*(y+1),G=w+1+h*(y+1),H=w+1+h*y;M.push(D,U,H),M.push(U,G,H)}this.setIndex(M),this.setAttribute("position",new Sa(b,3)),this.setAttribute("normal",new Sa(C,3)),this.setAttribute("uv",new Sa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ws(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Ws(s[i]);for(const l in r)e[l]=r[l]}return e}function lb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function J_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const ub={clone:Ws,merge:Fn};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class db extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hb extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pb extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ku=new ae,Xu=new Zs,Oi=new ae;class $_ extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ku,Xu,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ku,Xu,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(ku,Xu,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ku,Xu,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ae,Pv=new It,Fv=new It;class hi extends $_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,Pv,Fv),i.subVectors(Fv,Pv)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ex extends $_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ls=-90,Os=1;class mb extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Ls,Os,e,i);l.layers=this.layers,this.add(l);const u=new hi(Ls,Os,e,i);u.layers=this.layers,this.add(u);const d=new hi(Ls,Os,e,i);d.layers=this.layers,this.add(d);const p=new hi(Ls,Os,e,i);p.layers=this.layers,this.add(p);const m=new hi(Ls,Os,e,i);m.layers=this.layers,this.add(m);const h=new hi(Ls,Os,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(g,v,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class gb extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function zv(s,e,i,r){const l=_b(r);switch(i){case I_:return s*e;case G_:return s*e/l.components*l.byteLength;case up:return s*e/l.components*l.byteLength;case Vs:return s*e*2/l.components*l.byteLength;case cp:return s*e*2/l.components*l.byteLength;case H_:return s*e*3/l.components*l.byteLength;case Ri:return s*e*4/l.components*l.byteLength;case fp:return s*e*4/l.components*l.byteLength;case Ku:case Qu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ju:case $u:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:case Sh:return Math.max(s,16)*Math.max(e,8)/4;case vh:case xh:return Math.max(s,8)*Math.max(e,8)/2;case yh:case Mh:case bh:case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:case Ah:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vh:case kh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qh:case Yh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _b(s){switch(s){case pi:case P_:return{byteLength:1,components:1};case tl:case F_:case Ma:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case Xi:case sp:case zi:return{byteLength:4,components:1};case z_:case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function tx(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function xb(s){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,g=h.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:g}}function r(p,m,h){const _=m.array,g=m.updateRanges;if(s.bindBuffer(h,p),g.length===0)s.bufferSubData(h,0,_);else{g.sort((M,b)=>M.start-b.start);let v=0;for(let M=1;M<g.length;M++){const b=g[v],C=g[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,g[v]=C)}g.length=v+1;for(let M=0,b=g.length;M<b;M++){const C=g[M];s.bufferSubData(h,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yb=`#ifdef USE_ALPHAHASH
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
#endif`,Mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
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
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ob=`#ifdef USE_BUMPMAP
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`#define PI 3.141592653589793
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wb=`vec3 transformedNormal = objectNormal;
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
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jb=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
#endif`,d1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,_1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w1=`#if defined( USE_POINTS_UV )
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
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
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
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,uT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
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
}`,AT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RT=`#define DISTANCE
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
}`,CT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`uniform float scale;
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
}`,UT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,OT=`uniform vec3 diffuse;
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
}`,PT=`#define LAMBERT
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
}`,FT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zT=`#define MATCAP
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
}`,BT=`#define MATCAP
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
}`,IT=`#define NORMAL
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
}`,HT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GT=`#define PHONG
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
}`,VT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kT=`#define STANDARD
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
}`,XT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,WT=`#define TOON
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
}`,jT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,qT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,KT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,QT=`uniform float rotation;
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
}`,JT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Sb,alphahash_pars_fragment:yb,alphamap_fragment:Mb,alphamap_pars_fragment:Eb,alphatest_fragment:bb,alphatest_pars_fragment:Tb,aomap_fragment:Ab,aomap_pars_fragment:Rb,batching_pars_vertex:Cb,batching_vertex:wb,begin_vertex:Db,beginnormal_vertex:Nb,bsdfs:Ub,iridescence_fragment:Lb,bumpmap_pars_fragment:Ob,clipping_planes_fragment:Pb,clipping_planes_pars_fragment:Fb,clipping_planes_pars_vertex:zb,clipping_planes_vertex:Bb,color_fragment:Ib,color_pars_fragment:Hb,color_pars_vertex:Gb,color_vertex:Vb,common:kb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:Wb,displacementmap_pars_vertex:jb,displacementmap_vertex:qb,emissivemap_fragment:Yb,emissivemap_pars_fragment:Zb,colorspace_fragment:Kb,colorspace_pars_fragment:Qb,envmap_fragment:Jb,envmap_common_pars_fragment:$b,envmap_pars_fragment:e1,envmap_pars_vertex:t1,envmap_physical_pars_fragment:d1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:c1,lights_pars_begin:f1,lights_toon_fragment:h1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:v1,lights_physical_pars_fragment:_1,lights_fragment_begin:x1,lights_fragment_maps:S1,lights_fragment_end:y1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:T1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:w1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:N1,morphinstance_vertex:U1,morphcolor_vertex:L1,morphnormal_vertex:O1,morphtarget_pars_vertex:P1,morphtarget_vertex:F1,normal_fragment_begin:z1,normal_fragment_maps:B1,normal_pars_fragment:I1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:j1,opaque_fragment:q1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:tT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:aT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:lT,specularmap_fragment:uT,specularmap_pars_fragment:cT,tonemapping_fragment:fT,tonemapping_pars_fragment:dT,transmission_fragment:hT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:vT,worldpos_vertex:_T,background_vert:xT,background_frag:ST,backgroundCube_vert:yT,backgroundCube_frag:MT,cube_vert:ET,cube_frag:bT,depth_vert:TT,depth_frag:AT,distance_vert:RT,distance_frag:CT,equirect_vert:wT,equirect_frag:DT,linedashed_vert:NT,linedashed_frag:UT,meshbasic_vert:LT,meshbasic_frag:OT,meshlambert_vert:PT,meshlambert_frag:FT,meshmatcap_vert:zT,meshmatcap_frag:BT,meshnormal_vert:IT,meshnormal_frag:HT,meshphong_vert:GT,meshphong_frag:VT,meshphysical_vert:kT,meshphysical_frag:XT,meshtoon_vert:WT,meshtoon_frag:jT,points_vert:qT,points_frag:YT,shadow_vert:ZT,shadow_frag:KT,sprite_vert:QT,sprite_frag:JT},Le={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Fi={basic:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Fn([Le.common,Le.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Fn([Le.lights,Le.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Fi.physical={uniforms:Fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Wu={r:0,b:0,g:0},Ur=new ba,$T=new hn;function eA(s,e,i,r,l,u){const d=new Bt(0);let p=l===!0?0:1,m,h,_=null,g=0,v=null;function M(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const U=w.backgroundBlurriness>0;D=e.get(D,U)}return D}function b(w){let D=!1;const U=M(w);U===null?S(d,p):U&&U.isColor&&(S(U,1),D=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(w,D){const U=M(D);U&&(U.isCubeTexture||U.mapping===lc)?(h===void 0&&(h=new Wi(new ul(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Ws(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,H,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ur.copy(D.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(Ur)),h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==zt,(_!==U||g!==U.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,_=U,g=U.version,v=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Wi(new Xs(2,2),new Ci({name:"BackgroundMaterial",uniforms:Ws(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,g=U.version,v=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function S(w,D){w.getRGB(Wu,J_(s)),i.buffers.color.setClear(Wu.r,Wu.g,Wu.b,D,u)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,D=1){d.set(w),p=D,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,S(d,p)},render:b,addToRenderList:C,dispose:y}}function tA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function p(V,ee,re,ue,K){let O=!1;const B=g(V,ue,re,ee);u!==B&&(u=B,h(u.object)),O=M(V,ue,re,K),O&&b(V,ue,re,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,U(V,ee,re,ue),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function g(V,ee,re,ue){const K=ue.wireframe===!0;let O=r[ee.id];O===void 0&&(O={},r[ee.id]=O);const B=V.isInstancedMesh===!0?V.id:0;let le=O[B];le===void 0&&(le={},O[B]=le);let me=le[re.id];me===void 0&&(me={},le[re.id]=me);let Te=me[K];return Te===void 0&&(Te=v(m()),me[K]=Te),Te}function v(V){const ee=[],re=[],ue=[];for(let K=0;K<i;K++)ee[K]=0,re[K]=0,ue[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:ue,object:V,attributes:{},index:null}}function M(V,ee,re,ue){const K=u.attributes,O=ee.attributes;let B=0;const le=re.getAttributes();for(const me in le)if(le[me].location>=0){const P=K[me];let Y=O[me];if(Y===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(Y=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(Y=V.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;B++}return u.attributesNum!==B||u.index!==ue}function b(V,ee,re,ue){const K={},O=ee.attributes;let B=0;const le=re.getAttributes();for(const me in le)if(le[me].location>=0){let P=O[me];P===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),K[me]=Y,B++}u.attributes=K,u.attributesNum=B,u.index=ue}function C(){const V=u.newAttributes;for(let ee=0,re=V.length;ee<re;ee++)V[ee]=0}function S(V){y(V,0)}function y(V,ee){const re=u.newAttributes,ue=u.enabledAttributes,K=u.attributeDivisors;re[V]=1,ue[V]===0&&(s.enableVertexAttribArray(V),ue[V]=1),K[V]!==ee&&(s.vertexAttribDivisor(V,ee),K[V]=ee)}function w(){const V=u.newAttributes,ee=u.enabledAttributes;for(let re=0,ue=ee.length;re<ue;re++)ee[re]!==V[re]&&(s.disableVertexAttribArray(re),ee[re]=0)}function D(V,ee,re,ue,K,O,B){B===!0?s.vertexAttribIPointer(V,ee,re,K,O):s.vertexAttribPointer(V,ee,re,ue,K,O)}function U(V,ee,re,ue){C();const K=ue.attributes,O=re.getAttributes(),B=ee.defaultAttributeValues;for(const le in O){const me=O[le];if(me.location>=0){let Te=K[le];if(Te===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor)),Te!==void 0){const P=Te.normalized,Y=Te.itemSize,xe=e.get(Te);if(xe===void 0)continue;const Ce=xe.buffer,Be=xe.type,ne=xe.bytesPerElement,Se=Be===s.INT||Be===s.UNSIGNED_INT||Te.gpuType===sp;if(Te.isInterleavedBufferAttribute){const Ae=Te.data,Xe=Ae.stride,Qe=Te.offset;if(Ae.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)y(me.location+et,Ae.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let et=0;et<me.locationSize;et++)S(me.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let et=0;et<me.locationSize;et++)D(me.location+et,Y/me.locationSize,Be,P,Xe*ne,(Qe+Y/me.locationSize*et)*ne,Se)}else{if(Te.isInstancedBufferAttribute){for(let Ae=0;Ae<me.locationSize;Ae++)y(me.location+Ae,Te.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ae=0;Ae<me.locationSize;Ae++)S(me.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<me.locationSize;Ae++)D(me.location+Ae,Y/me.locationSize,Be,P,Y*ne,Y/me.locationSize*Ae*ne,Se)}}else if(B!==void 0){const P=B[le];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(me.location,P);break;case 3:s.vertexAttrib3fv(me.location,P);break;case 4:s.vertexAttrib4fv(me.location,P);break;default:s.vertexAttrib1fv(me.location,P)}}}}w()}function G(){N();for(const V in r){const ee=r[V];for(const re in ee){const ue=ee[re];for(const K in ue){const O=ue[K];for(const B in O)_(O[B].object),delete O[B];delete ue[K]}}delete r[V]}}function H(V){if(r[V.id]===void 0)return;const ee=r[V.id];for(const re in ee){const ue=ee[re];for(const K in ue){const O=ue[K];for(const B in O)_(O[B].object),delete O[B];delete ue[K]}}delete r[V.id]}function z(V){for(const ee in r){const re=r[ee];for(const ue in re){const K=re[ue];if(K[V.id]===void 0)continue;const O=K[V.id];for(const B in O)_(O[B].object),delete O[B];delete K[V.id]}}}function T(V){for(const ee in r){const re=r[ee],ue=V.isInstancedMesh===!0?V.id:0,K=re[ue];if(K!==void 0){for(const O in K){const B=K[O];for(const le in B)_(B[le].object),delete B[le];delete K[O]}delete re[ue],Object.keys(re).length===0&&delete r[ee]}}}function N(){he(),d=!0,u!==l&&(u=l,h(u.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:he,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:w}}function nA(s,e,i){let r;function l(h){r=h}function u(h,_){s.drawArrays(r,h,_),i.update(_,r,1)}function d(h,_,g){g!==0&&(s.drawArraysInstanced(r,h,_,g),i.update(_,r,g))}function p(h,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(h,_,g,v){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],_[b],v[b]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,_,0,v,0,g);let b=0;for(let C=0;C<g;C++)b+=_[C]*v[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function iA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==pi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==zi&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(rt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=s.getParameter(s.MAX_SAMPLES),H=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:U,maxSamples:G,samples:H}}function aA(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Or,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||r!==0||l;return l=v,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,M){const b=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,y=s.get(g);if(!l||b===null||b.length===0||u&&!S)u?_(null):h();else{const w=u?0:r,D=w*4;let U=y.clippingState||null;m.value=U,U=_(b,v,D,M);for(let G=0;G!==D;++G)U[G]=i[G];y.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,v,M,b){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=m.value,b!==!0||S===null){const y=M+C*4,w=v.matrixWorldInverse;p.getNormalMatrix(w),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,U=M;D!==C;++D,U+=4)d.copy(g[D]).applyMatrix4(w,p),d.normal.toArray(S,U),S[U+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const sr=4,Bv=[.125,.215,.35,.446,.526,.582],Fr=20,rA=256,Zo=new ex,Iv=new Bt;let Jd=null,$d=0,eh=0,th=!1;const sA=new ae;class Hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:p=sA}=u;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ir||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ma,format:Ri,colorSpace:ks,depthBuffer:!1},l=Gv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oA(u)),this._blurMaterial=uA(u,e,i),this._ggxMaterial=lA(u,e,i)}return l}_compileMaterial(e){const i=new Wi(new Aa,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,r,l,u){const m=new hi(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,M=g.toneMapping;g.getClearColor(Iv),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new ul,new Y_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,y=!0):(S.color.copy(Iv),y=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,h[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):U===1?(m.up.set(0,0,h[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,h[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const G=this._cubeSize;Ps(l,U*G,D>2?G:0,G,G),g.setRenderTarget(l),y&&g.render(C,m),g.render(e,m)}g.toneMapping=M,g.autoClear=v,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ir||e.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(h*h-_*_),v=0+h*1.25,M=g*v,{_lodMax:b}=this,C=this._sizeLods[r],S=3*C*(r>b-sr?r-b+sr:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ps(u,S,y,3*C,2*C),l.setRenderTarget(u),l.render(p,Zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Ps(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(p,Zo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=h;const v=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Fr-1),C=u/b,S=isFinite(u)?1+Math.floor(_*C):Fr;S>Fr&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Fr}`);const y=[];let w=0;for(let z=0;z<Fr;++z){const T=z/C,N=Math.exp(-T*T/2);y.push(N),z===0?w+=N:z<S&&(w+=2*N)}for(let z=0;z<y.length;z++)y[z]=y[z]/w;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=d==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-r;const U=this._sizeLods[l],G=3*U*(l>D-sr?l-D+sr:0),H=4*(this._cubeSize-U);Ps(i,G,H,3*U,2*U),m.setRenderTarget(i),m.render(g,Zo)}}function oA(s){const e=[],i=[],r=[];let l=s;const u=s-sr+1+Bv.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-sr?m=Bv[d-s+sr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,g=1+h,v=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,C=3,S=2,y=1,w=new Float32Array(C*b*M),D=new Float32Array(S*b*M),U=new Float32Array(y*b*M);for(let H=0;H<M;H++){const z=H%3*2/3-1,T=H>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];w.set(N,C*b*H),D.set(v,S*b*H);const he=[H,H,H,H,H,H];U.set(he,y*b*H)}const G=new Aa;G.setAttribute("position",new Vi(w,C)),G.setAttribute("uv",new Vi(D,S)),G.setAttribute("faceIndex",new Vi(U,y)),r.push(new Wi(G,null)),l>sr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Gv(s,e,i){const r=new Gi(s,e,i);return r.texture.mapping=lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function lA(s,e,i){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function uA(s,e,i){const r=new Float32Array(Fr),l=new ae(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Vv(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function kv(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}class nx extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new K_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),u=new Ci({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:_a});u.uniforms.tEquirect.value=i;const d=new Wi(l,u),p=i.minFilter;return i.minFilter===zr&&(i.minFilter=wn),new mb(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function cA(s){let e=new WeakMap,i=new WeakMap,r=null;function l(v,M=!1){return v==null?null:M?d(v):u(v)}function u(v){if(v&&v.isTexture){const M=v.mapping;if(M===Td||M===Ad)if(e.has(v)){const b=e.get(v).texture;return p(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new nx(b.height);return C.fromEquirectangularTexture(s,v),e.set(v,C),v.addEventListener("dispose",h),p(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const M=v.mapping,b=M===Td||M===Ad,C=M===Ir||M===Gs;if(b||C){let S=i.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new Hv(s)),S=b?r.fromEquirectangular(v,S):r.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const w=v.image;return b&&w&&w.height>0||C&&w&&m(w)?(r===null&&(r=new Hv(s)),S=b?r.fromEquirectangular(v):r.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",_),S.texture):null}}}return v}function p(v,M){return M===Td?v.mapping=Ir:M===Ad&&(v.mapping=Gs),v}function m(v){let M=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&M++;return M===b}function h(v){const M=v.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(v){const M=v.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function fA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&rc("WebGLRenderer: "+r+" extension not supported."),l}}}function dA(s,e,i,r){const l={},u=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",d),delete l[v.id];const M=u.get(v);M&&(e.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER)}function h(g){const v=[],M=g.index,b=g.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let D=0,U=w.length;D<U;D+=3){const G=w[D+0],H=w[D+1],z=w[D+2];v.push(G,H,H,z,z,G)}}else{const w=b.array;C=b.version;for(let D=0,U=w.length/3-1;D<U;D+=3){const G=D+0,H=D+1,z=D+2;v.push(G,H,H,z,z,G)}}const S=new(b.count>=65535?q_:j_)(v,1);S.version=C;const y=u.get(g);y&&e.remove(y),u.set(g,S)}function _(g){const v=u.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&h(g)}else h(g);return u.get(g)}return{get:p,update:m,getWireframeAttribute:_}}function hA(s,e,i){let r;function l(v){r=v}let u,d;function p(v){u=v.type,d=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*d),i.update(M,r,1)}function h(v,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,v*d,b),i.update(M,r,b))}function _(v,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,b);let S=0;for(let y=0;y<b;y++)S+=M[y];i.update(S,r,1)}function g(v,M,b,C){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/d,M[y],C[y]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,C,0,b);let y=0;for(let w=0;w<b;w++)y+=M[w]*C[w];i.update(y,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function pA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(u/3);break;case s.LINES:i.lines+=p*(u/2);break;case s.LINE_STRIP:i.lines+=p*(u-1);break;case s.LINE_LOOP:i.lines+=p*u;break;case s.POINTS:i.points+=p*u;break;default:wt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function mA(s,e,i){const r=new WeakMap,l=new an;function u(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=_!==void 0?_.length:0;let v=r.get(p);if(v===void 0||v.count!==g){let he=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",he)};var M=he;v!==void 0&&v.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),S===!0&&(U=3);let G=p.attributes.position.count*U,H=1;G>e.maxTextureSize&&(H=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*H*4*g),T=new k_(z,G,H,g);T.type=zi,T.needsUpdate=!0;const N=U*4;for(let V=0;V<g;V++){const ee=y[V],re=w[V],ue=D[V],K=G*H*4*V;for(let O=0;O<ee.count;O++){const B=O*N;b===!0&&(l.fromBufferAttribute(ee,O),z[K+B+0]=l.x,z[K+B+1]=l.y,z[K+B+2]=l.z,z[K+B+3]=0),C===!0&&(l.fromBufferAttribute(re,O),z[K+B+4]=l.x,z[K+B+5]=l.y,z[K+B+6]=l.z,z[K+B+7]=0),S===!0&&(l.fromBufferAttribute(ue,O),z[K+B+8]=l.x,z[K+B+9]=l.y,z[K+B+10]=l.z,z[K+B+11]=ue.itemSize===4?l.w:1)}}v={count:g,texture:T,size:new It(G,H)},r.set(p,v),p.addEventListener("dispose",he)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function gA(s,e,i,r,l){let u=new WeakMap;function d(h){const _=l.render.frame,g=h.geometry,v=e.get(h,g);if(u.get(v)!==_&&(e.update(v),u.set(v,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==_&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),u.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;u.get(M)!==_&&(M.update(),u.set(M,_))}return v}function p(){u=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const vA={[R_]:"LINEAR_TONE_MAPPING",[C_]:"REINHARD_TONE_MAPPING",[w_]:"CINEON_TONE_MAPPING",[D_]:"ACES_FILMIC_TONE_MAPPING",[U_]:"AGX_TONE_MAPPING",[L_]:"NEUTRAL_TONE_MAPPING",[N_]:"CUSTOM_TONE_MAPPING"};function _A(s,e,i,r,l){const u=new Gi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),d=new Gi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Aa;p.setAttribute("position",new Sa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Sa([0,2,0,0,2,0],2));const m=new db({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(p,m),_=new ex(-1,1,1,-1,0,1);let g=null,v=null,M=!1,b,C=null,S=[],y=!1;this.setSize=function(w,D){u.setSize(w,D),d.setSize(w,D);for(let U=0;U<S.length;U++){const G=S[U];G.setSize&&G.setSize(w,D)}},this.setEffects=function(w){S=w,y=S.length>0&&S[0].isRenderPass===!0;const D=u.width,U=u.height;for(let G=0;G<S.length;G++){const H=S[G];H.setSize&&H.setSize(D,U)}},this.begin=function(w,D){if(M||w.toneMapping===Hi&&S.length===0)return!1;if(C=D,D!==null){const U=D.width,G=D.height;(u.width!==U||u.height!==G)&&this.setSize(U,G)}return y===!1&&w.setRenderTarget(u),b=w.toneMapping,w.toneMapping=Hi,!0},this.hasRenderPass=function(){return y},this.end=function(w,D){w.toneMapping=b,M=!0;let U=u,G=d;for(let H=0;H<S.length;H++){const z=S[H];if(z.enabled!==!1&&(z.render(w,G,U,D),z.needsSwap!==!1)){const T=U;U=G,G=T}}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,m.defines={},Tt.getTransfer(g)===zt&&(m.defines.SRGB_TRANSFER="");const H=vA[v];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(C),w.render(h,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const ix=new Dn,Kh=new il(1,1),ax=new k_,rx=new VE,sx=new K_,Xv=[],Wv=[],jv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function Ks(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=Xv[l];if(u===void 0&&(u=new Float32Array(l),Xv[l]=u),e!==0){r.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(u,p)}return u}function vn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function fc(s,e){let i=Wv[e];i===void 0&&(i=new Int32Array(e),Wv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function xA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function SA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function yA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function MA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function EA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;Yv.set(r),s.uniformMatrix2fv(this.addr,!1,Yv),_n(i,r)}}function bA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;qv.set(r),s.uniformMatrix3fv(this.addr,!1,qv),_n(i,r)}}function TA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;jv.set(r),s.uniformMatrix4fv(this.addr,!1,jv),_n(i,r)}}function AA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function wA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function DA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function LA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function OA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Kh.compareFunction=i.isReversedDepthBuffer()?hp:dp,u=Kh):u=ix,i.setTexture2D(e||u,l)}function PA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||rx,l)}function FA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||sx,l)}function zA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ax,l)}function BA(s){switch(s){case 5126:return xA;case 35664:return SA;case 35665:return yA;case 35666:return MA;case 35674:return EA;case 35675:return bA;case 35676:return TA;case 5124:case 35670:return AA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return wA;case 5125:return DA;case 36294:return NA;case 36295:return UA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return zA}}function IA(s,e){s.uniform1fv(this.addr,e)}function HA(s,e){const i=Ks(e,this.size,2);s.uniform2fv(this.addr,i)}function GA(s,e){const i=Ks(e,this.size,3);s.uniform3fv(this.addr,i)}function VA(s,e){const i=Ks(e,this.size,4);s.uniform4fv(this.addr,i)}function kA(s,e){const i=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function XA(s,e){const i=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function WA(s,e){const i=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function jA(s,e){s.uniform1iv(this.addr,e)}function qA(s,e){s.uniform2iv(this.addr,e)}function YA(s,e){s.uniform3iv(this.addr,e)}function ZA(s,e){s.uniform4iv(this.addr,e)}function KA(s,e){s.uniform1uiv(this.addr,e)}function QA(s,e){s.uniform2uiv(this.addr,e)}function JA(s,e){s.uniform3uiv(this.addr,e)}function $A(s,e){s.uniform4uiv(this.addr,e)}function e2(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));let d;this.type===s.SAMPLER_2D_SHADOW?d=Kh:d=ix;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function t2(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||rx,u[d])}function n2(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||sx,u[d])}function i2(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||ax,u[d])}function a2(s){switch(s){case 5126:return IA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return kA;case 35675:return XA;case 35676:return WA;case 5124:case 35670:return jA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return QA;case 36295:return JA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}class r2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BA(i.type)}}class s2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=a2(i.type)}}class o2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function Zv(s,e){s.seq.push(e),s.map[e.id]=e}function l2(s,e,i){const r=s.name,l=r.length;for(nh.lastIndex=0;;){const u=nh.exec(r),d=nh.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Zv(i,h===void 0?new r2(p,s,e):new s2(p,s,e));break}else{let g=i.map[p];g===void 0&&(g=new o2(p),Zv(i,g)),i=g}}}class ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);l2(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Kv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const u2=37297;let c2=0;function f2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Qv=new ht;function d2(s){Tt._getMatrix(Qv,Tt.workingColorSpace,s);const e=`mat3( ${Qv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+f2(s.getShaderSource(e),p)}else return u}function h2(s,e){const i=d2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const p2={[R_]:"Linear",[C_]:"Reinhard",[w_]:"Cineon",[D_]:"ACESFilmic",[U_]:"AgX",[L_]:"Neutral",[N_]:"Custom"};function m2(s,e){const i=p2[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ju=new ae;function g2(){Tt.getLuminanceCoefficients(ju);const s=ju.x.toFixed(4),e=ju.y.toFixed(4),i=ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function _2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function x2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let p=1;u.type===s.FLOAT_MAT2&&(p=2),u.type===s.FLOAT_MAT3&&(p=3),u.type===s.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function Jo(s){return s!==""}function $v(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(s){return s.replace(S2,M2)}const y2=new Map;function M2(s,e){let i=pt[e];if(i===void 0){const r=y2.get(e);if(r!==void 0)i=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qh(i)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(s){return s.replace(E2,b2)}function b2(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function n_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const T2={[Zu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function A2(s){return T2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R2={[Ir]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function C2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":R2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const w2={[Gs]:"ENVMAP_MODE_REFRACTION"};function D2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":w2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N2={[A_]:"ENVMAP_BLENDING_MULTIPLY",[SE]:"ENVMAP_BLENDING_MIX",[yE]:"ENVMAP_BLENDING_ADD"};function U2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":N2[s.combine]||"ENVMAP_BLENDING_NONE"}function L2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function O2(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=A2(i),h=C2(i),_=D2(i),g=U2(i),v=L2(i),M=v2(i),b=_2(u),C=l.createProgram();let S,y,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Jo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Jo).join(`
`),y.length>0&&(y+=`
`)):(S=[n_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),y=[n_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?m2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,h2("linearToOutputTexel",i.outputColorSpace),g2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),d=Qh(d),d=$v(d,i),d=e_(d,i),p=Qh(p),p=$v(p,i),p=e_(p,i),d=t_(d),p=t_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=w+S+d,U=w+y+p,G=Kv(l,l.VERTEX_SHADER,D),H=Kv(l,l.FRAGMENT_SHADER,U);l.attachShader(C,G),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(V){if(s.debug.checkShaderErrors){const ee=l.getProgramInfoLog(C)||"",re=l.getShaderInfoLog(G)||"",ue=l.getShaderInfoLog(H)||"",K=ee.trim(),O=re.trim(),B=ue.trim();let le=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,G,H);else{const Te=Jv(l,G,"vertex"),P=Jv(l,H,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+Te+`
`+P)}else K!==""?rt("WebGLProgram: Program Info Log:",K):(O===""||B==="")&&(me=!1);me&&(V.diagnostics={runnable:le,programLog:K,vertexShader:{log:O,prefix:S},fragmentShader:{log:B,prefix:y}})}l.deleteShader(G),l.deleteShader(H),T=new ec(l,C),N=x2(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,u2)),he},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=H,this}let P2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new z2(e),i.set(e,r)),r}}class z2{constructor(e){this.id=P2++,this.code=e,this.usedTimes=0}}function B2(s,e,i,r,l,u){const d=new X_,p=new F2,m=new Set,h=[],_=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,N,he,V,ee){const re=V.fog,ue=ee.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=e.get(T.envMap||K,O),le=B&&B.mapping===lc?B.image.height:null,me=M[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const Te=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,P=Te!==void 0?Te.length:0;let Y=0;ue.morphAttributes.position!==void 0&&(Y=1),ue.morphAttributes.normal!==void 0&&(Y=2),ue.morphAttributes.color!==void 0&&(Y=3);let xe,Ce,Be,ne;if(me){const bt=Fi[me];xe=bt.vertexShader,Ce=bt.fragmentShader}else xe=T.vertexShader,Ce=T.fragmentShader,p.update(T),Be=p.getVertexShaderID(T),ne=p.getFragmentShaderID(T);const Se=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Xe=ee.isInstancedMesh===!0,Qe=ee.isBatchedMesh===!0,et=!!T.map,Jt=!!T.matcap,_t=!!B,mt=!!T.aoMap,Dt=!!T.lightMap,lt=!!T.bumpMap,Kt=!!T.normalMap,k=!!T.displacementMap,jt=!!T.emissiveMap,Et=!!T.metalnessMap,Ut=!!T.roughnessMap,qe=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ge=T.sheen>0,ye=T.transmission>0,fe=qe&&!!T.anisotropyMap,We=L&&!!T.clearcoatMap,De=L&&!!T.clearcoatNormalMap,Ke=L&&!!T.clearcoatRoughnessMap,tt=q&&!!T.iridescenceMap,be=q&&!!T.iridescenceThicknessMap,Me=ge&&!!T.sheenColorMap,Pe=ge&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Fe=!!T.specularColorMap,ct=!!T.specularIntensityMap,j=ye&&!!T.transmissionMap,we=ye&&!!T.thicknessMap,Re=!!T.gradientMap,ze=!!T.alphaMap,Ee=T.alphaTest>0,ce=!!T.alphaHash,He=!!T.extensions;let it=Hi;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ot={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:xe,fragmentShader:Ce,defines:T.defines,customVertexShaderID:Be,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&ee._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ee.instanceColor!==null,instancingMorph:Xe&&ee.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ks,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:Jt,envMap:_t,envMapMode:_t&&B.mapping,envMapCubeUVHeight:le,aoMap:mt,lightMap:Dt,bumpMap:lt,normalMap:Kt,displacementMap:k,emissiveMap:jt,normalMapObjectSpace:Kt&&T.normalMapType===TE,normalMapTangentSpace:Kt&&T.normalMapType===bE,metalnessMap:Et,roughnessMap:Ut,anisotropy:qe,anisotropyMap:fe,clearcoat:L,clearcoatMap:We,clearcoatNormalMap:De,clearcoatRoughnessMap:Ke,dispersion:E,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:Me,sheenRoughnessMap:Pe,specularMap:Oe,specularColorMap:Fe,specularIntensityMap:ct,transmission:ye,transmissionMap:j,thicknessMap:we,gradientMap:Re,opaque:T.transparent===!1&&T.blending===Bs&&T.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ee,alphaHash:ce,combine:T.combine,mapUv:et&&b(T.map.channel),aoMapUv:mt&&b(T.aoMap.channel),lightMapUv:Dt&&b(T.lightMap.channel),bumpMapUv:lt&&b(T.bumpMap.channel),normalMapUv:Kt&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:jt&&b(T.emissiveMap.channel),metalnessMapUv:Et&&b(T.metalnessMap.channel),roughnessMapUv:Ut&&b(T.roughnessMap.channel),anisotropyMapUv:fe&&b(T.anisotropyMap.channel),clearcoatMapUv:We&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(T.sheenRoughnessMap.channel),specularMapUv:Oe&&b(T.specularMap.channel),specularColorMapUv:Fe&&b(T.specularColorMap.channel),specularIntensityMapUv:ct&&b(T.specularIntensityMap.channel),transmissionMapUv:j&&b(T.transmissionMap.channel),thicknessMapUv:we&&b(T.thicknessMap.channel),alphaMapUv:ze&&b(T.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Kt||qe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ue.attributes.uv&&(et||ze),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ue.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&he.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===zt,decodeVideoTextureEmissive:jt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=m.has(1),Ot.vertexUv2s=m.has(2),Ot.vertexUv3s=m.has(3),m.clear(),Ot}function S(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const he in T.defines)N.push(he),N.push(T.defines[he]);return T.isRawShaderMaterial===!1&&(y(N,T),w(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function y(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function w(T,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),T.push(d.mask)}function D(T){const N=M[T.type];let he;if(N){const V=Fi[N];he=ub.clone(V.uniforms)}else he=T.uniforms;return he}function U(T,N){let he=_.get(N);return he!==void 0?++he.usedTimes:(he=new O2(s,N,T,l),h.push(he),_.set(N,he)),he}function G(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function H(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:D,acquireProgram:U,releaseProgram:G,releaseShaderCache:H,programs:h,dispose:z}}function I2(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function H2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function i_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function a_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function p(v,M,b,C,S,y){let w=s[e];return w===void 0?(w={id:v.id,object:v,geometry:M,material:b,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:S,group:y},s[e]=w):(w.id=v.id,w.object=v,w.geometry=M,w.material=b,w.materialVariant=d(v),w.groupOrder=C,w.renderOrder=v.renderOrder,w.z=S,w.group=y),e++,w}function m(v,M,b,C,S,y){const w=p(v,M,b,C,S,y);b.transmission>0?r.push(w):b.transparent===!0?l.push(w):i.push(w)}function h(v,M,b,C,S,y){const w=p(v,M,b,C,S,y);b.transmission>0?r.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function _(v,M){i.length>1&&i.sort(v||H2),r.length>1&&r.sort(M||i_),l.length>1&&l.sort(M||i_)}function g(){for(let v=e,M=s.length;v<M;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:h,finish:g,sort:_}}function G2(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new a_,s.set(r,[d])):l>=u.length?(d=new a_,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function V2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Bt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=i,i}}}function k2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let X2=0;function W2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j2(s){const e=new V2,i=k2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const l=new ae,u=new hn,d=new hn;function p(h){let _=0,g=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,C=0,S=0,y=0,w=0,D=0,U=0,G=0,H=0,z=0;h.sort(W2);for(let N=0,he=h.length;N<he;N++){const V=h[N],ee=V.color,re=V.intensity,ue=V.distance;let K=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Vs?K=V.shadow.map.texture:K=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=ee.r*re,g+=ee.g*re,v+=ee.b*re;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],re);z++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,le=i.get(V);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,r.directionalShadow[M]=le,r.directionalShadowMap[M]=K,r.directionalShadowMatrix[M]=V.shadow.matrix,w++}r.directional[M]=O,M++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(ee).multiplyScalar(re),O.distance=ue,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[C]=O;const B=V.shadow;if(V.map&&(r.spotLightMap[G]=V.map,G++,B.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[C]=B.matrix,V.castShadow){const le=i.get(V);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,r.spotShadow[C]=le,r.spotShadowMap[C]=K,U++}C++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(ee).multiplyScalar(re),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=O,S++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const B=V.shadow,le=i.get(V);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,le.shadowCameraNear=B.camera.near,le.shadowCameraFar=B.camera.far,r.pointShadow[b]=le,r.pointShadowMap[b]=K,r.pointShadowMatrix[b]=V.shadow.matrix,D++}r.point[b]=O,b++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(re),O.groundColor.copy(V.groundColor).multiplyScalar(re),r.hemi[y]=O,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==w||T.numPointShadows!==D||T.numSpotShadows!==U||T.numSpotMaps!==G||T.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=b,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=w,T.numPointShadows=D,T.numSpotShadows=U,T.numSpotMaps=G,T.numLightProbes=z,r.version=X2++)}function m(h,_){let g=0,v=0,M=0,b=0,C=0;const S=_.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){const D=h[y];if(D.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),g++}else if(D.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),d.identity(),u.copy(D.matrixWorld),u.premultiply(S),d.extractRotation(u),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function r_(s){const e=new j2(s),i=[],r=[];function l(_){h.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function p(){e.setup(i)}function m(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function q2(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new r_(s),e.set(l,[p])):u>=d.length?(p=new r_(s),d.push(p)):p=d[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const Y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K2=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],Q2=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],s_=new hn,Ko=new ae,ih=new ae;function J2(s,e,i){let r=new Z_;const l=new It,u=new It,d=new an,p=new hb,m=new pb,h={},_=i.maxTextureSize,g={[lr]:Xn,[Xn]:lr,[ga]:ga},v=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Y2,fragmentShader:Z2}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new Aa;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wi(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let y=this.type;this.render=function(H,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;this.type===tE&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zu);const N=s.getRenderTarget(),he=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(_a),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const re=y!==this.type;re&&z.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(K=>K.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,K=H.length;ue<K;ue++){const O=H[ue],B=O.shadow;if(B===void 0){rt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const le=B.getFrameExtents();l.multiply(le),u.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/le.x),l.x=u.x*le.x,B.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/le.y),l.y=u.y*le.y,B.mapSize.y=u.y));const me=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||re===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Qo){if(O.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Gi(l.x,l.y,{format:Vs,type:Ma,minFilter:wn,magFilter:wn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new il(l.x,l.y,zi),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ea,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn}else O.isPointLight?(B.map=new nx(l.x),B.map.depthTexture=new ob(l.x,Xi)):(B.map=new Gi(l.x,l.y),B.map.depthTexture=new il(l.x,l.y,Xi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ea,this.type===Zu?(B.map.depthTexture.compareFunction=me?hp:dp,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn);B.camera.updateProjectionMatrix()}const Te=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Te;P++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,P),s.clear();else{P===0&&(s.setRenderTarget(B.map),s.clear());const Y=B.getViewport(P);d.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),ee.viewport(d)}if(O.isPointLight){const Y=B.camera,xe=B.matrix,Ce=O.distance||Y.far;Ce!==Y.far&&(Y.far=Ce,Y.updateProjectionMatrix()),Ko.setFromMatrixPosition(O.matrixWorld),Y.position.copy(Ko),ih.copy(Y.position),ih.add(K2[P]),Y.up.copy(Q2[P]),Y.lookAt(ih),Y.updateMatrixWorld(),xe.makeTranslation(-Ko.x,-Ko.y,-Ko.z),s_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(s_,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(O);r=B.getFrustum(),U(z,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Qo&&w(B,T),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(N,he,V)};function w(H,z){const T=e.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Gi(l.x,l.y,{format:Vs,type:Ma})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(z,null,T,v,C,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(z,null,T,M,C,null)}function D(H,z,T,N){let he=null;const V=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)he=V;else if(he=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ee=he.uuid,re=z.uuid;let ue=h[ee];ue===void 0&&(ue={},h[ee]=ue);let K=ue[re];K===void 0&&(K=he.clone(),ue[re]=K,z.addEventListener("dispose",G)),he=K}if(he.visible=z.visible,he.wireframe=z.wireframe,N===Qo?he.side=z.shadowSide!==null?z.shadowSide:z.side:he.side=z.shadowSide!==null?z.shadowSide:g[z.side],he.alphaMap=z.alphaMap,he.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,he.map=z.map,he.clipShadows=z.clipShadows,he.clippingPlanes=z.clippingPlanes,he.clipIntersection=z.clipIntersection,he.displacementMap=z.displacementMap,he.displacementScale=z.displacementScale,he.displacementBias=z.displacementBias,he.wireframeLinewidth=z.wireframeLinewidth,he.linewidth=z.linewidth,T.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const ee=s.properties.get(he);ee.light=T}return he}function U(H,z,T,N,he){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&he===Qo)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const re=e.update(H),ue=H.material;if(Array.isArray(ue)){const K=re.groups;for(let O=0,B=K.length;O<B;O++){const le=K[O],me=ue[le.materialIndex];if(me&&me.visible){const Te=D(H,me,N,he);H.onBeforeShadow(s,H,z,T,re,Te,le),s.renderBufferDirect(T,null,re,Te,H,le),H.onAfterShadow(s,H,z,T,re,Te,le)}}}else if(ue.visible){const K=D(H,ue,N,he);H.onBeforeShadow(s,H,z,T,re,K,null),s.renderBufferDirect(T,null,re,K,H,null),H.onAfterShadow(s,H,z,T,re,K,null)}}const ee=H.children;for(let re=0,ue=ee.length;re<ue;re++)U(ee[re],z,T,N,he)}function G(H){H.target.removeEventListener("dispose",G);for(const T in h){const N=h[T],he=H.target.uuid;he in N&&(N[he].dispose(),delete N[he])}}}function $2(s,e){function i(){let j=!1;const we=new an;let Re=null;const ze=new an(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!j&&(s.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){j=Ee},setClear:function(Ee,ce,He,it,Ot){Ot===!0&&(Ee*=it,ce*=it,He*=it),we.set(Ee,ce,He,it),ze.equals(we)===!1&&(s.clearColor(Ee,ce,He,it),ze.copy(we))},reset:function(){j=!1,Re=null,ze.set(-1,0,0,0)}}}function r(){let j=!1,we=!1,Re=null,ze=null,Ee=null;return{setReversed:function(ce){if(we!==ce){const He=e.get("EXT_clip_control");ce?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),we=ce;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(ce){ce?Se(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(ce){Re!==ce&&!j&&(s.depthMask(ce),Re=ce)},setFunc:function(ce){if(we&&(ce=PE[ce]),ze!==ce){switch(ce){case lh:s.depthFunc(s.NEVER);break;case uh:s.depthFunc(s.ALWAYS);break;case ch:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case fh:s.depthFunc(s.EQUAL);break;case dh:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case ph:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=ce}},setLocked:function(ce){j=ce},setClear:function(ce){Ee!==ce&&(Ee=ce,we&&(ce=1-ce),s.clearDepth(ce))},reset:function(){j=!1,Re=null,ze=null,Ee=null,we=!1}}}function l(){let j=!1,we=null,Re=null,ze=null,Ee=null,ce=null,He=null,it=null,Ot=null;return{setTest:function(bt){j||(bt?Se(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(bt){we!==bt&&!j&&(s.stencilMask(bt),we=bt)},setFunc:function(bt,Nn,gi){(Re!==bt||ze!==Nn||Ee!==gi)&&(s.stencilFunc(bt,Nn,gi),Re=bt,ze=Nn,Ee=gi)},setOp:function(bt,Nn,gi){(ce!==bt||He!==Nn||it!==gi)&&(s.stencilOp(bt,Nn,gi),ce=bt,He=Nn,it=gi)},setLocked:function(bt){j=bt},setClear:function(bt){Ot!==bt&&(s.clearStencil(bt),Ot=bt)},reset:function(){j=!1,we=null,Re=null,ze=null,Ee=null,ce=null,He=null,it=null,Ot=null}}}const u=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let _={},g={},v=new WeakMap,M=[],b=null,C=!1,S=null,y=null,w=null,D=null,U=null,G=null,H=null,z=new Bt(0,0,0),T=0,N=!1,he=null,V=null,ee=null,re=null,ue=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(le)[1]),O=B>=1):le.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),O=B>=2);let me=null,Te={};const P=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),xe=new an().fromArray(P),Ce=new an().fromArray(Y);function Be(j,we,Re,ze){const Ee=new Uint8Array(4),ce=s.createTexture();s.bindTexture(j,ce),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Re;He++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(we+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ce}const ne={};ne[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),d.setFunc(Hs),lt(!1),Kt(dv),Se(s.CULL_FACE),mt(_a);function Se(j){_[j]!==!0&&(s.enable(j),_[j]=!0)}function Ae(j){_[j]!==!1&&(s.disable(j),_[j]=!1)}function Xe(j,we){return g[j]!==we?(s.bindFramebuffer(j,we),g[j]=we,j===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=we),j===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(j,we){let Re=M,ze=!1;if(j){Re=v.get(we),Re===void 0&&(Re=[],v.set(we,Re));const Ee=j.textures;if(Re.length!==Ee.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,He=Ee.length;ce<He;ce++)Re[ce]=s.COLOR_ATTACHMENT0+ce;Re.length=Ee.length,ze=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,ze=!0);ze&&s.drawBuffers(Re)}function et(j){return b!==j?(s.useProgram(j),b=j,!0):!1}const Jt={[Pr]:s.FUNC_ADD,[iE]:s.FUNC_SUBTRACT,[aE]:s.FUNC_REVERSE_SUBTRACT};Jt[rE]=s.MIN,Jt[sE]=s.MAX;const _t={[oE]:s.ZERO,[lE]:s.ONE,[uE]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[mE]:s.SRC_ALPHA_SATURATE,[hE]:s.DST_COLOR,[fE]:s.DST_ALPHA,[cE]:s.ONE_MINUS_SRC_COLOR,[oh]:s.ONE_MINUS_SRC_ALPHA,[pE]:s.ONE_MINUS_DST_COLOR,[dE]:s.ONE_MINUS_DST_ALPHA,[gE]:s.CONSTANT_COLOR,[vE]:s.ONE_MINUS_CONSTANT_COLOR,[_E]:s.CONSTANT_ALPHA,[xE]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(j,we,Re,ze,Ee,ce,He,it,Ot,bt){if(j===_a){C===!0&&(Ae(s.BLEND),C=!1);return}if(C===!1&&(Se(s.BLEND),C=!0),j!==nE){if(j!==S||bt!==N){if((y!==Pr||U!==Pr)&&(s.blendEquation(s.FUNC_ADD),y=Pr,U=Pr),bt)switch(j){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hv:s.blendFunc(s.ONE,s.ONE);break;case pv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",j);break}else switch(j){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pv:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",j);break}w=null,D=null,G=null,H=null,z.set(0,0,0),T=0,S=j,N=bt}return}Ee=Ee||we,ce=ce||Re,He=He||ze,(we!==y||Ee!==U)&&(s.blendEquationSeparate(Jt[we],Jt[Ee]),y=we,U=Ee),(Re!==w||ze!==D||ce!==G||He!==H)&&(s.blendFuncSeparate(_t[Re],_t[ze],_t[ce],_t[He]),w=Re,D=ze,G=ce,H=He),(it.equals(z)===!1||Ot!==T)&&(s.blendColor(it.r,it.g,it.b,Ot),z.copy(it),T=Ot),S=j,N=!1}function Dt(j,we){j.side===ga?Ae(s.CULL_FACE):Se(s.CULL_FACE);let Re=j.side===Xn;we&&(Re=!Re),lt(Re),j.blending===Bs&&j.transparent===!1?mt(_a):mt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const ze=j.stencilWrite;p.setTest(ze),ze&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),jt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(j){he!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),he=j)}function Kt(j){j!==$M?(Se(s.CULL_FACE),j!==V&&(j===dv?s.cullFace(s.BACK):j===eE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),V=j}function k(j){j!==ee&&(O&&s.lineWidth(j),ee=j)}function jt(j,we,Re){j?(Se(s.POLYGON_OFFSET_FILL),(re!==we||ue!==Re)&&(re=we,ue=Re,d.getReversed()&&(we=-we),s.polygonOffset(we,Re))):Ae(s.POLYGON_OFFSET_FILL)}function Et(j){j?Se(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function Ut(j){j===void 0&&(j=s.TEXTURE0+K-1),me!==j&&(s.activeTexture(j),me=j)}function qe(j,we,Re){Re===void 0&&(me===null?Re=s.TEXTURE0+K-1:Re=me);let ze=Te[Re];ze===void 0&&(ze={type:void 0,texture:void 0},Te[Re]=ze),(ze.type!==j||ze.texture!==we)&&(me!==Re&&(s.activeTexture(Re),me=Re),s.bindTexture(j,we||ne[j]),ze.type=j,ze.texture=we)}function L(){const j=Te[me];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(j){wt("WebGLState:",j)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(j){wt("WebGLState:",j)}}function ge(){try{s.texSubImage2D(...arguments)}catch(j){wt("WebGLState:",j)}}function ye(){try{s.texSubImage3D(...arguments)}catch(j){wt("WebGLState:",j)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(j){wt("WebGLState:",j)}}function We(){try{s.compressedTexSubImage3D(...arguments)}catch(j){wt("WebGLState:",j)}}function De(){try{s.texStorage2D(...arguments)}catch(j){wt("WebGLState:",j)}}function Ke(){try{s.texStorage3D(...arguments)}catch(j){wt("WebGLState:",j)}}function tt(){try{s.texImage2D(...arguments)}catch(j){wt("WebGLState:",j)}}function be(){try{s.texImage3D(...arguments)}catch(j){wt("WebGLState:",j)}}function Me(j){xe.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),xe.copy(j))}function Pe(j){Ce.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Ce.copy(j))}function Oe(j,we){let Re=h.get(we);Re===void 0&&(Re=new WeakMap,h.set(we,Re));let ze=Re.get(j);ze===void 0&&(ze=s.getUniformBlockIndex(we,j.name),Re.set(j,ze))}function Fe(j,we){const ze=h.get(we).get(j);m.get(we)!==ze&&(s.uniformBlockBinding(we,ze,j.__bindingPointIndex),m.set(we,ze))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},me=null,Te={},g={},v=new WeakMap,M=[],b=null,C=!1,S=null,y=null,w=null,D=null,U=null,G=null,H=null,z=new Bt(0,0,0),T=0,N=!1,he=null,V=null,ee=null,re=null,ue=null,xe.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:Se,disable:Ae,bindFramebuffer:Xe,drawBuffers:Qe,useProgram:et,setBlending:mt,setMaterial:Dt,setFlipSided:lt,setCullFace:Kt,setLineWidth:k,setPolygonOffset:jt,setScissorTest:Et,activeTexture:Ut,bindTexture:qe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:tt,texImage3D:be,updateUBOMapping:Oe,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:Ke,texSubImage2D:ge,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:We,scissor:Me,viewport:Pe,reset:ct}}function eR(s,e,i,r,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,_=new WeakMap;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):ac("canvas")}function C(L,E,q){let ge=1;const ye=qe(L);if((ye.width>q||ye.height>q)&&(ge=q/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(ge*ye.width),We=Math.floor(ge*ye.height);g===void 0&&(g=b(fe,We));const De=E?b(fe,We):g;return De.width=fe,De.height=We,De.getContext("2d").drawImage(L,0,0,fe,We),rt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+We+")."),De}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,E,q,ge,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=E;if(E===s.RED&&(q===s.FLOAT&&(fe=s.R32F),q===s.HALF_FLOAT&&(fe=s.R16F),q===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.R8UI),q===s.UNSIGNED_SHORT&&(fe=s.R16UI),q===s.UNSIGNED_INT&&(fe=s.R32UI),q===s.BYTE&&(fe=s.R8I),q===s.SHORT&&(fe=s.R16I),q===s.INT&&(fe=s.R32I)),E===s.RG&&(q===s.FLOAT&&(fe=s.RG32F),q===s.HALF_FLOAT&&(fe=s.RG16F),q===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),q===s.UNSIGNED_INT&&(fe=s.RG32UI),q===s.BYTE&&(fe=s.RG8I),q===s.SHORT&&(fe=s.RG16I),q===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),q===s.UNSIGNED_INT&&(fe=s.RGB32UI),q===s.BYTE&&(fe=s.RGB8I),q===s.SHORT&&(fe=s.RGB16I),q===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),q===s.BYTE&&(fe=s.RGBA8I),q===s.SHORT&&(fe=s.RGBA16I),q===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const We=ye?nc:Tt.getTransfer(ge);q===s.FLOAT&&(fe=s.RGBA32F),q===s.HALF_FLOAT&&(fe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(fe=We===zt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(L,E){let q;return L?E===null||E===Xi||E===nl?q=s.DEPTH24_STENCIL8:E===zi?q=s.DEPTH32F_STENCIL8:E===tl&&(q=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===nl?q=s.DEPTH_COMPONENT24:E===zi?q=s.DEPTH_COMPONENT32F:E===tl&&(q=s.DEPTH_COMPONENT16),q}function G(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){const E=L.target;E.removeEventListener("dispose",H),T(E),E.isVideoTexture&&_.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),he(E)}function T(L){const E=r.get(L);if(E.__webglInit===void 0)return;const q=L.source,ge=v.get(q);if(ge){const ye=ge[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&N(L),Object.keys(ge).length===0&&v.delete(q)}r.remove(L)}function N(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const q=L.source,ge=v.get(q);delete ge[E.__cacheKey],d.memory.textures--}function he(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ye=0;ye<E.__webglFramebuffer[ge].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[ge][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let ge=0,ye=q.length;ge<ye;ge++){const fe=r.get(q[ge]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(q[ge])}r.remove(L)}let V=0;function ee(){V=0}function re(){const L=V;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function ue(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function K(L,E){const q=r.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const ge=L.image;if(ge===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function O(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ne(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function B(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ne(q,L,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function le(L,E){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){Se(q,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const me={[mh]:s.REPEAT,[va]:s.CLAMP_TO_EDGE,[gh]:s.MIRRORED_REPEAT},Te={[Tn]:s.NEAREST,[ME]:s.NEAREST_MIPMAP_NEAREST,[bu]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[Rd]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},P={[AE]:s.NEVER,[NE]:s.ALWAYS,[RE]:s.LESS,[dp]:s.LEQUAL,[CE]:s.EQUAL,[hp]:s.GEQUAL,[wE]:s.GREATER,[DE]:s.NOTEQUAL};function Y(L,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Rd||E.magFilter===bu||E.magFilter===zr||E.minFilter===wn||E.minFilter===Rd||E.minFilter===bu||E.minFilter===zr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,me[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,me[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,me[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Te[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==bu&&E.minFilter!==zr||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xe(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",H));const ge=E.source;let ye=v.get(ge);ye===void 0&&(ye={},v.set(ge,ye));const fe=ue(E);if(fe!==L.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,q=!0),ye[fe].usedTimes++;const We=ye[L.__cacheKey];We!==void 0&&(ye[L.__cacheKey].usedTimes--,We.usedTimes===0&&N(E)),L.__cacheKey=fe,L.__webglTexture=ye[fe].texture}return q}function Ce(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Be(L,E,q,ge){const fe=L.updateRanges;if(fe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,ge,E.data);else{fe.sort((be,Me)=>be.start-Me.start);let We=0;for(let be=1;be<fe.length;be++){const Me=fe[We],Pe=fe[be],Oe=Me.start+Me.count,Fe=Ce(Pe.start,E.width,4),ct=Ce(Me.start,E.width,4);Pe.start<=Oe+1&&Fe===ct&&Ce(Pe.start+Pe.count-1,E.width,4)===Fe?Me.count=Math.max(Me.count,Pe.start+Pe.count-Me.start):(++We,fe[We]=Pe)}fe.length=We+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Ke=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let be=0,Me=fe.length;be<Me;be++){const Pe=fe[be],Oe=Math.floor(Pe.start/4),Fe=Math.ceil(Pe.count/4),ct=Oe%E.width,j=Math.floor(Oe/E.width),we=Fe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),i.texSubImage2D(s.TEXTURE_2D,0,ct,j,we,Re,q,ge,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function ne(L,E,q){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const ye=xe(L,E),fe=E.source;i.bindTexture(ge,L.__webglTexture,s.TEXTURE0+q);const We=r.get(fe);if(fe.version!==We.__version||ye===!0){i.activeTexture(s.TEXTURE0+q);const De=Tt.getPrimaries(Tt.workingColorSpace),Ke=E.colorSpace===rr?null:Tt.getPrimaries(E.colorSpace),tt=E.colorSpace===rr||De===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=C(E.image,!1,l.maxTextureSize);be=Ut(E,be);const Me=u.convert(E.format,E.colorSpace),Pe=u.convert(E.type);let Oe=D(E.internalFormat,Me,Pe,E.colorSpace,E.isVideoTexture);Y(ge,E);let Fe;const ct=E.mipmaps,j=E.isVideoTexture!==!0,we=We.__version===void 0||ye===!0,Re=fe.dataReady,ze=G(E,be);if(E.isDepthTexture)Oe=U(E.format===Br,E.type),we&&(j?i.texStorage2D(s.TEXTURE_2D,1,Oe,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,Oe,be.width,be.height,0,Me,Pe,null));else if(E.isDataTexture)if(ct.length>0){j&&we&&i.texStorage2D(s.TEXTURE_2D,ze,Oe,ct[0].width,ct[0].height);for(let Ee=0,ce=ct.length;Ee<ce;Ee++)Fe=ct[Ee],j?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Me,Pe,Fe.data):i.texImage2D(s.TEXTURE_2D,Ee,Oe,Fe.width,Fe.height,0,Me,Pe,Fe.data);E.generateMipmaps=!1}else j?(we&&i.texStorage2D(s.TEXTURE_2D,ze,Oe,be.width,be.height),Re&&Be(E,be,Me,Pe)):i.texImage2D(s.TEXTURE_2D,0,Oe,be.width,be.height,0,Me,Pe,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Oe,ct[0].width,ct[0].height,be.depth);for(let Ee=0,ce=ct.length;Ee<ce;Ee++)if(Fe=ct[Ee],E.format!==Ri)if(Me!==null)if(j){if(Re)if(E.layerUpdates.size>0){const He=zv(Fe.width,Fe.height,E.format,E.type);for(const it of E.layerUpdates){const Ot=Fe.data.subarray(it*He/Fe.data.BYTES_PER_ELEMENT,(it+1)*He/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,it,Fe.width,Fe.height,1,Me,Ot)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,be.depth,Me,Fe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Oe,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,be.depth,Me,Pe,Fe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Oe,Fe.width,Fe.height,be.depth,0,Me,Pe,Fe.data)}else{j&&we&&i.texStorage2D(s.TEXTURE_2D,ze,Oe,ct[0].width,ct[0].height);for(let Ee=0,ce=ct.length;Ee<ce;Ee++)Fe=ct[Ee],E.format!==Ri?Me!==null?j?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Me,Fe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Oe,Fe.width,Fe.height,0,Fe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Me,Pe,Fe.data):i.texImage2D(s.TEXTURE_2D,Ee,Oe,Fe.width,Fe.height,0,Me,Pe,Fe.data)}else if(E.isDataArrayTexture)if(j){if(we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Oe,be.width,be.height,be.depth),Re)if(E.layerUpdates.size>0){const Ee=zv(be.width,be.height,E.format,E.type);for(const ce of E.layerUpdates){const He=be.data.subarray(ce*Ee/be.data.BYTES_PER_ELEMENT,(ce+1)*Ee/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,be.width,be.height,1,Me,Pe,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Me,Pe,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,be.width,be.height,be.depth,0,Me,Pe,be.data);else if(E.isData3DTexture)j?(we&&i.texStorage3D(s.TEXTURE_3D,ze,Oe,be.width,be.height,be.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Me,Pe,be.data)):i.texImage3D(s.TEXTURE_3D,0,Oe,be.width,be.height,be.depth,0,Me,Pe,be.data);else if(E.isFramebufferTexture){if(we)if(j)i.texStorage2D(s.TEXTURE_2D,ze,Oe,be.width,be.height);else{let Ee=be.width,ce=be.height;for(let He=0;He<ze;He++)i.texImage2D(s.TEXTURE_2D,He,Oe,Ee,ce,0,Me,Pe,null),Ee>>=1,ce>>=1}}else if(ct.length>0){if(j&&we){const Ee=qe(ct[0]);i.texStorage2D(s.TEXTURE_2D,ze,Oe,Ee.width,Ee.height)}for(let Ee=0,ce=ct.length;Ee<ce;Ee++)Fe=ct[Ee],j?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Me,Pe,Fe):i.texImage2D(s.TEXTURE_2D,Ee,Oe,Me,Pe,Fe);E.generateMipmaps=!1}else if(j){if(we){const Ee=qe(be);i.texStorage2D(s.TEXTURE_2D,ze,Oe,Ee.width,Ee.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Pe,be)}else i.texImage2D(s.TEXTURE_2D,0,Oe,Me,Pe,be);S(E)&&y(ge),We.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,q){if(E.image.length!==6)return;const ge=xe(L,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const fe=r.get(ye);if(ye.version!==fe.__version||ge===!0){i.activeTexture(s.TEXTURE0+q);const We=Tt.getPrimaries(Tt.workingColorSpace),De=E.colorSpace===rr?null:Tt.getPrimaries(E.colorSpace),Ke=E.colorSpace===rr||We===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!tt&&!be?Me[ce]=C(E.image[ce],!0,l.maxCubemapSize):Me[ce]=be?E.image[ce].image:E.image[ce],Me[ce]=Ut(E,Me[ce]);const Pe=Me[0],Oe=u.convert(E.format,E.colorSpace),Fe=u.convert(E.type),ct=D(E.internalFormat,Oe,Fe,E.colorSpace),j=E.isVideoTexture!==!0,we=fe.__version===void 0||ge===!0,Re=ye.dataReady;let ze=G(E,Pe);Y(s.TEXTURE_CUBE_MAP,E);let Ee;if(tt){j&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ct,Pe.width,Pe.height);for(let ce=0;ce<6;ce++){Ee=Me[ce].mipmaps;for(let He=0;He<Ee.length;He++){const it=Ee[He];E.format!==Ri?Oe!==null?j?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He,0,0,it.width,it.height,Oe,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He,ct,it.width,it.height,0,it.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He,0,0,it.width,it.height,Oe,Fe,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He,ct,it.width,it.height,0,Oe,Fe,it.data)}}}else{if(Ee=E.mipmaps,j&&we){Ee.length>0&&ze++;const ce=qe(Me[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ct,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(be){j?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,Oe,Fe,Me[ce].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,Me[ce].width,Me[ce].height,0,Oe,Fe,Me[ce].data);for(let He=0;He<Ee.length;He++){const Ot=Ee[He].image[ce].image;j?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He+1,0,0,Ot.width,Ot.height,Oe,Fe,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He+1,ct,Ot.width,Ot.height,0,Oe,Fe,Ot.data)}}else{j?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Oe,Fe,Me[ce]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,Oe,Fe,Me[ce]);for(let He=0;He<Ee.length;He++){const it=Ee[He];j?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He+1,0,0,Oe,Fe,it.image[ce]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He+1,ct,Oe,Fe,it.image[ce])}}}S(E)&&y(s.TEXTURE_CUBE_MAP),fe.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ae(L,E,q,ge,ye,fe){const We=u.convert(q.format,q.colorSpace),De=u.convert(q.type),Ke=D(q.internalFormat,We,De,q.colorSpace),tt=r.get(E),be=r.get(q);if(be.__renderTarget=E,!tt.__hasExternalTextures){const Me=Math.max(1,E.width>>fe),Pe=Math.max(1,E.height>>fe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,fe,Ke,Me,Pe,E.depth,0,We,De,null):i.texImage2D(ye,fe,Ke,Me,Pe,0,We,De,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),jt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ye,be.__webglTexture,0,k(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ye,be.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const ge=E.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,fe=U(E.stencilBuffer,ye),We=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),fe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,L)}else{const ge=E.textures;for(let ye=0;ye<ge.length;ye++){const fe=ge[ye],We=u.convert(fe.format,fe.colorSpace),De=u.convert(fe.type),Ke=D(fe.internalFormat,We,De,fe.colorSpace);jt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),Ke,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),Ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(L,E,q){const ge=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const tt=u.convert(E.depthTexture.format),be=u.convert(E.depthTexture.type);let Me;E.depthTexture.format===Ea?Me=s.DEPTH_COMPONENT24:E.depthTexture.format===Br&&(Me=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Me,E.width,E.height,0,tt,be,null)}}else K(E.depthTexture,0);const fe=ye.__webglTexture,We=k(E),De=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Ke=E.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ea)jt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ke,De,fe,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Ke,De,fe,0);else if(E.depthTexture.format===Br)jt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ke,De,fe,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Ke,De,fe,0);else throw new Error("Unknown depthTexture format")}function et(L){const E=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=ge}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Qe(E.__webglFramebuffer[ge],L,ge);else{const ge=L.texture.mipmaps;ge&&ge.length>0?Qe(E.__webglFramebuffer[0],L,0):Qe(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),Xe(E.__webglDepthbuffer[ge],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,fe)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xe(E.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(L,E,q){const ge=r.get(L);E!==void 0&&Ae(ge.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&et(L)}function _t(L){const E=L.texture,q=r.get(L),ge=r.get(E);L.addEventListener("dispose",z);const ye=L.textures,fe=L.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,d.memory.textures++),fe){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let Ke=0;Ke<E.mipmaps.length;Ke++)q.__webglFramebuffer[De][Ke]=s.createFramebuffer()}else q.__webglFramebuffer[De]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)q.__webglFramebuffer[De]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(We)for(let De=0,Ke=ye.length;De<Ke;De++){const tt=r.get(ye[De]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&jt(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const Ke=ye[De];q.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[De]);const tt=u.convert(Ke.format,Ke.colorSpace),be=u.convert(Ke.type),Me=D(Ke.internalFormat,tt,be,Ke.colorSpace,L.isXRRenderTarget===!0),Pe=k(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Me,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,q.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ae(q.__webglFramebuffer[De][Ke],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke);else Ae(q.__webglFramebuffer[De],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);S(E)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Ke=ye.length;De<Ke;De++){const tt=ye[De],be=r.get(tt);let Me=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Me,be.__webglTexture),Y(Me,tt),Ae(q.__webglFramebuffer,L,tt,s.COLOR_ATTACHMENT0+De,Me,0),S(tt)&&y(Me)}i.unbindTexture()}else{let De=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,ge.__webglTexture),Y(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ae(q.__webglFramebuffer[Ke],L,E,s.COLOR_ATTACHMENT0,De,Ke);else Ae(q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,De,0);S(E)&&y(De),i.unbindTexture()}L.depthBuffer&&et(L)}function mt(L){const E=L.textures;for(let q=0,ge=E.length;q<ge;q++){const ye=E[q];if(S(ye)){const fe=w(L),We=r.get(ye).__webglTexture;i.bindTexture(fe,We),y(fe),i.unbindTexture()}}}const Dt=[],lt=[];function Kt(L){if(L.samples>0){if(jt(L)===!1){const E=L.textures,q=L.width,ge=L.height;let ye=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(L),De=E.length>1;if(De)for(let tt=0;tt<E.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ke=L.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[tt]);const be=r.get(E[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,q,ge,0,0,q,ge,ye,s.NEAREST),m===!0&&(Dt.length=0,lt.length=0,Dt.push(s.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Dt.push(fe),lt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let tt=0;tt<E.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,We.__webglColorRenderbuffer[tt]);const be=r.get(E[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function k(L){return Math.min(l.maxSamples,L.samples)}function jt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(L){const E=d.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Ut(L,E){const q=L.colorSpace,ge=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==ks&&q!==rr&&(Tt.getTransfer(q)===zt?(ge!==Ri||ye!==pi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",q)),E}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=le,this.rebindTextures=Jt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function tR(s,e){function i(r,l=rr){let u;const d=Tt.getTransfer(l);if(r===pi)return s.UNSIGNED_BYTE;if(r===op)return s.UNSIGNED_SHORT_4_4_4_4;if(r===lp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===B_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===P_)return s.BYTE;if(r===F_)return s.SHORT;if(r===tl)return s.UNSIGNED_SHORT;if(r===sp)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===I_)return s.ALPHA;if(r===H_)return s.RGB;if(r===Ri)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===G_)return s.RED;if(r===up)return s.RED_INTEGER;if(r===Vs)return s.RG;if(r===cp)return s.RG_INTEGER;if(r===fp)return s.RGBA_INTEGER;if(r===Ku||r===Qu||r===Ju||r===$u)if(d===zt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ku)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ku)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ju)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$u)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vh||r===_h||r===xh||r===Sh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===vh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===yh||r===Mh)return d===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Eh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===bh)return u.COMPRESSED_R11_EAC;if(r===Th)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Ah)return u.COMPRESSED_RG11_EAC;if(r===Rh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ch||r===wh||r===Dh||r===Nh||r===Uh||r===Lh||r===Oh||r===Ph||r===Fh||r===zh||r===Bh||r===Ih||r===Hh||r===Gh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ch)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return d===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vh||r===kh||r===Xh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Vh)return d===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wh||r===jh||r===qh||r===Yh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Wh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const nR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iR=`
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

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ci({vertexShader:nR,fragmentShader:iR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new Xs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends Ys{constructor(e,i){super();const r=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,_=null,g=null,v=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new aR,y={},w=i.getContextAttributes();let D=null,U=null;const G=[],H=[],z=new It;let T=null;const N=new hi;N.viewport=new an;const he=new hi;he.viewport=new an;const V=[N,he],ee=new gb;let re=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Se=G[ne];return Se===void 0&&(Se=new Pd,G[ne]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ne){let Se=G[ne];return Se===void 0&&(Se=new Pd,G[ne]=Se),Se.getGripSpace()},this.getHand=function(ne){let Se=G[ne];return Se===void 0&&(Se=new Pd,G[ne]=Se),Se.getHandSpace()};function K(ne){const Se=H.indexOf(ne.inputSource);if(Se===-1)return;const Ae=G[Se];Ae!==void 0&&(Ae.update(ne.inputSource,ne.frame,h||d),Ae.dispatchEvent({type:ne.type,data:ne.inputSource}))}function O(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let ne=0;ne<G.length;ne++){const Se=H[ne];Se!==null&&(H[ne]=null,G[ne].disconnect(Se))}re=null,ue=null,S.reset();for(const ne in y)delete y[ne];e.setRenderTarget(D),M=null,v=null,g=null,l=null,U=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Xe=null,Qe=null;w.depth&&(Qe=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=w.stencil?Br:Ea,Xe=w.stencil?nl:Xi);const et={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(et),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Gi(v.textureWidth,v.textureHeight,{format:Ri,type:pi,depthTexture:new il(v.textureWidth,v.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Gi(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Be.setContext(l),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(ne){for(let Se=0;Se<ne.removed.length;Se++){const Ae=ne.removed[Se],Xe=H.indexOf(Ae);Xe>=0&&(H[Xe]=null,G[Xe].disconnect(Ae))}for(let Se=0;Se<ne.added.length;Se++){const Ae=ne.added[Se];let Xe=H.indexOf(Ae);if(Xe===-1){for(let et=0;et<G.length;et++)if(et>=H.length){H.push(Ae),Xe=et;break}else if(H[et]===null){H[et]=Ae,Xe=et;break}if(Xe===-1)break}const Qe=G[Xe];Qe&&Qe.connect(Ae)}}const le=new ae,me=new ae;function Te(ne,Se,Ae){le.setFromMatrixPosition(Se.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const Xe=le.distanceTo(me),Qe=Se.projectionMatrix.elements,et=Ae.projectionMatrix.elements,Jt=Qe[14]/(Qe[10]-1),_t=Qe[14]/(Qe[10]+1),mt=(Qe[9]+1)/Qe[5],Dt=(Qe[9]-1)/Qe[5],lt=(Qe[8]-1)/Qe[0],Kt=(et[8]+1)/et[0],k=Jt*lt,jt=Jt*Kt,Et=Xe/(-lt+Kt),Ut=Et*-lt;if(Se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ut),ne.translateZ(Et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Qe[10]===-1)ne.projectionMatrix.copy(Se.projectionMatrix),ne.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const qe=Jt+Et,L=_t+Et,E=k-Ut,q=jt+(Xe-Ut),ge=mt*_t/L*qe,ye=Dt*_t/L*qe;ne.projectionMatrix.makePerspective(E,q,ge,ye,qe,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,Se){Se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let Se=ne.near,Ae=ne.far;S.texture!==null&&(S.depthNear>0&&(Se=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),ee.near=he.near=N.near=Se,ee.far=he.far=N.far=Ae,(re!==ee.near||ue!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),re=ee.near,ue=ee.far),ee.layers.mask=ne.layers.mask|6,N.layers.mask=ee.layers.mask&-5,he.layers.mask=ee.layers.mask&-3;const Xe=ne.parent,Qe=ee.cameras;P(ee,Xe);for(let et=0;et<Qe.length;et++)P(Qe[et],Xe);Qe.length===2?Te(ee,N,he):ee.projectionMatrix.copy(N.projectionMatrix),Y(ne,ee,Xe)};function Y(ne,Se,Ae){Ae===null?ne.matrix.copy(Se.matrixWorld):(ne.matrix.copy(Ae.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Se.projectionMatrix),ne.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(ne){m=ne,v!==null&&(v.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ee)},this.getCameraTexture=function(ne){return y[ne]};let xe=null;function Ce(ne,Se){if(_=Se.getViewerPose(h||d),b=Se,_!==null){const Ae=_.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Xe=!1;Ae.length!==ee.cameras.length&&(ee.cameras.length=0,Xe=!0);for(let _t=0;_t<Ae.length;_t++){const mt=Ae[_t];let Dt=null;if(M!==null)Dt=M.getViewport(mt);else{const Kt=g.getViewSubImage(v,mt);Dt=Kt.viewport,_t===0&&(e.setRenderTargetTextures(U,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(U))}let lt=V[_t];lt===void 0&&(lt=new hi,lt.layers.enable(_t),lt.viewport=new an,V[_t]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(ee.matrix.copy(lt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Xe===!0&&ee.cameras.push(lt)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const _t=g.getDepthInformation(Ae[0]);_t&&_t.isValid&&_t.texture&&S.init(_t,l.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let _t=0;_t<Ae.length;_t++){const mt=Ae[_t].camera;if(mt){let Dt=y[mt];Dt||(Dt=new Q_,y[mt]=Dt);const lt=g.getCameraImage(mt);Dt.sourceTexture=lt}}}}for(let Ae=0;Ae<G.length;Ae++){const Xe=H[Ae],Qe=G[Ae];Xe!==null&&Qe!==void 0&&Qe.update(Xe,Se,h||d)}xe&&xe(ne,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),b=null}const Be=new tx;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){xe=ne},this.dispose=function(){}}}const Lr=new ba,sR=new hn;function oR(s,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,J_(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,w,D,U){y.isMeshBasicMaterial?u(S,y):y.isMeshLambertMaterial?(u(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(S,y),g(S,y)):y.isMeshPhongMaterial?(u(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(S,y),v(S,y),y.isMeshPhysicalMaterial&&M(S,y,U)):y.isMeshMatcapMaterial?(u(S,y),b(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),C(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,w,D):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const w=e.get(y),D=w.envMap,U=w.envMapRotation;D&&(S.envMap.value=D,Lr.copy(U),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),S.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(Lr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,w,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*w,S.scale.value=D*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,w){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const w=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function lR(s,e,i,r){let l={},u={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const U=D.program;r.uniformBlockBinding(w,U)}function h(w,D){let U=l[w.id];U===void 0&&(b(w),U=_(w),l[w.id]=U,w.addEventListener("dispose",S));const G=D.program;r.updateUBOMapping(w,G);const H=e.render.frame;u[w.id]!==H&&(v(w),u[w.id]=H)}function _(w){const D=g();w.__bindingPointIndex=D;const U=s.createBuffer(),G=w.__size,H=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,G,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function g(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const D=l[w.id],U=w.uniforms,G=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,z=U.length;H<z;H++){const T=Array.isArray(U[H])?U[H]:[U[H]];for(let N=0,he=T.length;N<he;N++){const V=T[N];if(M(V,H,N,G)===!0){const ee=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let K=0;K<re.length;K++){const O=re[K],B=C(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,ee+ue,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,ue),ue+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,D,U,G){const H=w.value,z=D+"_"+U;if(G[z]===void 0)return typeof H=="number"||typeof H=="boolean"?G[z]=H:G[z]=H.clone(),!0;{const T=G[z];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return G[z]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function b(w){const D=w.uniforms;let U=0;const G=16;for(let z=0,T=D.length;z<T;z++){const N=Array.isArray(D[z])?D[z]:[D[z]];for(let he=0,V=N.length;he<V;he++){const ee=N[he],re=Array.isArray(ee.value)?ee.value:[ee.value];for(let ue=0,K=re.length;ue<K;ue++){const O=re[ue],B=C(O),le=U%G,me=le%B.boundary,Te=le+me;U+=me,Te!==0&&G-Te<B.storage&&(U+=G-Te),ee.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=U,U+=B.storage}}}const H=U%G;return H>0&&(U+=G-H),w.__size=U,w.__cache={},this}function C(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",w),D}function S(w){const D=w.target;D.removeEventListener("dispose",S);const U=d.indexOf(D.__bindingPointIndex);d.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function y(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:h,dispose:y}}const uR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function cR(){return Pi===null&&(Pi=new ib(uR,16,16,Vs,Ma),Pi.name="DFG_LUT",Pi.minFilter=wn,Pi.magFilter=wn,Pi.wrapS=va,Pi.wrapT=va,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class fR{constructor(e={}){const{canvas:i=LE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:M=pi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=M,S=new Set([fp,cp,up]),y=new Set([pi,Xi,tl,nl,op,lp]),w=new Uint32Array(4),D=new Int32Array(4);let U=null,G=null;const H=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let he=!1;this._outputColorSpace=di;let V=0,ee=0,re=null,ue=-1,K=null;const O=new an,B=new an;let le=null;const me=new Bt(0);let Te=0,P=i.width,Y=i.height,xe=1,Ce=null,Be=null;const ne=new an(0,0,P,Y),Se=new an(0,0,P,Y);let Ae=!1;const Xe=new Z_;let Qe=!1,et=!1;const Jt=new hn,_t=new ae,mt=new an,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return re===null?xe:1}let k=r;function jt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),k===null){const W="webgl2";if(k=jt(W,R),k===null)throw jt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let Et,Ut,qe,L,E,q,ge,ye,fe,We,De,Ke,tt,be,Me,Pe,Oe,Fe,ct,j,we,Re,ze;function Ee(){Et=new fA(k),Et.init(),we=new tR(k,Et),Ut=new iA(k,Et,e,we),qe=new $2(k,Et),Ut.reversedDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),L=new pA(k),E=new I2,q=new eR(k,Et,qe,E,Ut,we,L),ge=new cA(N),ye=new xb(k),Re=new tA(k,ye),fe=new dA(k,ye,L,Re),We=new gA(k,fe,ye,Re,L),Fe=new mA(k,Ut,q),Me=new aA(E),De=new B2(N,ge,Et,Ut,Re,Me),Ke=new oR(N,E),tt=new G2,be=new q2(Et),Oe=new eA(N,ge,qe,We,b,m),Pe=new J2(N,We,Ut),ze=new lR(k,L,Ut,qe),ct=new nA(k,Et,L),j=new hA(k,Et,L),L.programs=De.programs,N.capabilities=Ut,N.extensions=Et,N.properties=E,N.renderLists=tt,N.shadowMap=Pe,N.state=qe,N.info=L}Ee(),C!==pi&&(T=new _A(C,i.width,i.height,l,u));const ce=new rR(N,k);this.xr=ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,W,se=!0){if(ce.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=W,i.width=Math.floor(R*xe),i.height=Math.floor(W*xe),se===!0&&(i.style.width=R+"px",i.style.height=W+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*xe,Y*xe).floor()},this.setDrawingBufferSize=function(R,W,se){P=R,Y=W,xe=se,i.width=Math.floor(R*se),i.height=Math.floor(W*se),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(C===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,W,se,te){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,se,te),qe.viewport(O.copy(ne).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,W,se,te){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,W,se,te),qe.scissor(B.copy(Se).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){qe.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){Ce=R},this.setTransparentSort=function(R){Be=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,se=!0){let te=0;if(R){let Q=!1;if(re!==null){const Ne=re.texture.format;Q=S.has(Ne)}if(Q){const Ne=re.texture.type,Ie=y.has(Ne),Ue=Oe.getClearColor(),je=Oe.getClearAlpha(),Ze=Ue.r,nt=Ue.g,st=Ue.b;Ie?(w[0]=Ze,w[1]=nt,w[2]=st,w[3]=je,k.clearBufferuiv(k.COLOR,0,w)):(D[0]=Ze,D[1]=nt,D[2]=st,D[3]=je,k.clearBufferiv(k.COLOR,0,D))}else te|=k.COLOR_BUFFER_BIT}W&&(te|=k.DEPTH_BUFFER_BIT),se&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),Oe.dispose(),tt.dispose(),be.dispose(),E.dispose(),ge.dispose(),We.dispose(),Re.dispose(),ze.dispose(),De.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Gr),ce.removeEventListener("sessionend",Vr),wi.stop()};function He(R){R.preventDefault(),Sv("WebGLRenderer: Context Lost."),he=!0}function it(){Sv("WebGLRenderer: Context Restored."),he=!1;const R=L.autoReset,W=Pe.enabled,se=Pe.autoUpdate,te=Pe.needsUpdate,Q=Pe.type;Ee(),L.autoReset=R,Pe.enabled=W,Pe.autoUpdate=se,Pe.needsUpdate=te,Pe.type=Q}function Ot(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function bt(R){const W=R.target;W.removeEventListener("dispose",bt),Nn(W)}function Nn(R){gi(R),E.remove(R)}function gi(R){const W=E.get(R).programs;W!==void 0&&(W.forEach(function(se){De.releaseProgram(se)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,se,te,Q,Ne){W===null&&(W=Dt);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=hl(R,W,se,te,Q);qe.setMaterial(te,Ie);let je=se.index,Ze=1;if(te.wireframe===!0){if(je=fe.getWireframeAttribute(se),je===void 0)return;Ze=2}const nt=se.drawRange,st=se.attributes.position;let Ge=nt.start*Ze,ft=(nt.start+nt.count)*Ze;Ne!==null&&(Ge=Math.max(Ge,Ne.start*Ze),ft=Math.min(ft,(Ne.start+Ne.count)*Ze)),je!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,je.count)):st!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,st.count));const qt=ft-Ge;if(qt<0||qt===1/0)return;Re.setup(Q,te,Ue,se,je);let Yt,At=ct;if(je!==null&&(Yt=ye.get(je),At=j,At.setIndex(Yt)),Q.isMesh)te.wireframe===!0?(qe.setLineWidth(te.wireframeLinewidth*Kt()),At.setMode(k.LINES)):At.setMode(k.TRIANGLES);else if(Q.isLine){let mn=te.linewidth;mn===void 0&&(mn=1),qe.setLineWidth(mn*Kt()),Q.isLineSegments?At.setMode(k.LINES):Q.isLineLoop?At.setMode(k.LINE_LOOP):At.setMode(k.LINE_STRIP)}else Q.isPoints?At.setMode(k.POINTS):Q.isSprite&&At.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))At.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const mn=Q._multiDrawStarts,ke=Q._multiDrawCounts,Un=Q._multiDrawCount,at=je?ye.get(je).bytesPerElement:1,Ln=E.get(te).currentProgram.getUniforms();for(let Wn=0;Wn<Un;Wn++)Ln.setValue(k,"_gl_DrawID",Wn),At.render(mn[Wn]/at,ke[Wn])}else if(Q.isInstancedMesh)At.renderInstances(Ge,qt,Q.count);else if(se.isInstancedBufferGeometry){const mn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,mn);At.renderInstances(Ge,qt,ke)}else At.render(Ge,qt)};function Qs(R,W,se){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ra(R,W,se),R.side=lr,R.needsUpdate=!0,Ra(R,W,se),R.side=ga):Ra(R,W,se)}this.compile=function(R,W,se=null){se===null&&(se=R),G=be.get(se),G.init(W),z.push(G),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(G.pushLight(Q),Q.castShadow&&G.pushShadow(Q))}),R!==se&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(G.pushLight(Q),Q.castShadow&&G.pushShadow(Q))}),G.setupLights();const te=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let Ie=0;Ie<Ne.length;Ie++){const Ue=Ne[Ie];Qs(Ue,se,Q),te.add(Ue)}else Qs(Ne,se,Q),te.add(Ne)}),G=z.pop(),te},this.compileAsync=function(R,W,se=null){const te=this.compile(R,W,se);return new Promise(Q=>{function Ne(){if(te.forEach(function(Ie){E.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){Q(R);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Hr=null;function cl(R){Hr&&Hr(R)}function Gr(){wi.stop()}function Vr(){wi.start()}const wi=new tx;wi.setAnimationLoop(cl),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Hr=R,ce.setAnimationLoop(R),R===null?wi.stop():wi.start()},ce.addEventListener("sessionstart",Gr),ce.addEventListener("sessionend",Vr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const se=ce.enabled===!0&&ce.isPresenting===!0,te=T!==null&&(re===null||se)&&T.begin(N,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,W,re),G=be.get(R,z.length),G.init(W),z.push(G),Jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix(Jt,Bi,W.reversedDepth),et=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,et),U=tt.get(R,H.length),U.init(),H.push(U),ce.enabled===!0&&ce.isPresenting===!0){const Ie=N.xr.getDepthSensingMesh();Ie!==null&&kr(Ie,W,-1/0,N.sortObjects)}kr(R,W,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(Ce,Be),lt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,lt&&Oe.addToRenderList(U,R),this.info.render.frame++,Qe===!0&&Me.beginShadows();const Q=G.state.shadowsArray;if(Pe.render(Q,R,W),Qe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&T.hasRenderPass())===!1){const Ie=U.opaque,Ue=U.transmissive;if(G.setupLights(),W.isArrayCamera){const je=W.cameras;if(Ue.length>0)for(let Ze=0,nt=je.length;Ze<nt;Ze++){const st=je[Ze];rn(Ie,Ue,R,st)}lt&&Oe.render(R);for(let Ze=0,nt=je.length;Ze<nt;Ze++){const st=je[Ze];vi(U,R,st,st.viewport)}}else Ue.length>0&&rn(Ie,Ue,R,W),lt&&Oe.render(R),vi(U,R,W)}re!==null&&ee===0&&(q.updateMultisampleRenderTarget(re),q.updateRenderTargetMipmap(re)),te&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,W),Re.resetDefaultState(),ue=-1,K=null,z.pop(),z.length>0?(G=z[z.length-1],Qe===!0&&Me.setGlobalState(N.clippingPlanes,G.state.camera)):G=null,H.pop(),H.length>0?U=H[H.length-1]:U=null};function kr(R,W,se,te){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)G.pushLight(R),R.castShadow&&G.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){te&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);const Ie=We.update(R),Ue=R.material;Ue.visible&&U.push(R,Ie,Ue,se,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const Ie=We.update(R),Ue=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),mt.copy(Ie.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ue)){const je=Ie.groups;for(let Ze=0,nt=je.length;Ze<nt;Ze++){const st=je[Ze],Ge=Ue[st.materialIndex];Ge&&Ge.visible&&U.push(R,Ie,Ge,se,mt.z,st)}}else Ue.visible&&U.push(R,Ie,Ue,se,mt.z,null)}}const Ne=R.children;for(let Ie=0,Ue=Ne.length;Ie<Ue;Ie++)kr(Ne[Ie],W,se,te)}function vi(R,W,se,te){const{opaque:Q,transmissive:Ne,transparent:Ie}=R;G.setupLightsView(se),Qe===!0&&Me.setGlobalState(N.clippingPlanes,se),te&&qe.viewport(O.copy(te)),Q.length>0&&pn(Q,W,se),Ne.length>0&&pn(Ne,W,se),Ie.length>0&&pn(Ie,W,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function rn(R,W,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[te.id]===void 0){const Ge=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[te.id]=new Gi(1,1,{generateMipmaps:!0,type:Ge?Ma:pi,minFilter:zr,samples:Math.max(4,Ut.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=G.state.transmissionRenderTarget[te.id],Ie=te.viewport||O;Ne.setSize(Ie.z*N.transmissionResolutionScale,Ie.w*N.transmissionResolutionScale);const Ue=N.getRenderTarget(),je=N.getActiveCubeFace(),Ze=N.getActiveMipmapLevel();N.setRenderTarget(Ne),N.getClearColor(me),Te=N.getClearAlpha(),Te<1&&N.setClearColor(16777215,.5),N.clear(),lt&&Oe.render(se);const nt=N.toneMapping;N.toneMapping=Hi;const st=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),G.setupLightsView(te),Qe===!0&&Me.setGlobalState(N.clippingPlanes,te),pn(R,se,te),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ft=0,qt=W.length;ft<qt;ft++){const Yt=W[ft],{object:At,geometry:mn,material:ke,group:Un}=Yt;if(ke.side===ga&&At.layers.test(te.layers)){const at=ke.side;ke.side=Xn,ke.needsUpdate=!0,ji(At,se,te,mn,ke,Un),ke.side=at,ke.needsUpdate=!0,Ge=!0}}Ge===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}N.setRenderTarget(Ue,je,Ze),N.setClearColor(me,Te),st!==void 0&&(te.viewport=st),N.toneMapping=nt}function pn(R,W,se){const te=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ne=R.length;Q<Ne;Q++){const Ie=R[Q],{object:Ue,geometry:je,group:Ze}=Ie;let nt=Ie.material;nt.allowOverride===!0&&te!==null&&(nt=te),Ue.layers.test(se.layers)&&ji(Ue,W,se,je,nt,Ze)}}function ji(R,W,se,te,Q,Ne){R.onBeforeRender(N,W,se,te,Q,Ne),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(N,W,se,te,R,Ne),Q.transparent===!0&&Q.side===ga&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,N.renderBufferDirect(se,W,te,Q,R,Ne),Q.side=lr,Q.needsUpdate=!0,N.renderBufferDirect(se,W,te,Q,R,Ne),Q.side=ga):N.renderBufferDirect(se,W,te,Q,R,Ne),R.onAfterRender(N,W,se,te,Q,Ne)}function Ra(R,W,se){W.isScene!==!0&&(W=Dt);const te=E.get(R),Q=G.state.lights,Ne=G.state.shadowsArray,Ie=Q.state.version,Ue=De.getParameters(R,Q.state,Ne,W,se),je=De.getProgramCacheKey(Ue);let Ze=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,te.fog=W.fog;const nt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=ge.get(R.envMap||te.environment,nt),te.envMapRotation=te.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",bt),Ze=new Map,te.programs=Ze);let st=Ze.get(je);if(st!==void 0){if(te.currentProgram===st&&te.lightsStateVersion===Ie)return dl(R,Ue),st}else Ue.uniforms=De.getUniforms(R),R.onBeforeCompile(Ue,N),st=De.acquireProgram(Ue,je),Ze.set(je,st),te.uniforms=Ue.uniforms;const Ge=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),dl(R,Ue),te.needsLights=Js(R),te.lightsStateVersion=Ie,te.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=st,te.uniformsList=null,st}function fl(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ec.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function dl(R,W){const se=E.get(R);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function hl(R,W,se,te,Q){W.isScene!==!0&&(W=Dt),q.resetTextureUnits();const Ne=W.fog,Ie=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?W.environment:null,Ue=re===null?N.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ks,je=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=ge.get(te.envMap||Ie,je),nt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!se.morphAttributes.position,ft=!!se.morphAttributes.normal,qt=!!se.morphAttributes.color;let Yt=Hi;te.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Yt=N.toneMapping);const At=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,mn=At!==void 0?At.length:0,ke=E.get(te),Un=G.state.lights;if(Qe===!0&&(et===!0||R!==K)){const on=R===K&&te.id===ue;Me.setState(te,R,on)}let at=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Un.state.version||ke.outputColorSpace!==Ue||Q.isBatchedMesh&&ke.batching===!1||!Q.isBatchedMesh&&ke.batching===!0||Q.isBatchedMesh&&ke.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ke.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||Q.isInstancedMesh&&ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ke.instancingMorph===!1&&Q.morphTexture!==null||ke.envMap!==Ze||te.fog===!0&&ke.fog!==Ne||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==nt||ke.vertexTangents!==st||ke.morphTargets!==Ge||ke.morphNormals!==ft||ke.morphColors!==qt||ke.toneMapping!==Yt||ke.morphTargetsCount!==mn)&&(at=!0):(at=!0,ke.__version=te.version);let Ln=ke.currentProgram;at===!0&&(Ln=Ra(te,W,Q));let Wn=!1,_i=!1,jn=!1;const Lt=Ln.getUniforms(),sn=ke.uniforms;if(qe.useProgram(Ln.program)&&(Wn=!0,_i=!0,jn=!0),te.id!==ue&&(ue=te.id,_i=!0),Wn||K!==R){qe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(k,"projectionMatrix",R.projectionMatrix),Lt.setValue(k,"viewMatrix",R.matrixWorldInverse);const xi=Lt.map.cameraPosition;xi!==void 0&&xi.setValue(k,_t.setFromMatrixPosition(R.matrixWorld)),Ut.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,_i=!0,jn=!0)}if(ke.needsLights&&(Un.state.directionalShadowMap.length>0&&Lt.setValue(k,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&Lt.setValue(k,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&Lt.setValue(k,"pointShadowMap",Un.state.pointShadowMap,q)),Q.isSkinnedMesh){Lt.setOptional(k,Q,"bindMatrix"),Lt.setOptional(k,Q,"bindMatrixInverse");const on=Q.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Lt.setValue(k,"boneTexture",on.boneTexture,q))}Q.isBatchedMesh&&(Lt.setOptional(k,Q,"batchingTexture"),Lt.setValue(k,"batchingTexture",Q._matricesTexture,q),Lt.setOptional(k,Q,"batchingIdTexture"),Lt.setValue(k,"batchingIdTexture",Q._indirectTexture,q),Lt.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(k,"batchingColorTexture",Q._colorsTexture,q));const On=se.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Fe.update(Q,se,Ln),(_i||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,Lt.setValue(k,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&W.environment!==null&&(sn.envMapIntensity.value=W.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=cR()),_i&&(Lt.setValue(k,"toneMappingExposure",N.toneMappingExposure),ke.needsLights&&cr(sn,jn),Ne&&te.fog===!0&&Ke.refreshFogUniforms(sn,Ne),Ke.refreshMaterialUniforms(sn,te,xe,Y,G.state.transmissionRenderTarget[R.id]),ec.upload(k,fl(ke),sn,q)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ec.upload(k,fl(ke),sn,q),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(k,"center",Q.center),Lt.setValue(k,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(k,"normalMatrix",Q.normalMatrix),Lt.setValue(k,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const on=te.uniformsGroups;for(let xi=0,qi=on.length;xi<qi;xi++){const Xr=on[xi];ze.update(Xr,Ln),ze.bind(Xr,Ln)}}return Ln}function cr(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Js(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,W,se){const te=E.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=W,E.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const se=E.get(R);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const Ca=k.createFramebuffer();this.setRenderTarget=function(R,W=0,se=0){re=R,V=W,ee=se;let te=null,Q=!1,Ne=!1;if(R){const Ue=E.get(R);if(Ue.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(k.FRAMEBUFFER,Ue.__webglFramebuffer),O.copy(R.viewport),B.copy(R.scissor),le=R.scissorTest,qe.viewport(O),qe.scissor(B),qe.setScissorTest(le),ue=-1;return}else if(Ue.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ue.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const nt=R.depthTexture;if(Ue.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(R.width!==nt.image.width||R.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);const Ze=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?te=Ze[W][se]:te=Ze[W],Q=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?te=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[se]:te=Ze,O.copy(R.viewport),B.copy(R.scissor),le=R.scissorTest}else O.copy(ne).multiplyScalar(xe).floor(),B.copy(Se).multiplyScalar(xe).floor(),le=Ae;if(se!==0&&(te=Ca),qe.bindFramebuffer(k.FRAMEBUFFER,te)&&qe.drawBuffers(R,te),qe.viewport(O),qe.scissor(B),qe.setScissorTest(le),Q){const Ue=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,se)}else if(Ne){const Ue=W;for(let je=0;je<R.textures.length;je++){const Ze=E.get(R.textures[je]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+je,Ze.__webglTexture,se,Ue)}}else if(R!==null&&se!==0){const Ue=E.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ue.__webglTexture,se)}ue=-1},this.readRenderTargetPixels=function(R,W,se,te,Q,Ne,Ie,Ue=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(je=je[Ie]),je){qe.bindFramebuffer(k.FRAMEBUFFER,je);try{const Ze=R.textures[Ue],nt=Ze.format,st=Ze.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ue),!Ut.textureFormatReadable(nt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(st)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-te&&se>=0&&se<=R.height-Q&&k.readPixels(W,se,te,Q,we.convert(nt),we.convert(st),Ne)}finally{const Ze=re!==null?E.get(re).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,W,se,te,Q,Ne,Ie,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(je=je[Ie]),je)if(W>=0&&W<=R.width-te&&se>=0&&se<=R.height-Q){qe.bindFramebuffer(k.FRAMEBUFFER,je);const Ze=R.textures[Ue],nt=Ze.format,st=Ze.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ue),!Ut.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),k.readPixels(W,se,te,Q,we.convert(nt),we.convert(st),0);const ft=re!==null?E.get(re).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,ft);const qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await OE(k,qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne),k.deleteBuffer(Ge),k.deleteSync(qt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,se=0){const te=Math.pow(2,-se),Q=Math.floor(R.image.width*te),Ne=Math.floor(R.image.height*te),Ie=W!==null?W.x:0,Ue=W!==null?W.y:0;q.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Ie,Ue,Q,Ne),qe.unbindTexture()};const wa=k.createFramebuffer(),fr=k.createFramebuffer();this.copyTextureToTexture=function(R,W,se=null,te=null,Q=0,Ne=0){let Ie,Ue,je,Ze,nt,st,Ge,ft,qt;const Yt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(se!==null)Ie=se.max.x-se.min.x,Ue=se.max.y-se.min.y,je=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,nt=se.min.y,st=se.isBox3?se.min.z:0;else{const sn=Math.pow(2,-Q);Ie=Math.floor(Yt.width*sn),Ue=Math.floor(Yt.height*sn),R.isDataArrayTexture?je=Yt.depth:R.isData3DTexture?je=Math.floor(Yt.depth*sn):je=1,Ze=0,nt=0,st=0}te!==null?(Ge=te.x,ft=te.y,qt=te.z):(Ge=0,ft=0,qt=0);const At=we.convert(W.format),mn=we.convert(W.type);let ke;W.isData3DTexture?(q.setTexture3D(W,0),ke=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),ke=k.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),ke=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Un=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ln=k.getParameter(k.UNPACK_SKIP_PIXELS),Wn=k.getParameter(k.UNPACK_SKIP_ROWS),_i=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,st);const jn=R.isDataArrayTexture||R.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const sn=E.get(R),On=E.get(W),on=E.get(sn.__renderTarget),xi=E.get(On.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,on.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let qi=0;qi<je;qi++)jn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Q,st+qi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(W).__webglTexture,Ne,qt+qi)),k.blitFramebuffer(Ze,nt,Ie,Ue,Ge,ft,Ie,Ue,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||E.has(R)){const sn=E.get(R),On=E.get(W);qe.bindFramebuffer(k.READ_FRAMEBUFFER,wa),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,fr);for(let on=0;on<je;on++)jn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,Q,st+on):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,Q),Lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,On.__webglTexture,Ne,qt+on):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,On.__webglTexture,Ne),Q!==0?k.blitFramebuffer(Ze,nt,Ie,Ue,Ge,ft,Ie,Ue,k.COLOR_BUFFER_BIT,k.NEAREST):Lt?k.copyTexSubImage3D(ke,Ne,Ge,ft,qt+on,Ze,nt,Ie,Ue):k.copyTexSubImage2D(ke,Ne,Ge,ft,Ze,nt,Ie,Ue);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(ke,Ne,Ge,ft,qt,Ie,Ue,je,At,mn,Yt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,Ne,Ge,ft,qt,Ie,Ue,je,At,Yt.data):k.texSubImage3D(ke,Ne,Ge,ft,qt,Ie,Ue,je,At,mn,Yt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ne,Ge,ft,Ie,Ue,At,mn,Yt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ne,Ge,ft,Yt.width,Yt.height,At,Yt.data):k.texSubImage2D(k.TEXTURE_2D,Ne,Ge,ft,Ie,Ue,At,mn,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Un),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ln),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,_i),Ne===0&&W.generateMipmaps&&k.generateMipmap(ke),qe.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qe.unbindTexture()},this.resetState=function(){V=0,ee=0,re=null,qe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}class dR{size=64;width=64;height=64;maxAge=64;radius=.1;speed=1/64;trail=[];last=null;canvas;ctx;texture;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new Dn(this.canvas)}update(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);for(let e=this.trail.length-1;e>=0;e--){const i=this.trail[e],r=i.force*this.speed*(1-i.age/this.maxAge);i.x+=i.vx*r,i.y+=i.vy*r,i.age++,i.age>this.maxAge?this.trail.splice(e,1):this.drawPoint(i)}this.texture.needsUpdate=!0}addTouch(e){let i=0,r=0,l=0;if(this.last){const u=e.x-this.last.x,d=e.y-this.last.y;if(u===0&&d===0)return;const p=Math.sqrt(u*u+d*d);r=u/p,l=d/p,i=Math.min((u*u+d*d)*2e4,2)}this.last={x:e.x,y:e.y},this.trail.push({x:e.x,y:e.y,age:0,force:i,vx:r,vy:l})}drawPoint(e){const i={x:e.x*this.width,y:(1-e.y)*this.height};let r=e.age<this.maxAge*.3?Math.sin(e.age/(this.maxAge*.3)*(Math.PI/2)):-((1-(e.age-this.maxAge*.3)/(this.maxAge*.7))*(1-(e.age-this.maxAge*.3)/(this.maxAge*.7)-2));r*=e.force;const l=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${r*255}`,u=this.radius*this.width;this.ctx.shadowOffsetX=this.size*5,this.ctx.shadowOffsetY=this.size*5,this.ctx.shadowBlur=u,this.ctx.shadowColor=`rgba(${l},${.2*r})`,this.ctx.beginPath(),this.ctx.fillStyle="rgba(255,0,0,1)",this.ctx.arc(i.x-this.size*5,i.y-this.size*5,u,0,Math.PI*2),this.ctx.fill()}}class hR{mesh=null;uniforms;sceneManager;isPaused=!1;constructor(e){this.sceneManager=e,this.uniforms={uTime:{value:0},uResolution:{value:new It(window.innerWidth,window.innerHeight)},uColor1:{value:new ae(.545,.361,.965)},uColor2:{value:new ae(.18,.12,.42)},uColor3:{value:new ae(.851,.275,.937)},uColor4:{value:new ae(.22,.06,.34)},uColor5:{value:new ae(1,.4,.2)},uColor6:{value:new ae(.28,.1,.5)},uSpeed:{value:1.2},uIntensity:{value:1.8},uTouchTexture:{value:null},uGrainIntensity:{value:.06},uDarkNavy:{value:new ae(.039,.02,.09)},uGradientSize:{value:.5},uGradientCount:{value:12},uColor1Weight:{value:.6},uColor2Weight:{value:1.4}}}init(){const e=this.sceneManager.getViewSize(),i=new Xs(e.width,e.height,1,1),r=new Ci({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vUv = uv; }",fragmentShader:`
        uniform float uTime, uSpeed, uIntensity, uGrainIntensity, uGradientSize, uGradientCount, uColor1Weight, uColor2Weight;
        uniform vec2 uResolution;
        uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6, uDarkNavy;
        uniform sampler2D uTouchTexture;
        varying vec2 vUv;
        
        float grain(vec2 uv, float t) { return fract(sin(dot(uv * uResolution * 0.5 + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0; }
        
        vec3 getGradientColor(vec2 uv, float time) {
          vec2 c1 = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
          vec2 c2 = vec2(0.5 + cos(time * uSpeed * 0.6) * 0.5, 0.5 + sin(time * uSpeed * 0.45) * 0.5);
          vec2 c3 = vec2(0.5 + sin(time * uSpeed * 0.35) * 0.45, 0.5 + cos(time * uSpeed * 0.55) * 0.45);
          vec2 c4 = vec2(0.5 + cos(time * uSpeed * 0.5) * 0.4, 0.5 + sin(time * uSpeed * 0.4) * 0.4);
          vec2 c5 = vec2(0.5 + sin(time * uSpeed * 0.7) * 0.35, 0.5 + cos(time * uSpeed * 0.6) * 0.35);
          vec2 c6 = vec2(0.5 + cos(time * uSpeed * 0.45) * 0.5, 0.5 + sin(time * uSpeed * 0.65) * 0.5);
          
          float i1 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c1));
          float i2 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c2));
          float i3 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c3));
          float i4 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c4));
          float i5 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c5));
          float i6 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c6));
          
          vec3 color = vec3(0.0);
          color += uColor1 * i1 * (0.55 + 0.45 * sin(time * uSpeed)) * uColor1Weight;
          color += uColor2 * i2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2)) * uColor2Weight;
          color += uColor3 * i3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8)) * uColor1Weight;
          color += uColor4 * i4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3)) * uColor2Weight;
          color += uColor5 * i5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1)) * uColor1Weight;
          color += uColor6 * i6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9)) * uColor2Weight;
          
          color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;
          float lum = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(lum), color, 1.35);
          color = pow(color, vec3(0.92));
          float brightness = length(color);
          color = mix(uDarkNavy, color, max(brightness * 1.2, 0.15));
          return color;
        }
        
        void main() {
          vec2 uv = vUv;
          vec4 touchTex = texture2D(uTouchTexture, uv);
          uv.x -= (touchTex.r * 2.0 - 1.0) * 0.8 * touchTex.b;
          uv.y -= (touchTex.g * 2.0 - 1.0) * 0.8 * touchTex.b;
          vec2 center = vec2(0.5);
          float dist = length(uv - center);
          float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * touchTex.b;
          uv += vec2(ripple);
          vec3 color = getGradientColor(uv, uTime);
          color += grain(uv, uTime) * uGrainIntensity;
          color = clamp(color, vec3(0.0), vec3(1.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `});this.mesh=new Wi(i,r),this.sceneManager.scene.add(this.mesh)}update(e){this.isPaused||(this.uniforms.uTime.value+=e)}onResize(e,i){const r=this.sceneManager.getViewSize();this.mesh&&(this.mesh.geometry.dispose(),this.mesh.geometry=new Xs(r.width,r.height,1,1)),this.uniforms.uResolution.value.set(e,i)}}class pR{renderer;camera;scene;clock;touchTexture;gradientBackground;animationId=null;container;constructor(e){this.container=e,this.renderer=new fR({antialias:!0,alpha:!1}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.camera=new hi(45,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.z=50,this.scene=new KE,this.scene.background=new Bt(656663),this.clock=new vb,this.touchTexture=new dR,this.gradientBackground=new hR(this),this.gradientBackground.uniforms.uTouchTexture.value=this.touchTexture.texture,this.init()}getViewSize(){const e=this.camera.fov*Math.PI/180,i=Math.abs(this.camera.position.z*Math.tan(e/2)*2);return{width:i*this.camera.aspect,height:i}}init(){this.gradientBackground.init();const e=this.container,i=(r,l)=>{this.touchTexture.addTouch({x:r/e.clientWidth,y:1-l/e.clientHeight})};e.addEventListener("mousemove",r=>i(r.offsetX,r.offsetY)),e.addEventListener("touchmove",r=>{const l=e.getBoundingClientRect();i(r.touches[0].clientX-l.left,r.touches[0].clientY-l.top)}),window.addEventListener("resize",()=>{this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight),this.gradientBackground.onResize(e.clientWidth,e.clientHeight)}),this.tick()}tick(){const e=Math.min(this.clock.getDelta(),.1);this.touchTexture.update(),this.gradientBackground.update(e),this.renderer.render(this.scene,this.camera),this.animationId=requestAnimationFrame(()=>this.tick())}cleanup(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer.dispose(),this.container&&this.renderer.domElement&&this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}}function mR({className:s="",isPaused:e=!1}){const i=pe.useRef(null),r=pe.useRef(null);return pe.useEffect(()=>{const l=i.current;if(l)return r.current&&r.current.cleanup(),r.current=new pR(l),()=>{r.current&&(r.current.cleanup(),r.current=null)}},[]),pe.useEffect(()=>{r.current&&(r.current.gradientBackground.isPaused=e)},[e]),F.jsx("div",{ref:i,className:`fixed inset-0 z-0 overflow-hidden ${s}`,style:{width:"100vw",height:"100vh"}})}function or({children:s,className:e="",id:i=""}){return F.jsx("section",{id:i,className:`py-16 md:py-24 ${e}`,children:F.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s})})}function $o({children:s,className:e=""}){return F.jsx("div",{className:`bg-white/[0.05] backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 hover:border-fuchsia-400/50 transition-all duration-300 ${e}`,children:s})}function gR(){return F.jsxs("div",{className:"flex flex-col min-h-screen",children:[F.jsx("section",{className:"relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden",children:F.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[F.jsx("h1",{className:"text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6",children:F.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300",children:"AWS Cloud Club I²IT"})}),F.jsx("p",{className:"mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10",children:"A student-driven community at I²IT where you explore AWS, cloud, and modern infrastructure through hands-on workshops, projects, and peer learning."}),F.jsxs("div",{className:"flex justify-center gap-4",children:[F.jsx(zs,{to:"/about",className:"bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold py-3 px-8 rounded-full hover:brightness-110 transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-fuchsia-500/40",children:"Discover Our Mission"}),F.jsx(zs,{to:"/events",className:"bg-white/5 backdrop-blur-md text-gray-100 font-bold py-3 px-8 rounded-full border border-white/15 hover:border-fuchsia-300/70 hover:bg-white/10 transition-colors duration-300",children:"Upcoming Meetups"})]})]})}),F.jsxs(or,{children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Why Join Us?"}),F.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto text-lg",children:"Empowering students with industry-relevant cloud skills and a strong network."})]}),F.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[F.jsxs($o,{className:"text-center group",children:[F.jsx("div",{className:"w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300",children:F.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})})}),F.jsx("h3",{className:"text-xl font-bold mb-3 text-white",children:"Hands-on Labs"}),F.jsx("p",{className:"text-gray-400",children:"Get practical experience with real AWS services. Build projects that matter and learn by doing."})]}),F.jsxs($o,{className:"text-center group",children:[F.jsx("div",{className:"w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300",children:F.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),F.jsx("h3",{className:"text-xl font-bold mb-3 text-white",children:"Networking"}),F.jsx("p",{className:"text-gray-400",children:"Connect with like-minded students, industry experts, and AWS professionals in our community."})]}),F.jsxs($o,{className:"text-center group",children:[F.jsx("div",{className:"w-16 h-16 mx-auto bg-white/[0.08] rounded-2xl flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 transition-transform duration-300",children:F.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),F.jsx("h3",{className:"text-xl font-bold mb-3 text-white",children:"Career Growth"}),F.jsx("p",{className:"text-gray-400",children:"Prepare for AWS certifications, get resume reviews, and discover internship opportunities in cloud computing."})]})]})]}),F.jsx(or,{children:F.jsxs("div",{className:"bg-white/[0.04] backdrop-blur-xl rounded-3xl p-10 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden",children:[F.jsx("div",{className:"absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-fuchsia-500 opacity-15 rounded-full blur-3xl"}),F.jsx("div",{className:"absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 opacity-15 rounded-full blur-3xl"}),F.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-6 relative z-10",children:"Ready to start your cloud journey?"}),F.jsx("p",{className:"text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10",children:"Learn AWS step by step with peers, apply concepts in small projects, and grow into cloud, DevOps, and modern infrastructure with a supportive community."}),F.jsx("div",{className:"relative z-10",children:F.jsx("a",{href:"#",className:"inline-block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold py-4 px-10 rounded-full hover:brightness-110 transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-fuchsia-500/40",children:"Join the Community"})})]})})]})}function vR(){return F.jsx("div",{className:"flex flex-col min-h-screen pt-16",children:F.jsxs(or,{children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsxs("h1",{className:"text-4xl md:text-6xl font-extrabold tracking-tight mb-6",children:["Community"," ",F.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300",children:"Moments"})]}),F.jsx("p",{className:"max-w-2xl mx-auto text-xl text-gray-400",children:"A visual timeline of our journey, events, and the amazing people who make up the AWS Community at I2IT."})]}),F.jsxs("div",{className:"relative flex items-center justify-center w-full h-[500px] md:h-[600px] rounded-3xl bg-white/[0.03] border border-fuchsia-500/20 backdrop-blur-xl mt-4 shadow-2xl overflow-hidden group hover:border-fuchsia-400/40 transition-all duration-500",children:[F.jsx("div",{className:"absolute top-0 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"}),F.jsx("div",{className:"absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse [animation-delay:1s]"}),F.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent"}),F.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"}),F.jsxs("div",{className:"relative text-center p-8 z-10",children:[F.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[F.jsxs("span",{className:"relative flex h-3 w-3",children:[F.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"}),F.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-fuchsia-400"})]}),F.jsx("span",{className:"text-fuchsia-300/90 text-sm font-semibold uppercase tracking-[0.2em]",children:"Under Construction"})]}),F.jsx("h2",{className:"text-4xl md:text-6xl font-extrabold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 drop-shadow-lg",children:"Coming Soon"}),F.jsx("p",{className:"text-gray-400/80 text-lg md:text-xl max-w-md mx-auto",children:"We are curating our best moments. Stay tuned!"})]})]})]})})}function _R(){return F.jsxs("div",{className:"flex flex-col min-h-screen pt-16",children:[F.jsx("section",{className:"relative py-20 text-center overflow-hidden",children:F.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-tight mb-6",children:["Mission and"," ",F.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300",children:"Vision"})]}),F.jsx("p",{className:"text-xl md:text-2xl text-gray-300 font-medium",children:"Building the next generation of cloud leaders in India."})]})}),F.jsx(or,{children:F.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",children:[F.jsxs($o,{className:"flex flex-col h-full border-t-4 border-t-fuchsia-500/80",children:[F.jsx("div",{className:"mb-6 rounded-full bg-white/[0.08] w-16 h-16 flex items-center justify-center text-fuchsia-300",children:F.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),F.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Our Mission"}),F.jsx("p",{className:"text-gray-400 text-lg leading-relaxed flex-grow",children:"To empower students at I2IT with comprehensive, practical knowledge of AWS cloud technologies. We strive to bridge the gap between academic learning and industry requirements by providing a platform for hands-on experimentation, collaborative projects, and peer-to-peer mentorship."})]}),F.jsxs($o,{className:"flex flex-col h-full border-t-4 border-t-violet-500/80",children:[F.jsx("div",{className:"mb-6 rounded-full bg-white/[0.08] w-16 h-16 flex items-center justify-center text-violet-300",children:F.jsxs("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),F.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Our Vision"}),F.jsx("p",{className:"text-gray-400 text-lg leading-relaxed flex-grow",children:"To become a leading center of excellence for cloud computing education among student communities. We envision a future where every student graduates with the confidence and skills to architect scalable, secure, and innovative solutions on the AWS Cloud."})]})]})}),F.jsxs(or,{children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Core Values"}),F.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 mx-auto rounded-full"})]}),F.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:["Innovation","Collaboration","Inclusivity","Excellence"].map((s,e)=>F.jsxs("div",{className:"bg-white/[0.05] backdrop-blur-xl rounded-xl p-6 text-center border border-white/10 hover:border-fuchsia-400/50 transition-colors duration-300",children:[F.jsxs("span",{className:"text-4xl md:text-5xl font-black text-fuchsia-900/60 block mb-2",children:["0",e+1]}),F.jsx("h3",{className:"text-xl font-bold text-white",children:s})]},e))})]}),F.jsx(or,{children:F.jsxs("div",{className:"max-w-3xl mx-auto text-center bg-white/[0.04] backdrop-blur-xl rounded-3xl p-10 border border-white/10",children:[F.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Drive the movement with us"}),F.jsx("p",{className:"text-gray-400 mb-8 text-lg",children:"Whether you are a beginner or a cloud expert, there is a place for you in our community."}),F.jsx("button",{className:"bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold py-3 px-8 rounded-full hover:brightness-110 transition-colors duration-300",children:"Become a Member"})]})})]})}function xR({question:s,answer:e,isOpenByDefault:i=!1}){const[r,l]=pe.useState(i);return F.jsxs("div",{className:"border border-white/10 rounded-xl overflow-hidden mb-4 bg-white/[0.05] backdrop-blur-xl transition-colors hover:border-white/20",children:[F.jsxs("button",{type:"button",onClick:()=>l(!r),className:"flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none",children:[F.jsx("span",{className:"text-lg font-bold text-white",children:s}),F.jsx("span",{className:`ml-6 flex-shrink-0 transition-transform duration-300 text-[#FF9900] ${r?"rotate-180":""}`,children:F.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})]}),F.jsx("div",{className:`transition-all duration-300 ease-in-out px-6 overflow-hidden ${r?"max-h-96 pb-5 opacity-100":"max-h-0 opacity-0"}`,children:F.jsx("div",{className:"text-gray-400 prose prose-invert",children:F.jsx("p",{children:e})})})]})}const SR=[{question:"What is the AWS Community I2IT?",answer:"We are a student-led technical community focused on cloud computing, specifically Amazon Web Services. Our goal is to spread awareness, provide hands-on experience, and build a strong network of cloud enthusiasts at our college."},{question:"Do I need prior cloud experience to join?",answer:"No. Beginners are welcome. The club organizes beginner-friendly sessions that start from the basics of cloud computing and gradually move toward advanced topics."},{question:"How can I become a member?",answer:"You can officially register during our recruitment drives at the beginning of the semester. However, most of our general meetups, online discussions, and basic workshops are open to all students year-round."},{question:"How can this help my career?",answer:"Cloud computing is one of the most in-demand skills in the tech industry today. By joining, you'll gain practical experience, prepare for industry-recognized AWS Certifications, build resume-worthy projects, and network with professionals who can help land internships and jobs."}];function yR(){return F.jsxs("div",{className:"flex flex-col min-h-screen pt-16",children:[F.jsx("section",{className:"relative py-20 text-center overflow-hidden",children:F.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-tight mb-6",children:["Technical"," ",F.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300",children:"Queries"})]}),F.jsx("p",{className:"text-xl md:text-2xl text-gray-300 font-medium",children:"Everything you need to know about joining and succeeding in the AWS Community."})]})}),F.jsx(or,{className:"flex-grow",children:F.jsxs("div",{className:"max-w-3xl mx-auto",children:[SR.map((s,e)=>F.jsx(xR,{question:s.question,answer:s.answer,isOpenByDefault:e===0},e)),F.jsxs("div",{className:"mt-12 text-center p-8 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl",children:[F.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Still have questions?"}),F.jsx("p",{className:"text-gray-400 mb-6",children:"Can't find the answer you're looking for? Reach out to our team directly."}),F.jsxs("a",{href:"https://www.linkedin.com/company/awsi2it/posts/?feedView=all",target:"_blank",className:"inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white font-bold py-3 px-6 rounded-full hover:brightness-110 transition-colors duration-300",children:[F.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Contact Support"]})]})]})})]})}function MR({event:s}){const{title:e,date:i,time:r,location:l,description:u,image:d,tags:p,isUpcoming:m,registrationLink:h}=s;return F.jsxs("div",{className:`flex flex-col md:flex-row bg-white/[0.05] backdrop-blur-xl rounded-2xl overflow-hidden border ${m?"border-[#FF9900]/50":"border-white/10"} hover:border-[#FF9900] transition-colors duration-300 shadow-xl relative`,children:[m&&F.jsx("div",{className:"absolute top-4 right-4 z-10 bg-[#FF9900] text-[#0f1b29] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide",children:"Upcoming"}),F.jsxs("div",{className:"md:w-1/3 min-h-[200px] md:min-h-full shrink-0 relative",children:[F.jsx("img",{src:d,alt:e,className:"w-full h-full object-fill absolute inset-0",loading:"lazy"}),F.jsx("div",{className:"absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80 md:opacity-100"})]}),F.jsxs("div",{className:"p-6 md:p-8 flex flex-col justify-between flex-grow",children:[F.jsxs("div",{children:[F.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:p.map((_,g)=>F.jsx("span",{className:"bg-[#0f1b29] text-[#FF9900] text-xs font-semibold px-2.5 py-1 rounded border border-gray-700",children:_},g))}),F.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:e}),F.jsx("p",{className:"text-gray-400 mb-6 line-clamp-3",children:u})]}),F.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4 pt-4 border-t border-gray-700",children:[F.jsxs("div",{className:"space-y-1",children:[F.jsxs("div",{className:"flex items-center text-sm text-gray-300",children:[F.jsx("svg",{className:"w-4 h-4 mr-2 text-[#FF9900]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),i," at ",r]}),F.jsxs("div",{className:"flex items-center text-sm text-gray-300",children:[F.jsxs("svg",{className:"w-4 h-4 mr-2 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"}),F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),l]})]}),F.jsx("button",{className:`shrink-0 font-bold py-2 px-6 rounded-full transition-colors duration-300 ${m?"bg-white text-[#0f1b29] hover:bg-gray-200":"bg-[#0f1b29] text-white border border-gray-600 hover:border-gray-400"}`,onClick:m?()=>window.open(h,"_blank"):null,children:m?"Register Now":"View Recap"})]})]})]})}const ER=[{id:1,title:"Launch of AWS Cloud Club",date:"March 9, 2026",time:"3:45 PM - 4:45 PM",location:"Convention Center , Academic Block",description:"Join us as we break down the complexities of cloud technology, highlight the opportunities available through our club, and outline our vision for exciting journey ahead.",image:"https://secure.meetupstatic.com/photos/event/1/5/5/8/highres_533045464.webp?w=750",tags:["Launch Event"],isUpcoming:!0,registrationLink:"https://www.meetup.com/aws-i2it/events/313649260/?eventOrigin=group_events_list&utm_version=v2&member_id=451867731"}];function bR(){return F.jsxs("div",{className:"flex flex-col min-h-screen pt-16",children:[F.jsx("section",{className:"relative py-20 text-center",children:F.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4",children:["Upcoming"," ",F.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300",children:"Meetups"})]}),F.jsx("p",{className:"text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto",children:"Join us at our next event. Learn, build, and grow your cloud skillset alongside peers."})]})}),F.jsx(or,{className:"flex-grow",children:F.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[ER.map(s=>F.jsx(MR,{event:s},s.id)),F.jsxs("div",{className:"relative flex flex-col md:flex-row rounded-2xl bg-white/[0.03] border border-fuchsia-500/20 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-fuchsia-400/40 transition-all duration-500 min-h-[220px]",children:[F.jsx("div",{className:"absolute top-0 left-1/3 w-56 h-56 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse"}),F.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent"}),F.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"}),F.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full p-20 text-center",children:[F.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[F.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[F.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"}),F.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-400"})]}),F.jsx("span",{className:"text-fuchsia-300/90 text-xs font-semibold uppercase tracking-[0.2em]",children:"Coming Soon"})]}),F.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 mb-2",children:"New Event Loading..."}),F.jsx("p",{className:"text-gray-400/70 text-sm md:text-base max-w-sm",children:"Something exciting is being planned. Stay connected for updates!"})]})]}),F.jsxs("div",{className:"relative flex flex-col md:flex-row rounded-2xl bg-white/[0.03] border border-violet-400/20 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-violet-300/40 transition-all duration-500 min-h-[220px]",children:[F.jsx("div",{className:"absolute top-0 right-1/3 w-56 h-56 bg-violet-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse [animation-delay:0.3s]"}),F.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-300/50 to-transparent"}),F.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent"}),F.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full p-20 text-center",children:[F.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[F.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[F.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"}),F.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-300"})]}),F.jsx("span",{className:"text-violet-300/90 text-xs font-semibold uppercase tracking-[0.2em]",children:"To Be Announced"})]}),F.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 mb-2",children:"More Events Brewing..."}),F.jsx("p",{className:"text-gray-400/70 text-sm md:text-base max-w-sm",children:"Our team is cooking up something amazing. Check back soon!"})]})]})]})})]})}function TR(){const[s,e]=pe.useState(!1);return F.jsxs("div",{className:"relative min-h-screen flex flex-col items-stretch text-white",children:[F.jsx(mR,{isPaused:s}),F.jsx("button",{onClick:()=>e(!s),className:"fixed top-20 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg","aria-label":s?"Play animation":"Pause animation",title:s?"Play animation":"Pause animation",children:s?F.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:F.jsx("path",{d:"M8 5.14v14l11-7-11-7z"})}):F.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[F.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),F.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]})}),F.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[F.jsx(QM,{}),F.jsx("main",{className:"flex-grow",children:F.jsxs(_M,{children:[F.jsx(Fs,{path:"/",element:F.jsx(gR,{})}),F.jsx(Fs,{path:"/about",element:F.jsx(_R,{})}),F.jsx(Fs,{path:"/gallery",element:F.jsx(vR,{})}),F.jsx(Fs,{path:"/events",element:F.jsx(bR,{})}),F.jsx(Fs,{path:"/faq",element:F.jsx(yR,{})})]})}),F.jsx(JM,{})]})]})}Sy.createRoot(document.getElementById("root")).render(F.jsx(pe.StrictMode,{children:F.jsx(VM,{children:F.jsx(TR,{})})}));
