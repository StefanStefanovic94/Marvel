(this["webpackJsonpproject-marvel"]=this["webpackJsonpproject-marvel"]||[]).push([[0],{12:function(e,t,a){e.exports={card:"Card_card__mg4ks",imageNested:"Card_imageNested__VHWy2",name:"Card_name__4jfek",buttons:"Card_buttons__35JGD"}},15:function(e,t,a){e.exports={miniCard:"MyTeamHeroCard_miniCard__1lL7y",btn:"MyTeamHeroCard_btn__1Edqg",image:"MyTeamHeroCard_image__pPgK9",name:"MyTeamHeroCard_name__2mVYV"}},16:function(e,t,a){e.exports={header:"Header_header__2qXTW",h2:"Header_h2__3J_qe",text:"Header_text__6Ikbj"}},17:function(e,t,a){e.exports={wrap:"Info_wrap__Jh5Wk",image:"Info_image__3XKvX"}},21:function(e,t,a){e.exports={image:"FullImage_image__1ga4j",button:"FullImage_button__Np0I_"}},28:function(e,t,a){e.exports={grid:"Grid_grid__KD4Ze"}},29:function(e,t,a){e.exports={search:"Search_search__1UvJ4"}},30:function(e,t,a){},31:function(e,t,a){e.exports={section:"HomePage_section__3gX-t"}},33:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),i=a(32),m=a(7),s=a(8),l=a(10),u=a(9),d=function(){return fetch("https://gateway.marvel.com/v1/public/characters?apikey=".concat("0256a5632636eb1a63f828915dd2d646")).then((function(e){return e.json()})).then((function(e){return e.data.results}))},h=a(12),f=a.n(h),p=a(11),E=a(45),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).clickHero=function(t){var a=t.target.getAttribute("data-id");e.props.myTeamAdd(a)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{lg:"4",md:"6",sm:"7"},r.a.createElement("div",{className:f.a.card},r.a.createElement("div",{className:f.a.image},r.a.createElement("img",{className:f.a.imageNested,src:"".concat(this.props.path,".").concat(this.props.extension)})),r.a.createElement("div",{className:f.a.name},r.a.createElement("p",null,this.props.name)),r.a.createElement("div",{className:f.a.buttons},r.a.createElement(p.b,{to:"/hero-info/".concat(this.props.id)},r.a.createElement("button",null,"info")),r.a.createElement("button",{onClick:this.clickHero,"data-id":this.props.id},"add"),console.log(this.props.id))))}}]),a}(r.a.Component),_=a(28),g=a.n(_),b=function(e){return r.a.createElement("div",{className:g.a.grid},e.charachters.map((function(t){return r.a.createElement(v,{myTeamAdd:e.myTeamAdd,name:t.name,extension:t.thumbnail.extension,path:t.thumbnail.path,id:t.id})})))},y=a(29),C=a.n(y),N=function(e){var t=e.searchedHeroes;return r.a.createElement("div",{className:C.a.search},r.a.createElement("input",{onChange:function(e){t(e.target.value)},placeholder:"search here..."}))},x=a(15),H=a.n(x),j=function(e){var t=e.name,a=e.path,n=e.extension,c=e.id,o=e.removeHero;return r.a.createElement(E.a,{lg:"12",md:"12",sm:"12"},r.a.createElement("div",{className:H.a.miniCard},r.a.createElement("div",{className:H.a.image},r.a.createElement("img",{src:"".concat(a,"/standard_small.").concat(n)})),r.a.createElement("div",{className:H.a.name},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:H.a.btn},r.a.createElement("button",{onClick:function(){return o(c)}},"x"))))},k=a(30),T=a.n(k),I=function(e){var t=e.team,a=e.removeHero;return r.a.createElement("div",{className:T.a.myTeam},t.map((function(e){return r.a.createElement(j,{removeHero:a,id:e.id,key:e.id,name:e.name,path:e.thumbnail.path,extension:e.thumbnail.extension})})),console.log(t))},O=a(31),A=a.n(O),w=a(16),M=a.n(w),S=function(){return r.a.createElement("div",{className:M.a.header},r.a.createElement("h2",{className:M.a.h2},"HERO TEAM"),r.a.createElement(p.b,{to:"/"},r.a.createElement("h2",{className:M.a.text},"HOMEPAGE")))},J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).searchedHeroes=function(t){var a=e.state.charachters.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));e.setState({filteredCharachters:a})},e.myTeamAdd=function(t){if(!e.state.myTeam.find((function(e){return e.id===Number(t)}))){console.log(e.state.filteredCharachters,t);var a=e.state.filteredCharachters.find((function(e){return e.id===Number(t)})),n=[].concat(Object(i.a)(e.state.myTeam),[a]);e.setState({myTeam:n})}},e.removeHero=function(t){var a=e.state.myTeam.filter((function(e){return e.id!==t}));e.setState({myTeam:a})},e.state={charachters:[],filteredCharachters:[],myTeam:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){e.setState({charachters:t,filteredCharachters:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),console.log(this.state.charachters),r.a.createElement(N,{searchedHeroes:this.searchedHeroes}),r.a.createElement("div",{className:A.a.section},r.a.createElement(b,{charachters:this.state.filteredCharachters,myTeamAdd:this.myTeamAdd}),r.a.createElement(I,{team:this.state.myTeam,removeHero:this.removeHero})))}}]),a}(r.a.Component),D=a(2),X=a(17),q=a.n(X),G=a(21),K=a.n(G),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:K.a.image},r.a.createElement("img",{src:"".concat(this.props.info.thumbnail.path,".").concat(this.props.info.thumbnail.extension)}),r.a.createElement("button",{className:K.a.button,onClick:this.props.closeImage},"x")))}}]),a}(r.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).fetchInfo=function(){return fetch("https://gateway.marvel.com:443/v1/public/characters/".concat(e.props.match.params.id,"?apikey=aa3d20826840bd8571b0a17580337f2c")).then((function(e){return e.json()})).then((function(t){return e.setState({info:t.data.results[0]})}))},e.openImage=function(){e.setState({fullImage:!0})},e.closeImage=function(){e.setState({fullImage:!1})},e.renderHero=function(){return r.a.createElement("div",null,e.state.fullImage&&r.a.createElement(L,{info:e.state.info,closeImage:e.closeImage}),r.a.createElement("div",{className:q.a.wrap},console.log(e.state.info),r.a.createElement(E.a,{lg:"4",md:"6",sm:"8"},r.a.createElement("div",{className:q.a.image,onClick:e.openImage},r.a.createElement("img",{src:"".concat(e.state.info.thumbnail.path,"/standard_fantastic.").concat(e.state.info.thumbnail.extension)}))),r.a.createElement(E.a,{lg:"4",md:"5",sm:"6"},r.a.createElement("div",{className:q.a.text},r.a.createElement("h3",null,e.state.info.name),r.a.createElement("p",null,e.state.info.description)))))},e.state={info:null,fullImage:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchInfo()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),this.state.info?this.renderHero():null)}}]),a}(r.a.Component),V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:J}),r.a.createElement(D.a,{exact:!0,path:"/hero-info/:id",component:P})))};a(43);o.a.render(r.a.createElement(p.a,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c5ac7e26.chunk.js.map