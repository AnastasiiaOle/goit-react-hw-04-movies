(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{34:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return l}));var c=n(41),i=n.n(c);i.a.defaults.baseURL="http://localhost:3000";var a="https://api.themoviedb.org/3/",r="d61c67c50c748f4d2b177bb7e6865fde",o=function(){return i.a.get("".concat(a,"trending/all/day?api_key=").concat(r)).then((function(t){return t.data.results}))},s=function(t){return i.a.get("".concat(a,"search/movie?api_key=").concat(r,"&language=en-US&query=").concat(t,"&page=1")).then((function(t){return t.data.results}))},u=function(t){return i.a.get("".concat(a,"movie/").concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data}))},h=function(t){return i.a.get("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.data.results}))},l=function(t){return i.a.get("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.data.cast}))}},69:function(t,e,n){t.exports={castList:"castList_castList__1BJYY",castListItem:"castList_castListItem__2wgLf"}},70:function(t,e,n){t.exports={reviewsList:"reviews_reviewsList__1k_Mi"}},75:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var c=n(35),i=n(36),a=n(38),r=n(37),o=n(0),s=(n(39),n(8)),u=n(2),h=n(1),l=function(t){var e=t.item,n=t.photo;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:n,alt:""}),Object(h.jsx)("p",{children:e.name}),Object(h.jsxs)("p",{children:[" ",e.character]})]})},j=n(34),p=function(t){return t.match.params.movieId},d=n(69),v=n.n(d),b=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={items:null},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=p(this.props);j.a(e).then((function(e){return t.setState({items:e})}))}},{key:"render",value:function(){var t=this.state.items;return Object(h.jsx)("ul",{className:v.a.castList,children:t&&t.map((function(t){return Object(h.jsx)("li",{className:v.a.castListItem,children:Object(h.jsx)(l,{photo:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://us.123rf.com/450wm/oculo/oculo2004/oculo200400003/143645399-stock-vector-no-image-available-icon-.jpg?ver=6",item:t})},t.cast_id)}))})}}]),n}(o.Component),m=function(t){var e=t.item;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Author: ",e.author]}),Object(h.jsxs)("p",{children:[" ",e.content]})]})},f=n(70),O=n.n(f),x=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={items:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=p(this.props);j.d(e).then((function(e){return t.setState({items:e})}))}},{key:"render",value:function(){var t=this.state.items;return Object(h.jsx)("ul",{className:O.a.reviewsList,children:t.length>0?t.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(m,{item:t})},t.id)})):Object(h.jsx)("p",{children:"We dont have any reviews for this movie."})})}}]),n}(o.Component),g=Object(u.f)((function(t){var e=t.item,n=t.photo,c=t.onGoback;return Object(h.jsxs)("article",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"button",onClick:c,children:"Back to articles"}),Object(h.jsxs)("h2",{children:[e.original_title," ",e.original_name]}),Object(h.jsx)("img",{src:n,alt:""}),Object(h.jsx)("h3",{children:"Overview"}),Object(h.jsx)("p",{children:e.overview})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Additional information"}),Object(h.jsx)(s.b,{to:"/movies/".concat(e.id,"/cast"),children:"Cast"})," ",Object(h.jsx)("br",{}),Object(h.jsx)(s.b,{to:"/movies/".concat(e.id,"/reviews"),children:"Reviews"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(u.a,{path:"/movies/:movieId/cast",component:b}),Object(h.jsx)(u.a,{path:"/movies/:movieId/reviews",component:x})]})]})})),w=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={item:null},t.handleGoback=function(){var e=t.props,n=e.history,c=e.location;c.state?n.push(c.state.from):n.push("/movies")},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=p(this.props);j.c(e).then((function(e){return t.setState({item:e})}))}},{key:"render",value:function(){var t=this.state.item;return Object(h.jsx)("div",{children:t&&Object(h.jsx)(g,{photo:t.poster_path?"https://image.tmdb.org/t/p/w200".concat(t.poster_path):"https://us.123rf.com/450wm/oculo/oculo2004/oculo200400003/143645399-stock-vector-no-image-available-icon-.jpg?ver=6",item:t,onGoback:this.handleGoback})})}}]),n}(o.Component)}}]);
//# sourceMappingURL=4.b25d2b2d.chunk.js.map