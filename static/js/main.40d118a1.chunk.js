(this["webpackJsonpanh-dang-project-five"]=this["webpackJsonpanh-dang-project-five"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.7e841cd3.jpg"},21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(26),a(2)),i=a(3),s=a(5),u=a(4),m=a(20),d=a.n(m),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",null),r.a.createElement("div",{className:"headerImage"},r.a.createElement("img",{src:d.a,alt:"Bakery Logo"})),r.a.createElement("h1",null,"Life is short!"),r.a.createElement("h2",null,"Eat dessert first!")))}}]),a}(n.Component),h=a(13),g=a(11),f=a.n(g);a(27);f.a.initializeApp({apiKey:"AIzaSyBTCK4vDsDPy7QORKwccUNTSlKuEsTsC_o",authDomain:"desserts-corner.firebaseapp.com",databaseURL:"https://desserts-corner.firebaseio.com",projectId:"desserts-corner",storageBucket:"desserts-corner.appspot.com",messagingSenderId:"596476269546",appId:"1:596476269546:web:0298aec07519180a239893"});var v=f.a,E=a(6),b=a(7),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleHideBag,a=e.userBag,n=e.removeCake,l=e.total;return r.a.createElement("div",{className:"userCakes"},r.a.createElement("button",{className:"goBackButton",onClick:t},r.a.createElement(E.a,{icon:b.a})),r.a.createElement("p",null,"You have ",a.length," ",0===a.length?"item":"items"," in your bag"),r.a.createElement("ul",null,a.map((function(e,t){return r.a.createElement("li",{key:t,index:t},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("div",{className:"bagText"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,"$",e.price)),r.a.createElement("button",{onClick:function(){n(t)},className:"deleteButton"},r.a.createElement(E.a,{icon:b.c})))})),r.a.createElement("p",{className:"total"},"Total: $",l),r.a.createElement("button",{className:"checkOutButton"},r.a.createElement("a",{href:"https://www.facebook.com/desserts.corner96"},"Check Out"))))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleShowBag,a=e.userBag;return r.a.createElement("div",{className:"bagButtonContainer"},r.a.createElement("button",{className:"bagButton",onClick:t},r.a.createElement(E.a,{icon:b.b}),r.a.createElement("p",null,a.length)))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).displayAll=function(){e.state.dbRef.on("value",(function(t){var a=[],n=t.val();for(var r in n)for(var l in n[r])a.push({product:n[r][l],id:l});e.setState({inventory:a})}))},e.displayBreads=function(){e.state.dbRef.on("value",(function(t){var a=[],n=t.val();for(var r in n.bread)a.push({product:n.bread[r],id:r});e.setState({inventory:a})}))},e.displayCakes=function(){e.state.dbRef.on("value",(function(t){var a=[],n=t.val();for(var r in n.cake)a.push({product:n.cake[r],id:r});e.setState({inventory:a})}))},e.handleAddToBag=function(t){var a=Object(h.a)(e.state.userBag);a.push(t);var n=a.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);e.setState({userBag:a,total:n})},e.removeCake=function(t){var a=Object(h.a)(e.state.userBag).filter((function(e,a){return a!==t})),n=a.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);e.setState({userBag:a,total:n})},e.state={dbRef:v.database().ref(),inventory:[],userBag:[],total:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.displayAll()}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",{className:"category"},r.a.createElement("li",null,r.a.createElement("button",{onClick:this.displayAll},"All ",r.a.createElement("span",{role:"img","aria-label":"all"},"\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf73"))),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.displayBreads},"Bread ",r.a.createElement("span",{role:"img","aria-label":"bread"},"\ud83c\udf5e"))),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.displayCakes},"Cake ",r.a.createElement("span",{role:"img","aria-label":"cake"},"\ud83c\udf70")))),r.a.createElement("ul",{className:"storeCakes"},this.state.inventory.map((function(t){return r.a.createElement("li",{key:t.product.name},r.a.createElement("img",{src:t.product.image,alt:t.product.name}),r.a.createElement("p",null,t.product.name),r.a.createElement("p",null,"$",t.product.price),r.a.createElement("button",{onClick:function(){return e.handleAddToBag(t.product)}},"Add"))}))),r.a.createElement(k,{handleShowBag:this.props.handleShowBag,userBag:this.state.userBag}),this.props.isBagShown?r.a.createElement(B,{handleHideBag:this.props.handleHideBag,userBag:this.state.userBag,removeCake:this.removeCake,total:this.state.total}):null))}}]),a}(n.Component),w=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Copyright anhthuydang 2020")))},j=(a(33),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleShowBag=function(){e.setState({isBagShown:!0})},e.handleHideBag=function(){e.setState({isBagShown:!1})},e.state={isBagShown:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(y,{isBagShown:this.state.isBagShown,handleShowBag:this.handleShowBag,handleHideBag:this.handleHideBag}),r.a.createElement(w,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.40d118a1.chunk.js.map