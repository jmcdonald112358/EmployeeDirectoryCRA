(this["webpackJsonpemployee-directory-cra"]=this["webpackJsonpemployee-directory-cra"]||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(10),r=n.n(s),i=n(37),o=n(32),l=n(33),m=n(39),u=n(38),h=n(35),j=n(22),b=n(34),p=n.n(b),d=function(){return p.a.get("https://randomuser.me/api/?results=20&nat=us'")},y=n(36),f=n(40),O=n(21),x=n(5);var v=function(e){return Object(x.jsx)("div",{style:{width:"25vw"},children:Object(x.jsxs)(O.a,{className:"mb-3",children:[Object(x.jsx)(y.a.Control,{as:"input",className:"mb-2 mr-sm-2",id:"search",type:"text",placeholder:"Search employees...",onChange:e.input,value:e.value}),Object(x.jsx)(O.a.Append,{children:Object(x.jsx)(f.a,{variant:"success",type:"submit",className:"btn mb-2",onClick:e.btnSubmit,children:"Search"})})]})})},g=n(13),N=n(12);var S=function(e){return Object(x.jsxs)(g.a,{style:{width:"18rem"},className:"mb-2 mx-2",children:[Object(x.jsx)(g.a.Img,{variant:"top",src:e.photo}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(g.a.Title,{children:[e.givenName," ",e.familyName]})}),Object(x.jsxs)(N.a,{className:"list-group-flush",horizontal:"true",children:[Object(x.jsxs)(N.a.Item,{children:["Email: ",e.email]}),Object(x.jsxs)(N.a.Item,{children:["Phone: ",e.phone]}),Object(x.jsxs)(N.a.Item,{children:["City: ",e.city]})]})]})},C=n(23);var w=function(){return Object(x.jsx)(C.a,{fixed:"bottom",children:Object(x.jsxs)(C.a.Text,{className:"justify-content-center",children:["Users provided via ",Object(x.jsx)("a",{href:"https://randomuser.me/",children:"Random User Generator"})]})})},k=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",employees:[],err:""},e.empSearch=function(t){var n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));e.setState({employees:n})},e.input=function(t){e.setState({search:t.target.value})},e.btnSubmit=function(t){t.preventDefault(),e.empSearch(e.state.search)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){e.setState({employees:t.data.results.map((function(e,t){return{givenName:e.name.first,familyName:e.name.last,photo:e.picture.large,email:e.email,phone:e.phone,city:e.location.city,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(j.a,{className:"justify-content-center",children:[Object(x.jsx)("h1",{className:"my-4 text-center",children:"Employee Directory"}),Object(x.jsx)(v,{value:this.state.search,input:this.input,btnSubmit:this.btnSubmit})]}),Object(x.jsxs)(j.a,{className:"justify-content-center",children:[Object(i.a)(this.state.employees).map((function(e){return Object(x.jsx)(S,{photo:e.photo,givenName:e.givenName,familyName:e.familyName,email:e.email,phone:e.phone,city:e.city},e.key)})),";",Object(x.jsx)(w,{})]})]})}}]),n}(a.Component);var I=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(67);r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),F()}},[[68,1,2]]]);
//# sourceMappingURL=main.fcd761c3.chunk.js.map