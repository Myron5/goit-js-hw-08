function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var r,i,o,u,a,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function T(e){return l=e,a=setTimeout(j,t),c?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function j(){var e=p();if(S(e))return R(e);a=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function R(e){return a=void 0,g&&r?y(e):(r=i=void 0,u)}function h(){var e=p(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return T(f);if(s)return a=setTimeout(j,t),y(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=b(t)||0,v(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=i=a=void 0},h.flush=function(){return void 0===a?u:R(p())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y={formRef:document.querySelector(".feedback-form"),emailInputRef:document.querySelector(".feedback-email"),messageInputRef:document.querySelector(".feedback-message"),buttonRef:document.querySelector(".feedback-button")};(()=>{const e=JSON.parse(localStorage.getItem("input"))||{email:"",message:""};y.emailInputRef.value=e.email,y.messageInputRef.value=e.message})(),y.formRef.addEventListener("input",e(t)((e=>localStorage.setItem("input",JSON.stringify({email:y.emailInputRef.value,message:y.messageInputRef.value}))),500)),y.formRef.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value}),e.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.994cd94d.js.map
