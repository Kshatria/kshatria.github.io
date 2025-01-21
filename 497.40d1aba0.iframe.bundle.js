/*! For license information please see 497.40d1aba0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[497],{"./src/shared/UIKit/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>Button_Button,Y9:()=>Header_Header,gu:()=>Logo_Logo,aF:()=>Modal_Modal});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/button/Button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button.A,options);const button_Button=Button.A&&Button.A.locals?Button.A.locals:void 0;var cn=bind_default().bind(button_Button),Button_Button=function Button(_ref){var color=_ref.color,disabled=_ref.disabled,text=_ref.text,onClick=_ref.onClick,btnClasses=cn("button",{"button--disabled":disabled,"button--primary":"Primary"===color,"button--secondary":"Secondary"===color});return react.createElement("button",{className:btnClasses,type:"button",onClick},text)};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"Primary"'},{value:'"Secondary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/UIKit/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/shared/UIKit/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Header=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/header/Header.scss"),Header_options={};Header_options.styleTagTransform=styleTagTransform_default(),Header_options.setAttributes=setAttributesWithoutAttributes_default(),Header_options.insert=insertBySelector_default().bind(null,"head"),Header_options.domAPI=styleDomAPI_default(),Header_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Header.A,Header_options);const header_Header=Header.A&&Header.A.locals?Header.A.locals:void 0;var Header_cn=bind_default().bind(header_Header),Header_Header=function Header(_ref){var children=_ref.children;return react.createElement("header",{className:Header_cn("header")},children)};try{Header_Header.displayName="Header",Header_Header.__docgenInfo={description:"",displayName:"Header",props:{children:{defaultValue:null,description:"Содержание всплывающего окна",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/UIKit/header/Header.tsx#Header"]={docgenInfo:Header_Header.__docgenInfo,name:"Header",path:"src/shared/UIKit/header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}var Logo=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/logo/Logo.scss"),Logo_options={};Logo_options.styleTagTransform=styleTagTransform_default(),Logo_options.setAttributes=setAttributesWithoutAttributes_default(),Logo_options.insert=insertBySelector_default().bind(null,"head"),Logo_options.domAPI=styleDomAPI_default(),Logo_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Logo.A,Logo_options);const logo_Logo=Logo.A&&Logo.A.locals?Logo.A.locals:void 0;var Logo_cn=bind_default().bind(logo_Logo),Logo_Logo=function Logo(){return react.createElement("div",{className:Logo_cn("logo")})},react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/modal/Modal.scss"),Modal_options={};Modal_options.styleTagTransform=styleTagTransform_default(),Modal_options.setAttributes=setAttributesWithoutAttributes_default(),Modal_options.insert=insertBySelector_default().bind(null,"head"),Modal_options.domAPI=styleDomAPI_default(),Modal_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal.A,Modal_options);const modal_Modal=Modal.A&&Modal.A.locals?Modal.A.locals:void 0;var Modal_cn=bind_default().bind(modal_Modal),Modal_Modal=function Modal(_ref){var children=_ref.children,onClose=_ref.onClose;return _ref.visible?(0,react_dom.createPortal)(react.createElement("div",{className:Modal_cn("modal")},react.createElement("div",{className:Modal_cn("modal__overlay"),onClick:onClose}),react.createElement("div",{className:Modal_cn("modal__content")},react.createElement("button",{className:Modal_cn("modal__close"),type:"button",onClick:onClose},"×"),react.createElement("div",{className:Modal_cn("modal__wrapper")},children))),document.body):null};try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"Содержание всплывающего окна",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Функция обработки закрытия всплывающего окна",name:"onClose",required:!0,type:{name:"() => void"}},visible:{defaultValue:null,description:"Признак видимости всплывающего окна",name:"visible",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/UIKit/modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/shared/UIKit/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/button/Button.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button{padding:10px 20px;border:none;border-radius:5px;cursor:pointer;font-size:16px;margin:0 auto;background-color:#000;color:#fff}.button:hover{background-color:#d3d3d3;color:#000}.button--disabled{pointer-events:none;opacity:.3}.button--primary{background-color:#000;color:#fff}.button--primary:hover{background-color:#d3d3d3;color:#000}.button--secondary{background-color:orange;color:#fff}.button--secondary:hover{background-color:#ff4500;color:#fff}","",{version:3,sources:["webpack://./src/shared/UIKit/button/Button.scss"],names:[],mappings:"AAAA,QACC,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CACA,aAAA,CACA,qBAAA,CACA,UAAA,CAEA,cACC,wBAAA,CACA,UAAA,CAGD,kBACC,mBAAA,CACA,UAAA,CAGD,iBACC,qBAAA,CACA,UAAA,CAEA,uBACC,wBAAA,CACA,UAAA,CAIF,mBACC,uBAAA,CACA,UAAA,CAEA,yBACC,wBAAA,CACA,UAAA",sourcesContent:[".button {\n\tpadding: 10px 20px;\n\tborder: none;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tmargin: 0 auto;\n\tbackground-color: black;\n\tcolor: white;\n\n\t&:hover {\n\t\tbackground-color: lightgray;\n\t\tcolor: black;\n\t}\n\n\t&--disabled {\n\t\tpointer-events: none;\n\t\topacity: 0.3;\n\t}\n\n\t&--primary {\n\t\tbackground-color: black;\n\t\tcolor: white;\n\n\t\t&:hover {\n\t\t\tbackground-color: lightgray;\n\t\t\tcolor: black;\n\t\t}\n\t}\n\n\t&--secondary {\n\t\tbackground-color: orange;\n\t\tcolor: white;\n\n\t\t&:hover {\n\t\t\tbackground-color: orangered;\n\t\t\tcolor: white;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/header/Header.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".header{position:fixed;left:0;right:0;box-shadow:0 5px 5px rgba(0,0,0,.3);padding:6px 20px;height:60px;display:flex;justify-content:space-between;align-items:center;background-color:#fff}","",{version:3,sources:["webpack://./src/shared/UIKit/header/Header.scss"],names:[],mappings:"AAAA,QACC,cAAA,CACA,MAAA,CACA,OAAA,CACA,mCAAA,CACA,gBAAA,CACA,WAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA",sourcesContent:[".header {\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\tbox-shadow: 0 5px 5px rgba(0, 0, 0, .3);\n\tpadding: 6px 20px;\n\theight: 60px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbackground-color: white;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/logo/Logo.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.logo{position:relative;width:60px;height:60px;border-radius:50%;background-color:#ff7f00}.logo::before{content:"+";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:50px;color:#111}',"",{version:3,sources:["webpack://./src/shared/UIKit/logo/Logo.scss"],names:[],mappings:"AAAA,MACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,wBAAA,CAEA,cACC,WAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,cAAA,CACA,UAAA",sourcesContent:['.logo {\n\tposition: relative;\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n\tbackground-color: #ff7f00;\n\n\t&::before {\n\t\tcontent: "+";\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tfont-size: 50px;\n\t\tcolor: #111;\n\t}\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/UIKit/modal/Modal.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7)}.modal__content{position:relative;max-width:400px;margin:100px auto;background:#fff;padding:20px;border-radius:10px;z-index:1100;text-align:center;color:#111}.modal__wrapper{min-height:100px}.modal__title{text-align:center;margin:0 0 40px;font-size:24px}.modal__text{margin-bottom:20px}.modal__close{position:absolute;top:10px;right:10px;background:rgba(0,0,0,0);color:orange;border:none;font-size:24px;cursor:pointer}.modal__close:hover{color:#ff4500}","",{version:3,sources:["webpack://./src/shared/UIKit/modal/Modal.scss"],names:[],mappings:"AAAA,OACC,cAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CAEA,gBACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CAGD,gBACC,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CACA,iBAAA,CACA,UAAA,CAGD,gBACC,gBAAA,CAGD,cACC,iBAAA,CACA,eAAA,CACA,cAAA,CAGD,aACC,kBAAA,CAGD,cACC,iBAAA,CACA,QAAA,CACA,UAAA,CACA,wBAAA,CACA,YAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CAEA,oBACC,aAAA",sourcesContent:[".modal {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\n\t&__overlay {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: rgba(0, 0, 0, 0.7);\n\t}\n\t\n\t&__content {\n\t\tposition: relative;\n\t\tmax-width: 400px;\n\t\tmargin: 100px auto;\n\t\tbackground: white;\n\t\tpadding: 20px;\n\t\tborder-radius: 10px;\n\t\tz-index: 1100;\n\t\ttext-align: center;\n\t\tcolor: #111;\n\t}\n\n\t&__wrapper {\n\t\tmin-height: 100px;\n\t}\n\t\n\t&__title {\n\t\ttext-align: center;\n\t\tmargin: 0 0 40px;\n\t\tfont-size: 24px;\n\t}\n\t\n\t&__text {\n\t\tmargin-bottom: 20px;\n\t}\n\t\n\t&__close {\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tright: 10px;\n\t\tbackground: transparent;\n\t\tcolor: orange;\n\t\tborder: none;\n\t\tfont-size: 24px;\n\t\tcursor: pointer;\n\n\t\t&:hover {\n\t\t\tcolor: orangered;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);