"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{798:function(n,t,e){e.d(t,{ac:function(){return c},qD:function(){return s},sI:function(){return a},vf:function(){return l},yw:function(){return u}});var o=e(683),r=e(243),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA"}};function c(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",i)}function a(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n),i)}function u(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),i)}function s(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviewsgg"),i)}function l(n){var t={params:{query:"".concat(n)}};return r.Z.get("https://api.themoviedb.org/3/search/movie",(0,o.Z)((0,o.Z)({},i),t))}},174:function(n,t,e){e.d(t,{Z:function(){return p}});var o,r,i,c=e(168),a=e(686),u=e(87),s=a.Z.ul(o||(o=(0,c.Z)(["\n    list-style: none;\n"]))),l=a.Z.li(r||(r=(0,c.Z)(["\nmargin-bottom: 8px;\n"]))),d=(0,a.Z)(u.rU)(i||(i=(0,c.Z)(["\n    text-decoration: none;\n    color: black;\n    font-weight: 600;\n    font-size: 18px;\n    color: white;\n    &:hover{\n        color: teal;\n    }\n"]))),f=e(689),h=e(184);function p(n){var t=n.movies,e=(0,f.TH)();return(0,h.jsx)(s,{children:t.map((function(n){return(0,h.jsx)(l,{children:(0,h.jsx)(d,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},597:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var o,r,i,c=e(439),a=e(87),u=e(791),s=e(798),l=e(168),d=e(686),f=d.Z.form(o||(o=(0,l.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),h=d.Z.input(r||(r=(0,l.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  margin-right: 16px;\n  background-color: #425466;\n  border: 2px solid teal;\n  outline: none;\n  color: white;\n  font-size: 18px;\n  font-weight: 500;\n"]))),p=d.Z.button(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  font-size: 18px;\n  background-color: #34424f;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: teal;\n    border-color: teal;\n  }\n"]))),g=e(174),Z=e(184);function m(){var n,t=(0,a.lr)(),e=(0,c.Z)(t,2),o=e[0],r=e[1],i=null!==(n=o.get("query"))&&void 0!==n?n:"",l=(0,u.useState)([]),d=(0,c.Z)(l,2),m=d[0],x=d[1],v=(0,u.useState)(""),b=(0,c.Z)(v,2),y=b[0],j=b[1];(0,u.useEffect)((function(){""!==i&&(0,s.vf)(i).then((function(n){x(n.data.results)})).catch((function(n){console.error(n.response.data.status_message)}))}),[i]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(f,{onSubmit:function(n){n.preventDefault(),""!==y&&r({query:y})},children:[(0,Z.jsx)(h,{value:y,onChange:function(n){!function(n){j(n)}(n.target.value)}}),(0,Z.jsx)(p,{type:"submit",children:"Search"})]}),(0,Z.jsx)(g.Z,{movies:m})]})}}}]);
//# sourceMappingURL=597.6d70adb6.chunk.js.map