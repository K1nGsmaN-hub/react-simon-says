(this["webpackJsonpreact-simon"]=this["webpackJsonpreact-simon"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.99e50f7d.mp3"},function(e,t,n){e.exports=n.p+"static/media/2.d2c4a2c4.mp3"},function(e,t,n){e.exports=n.p+"static/media/3.c1c96b44.mp3"},function(e,t,n){e.exports=n.p+"static/media/4.36d5a722.mp3"},function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),u=(n(19),n(5)),s=n.n(u),i=n(6),l=n(7),m=n(1),d=n(2),f=n(4),p=n(3),v=(n(21),n(22),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.color,a=e.active,c=e.onActive,o="".concat(n);return o+=a?" ".concat(n,"_active"):"",r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:c,className:o,"data-id":t}))}}]),n}(a.Component)),h=(n(23),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).generateItem=function(t){var n=e.props.onActive;return t.map((function(e){return r.a.createElement("li",{key:e.key},r.a.createElement(v,{onActive:function(){return n(e.key)},color:e.color,id:e.id,active:e.active}))}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.buttons,t=this.generateItem(e);return r.a.createElement("ul",{className:"game-area"},t)}}]),n}(a.Component)),y=(n(24),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.round,n=e.maxRounds;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Round ",t),r.a.createElement("p",null,"Record ",n))}}]),n}(a.Component)),g=(n(25),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.startGame;return r.a.createElement("button",{onClick:e},"Start")}}]),n}(a.Component)),b=(n(26),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.level,n=e.delay,a=e.text,c=e.setDelay;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",name:"difficulty",className:"difficulty-levels","data-level":t,"data-delay":n,defaultChecked:1500===n,onClick:c}),a)}}]),n}(a.Component)),S=(n(27),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).generateItem=function(t){var n=e.props.setDelay;return t.map((function(e){return r.a.createElement("label",{key:e.key},r.a.createElement(b,{level:e.level,delay:e.delay,text:e.text,setDelay:function(){return n(e.delay)}}))}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.startGame,n=e.diffs,a=e.round,c=e.maxRounds,o=this.generateItem(n);return r.a.createElement("div",{className:"options-area"},r.a.createElement(y,{round:a,maxRounds:c}),r.a.createElement(g,{startGame:function(){return t()}}),r.a.createElement("div",{className:"diff-levels"},o))}}]),n}(a.Component)),E=n(10),O=n.n(E),k=n(11),x=n.n(k),j=n(12),q=n.n(j),R=n(13),w=n.n(R),N=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).randomKey=function(){return Math.random().toString(36).substr(6)},a.randomNum=function(){return Math.round(.5+4*Math.random())},a.generateStep=function(){a.setState((function(e){for(var t=e.gameSequence,n=Object(l.a)(t);;){var r=a.randomNum();if(r!==n[n.length-1]){n.push(r);break}}return{gameSequence:n}}))},a.clearSequence=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?a.setState({userSequence:[],gameSequence:[]}):a.setState({userSequence:[]})},a.fillUserSequence=function(e){a.setState((function(t){var n=t.userSequence,r=a.state.buttons,c=Object(l.a)(n);return c.push(r.findIndex((function(t){return t.key===e}))+1),{userSequence:c}}))},a.compareSequences=function(){var e=a.state,t=e.gameSequence,n=e.userSequence;if(n.length>t.length)return!1;var r=0;return n.forEach((function(e,n){e===t[n]&&r++})),r===n.length||void 0},a.demoSequence=function(){var e=a.state,t=e.gameSequence,n=e.buttons,r=e.delay;t.forEach((function(e,t){setTimeout((function(){n.forEach((function(t){t.id===e&&a.activeState(t.key)}))}),r*t)}))},a.onActive=function(e){a.activeState(e).then((function(){a.state.isGaming&&(a.fillUserSequence(e),a.gameSession().catch((function(){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})))}))},a.activeState=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.updateActive(t),a.playSound(t),e.next=4,setTimeout((function(){a.updateActive(t)}),200);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateActive=function(e){a.setState((function(t){var n=t.buttons,a=Object(l.a)(n);return a.forEach((function(t){t.key===e&&(t.active=!t.active)})),{buttons:a}}))},a.newRound=Object(i.a)(s.a.mark((function e(){var t,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]&&n[0],a.setState((function(e){var n=e.round,r=t?1:++n;return a.updateMaxRounds(r),{round:r}})),e.next=4,a.clearSequence(t);case 4:return e.next=6,a.generateStep();case 6:case"end":return e.stop()}}),e)}))),a.startNewRound=function(){a.newRound().then((function(){return console.log("Start Round "+a.state.round)})).then(a.demoSequence)},a.startGame=function(){a.setState({isGaming:!0}),a.newRound(!0).then((function(){return console.log("Start Round 1")})).then(a.demoSequence),console.log("Game is start")},a.gameSession=Object(i.a)(s.a.mark((function e(){var t,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.gameSequence,r=t.userSequence,e.next=3,a.compareSequences();case 3:(c=e.sent)?r.length===n.length&&c&&setTimeout(a.startNewRound,1e3):a.gameOver();case 5:case"end":return e.stop()}}),e)}))),a.gameOver=function(){a.clearSequence(!0),a.setState({maxRounds:localStorage.getItem("maxRounds"),round:0,isGaming:!1}),console.log("Game Over :(")},a.updateMaxRounds=function(e){(localStorage.getItem("maxRounds")&&localStorage.getItem("maxRounds")<e||null===localStorage.getItem("maxRounds"))&&localStorage.setItem("maxRounds",e)},a.setDelay=function(e){a.setState({delay:e})},a.playSound=function(e){a.state.buttons.forEach((function(t){t.key===e&&t.sound.play()}))},a.show=function(){var e=a.state,t=e.userSequence,n=e.gameSequence;console.log("user: ".concat(t)),console.log("game: ".concat(n)),console.log("delay: ".concat(a.state.delay))},a.state={round:0,maxRounds:null===localStorage.getItem("maxRounds")?0:localStorage.getItem("maxRounds"),delay:1500,gameSequence:[],userSequence:[],isGaming:!1,buttons:[{color:"blue",sound:new Audio(O.a),key:a.randomKey(),id:1,active:!1},{color:"red",sound:new Audio(x.a),key:a.randomKey(),id:2,active:!1},{color:"yellow",sound:new Audio(q.a),key:a.randomKey(),id:3,active:!1},{color:"green",sound:new Audio(w.a),key:a.randomKey(),id:4,active:!1}],difficulties:[{level:"easy",delay:1500,text:"\u041b\u0435\u0433\u043a\u0438\u0439",key:a.randomKey()},{level:"medium",delay:1e3,text:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439",key:a.randomKey()},{level:"hard",delay:400,text:"\u0421\u043b\u043e\u0436\u043d\u044b\u0439",key:a.randomKey()}]},a}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background"}),r.a.createElement("div",{className:"app"},r.a.createElement("section",{className:"app__content"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title",onClick:this.show},r.a.createElement("span",{className:"blue"},"Sim"),r.a.createElement("span",{className:"red"},"on"),"\xa0",r.a.createElement("span",{className:"yellow"},"Sa"),r.a.createElement("span",{className:"green"},"y's"))),r.a.createElement("main",null,r.a.createElement(h,{buttons:this.state.buttons,onActive:this.onActive}),r.a.createElement(S,{round:this.state.round,maxRounds:this.state.maxRounds,startGame:this.startGame,diffs:this.state.difficulties,setDelay:this.setDelay}))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9Copyright - 2020"),r.a.createElement("p",null,"Created by ",r.a.createElement("a",{href:"https://github.com/K1nGsmaN-hub",target:"_blank"},"K1nGsmaN")))))}}]),n}(a.Component);o.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2409295e.chunk.js.map