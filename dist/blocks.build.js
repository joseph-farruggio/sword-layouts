/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tiles_tile_block_js__ = __webpack_require__(/*! ./tiles/tile_block.js */ 1);\n\n// ..more blocks enroute, standby//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/Mjc5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdGlsZXMvdGlsZV9ibG9jay5qcyc7XG4vLyAuLm1vcmUgYmxvY2tzIGVucm91dGUsIHN0YW5kYnlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/tiles/tile_block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * Tile Layout\n *\n * @package: Sword Layouts\n */\n\n/* eslint-disable react/jsx-key */\n\n\n\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText,\n    MediaUpload = _wp$blocks.MediaUpload,\n    InspectorControls = _wp$blocks.InspectorControls,\n    BlockDescription = _wp$blocks.BlockDescription,\n    AlignmentToolbar = _wp$blocks.AlignmentToolbar,\n    BlockControls = _wp$blocks.BlockControls;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    Dashicon = _wp$components.Dashicon,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle;\n\n\nregisterBlockType('swrdlyts/tile', {\n\ttitle: __('Sword Layouts', 'swrdlyts'),\n\ticon: 'shield',\n\tcategory: 'layout',\n\tkeywords: [__('tile'), __('stagger'), __('image')],\n\tattributes: {\n\t\timgURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: '.imageBox',\n\t\t\tattribute: 'data-imgurl',\n\t\t\tdefault: ''\n\t\t},\n\t\timgID: {\n\t\t\ttype: 'number',\n\t\t\tdefault: ''\n\t\t},\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.textBoxContent',\n\t\t\tdefault: ''\n\t\t},\n\t\tinvert: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: false\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\tgetEditWrapperProps: function getEditWrapperProps() {\n\t\treturn { 'data-align': 'full' };\n\t},\n\n\t// ----\n\t// EDIT\n\t// ----\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className,\n\t\t    focus = _ref.focus;\n\n\t\tvar onChangeContent = function onChangeContent(value) {\n\t\t\tsetAttributes({ content: value });\n\t\t};\n\t\tvar togglePosition = function togglePosition() {\n\t\t\tsetAttributes({ invert: !attributes.invert });\n\t\t};\n\t\tvar onSelectImage = function onSelectImage(img) {\n\t\t\tsetAttributes({\n\t\t\t\timgID: img.id,\n\t\t\t\timgURL: img.url\n\t\t\t});\n\t\t};\n\t\tvar onChangeAlignment = function onChangeAlignment(value) {\n\t\t\tsetAttributes({ alignment: value });\n\t\t};\n\t\tvar buttonText = !attributes.imgID ? 'Select Image' : 'Change Image';\n\t\tvar buttonIcon = !attributes.imgID ? 'add' : 'edit';\n\t\treturn [!!focus && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockDescription,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Block controls.  Do more.')\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('Invert Layout') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\thtmlFor: 'invert-form-toggle',\n\t\t\t\t\t\t\tclassName: 'blocks-base-control__label'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t__('Invert Layout')\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(FormToggle, {\n\t\t\t\t\t\tid: 'invert-form-toggle',\n\t\t\t\t\t\tlabel: __('Invert Layout'),\n\t\t\t\t\t\tchecked: !!attributes.invert,\n\t\t\t\t\t\tonChange: togglePosition\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{\n\t\t\t\tclassName: className,\n\t\t\t\t'data-invert': attributes.invert ? 'true' : 'false',\n\t\t\t\t'data-align': 'full'\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'imageBox',\n\t\t\t\t\tstyle: { backgroundImage: 'url(' + attributes.imgURL + ')' },\n\t\t\t\t\t'data-imgurl': attributes.imgURL,\n\t\t\t\t\t'data-imgid': attributes.imgID,\n\t\t\t\t\t'data-hasimg': !!attributes.imgID ? 'true' : 'false'\n\t\t\t\t},\n\t\t\t\t!!focus ? wp.element.createElement(MediaUpload, {\n\t\t\t\t\tbuttonProps: {\n\t\t\t\t\t\tclassName: 'components-button button button-large'\n\t\t\t\t\t},\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: attributes.imgID,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tisLarge: true,\n\t\t\t\t\t\t\t\tonClick: open,\n\t\t\t\t\t\t\t\tclassName: 'components-button components-icon-button button button-large wp-block-image__upload-button'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\twp.element.createElement(Dashicon, { icon: buttonIcon }),\n\t\t\t\t\t\t\tbuttonText\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}) : null\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\t!!focus && wp.element.createElement(\n\t\t\t\t\tBlockControls,\n\t\t\t\t\t{ key: 'controls' },\n\t\t\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\t\t\tvalue: attributes.alignment,\n\t\t\t\t\t\tonChange: onChangeAlignment\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagname: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tclassName: 'textBoxContent',\n\t\t\t\t\tplaceholder: '....',\n\t\t\t\t\tstyle: { textAlign: attributes.alignment },\n\t\t\t\t\tvalue: attributes.content,\n\t\t\t\t\tonChange: onChangeContent\n\t\t\t\t})\n\t\t\t)\n\t\t)];\n\t},\n\n\t// ----\n\t// SAVE\n\t// ----\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className, 'data-invert': props.attributes.invert },\n\t\t\twp.element.createElement('div', {\n\t\t\t\tclassName: 'imageBox',\n\t\t\t\t'data-imgurl': props.attributes.imgURL,\n\t\t\t\t'data-imgid': props.attributes.imgID,\n\t\t\t\tstyle: { backgroundImage: 'url(' + props.attributes.imgURL + ')' }\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'textBox' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{\n\t\t\t\t\t\tclassName: 'textBoxContent',\n\t\t\t\t\t\tstyle: { textAlign: props.attributes.alignment }\n\t\t\t\t\t},\n\t\t\t\t\tprops.attributes.content\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWxlcy90aWxlX2Jsb2NrLmpzPzU0MmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaWxlIExheW91dFxuICpcbiAqIEBwYWNrYWdlOiBTd29yZCBMYXlvdXRzXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWtleSAqL1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBSaWNoVGV4dCA9IF93cCRibG9ja3MuUmljaFRleHQsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkYmxvY2tzLk1lZGlhVXBsb2FkLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2Nrcy5JbnNwZWN0b3JDb250cm9scyxcbiAgICBCbG9ja0Rlc2NyaXB0aW9uID0gX3dwJGJsb2Nrcy5CbG9ja0Rlc2NyaXB0aW9uLFxuICAgIEFsaWdubWVudFRvb2xiYXIgPSBfd3AkYmxvY2tzLkFsaWdubWVudFRvb2xiYXIsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRibG9ja3MuQmxvY2tDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIERhc2hpY29uID0gX3dwJGNvbXBvbmVudHMuRGFzaGljb24sXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGU7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3N3cmRseXRzL3RpbGUnLCB7XG5cdHRpdGxlOiBfXygnU3dvcmQgTGF5b3V0cycsICdzd3JkbHl0cycpLFxuXHRpY29uOiAnc2hpZWxkJyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRrZXl3b3JkczogW19fKCd0aWxlJyksIF9fKCdzdGFnZ2VyJyksIF9fKCdpbWFnZScpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdGltZ1VSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuXHRcdFx0c2VsZWN0b3I6ICcuaW1hZ2VCb3gnLFxuXHRcdFx0YXR0cmlidXRlOiAnZGF0YS1pbWd1cmwnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGltZ0lEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fSxcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcudGV4dEJveENvbnRlbnQnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGludmVydDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cdGdldEVkaXRXcmFwcGVyUHJvcHM6IGZ1bmN0aW9uIGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0cmV0dXJuIHsgJ2RhdGEtYWxpZ24nOiAnZnVsbCcgfTtcblx0fSxcblxuXHQvLyAtLS0tXG5cdC8vIEVESVRcblx0Ly8gLS0tLVxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIGZvY3VzID0gX3JlZi5mb2N1cztcblxuXHRcdHZhciBvbkNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQodmFsdWUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiB2YWx1ZSB9KTtcblx0XHR9O1xuXHRcdHZhciB0b2dnbGVQb3NpdGlvbiA9IGZ1bmN0aW9uIHRvZ2dsZVBvc2l0aW9uKCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGludmVydDogIWF0dHJpYnV0ZXMuaW52ZXJ0IH0pO1xuXHRcdH07XG5cdFx0dmFyIG9uU2VsZWN0SW1hZ2UgPSBmdW5jdGlvbiBvblNlbGVjdEltYWdlKGltZykge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltZ0lEOiBpbWcuaWQsXG5cdFx0XHRcdGltZ1VSTDogaW1nLnVybFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHR2YXIgb25DaGFuZ2VBbGlnbm1lbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUFsaWdubWVudCh2YWx1ZSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogdmFsdWUgfSk7XG5cdFx0fTtcblx0XHR2YXIgYnV0dG9uVGV4dCA9ICFhdHRyaWJ1dGVzLmltZ0lEID8gJ1NlbGVjdCBJbWFnZScgOiAnQ2hhbmdlIEltYWdlJztcblx0XHR2YXIgYnV0dG9uSWNvbiA9ICFhdHRyaWJ1dGVzLmltZ0lEID8gJ2FkZCcgOiAnZWRpdCc7XG5cdFx0cmV0dXJuIFshIWZvY3VzICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0eyBrZXk6ICdpbnNwZWN0b3InIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEJsb2NrRGVzY3JpcHRpb24sXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRfXygnQmxvY2sgY29udHJvbHMuICBEbyBtb3JlLicpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0eyB0aXRsZTogX18oJ0ludmVydCBMYXlvdXQnKSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRodG1sRm9yOiAnaW52ZXJ0LWZvcm0tdG9nZ2xlJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYmxvY2tzLWJhc2UtY29udHJvbF9fbGFiZWwnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0X18oJ0ludmVydCBMYXlvdXQnKVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEZvcm1Ub2dnbGUsIHtcblx0XHRcdFx0XHRcdGlkOiAnaW52ZXJ0LWZvcm0tdG9nZ2xlJyxcblx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSW52ZXJ0IExheW91dCcpLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogISFhdHRyaWJ1dGVzLmludmVydCxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0b2dnbGVQb3NpdGlvblxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdCdkYXRhLWludmVydCc6IGF0dHJpYnV0ZXMuaW52ZXJ0ID8gJ3RydWUnIDogJ2ZhbHNlJyxcblx0XHRcdFx0J2RhdGEtYWxpZ24nOiAnZnVsbCdcblx0XHRcdH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnaW1hZ2VCb3gnLFxuXHRcdFx0XHRcdHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgYXR0cmlidXRlcy5pbWdVUkwgKyAnKScgfSxcblx0XHRcdFx0XHQnZGF0YS1pbWd1cmwnOiBhdHRyaWJ1dGVzLmltZ1VSTCxcblx0XHRcdFx0XHQnZGF0YS1pbWdpZCc6IGF0dHJpYnV0ZXMuaW1nSUQsXG5cdFx0XHRcdFx0J2RhdGEtaGFzaW1nJzogISFhdHRyaWJ1dGVzLmltZ0lEID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQhIWZvY3VzID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0YnV0dG9uUHJvcHM6IHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtYnV0dG9uIGJ1dHRvbiBidXR0b24tbGFyZ2UnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3RJbWFnZSxcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmltZ0lELFxuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRpc0xhcmdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW4sXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY29tcG9uZW50cy1idXR0b24gY29tcG9uZW50cy1pY29uLWJ1dHRvbiBidXR0b24gYnV0dG9uLWxhcmdlIHdwLWJsb2NrLWltYWdlX191cGxvYWQtYnV0dG9uJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRGFzaGljb24sIHsgaWNvbjogYnV0dG9uSWNvbiB9KSxcblx0XHRcdFx0XHRcdFx0YnV0dG9uVGV4dFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDogbnVsbFxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dEJveCcgfSxcblx0XHRcdFx0ISFmb2N1cyAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0XHR7IGtleTogJ2NvbnRyb2xzJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBbGlnbm1lbnRUb29sYmFyLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5hbGlnbm1lbnQsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VBbGlnbm1lbnRcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0XHR0YWduYW1lOiAnZGl2Jyxcblx0XHRcdFx0XHRtdWx0aWxpbmU6ICdwJyxcblx0XHRcdFx0XHRjbGFzc05hbWU6ICd0ZXh0Qm94Q29udGVudCcsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICcuLi4uJyxcblx0XHRcdFx0XHRzdHlsZTogeyB0ZXh0QWxpZ246IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH0sXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KV07XG5cdH0sXG5cblx0Ly8gLS0tLVxuXHQvLyBTQVZFXG5cdC8vIC0tLS1cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsICdkYXRhLWludmVydCc6IHByb3BzLmF0dHJpYnV0ZXMuaW52ZXJ0IH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaW1hZ2VCb3gnLFxuXHRcdFx0XHQnZGF0YS1pbWd1cmwnOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ1VSTCxcblx0XHRcdFx0J2RhdGEtaW1naWQnOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ0lELFxuXHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmF0dHJpYnV0ZXMuaW1nVVJMICsgJyknIH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICd0ZXh0Qm94JyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAndGV4dEJveENvbnRlbnQnLFxuXHRcdFx0XHRcdFx0c3R5bGU6IHsgdGV4dEFsaWduOiBwcm9wcy5hdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RpbGVzL3RpbGVfYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/tiles/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWxlcy9zdHlsZS5zY3NzP2VlNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90aWxlcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/tiles/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWxlcy9lZGl0b3Iuc2Nzcz9jYzRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGlsZXMvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);