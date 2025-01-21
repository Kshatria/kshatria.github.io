"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[870],{"./src/stories/modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Story,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Docs});var UIKit=__webpack_require__("./src/shared/UIKit/index.ts"),react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const HIDDEN={table:{disable:!0}},Docs={title:"Modal",component:UIKit.aF},Story={argTypes:{children:HIDDEN,visible:HIDDEN,onClose:HIDDEN},render:props=>{const modal=function useModal(){var defaultVisible=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useState2=_slicedToArray((0,react.useState)(defaultVisible),2),visible=_useState2[0],setVisible=_useState2[1],show=(0,react.useCallback)((function(){return setVisible(!0)}),[]),hide=(0,react.useCallback)((function(){return setVisible(!1)}),[]),toggle=(0,react.useCallback)((function(){return setVisible((function(prevValue){return!prevValue}))}),[]);return(0,react.useMemo)((function(){return{show,hide,toggle,visible}}),[hide,show,toggle,visible])}();return React.createElement(React.Fragment,null,React.createElement(UIKit.$n,{color:"Secondary",text:"Нажми меня",onClick:modal.show}),React.createElement(UIKit.aF,_extends({},props,{visible:modal.visible,onClose:modal.hide}),React.createElement("h2",null,"Привет Мир!"),React.createElement(UIKit.$n,{color:"Primary",text:"Продолжить",onClick:modal.hide})))},args:{visible:!1}},__namedExportsOrder=["Component"]}}]);