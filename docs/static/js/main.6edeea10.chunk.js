(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(43)},29:function(e,a,t){},30:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),s=t(7),i=(t(29),t(21)),o=t(16),u=t(17),m=t(22),h=t(18),d=t(8),p=t(23),f=t(5),E=(t(30),function(e){return r.a.createElement("ul",{className:"character__list-container"},e.characters.map(function(e){return r.a.createElement("li",{key:e.id,id:e.id,className:"character__list-wrapper"},r.a.createElement(s.b,{to:"/character/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement("div",{className:"character__image",style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("h3",{className:"character__name"},e.name),r.a.createElement("p",{className:"character__house"},e.house),r.a.createElement("p",{className:"icon__house"},e.house?e.house[0].toUpperCase():""),r.a.createElement("i",{className:e.alive?"":"fas fa-skull-crossbones icon__dead"})))}))}),_=(t(39),function(e){return r.a.createElement("div",{className:"input"},r.a.createElement("label",{className:"visually-hidden",htmlFor:"filters"},"Filters"),r.a.createElement("input",{id:"filters",value:e.filters,type:"text",onChange:e.handleInputContent}))}),v=(t(40),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"header"},"Harry Potter Characters")),r.a.createElement("main",null,r.a.createElement(_,{f:!0,ilters:e.filters,handleInputContent:e.handleInputContent}),r.a.createElement(E,{characters:e.characters})))}),N=(t(41),function(e){return r.a.createElement("div",{className:"card__section"},r.a.createElement("div",{className:"card__container"},r.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.character.image,")")}}),r.a.createElement("div",{className:"card__text"},r.a.createElement("h3",{className:"card__title"},e.character.name),r.a.createElement("ul",{className:"card__data"},r.a.createElement("li",{className:"card__data--item"},"House: ",e.character.house),r.a.createElement("li",{className:"card__data--item"},"Year of Birth: ",e.character.yearOfBirth),r.a.createElement("li",{className:"card__data--item"},"Patronus: ",r.a.createElement("span",{className:"card__text--patronus"},e.character.patronus)),r.a.createElement("li",{className:"card__data--item"},"State: ",e.character.alive?"ALIVE":"DEAD")))))}),C=(t(42),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).state={characters:[],filters:"",selectedID:""},t.handleInputContent=t.handleInputContent.bind(Object(d.a)(t)),t.getCharactersFiltered=t.getCharactersFiltered.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e,a){return Object(i.a)({},e,{id:a+1})});e.setState({characters:t})})}},{key:"getCharactersFiltered",value:function(){var e=this;return this.state.characters.filter(function(a){return a.name.toUpperCase().includes(e.state.filters.toUpperCase())||a.house.toUpperCase().includes(e.state.filters.toUpperCase())})}},{key:"handleInputContent",value:function(e){var a=e.currentTarget.value;this.setState({filters:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(v,{characters:e.getCharactersFiltered(),filters:e.state.filters,handleInputContent:e.handleInputContent,handleSelectedID:e.handleSelectedID,match:a.match})}}),r.a.createElement(f.a,{exact:!0,path:"/character/:id",render:function(a){var t=e.state.characters.find(function(e){return parseInt(e.id)===parseInt(a.match.params.id)});return console.log(t),void 0!==t?r.a.createElement(N,{character:t,match:a.match}):r.a.createElement("p",null,"No hay datos")}}))}}]),a}(r.a.Component));l.a.render(r.a.createElement(s.a,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6edeea10.chunk.js.map