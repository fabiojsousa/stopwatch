(this["webpackJsonpios-stopwatch"]=this["webpackJsonpios-stopwatch"]||[]).push([[0],{14:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(7),i=t.n(r),c=t(5),l=t(1),u=t(2),s=t(3);function d(){var n=Object(u.a)(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  margin: 0 auto;\n\n  main {\n    max-width: 800px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\n\n    #stopwatch {\n      color: #ffffff;\n      margin-bottom: 60px;\n      /* text-align: center; */\n      padding-left: 35px;\n\n      h1 {\n        font-weight: 300;\n        font-size: 85px;\n      }\n    }\n\n    #buttons {\n      display: flex;\n      justify-content: space-between;\n      padding: 0 25px;\n      margin-top: 15px;\n\n      div {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        button {\n          width: 70px;\n          height: 70px;\n          border-radius: 50%;\n          border: 2px solid black;\n        }\n      }\n\n      div.leftButton {\n        button {\n          background-color: ",";\n          color: ",";\n          font-weight: 500;\n          box-shadow: 0px 0px 0px 2px "," ;\n\n          :active {\n          background-color: ",";\n            box-shadow: 0px 0px 0px 2px ",";\n          }\n        }\n      }\n\n      div.rightButton {\n        button {\n          background-color: ",";\n          color: ",";\n          font-weight: 500;\n          box-shadow: 0px 0px 0px 2px ",";\n        }\n      }\n    }\n\n    #laps {\n      margin-top: 20px;\n    }\n  }\n"]);return d=function(){return n},n}var p=s.b.div(d(),(function(n){return"no"===n.reseted?"#333333":"#1C1C1E"}),(function(n){return"no"===n.reseted?"#ffffff":"#999999"}),(function(n){return"no"===n.reseted?"#333333":"#1C1C1E"}),(function(n){return"no"===n.reseted?"#1B1B1B":"#0F0F11"}),(function(n){return"no"===n.reseted?"#1B1B1B":"#0F0F11"}),(function(n){return"on"===n.running?"#330000":"#003300"}),(function(n){return"on"===n.running?"#cc6633":"#66cc66"}),(function(n){return"on"===n.running?"#330000":"#003300"})),f=function(n){var e=n/1e3,t=Math.floor(e/60),a=Math.floor(e%60),o=(e%1).toFixed(2).substring(2),r={totalTime:e,minutes:t>=10?t:"0".concat(t),seconds:a>=10?a:"0".concat(a),miliseconds:o};return r.formatedTime="".concat(r.minutes,":").concat(r.seconds,".").concat(r.miliseconds),r},b=t(12),m=t.n(b);function x(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 0 20px;\n"]);return x=function(){return n},n}function g(){var n=Object(u.a)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 160px;\n\n  p {\n    display: flex;\n    justify-content: space-between;\n    color: #ffffff;\n    width: 100%;\n    padding: 10px 0;\n    border: 1px solid #333333;\n    border-left: 0;\n    border-right: 0;\n\n    span {\n      height: 17px;\n    }\n  }\n  div + div {\n    p {\n      border: 1px solid #333333;\n      border-left: 0;\n      border-right: 0;\n      border-top: 0;\n    }\n  }\n\n  .first-line {\n    border-bottom: 0;\n  }\n\n  #lap-duration {\n    width: 60px;\n\n    span {\n      /* padding-left: 6px; */\n    }\n  }\n"]);return g=function(){return n},n}var h=s.b.div(g()),j=Object(s.b)(m.a)(x());function v(){var n=Object(u.a)(["\n  p {\n    color: ",";\n  }\n"]);return v=function(){return n},n}var E=s.b.div(v(),(function(n){var e,t=n.lap,a=n.index,o=n.bestWorseLap;if(t.length>1&&t[a]){var r=o.best,i=r.time,c=r.index,l=o.worse,u=l.time,s=l.index;t[a].index===c&&t[a].time.totalTime===i?e="#3FB95D":t[a].index===s&&t[a].time.totalTime===u&&(e="#B93932")}return e}));function O(n){var e=n.index,t=n.lap,a=n.bestWorseLap;return o.a.createElement(E,{index:e,lap:t,bestWorseLap:a},o.a.createElement("p",null,o.a.createElement("span",null,t[e]&&"Lap ".concat(t[e].index)),o.a.createElement("span",null,t[e]&&"".concat(t[e].time.formatedTime))))}function w(n){var e=n.timeElapsed,t=n.lap,a=n.newLap,r=n.bestWorseLap;return o.a.createElement(h,null,o.a.createElement(j,null,o.a.createElement("p",{className:"first-line"},o.a.createElement("span",null,e>0&&"Lap ".concat(t.length+1)),o.a.createElement("span",{id:"lap-duration"},e>0&&o.a.createElement("span",null,f(a).formatedTime))),o.a.createElement(O,{index:"0",lap:t,bestWorseLap:r}),o.a.createElement(O,{index:"1",lap:t,bestWorseLap:r}),o.a.createElement(O,{index:"2",lap:t,bestWorseLap:r}),t.length>3&&t.map((function(n,e){return e>2&&o.a.createElement(O,{key:n.index,index:e,lap:t,bestWorseLap:r})}))))}t(28);function y(){var n=Object(u.a)(["\n\n    *{\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    *:focus{\n        outline: 0;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    body{\n        -webkit-font-smoothing: antialiased;\n        background-color: #000000;\n    }\n\n    body, input, button {\n        font: 16px 'Roboto', sans-serif;\n    }\n\n    button{\n        cursor: pointer;\n    }\n"]);return y=function(){return n},n}var L=Object(s.a)(y());i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(L,null),o.a.createElement((function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(!1),u=Object(l.a)(i,2),s=u[0],d=u[1],b=Object(a.useState)(0),m=Object(l.a)(b,2),x=m[0],g=m[1],h=Object(a.useState)(f(x)),j=Object(l.a)(h,2),v=j[0],E=j[1],O=Object(a.useState)(),y=Object(l.a)(O,2),L=y[0],B=y[1],S=Object(a.useState)(),k=Object(l.a)(S,2),W=k[0],F=k[1],T=Object(a.useState)([]),C=Object(l.a)(T,2),I=C[0],D=C[1],N=Object(a.useState)(0),z=Object(l.a)(N,2),J=z[0],M=z[1],R=Object(a.useState)(0),q=Object(l.a)(R,2),A=q[0],G=q[1],H=Object(a.useState)(),K=Object(l.a)(H,2),P=K[0],Q=K[1];return Object(a.useEffect)((function(){s&&t&&(F(setInterval((function(){var n=x>0?Date.now()-L+x:Date.now()-L;g(n)}),10)),d(!1))}),[t,s]),Object(a.useEffect)((function(){E(f(x)),M(x-A)}),[x]),Object(a.useEffect)((function(){var n,e,t=Infinity,a=0,o=Object(c.a)(I);o.reverse(),o.length>1&&o.forEach((function(o){var r=o.time.totalTime;r<=t&&(t=r,n=o.index),r>=a&&(a=r,e=o.index)})),Q({best:{time:t,index:n},worse:{time:a,index:e}})}),[I]),o.a.createElement(p,{running:t&&"on",reseted:x>0&&"no"},o.a.createElement("main",null,o.a.createElement("div",{id:"stopwatch"},o.a.createElement("h1",null,v.minutes,":",v.seconds,".",v.miliseconds)),o.a.createElement("div",{id:"buttons"},o.a.createElement("div",{className:"leftButton"},o.a.createElement("button",{type:"button",onClick:t?function(){D([{index:I.length+1,time:f(J)}].concat(Object(c.a)(I))),G(x)}:function(){clearInterval(W),g(0),D([]),M(0),G(0),r(!1),d(!0)}},t?"Lap":x>0?"Reset":"Lap")),o.a.createElement("div",{className:"rightButton"},o.a.createElement("button",{type:"button",onClick:t?function(){r(!1),clearInterval(W)}:function(){r(!0),B(Date.now()),d(!0)}},t?"Stop":"Start"))),o.a.createElement("div",{id:"laps"},o.a.createElement(w,{timeElapsed:x,lap:I,newLap:J,bestWorseLap:I.length>1&&P}))))}),null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dcf68263.chunk.js.map