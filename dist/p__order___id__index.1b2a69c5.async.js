(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{fqQ7:function(e,t,n){"use strict";n.r(t);n("cIOH"),n("jhiw");var r=n("q1tI"),a=n.n(r),c=n("TSYQ"),o=n.n(c),l=n("Zm9Q"),i=n("6CfX"),s=n("ACnJ"),u=n("H84U");function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t,n=e.child,a=e.bordered,c=e.colon,l=e.type,i=e.layout,s=n.props,u=s.prefixCls,p=s.label,f=s.className,d=s.children,b=s.span,y=void 0===b?1:b,h={className:o()("".concat(u,"-item-label"),(t={},m(t,"".concat(u,"-item-colon"),c),m(t,"".concat(u,"-item-no-label"),!p),t)),key:"label"};return"vertical"===i&&(h.colSpan=2*y-1),a?"label"===l?r["createElement"]("th",h,p):r["createElement"]("td",{className:o()("".concat(u,"-item-content"),f),key:"content",colSpan:2*y-1},d):"vertical"===i?"content"===l?r["createElement"]("td",{colSpan:y,className:o()("".concat(u,"-item"),f)},r["createElement"]("span",{className:"".concat(u,"-item-content"),key:"content"},d)):r["createElement"]("td",{colSpan:y,className:o()("".concat(u,"-item"),f)},r["createElement"]("span",{className:o()("".concat(u,"-item-label"),m({},"".concat(u,"-item-colon"),c)),key:"label"},p)):r["createElement"]("td",{colSpan:y,className:o()("".concat(u,"-item"),f)},r["createElement"]("span",h,p),r["createElement"]("span",{className:"".concat(u,"-item-content"),key:"content"},d))},f=p;function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function E(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function I(e){return e?Object(l["a"])(e).reduce(function(e,t){return t&&t.type===r["Fragment"]?e.concat(I(t.props.children)):(e.push(t),e)},[]):[]}var j=function(e){var t=e.children;return t},k=function(e,t){var n,a=[],c=null,o=I(e);return o.forEach(function(e,l){var s=e;c||(n=t,c=[],a.push(c));var u=l===o.length-1,m=!0;u&&(m=!s.props.span||s.props.span===n,s=r["cloneElement"](s,{span:n}));var p=s.props.span,f=void 0===p?1:p;c.push(s),n-=f,n<=0&&(c=null,Object(i["a"])(0===n&&m,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions."))}),a},D=function(e,t,n,a,c,o){var l=n.prefixCls,i=function(e,t,n){return r["createElement"](f,{child:e,bordered:a,colon:o,type:t,key:"".concat(t,"-").concat(e.key||n),layout:c})},s=[],u=[];return I(e).forEach(function(e,t){s.push(i(e,"label",t)),"vertical"===c?u.push(i(e,"content",t)):a&&s.push(i(e,"content",t))}),"vertical"===c?[r["createElement"]("tr",{className:"".concat(l,"-row"),key:"label-".concat(t)},s),r["createElement"]("tr",{className:"".concat(l,"-row"),key:"content-".concat(t)},u)]:r["createElement"]("tr",{className:"".concat(l,"-row"),key:t},s)},N={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},S=function(e){function t(){var e;return y(this,t),e=E(this,O(t).apply(this,arguments)),e.state={screens:{}},e}return P(t,e),v(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.column;this.token=s["a"].subscribe(function(n){"object"===b(t)&&e.setState({screens:n})})}},{key:"componentWillUnmount",value:function(){s["a"].unsubscribe(this.token)}},{key:"getColumn",value:function(){var e=this.props.column;if("object"===b(e))for(var t=0;t<s["b"].length;t++){var n=s["b"][t];if(this.state.screens[n]&&void 0!==e[n])return e[n]||N[n]}return"number"===typeof e?e:3}},{key:"render",value:function(){var e=this;return r["createElement"](u["a"],null,function(t){var n,a=t.getPrefixCls,c=t.direction,l=e.props,i=l.className,s=l.prefixCls,u=l.title,m=l.size,p=l.children,f=l.bordered,b=void 0!==f&&f,y=l.layout,h=void 0===y?"horizontal":y,v=l.colon,E=void 0===v||v,g=l.style,O=a("descriptions",s),P=e.getColumn(),w=I(p).map(function(e){return r["isValidElement"](e)?r["cloneElement"](e,{prefixCls:O}):null}).filter(function(e){return e}),j=k(w,P);return r["createElement"]("div",{className:o()(O,i,(n={},d(n,"".concat(O,"-").concat(m),"default"!==m),d(n,"".concat(O,"-bordered"),!!b),d(n,"".concat(O,"-rtl"),"rtl"===c),n)),style:g},u&&r["createElement"]("div",{className:"".concat(O,"-title")},u),r["createElement"]("div",{className:"".concat(O,"-view")},r["createElement"]("table",null,r["createElement"]("tbody",null,j.map(function(e,t){return D(e,t,{prefixCls:O},b,h,E)})))))})}}]),t}(r["Component"]);S.defaultProps={size:"default",column:N},S.Item=j;var x,C,M,Y=S,_=n("2Taf"),T=n.n(_),z=n("vZ4D"),q=n.n(z),H=n("l4Ni"),U=n.n(H),J=n("ujKo"),R=n.n(J),Z=n("MhPg"),K=n.n(Z),Q=(n("17x9"),n("MuoO")),W=n("Kvkj"),A=(n("Mwp2"),n("VXEj")),L=n("jehZ"),V=n.n(L),X=(n("IzEo"),n("bx4M")),F=n("yYhx"),B=n.n(F),G=n("z0WU"),$=X["a"].Meta,ee=function(e){function t(){return T()(this,t),U()(this,R()(t).apply(this,arguments))}return K()(t,e),q()(t,[{key:"render",value:function(){var e=V()({},this.props);return a.a.createElement(A["a"],V()({grid:{gutter:16,column:4}},e,{renderItem:function(e){return a.a.createElement(A["a"].Item,null,a.a.createElement(X["a"],{hoverable:!0,style:{width:240},cover:a.a.createElement("img",{alt:e.name,src:e.imageUrl})},a.a.createElement($,{title:e.name}),a.a.createElement("br",null),a.a.createElement("p",{className:B.a.cardPtag},a.a.createElement("span",null,"Price: "),Object(G["a"])(e.price)),a.a.createElement("p",{className:B.a.cardPtag},a.a.createElement("span",null,"Number: "),e.number),a.a.createElement("p",{className:B.a.cardPtag},a.a.createElement("span",null,"Options: "),e.moreOptions),a.a.createElement("p",{className:B.a.cardPtag},a.a.createElement("span",null,"Total price: "),Object(G["a"])(e.price*e.number))))}}))}}]),t}(r["PureComponent"]),te=ee,ne=(n("Awhp"),n("KrTs")),re=n("wd/R"),ae=n.n(re),ce=function(e){function t(){return T()(this,t),U()(this,R()(t).apply(this,arguments))}return K()(t,e),q()(t,[{key:"render",value:function(){var e=this.props.data,t="Order Info #"+e.id;return a.a.createElement(Y,{title:t,bordered:!0,size:"middle"},a.a.createElement(Y.Item,{label:"Receiver Name"},e.receiverName),a.a.createElement(Y.Item,{label:"Receiver Phone"},e.receiverPhone),a.a.createElement(Y.Item,{label:"Messenger ID"},e.userId),a.a.createElement(Y.Item,{label:"Delivery Located",span:3},e.deliveryLocated),a.a.createElement(Y.Item,{label:"Order time"},ae()(parseInt(e.orderTime)).format("DD/MM/YYYY HH:mm")),a.a.createElement(Y.Item,{label:"Delivery Time\t",span:2},ae()(parseInt(e.deliveryTime)).format("DD/MM/YYYY HH:mm")),a.a.createElement(Y.Item,{label:"Status",span:3},a.a.createElement(ne["a"],{status:"processing",text:e.status})),a.a.createElement(Y.Item,{label:"Price"},Object(G["a"])(e.totalPrice)),a.a.createElement(Y.Item,{label:"Shipping fee"},Object(G["a"])(e.fee)),a.a.createElement(Y.Item,{label:"Discount"},Object(G["a"])(e.discount)),a.a.createElement(Y.Item,{label:"Official price"},Object(G["a"])(e.totalPrice-e.fee-e.discount)))}}]),t}(r["PureComponent"]),oe=ce,le=n("ZD0w"),ie=(x=Object(le["withI18n"])(),C=Object(Q["connect"])(function(e){var t=e.orderDetail,n=e.loading;return{orderDetail:t,loading:n}}),x(M=C(M=function(e){function t(){return T()(this,t),U()(this,R()(t).apply(this,arguments))}return K()(t,e),q()(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.orderDetail,n=t.pageId;console.log("pageId: "+parseInt(n)),e({type:"orderDetail/queryOrder",payload:{id:parseInt(n)}}),e({type:"orderDetail/queryOrderDetail",payload:{id:parseInt(n)}})}},{key:"render",value:function(){var e=this.props.orderDetail,t=e.order,n="Order Detail #"+t.id;return a.a.createElement(W["f"],{inner:!0},a.a.createElement(oe,{data:t}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(Y,{title:n,size:"middle"}),a.a.createElement(te,this.listProps))}},{key:"listProps",get:function(){var e=this.props,t=e.orderDetail,n=e.loading,r=t.detail;return console.log("detail== "+JSON.stringify(r)),{dataSource:r,loading:n.effects["orderDetail/queryOrderDetail"]}}}]),t}(r["PureComponent"]))||M)||M);t["default"]=ie},jhiw:function(e,t,n){},yYhx:function(e,t,n){e.exports={cardPtag:"cardPtag___PWUPq"}}}]);