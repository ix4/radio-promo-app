!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=React},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(2),i=n(3);r.render(o.createElement(i.App,null),document.getElementById("root"))},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),c=n(4),a=n(5),u=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return r(e,t),e.prototype.componentDidMount=function(){var t=this;google.script.run.withSuccessHandler(function(e){t.setState({countries:e})}).getCountrySummaries()},e.prototype.render=function(){return i.createElement("div",null,i.createElement(c.Intro,null),i.createElement(a.CountryDropdown,{countries:this.state.countries}))},e}(i.Component);e.App=u},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return r(e,t),e.prototype.render=function(){return i.createElement("div",{className:"jumbotron"},i.createElement("h1",{className:"display-4"},"Radio Promo App"),i.createElement("p",{className:"lead"},"Explain things here..."),i.createElement("hr",{className:"my-4"}),i.createElement("p",null,"Maybe some more text here/"))},e}(i.Component);e.Intro=c},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),c=n(6),a=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return r(e,t),e.prototype.formatCountry=function(t){if(!t.id)return t.text;var e=t.code.toLowerCase();return"uk"===e&&(e="gb"),$(i.createElement("span",null,i.createElement("img",{className:"card-img-top",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+e+".svg",alt:"Card image cap"}),i.createElement("span",null,t.name," - ",t.stations," stations")))},e.prototype.render=function(){var t=$.fn.select2.amd.require("select2/data/customDataAdapter");return console.log("dropdown data adapter",t),i.createElement(c.Select2,{data:this.props.countries,templateResult:this.formatCountry,dataAdapter:t})},e}(i.Component);e.CountryDropdown=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),c=n(7);!function(){function t(t,e){}t.prototype.addOptions=function(t){},t.prototype.convertToOptions=function(t){return null}}();c.fn.select2.amd.define("select2/data/customDataAdapter",["select2/data/array"],function(t){return function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.$element=e,o}return r(e,t),e.prototype.updateOptions=function(t){this.$element.find("option").remove();this.addOptions(this.convertToOptions(t.data))},e}(t)});var a=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return r(e,t),e.prototype.componentDidMount=function(){console.log("did mount",this.props.dataAdapter),this.$el=c(this.el),this.$el.select2(this.props)},e.prototype.componentWillUnmount=function(){this.$el.select2("destroy")},e.prototype.componentDidUpdate=function(t){(console.log("did update",c(c(this.el).data("select2"))),JSON.stringify(t)!==JSON.stringify(this.props))&&(c(this.el).data("select2").dataAdapter.updateOptions(this.props),c(this.el).trigger("change"))},e.prototype.render=function(){var t=this;return i.createElement("div",null,i.createElement("select",{className:"select2",ref:function(e){return t.el=e}}))},e}(i.Component);e.Select2=a},function(t,e){t.exports=jQuery}]);
//# sourceMappingURL=index_bundle.js.map