(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{203:function(e,t){},327:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(0),r=a.n(c),o=a(27),s=a.n(o),i=(a(175),a(30)),j=a(334),u=function(e){var t=e.icon,a=e.text;return Object(n.jsxs)(j.b,{children:[r.a.createElement(t),a]})},l=function(e){var t=["magenta","red","orange","gold","lime","green","cyan","blue","volcano"];return e<10?t[e]:t[e%10]},b=a(335),d=function(e){var t=e.tags;return Object(n.jsx)("div",{children:t.map((function(e,t){return Object(n.jsx)(b.a,{color:l(t),children:e},e)}))})},O=a(330),h=a(331),p=a(336),g=a(337),x=a(139),f=function(e){var t=e.title,a=e.description,c=e.points,r=e.num_comments,o=e.url,s=e.story_text,i=e._tags;return Object(n.jsxs)(O.b.Item,{actions:[Object(n.jsx)(u,{text:c,icon:p.a},"star-two-tone-icon"),Object(n.jsx)(u,{text:r,icon:g.a},"message-two-tone-icon"),Object(n.jsx)(d,{tags:i},"tag-group")],children:[Object(n.jsx)(O.b.Item.Meta,{title:Object(n.jsx)("a",{href:o,rel:"noreferrer",target:"_blank",children:t}),description:a}),Object(n.jsx)(h.a.Paragraph,{ellipsis:{rows:3,expandable:!0,symbol:"more"},children:Object(x.htmlToText)(s)})]},t)},y=a(166),v="story",m="LOADING",w="RESPONSE_COMPLETE",P="ERROR",E="UPDAT_KEYWORDS",C="UPDATE_PAGE",K=Object(c.createContext)(),S={searchKeywords:"",hits:[],loading:!0,error:null,page:1,hitsTotal:1e3},T=function(e,t){var a=t.type,n=t.payload;switch(a){case m:return Object(i.a)(Object(i.a)({},e),{},{hits:null,loading:!0,error:null});case w:return Object(i.a)(Object(i.a)(Object(i.a)({},e),n),{},{loading:!1,error:null});case P:return Object(i.a)(Object(i.a)({},e),{},{hits:null,loading:!1,error:n.error});case E:return Object(i.a)(Object(i.a)({},e),{},{searchKeywords:n.searchKeywords});case C:return Object(i.a)(Object(i.a)({},e),{},{page:n.page});default:return Object(i.a)({},e)}},k=function(e){var t=e.children,a=Object(c.useReducer)(T,S),r=Object(y.a)(a,2),o=r[0],s=r[1],j=o.searchKeywords,u=o.page;Object(c.useEffect)((function(){s({type:m}),fetch(function(e,t,a){var n=t?"page=".concat(t-1):"",c=e||"",r=a?"tags=".concat(a):"";return"".concat("https://hn.algolia.com/api/v1/").concat("search","?query=").concat(c,"&").concat(r,"&").concat(n)}(j,u,v)).then((function(e){return e.json()})).then((function(e){var t=e.hits,a=e.hitsPerPage,n=e.nbPages;s({type:w,payload:{hits:t,hitsTotal:a*n}})})).catch((function(e){s({type:P,payload:{error:e}})}))}),[j,u]);var l=Object(c.useCallback)((function(e){s({type:E,payload:{searchKeywords:e}})}),[s]),b=Object(c.useCallback)((function(e){s({type:C,payload:{page:e}})}),[s]),d=Object(i.a)(Object(i.a)({},o),{},{updateSearchKeywords:l,updatePage:b});return Object(n.jsx)(K.Provider,{value:d,children:t})},_=function(){var e=Object(c.useContext)(K),t=e.hits,a=e.hitsTotal,r=e.updatePage,o={pageSize:20,position:"both",total:a,onChange:function(e){r(e)}};return Object(n.jsx)(O.b,{itemLayout:"vertical",size:"large",pagination:o,dataSource:t,renderItem:function(e){return Object(n.jsx)(f,Object(i.a)({},e))}})},R=a(332),A=function(){var e=Object(c.useContext)(K).updateSearchKeywords;return Object(n.jsx)(R.a,{placeholder:"input search text",size:"large",onChange:function(t){e(t.target.value)},enterButton:!0})},I=a(333),z=a(148),D={padding:"0 10%"},L=function(){var e=Object(c.useContext)(K).loading,t=I.a.Header,a=I.a.Content;return Object(n.jsxs)(I.a,{children:[Object(n.jsx)(t,{children:Object(n.jsx)(A,{})}),Object(n.jsx)(a,{style:D,children:e?Object(n.jsx)(z.a,{size:"large"}):Object(n.jsx)(_,{})})]})},M=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(L,{})})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{children:Object(n.jsx)(M,{})})}),document.getElementById("root"))}},[[327,1,2]]]);
//# sourceMappingURL=main.671246a5.chunk.js.map