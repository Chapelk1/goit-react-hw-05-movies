"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[198],{798:function(t,n,e){e.d(n,{ac:function(){return o},qD:function(){return u},sI:function(){return a},vf:function(){return h},yw:function(){return s}});var i=e(683),r=e(243),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA"}};function o(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",c)}function a(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t),c)}function s(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),c)}function u(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),c)}function h(t){var n={params:{query:"".concat(t)}};return r.Z.get("https://api.themoviedb.org/3/search/movie",(0,i.Z)((0,i.Z)({},c),n))}},198:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var i,r,c,o,a,s=e(439),u=e(689),h=e(791),p=e(798),f=e(168),l=e(686),d=l.Z.ul(i||(i=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 40px;\n  row-gap: 20px;\n  padding-bottom: 40px;\n"]))),Z=l.Z.li(r||(r=(0,f.Z)(["\n  \n"]))),m=l.Z.div(c||(c=(0,f.Z)(["\n  width: 300px;\n"]))),g=l.Z.h3(o||(o=(0,f.Z)(["\n  color: white;\n"]))),v=l.Z.p(a||(a=(0,f.Z)(["\n  color: white;\n"]))),x=e(184);function w(t){var n=t.cast;return(0,x.jsx)(d,{children:n&&n.cast.map((function(t){var n=t.profile_path?"https://image.tmdb.org/t/p/original".concat(t.profile_path):"https://fakeimg.pl/400x600";return(0,x.jsxs)(Z,{children:[(0,x.jsx)(m,{children:(0,x.jsx)("img",{src:n,alt:t.name})}),(0,x.jsx)(g,{children:t.name}),(0,x.jsx)(v,{children:t.character})]},t.id)}))})}function y(){var t=(0,u.UO)().movieId,n=(0,h.useState)(null),e=(0,s.Z)(n,2),i=e[0],r=e[1];return(0,h.useEffect)((function(){(0,p.yw)(t).then((function(t){r(t.data)})).catch((function(t){console.error(t.response.data.status_message)}))}),[t]),(0,x.jsx)(w,{cast:i})}}}]);
//# sourceMappingURL=198.8e0ad4d5.chunk.js.map