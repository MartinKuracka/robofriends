(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(3),a=n.n(s),o=(n(13),n(4)),i=n(5),h=n(7),l=n(6),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?100x100"),alt:"robot"}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(r.jsxs)("div",{children:[" ",t.map((function(e,n){return Object(r.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))]})},j=function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"tc pa2 br3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{className:"tc",children:" Loading "}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"ROBOFRIENDS"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(u,{children:Object(r.jsx)(d,{robots:t})})]})}}]),n}(c.Component);n(14);a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b856de72.chunk.js.map