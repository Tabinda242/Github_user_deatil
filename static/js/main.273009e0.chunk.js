(this.webpackJsonplife_cycle=this.webpackJsonplife_cycle||[]).push([[0],{25:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),i=n(14),r=n.n(i),o=(n(25),n(15)),u=n(16),l=n(19),h=n(18),d=n(17),j=n.n(d),b=(n(43),n(4)),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).fetchGithubUser=function(){var t="https://api.github.com/users/"+e.state.username;console.log(t),e.setState({loading:!0}),j.a.get(t).then((function(t){e.setState({loading:!1,user:t.data})})).catch((function(e){console.log(e)}))},e.onInputChange=function(t){var n=t.target.value;e.setState({username:n})},e.state={username:"",user:null,loading:!1},e}return Object(u.a)(n,[{key:"showUser",value:function(){return null===this.state.user?Object(s.jsx)("p",{className:"heading",children:"Type your Github user name"}):!0===this.state.loading?Object(s.jsx)("p",{className:"heading",children:"Loading..."}):Object(s.jsx)("div",{className:"Card-div",children:Object(s.jsxs)(b.a,{style:{width:"18rem"},children:[Object(s.jsx)(b.a.Img,{variant:"top",src:this.state.user.avatar_url,className:"Card-img"}),Object(s.jsxs)(b.a.Body,{className:"Card-body",children:[Object(s.jsx)(b.a.Title,{children:this.state.user.name}),Object(s.jsxs)(b.a.Text,{children:["Repositories: ",this.state.user.public_repos]}),Object(s.jsxs)(b.a.Text,{children:["Followers: ",this.state.user.followers]})]})]})})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("input",{type:"text",onChange:this.onInputChange,className:"Card-input"}),Object(s.jsx)("button",{onClick:this.fetchGithubUser,children:"Get User"}),this.showUser()]})}}]),n}(a.Component);n(44);var f=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(g,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),p()}},[[45,1,2]]]);
//# sourceMappingURL=main.273009e0.chunk.js.map