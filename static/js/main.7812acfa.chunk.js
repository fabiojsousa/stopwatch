(this["webpackJsonpioasys-empresas-web"]=this["webpackJsonpioasys-empresas-web"]||[]).push([[0],{124:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(23),c=t.n(i),o=t(16),l=t(12),s=t(24),p=t.n(s),u=t(44),m=t(13),f=t(45),d=t(46),b=t.n(d).a.create({baseURL:"https://empresas.ioasys.com.br/api/v1"}),g=t(8),h=t(9);function x(){var n=Object(g.a)(["\n  width: 100%;\n  text-align: center;\n\n  p {\n    color: #383743;\n    font-size: 16px;\n  }\n\n  .circle-clipper .circle {\n    border: solid 5px #57bbbc;\n  }\n\n  .no-enterprise {\n    color: #b5b4b4;\n  }\n\n  .itemsContainer {\n    display: flex;\n    flex-direction: column;\n\n    .wrapper-container {\n      display: flex;\n      width: 100%;\n      height: 100px;\n      background-color: #ffffff;\n      padding: 0 15px;\n      margin-bottom: 10px;\n      border-radius: 3px;\n      cursor: pointer;\n\n      :hover {\n        border: 1px solid #57bbbc;\n      }\n\n      .main-container {\n        display: flex;\n        width: 100%;\n        align-items: center;\n        padding: 5px 0px;\n\n        .enterprise-logo {\n          display: flex;\n          align-items: center;\n          background-color: #7dbf75;\n          color: #ffffff;\n          width: 145px;\n          height: 80px;\n          justify-content: center;\n\n          span {\n            font-size: 30px;\n            font-weight: bold;\n          }\n        }\n\n        .enterprise-data {\n          display: flex;\n          flex-direction: column;\n          margin-left: 20px;\n          height: 80px;\n          text-align: left;\n          justify-content: center;\n\n          h3 {\n            margin: 0;\n            padding: 0;\n            color: #1a0e49;\n            font-size: 15px;\n            font-weight: bold;\n          }\n          p {\n            color: #8d8c8c;\n            font-size: 15px;\n          }\n          small {\n            color: #8d8c8c;\n          }\n        }\n      }\n    }\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(g.a)(["\n  max-width: 512px;\n  height: ",";\n  margin: 15px auto;\n  display: flex;\n  align-items: ",";\n"]);return v=function(){return n},n}function E(){var n=Object(g.a)(["\n  max-width: 512px;\n  margin: 0 auto;\n  height: 100%;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n\n  .logo {\n    margin: 0 auto;\n\n    img {\n      width: 150px;\n    }\n  }\n\n  .search {\n    img {\n      width: 35px;\n      cursor: pointer;\n    }\n  }\n\n  .search-actived {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    form {\n      display: flex;\n      width: 100%;\n      img,\n      i {\n        position: absolute;\n      }\n\n      img {\n        cursor: default;\n        width: 35px;\n        left: 0;\n        top: 28px;\n      }\n\n      i {\n        color: #ffffff;\n        right: 0;\n        top: 33px;\n        cursor: pointer;\n\n        :hover {\n          color: #57bbbc;\n        }\n      }\n\n      #search-input {\n        margin-top: 20px;\n        padding-left: 40px;\n        padding-right: 40px;\n        color: #ffffff;\n        border-bottom-color: #ffffff;\n\n        ::placeholder {\n          color: #991237;\n        }\n      }\n    }\n  }\n\n  .enterprise-header {\n    display: flex;\n    width: 100%;\n    justify-content: left;\n    margin-top: 20px;\n\n    span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #ffffff;\n      font-size: 17px;\n\n      i {\n        cursor: pointer;\n        margin-right: 20px;\n        color: #ffffff;\n\n        :hover {\n          color: #57bbbc;\n        }\n      }\n    }\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(g.a)(["\n  background-image: linear-gradient(173deg, #ee4c77 25%, #D8466D 40%);\n  padding: 0 30px;\n  height: 75.5px;\n"]);return y=function(){return n},n}function w(){var n=Object(g.a)(["\n  min-height: 100%;\n  height: auto;\n  background-color: #ebe9d7;\n"]);return w=function(){return n},n}var j=h.b.div(w()),O=h.b.div(y()),N=h.b.div(E(),(function(n){return n.searching?"center":"space-between"})),k=h.b.div(v(),(function(n){return"items"===n.id?"auto":"526px"}),(function(n){return"items"===n.id?"baseline":"center"})),S=h.b.div(x()),C=t(27),z=t.n(C);function _(){var n=Object(g.a)(["\n"]);return _=function(){return n},n}var q=h.b.div(_());function I(){return r.a.createElement(q,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h2",null,"Novo componente")))}function R(){var n=Object(a.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],c=Object(a.useState)(),l=Object(m.a)(c,2),s=l[0],d=l[1],g=Object(a.useState)(""),h=Object(m.a)(g,2),x=h[0],v=h[1],E=Object(a.useState)(),y=Object(m.a)(E,2),w=y[0],C=y[1],_=Object(a.useState)(),q=Object(m.a)(_,2),R=q[0],D=q[1],F=Object(a.useState)(),J=Object(m.a)(F,2),P=J[0],U=J[1],B=Object(a.useState)({}),L=Object(m.a)(B,2),M=L[0],V=L[1];function A(n){var e=n.replace(/[^a-z\xe0-\xfa]/gi,""),t=e.length;return(e[0]+e[t-1]).toUpperCase()}function G(){return(G=Object(u.a)(p.a.mark((function n(e){var t,a,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),d(!0),C(!1),t=JSON.parse(localStorage.getItem("empresas-web")),n.prev=4,n.next=7,b.get("enterprises",{headers:{"access-token":t["access-token"],client:t.client,uid:t.uid},params:{name:x}});case 7:a=n.sent,r=a.data,console.log("Request finished!"),d(!1),D(r.enterprises),C(!0),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(4),d(!1),C(!1),console.log("Something went wrong.",n.t0);case 20:case"end":return n.stop()}}),n,null,[[4,15]])})))).apply(this,arguments)}return r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(N,{searching:t},r.a.createElement(o.b,{to:"enterprise"},"Next Page"),t||P?!P&&r.a.createElement("div",{className:"search-actived"},r.a.createElement("form",{onSubmit:function(n){return G.apply(this,arguments)}},r.a.createElement("input",{type:"text",placeholder:"Pesquisar",id:"search-input",onChange:function(n){v(n.target.value)},defaultValue:x,autoFocus:!0}),r.a.createElement("img",{src:z.a,alt:"\xcdcone para busca",id:"search-icon"}),r.a.createElement("i",{className:"material-icons",id:"clear",onClick:function(){i(!1),d(!1)}},"close"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"search"},r.a.createElement("img",{src:z.a,onClick:function(){i(!0),C(!1),v("")},alt:"\xcdcone para busca"}))),P&&r.a.createElement("div",{className:"enterprise-header"},r.a.createElement("span",null,r.a.createElement("i",{className:"material-icons",onClick:function(){document.querySelector(".itemsContainer").style.display="flex",U(!1)}},"arrow_back"),M.enterprise_name.toUpperCase())))),r.a.createElement(k,{id:w&&R.length>0&&t?"items":"noItems"},r.a.createElement(S,null,!t&&r.a.createElement("p",{className:"instruction"},"Clique na busca para iniciar."),t&&s&&r.a.createElement(f.Preloader,null),w&&R.length>0&&t?r.a.createElement("div",{className:"itemsContainer"},R.map((function(n){return r.a.createElement("div",{key:n.id,className:"wrapper-container",onClick:function(){return function(n){document.querySelector(".itemsContainer").style.display="none",n.shortedName=A(n.enterprise_name),V(n),U(!0)}(n)}},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"enterprise-logo"},r.a.createElement("span",null,A(n.enterprise_name))),r.a.createElement("div",{className:"enterprise-data"},r.a.createElement("h3",null,n.enterprise_name),r.a.createElement("p",null,n.enterprise_type.enterprise_type_name),r.a.createElement("small",null,n.country))))}))):w&&t&&r.a.createElement("p",{className:"no-enterprise"},"Nenhuma empresa foi encontrada para a busca realizada."),P&&r.a.createElement(I,{enterprise:M}))))}function D(){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:R}),r.a.createElement(l.a,{path:"/enterprise",component:I})))}function F(){var n=Object(g.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n\n    *{\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    *:focus{\n        outline: 0;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    body{\n      -webkit-font-smoothing: antialiased;\n    }\n\n    body, input, button {\n      font: 'Roboto', sans-serif;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    ul{\n        list-style: none;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);return F=function(){return n},n}var J=Object(h.a)(F());t(122),t(123);var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(J,null))};c.a.render(r.a.createElement(P,null),document.getElementById("root"))},27:function(n,e,t){n.exports=t.p+"static/media/ic-search-copy.10f72392.svg"},53:function(n,e,t){n.exports=t(124)}},[[53,1,2]]]);
//# sourceMappingURL=main.7812acfa.chunk.js.map