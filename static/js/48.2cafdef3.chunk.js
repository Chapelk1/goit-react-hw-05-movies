"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[48],{798:function(n,t,e){e.d(t,{ac:function(){return c},qD:function(){return u},sI:function(){return a},vf:function(){return h},yw:function(){return s}});var r=e(683),i=e(243),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA"}};function c(){return i.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",o)}function a(n){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(n),o)}function s(n){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),o)}function u(n){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviewsgg"),o)}function h(n){var t={params:{query:"".concat(n)}};return i.Z.get("https://api.themoviedb.org/3/search/movie",(0,r.Z)((0,r.Z)({},o),t))}},48:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,i,o,c,a,s=e(439),u=e(689),h=e(791),d=e(798),f=e(168),l=e(686),Z=l.Z.ul(r||(r=(0,f.Z)(["\nlist-style: none;\npadding-bottom: 40px;\n"]))),p=l.Z.li(i||(i=(0,f.Z)(["\n  max-width: 500px;\n\n  &:not(:last-child){\n    margin-bottom: 40px;\n  }\n"]))),m=l.Z.h3(o||(o=(0,f.Z)(["\n  color: white;\n  margin-bottom: 20px;\n"]))),v=l.Z.p(c||(c=(0,f.Z)(["\n  color: white;\n"]))),g=e(184);function j(n){var t=n.reviews;return(0,g.jsx)(Z,{children:t.results.map((function(n){return(0,g.jsxs)(p,{children:[(0,g.jsxs)(m,{children:[(0,g.jsx)("b",{children:"Author:"})," ",n.author]}),(0,g.jsx)(v,{children:n.content})]},n.id)}))})}var w=l.Z.p(a||(a=(0,f.Z)(["\n    color: white;\n"])));function x(){var n=(0,u.UO)().movieId,t=(0,h.useState)(null),e=(0,s.Z)(t,2),r=e[0],i=e[1],o=(0,h.useState)(!1),c=(0,s.Z)(o,2),a=c[0],f=c[1];return(0,h.useEffect)((function(){(0,d.qD)(n).then((function(n){if(0!==n.total_pages)return i(n.data),void f(!1);f(!0)})).catch((function(n){f(!0),console.error(n.response.data.status_message)}))}),[n]),(0,g.jsxs)(g.Fragment,{children:[a&&(0,g.jsx)(w,{children:"We don`t have any reviews for this movie."}),r&&(0,g.jsx)(j,{reviews:r})]})}}}]);
//# sourceMappingURL=48.2cafdef3.chunk.js.map