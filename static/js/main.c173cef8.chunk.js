(this.webpackJsonptwitchpoe=this.webpackJsonptwitchpoe||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(12),i=a.n(s),c=(a(24),a(17)),l=a(13),o=a(14),m=a(16),u=a(15),d=a(18),h=a(2),f=a.n(h),p=(a(43),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={userId:[],userImg:[],userName:[],userProfileImg:[],userTitle:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()({url:"https://api.twitch.tv/helix/streams?first=24&game_id=29307&language=zh",method:"GET",headers:{"client-id":"wbd4r8kqc3urx0xd5f4fd4797nfr18"}}).then((function(t){console.log(t),e.setState({userId:e.state.userId.concat(t.data.data.map((function(e){return"id="+e.user_id}))),userImg:e.state.userImg.concat(t.data.data.map((function(e){return e.thumbnail_url.replace("{width}x{height}","720x400")}))),userTitle:e.state.userTitle.concat(t.data.data.map((function(e){return e.title})))})})).then((function(){f()({url:"https://api.twitch.tv/helix/users?".concat(e.state.userId.join("&")),method:"GET",headers:{"client-id":"wbd4r8kqc3urx0xd5f4fd4797nfr18"}}).then((function(t){e.setState(Object(c.a)({},e.state,{userName:e.state.userName.concat(t.data.data.map((function(e){return e.login}))),userProfileImg:e.state.userProfileImg.concat(t.data.data.map((function(e){return e.profile_image_url})))}))}))}))}},{key:"render",value:function(){for(var e=[],t=this.state.userName,a=this.state.userImg,r=this.state.userProfileImg,s=this.state.userTitle,i=0;i<t.length;i++)e.push({userName:t[i],userImg:a[i],userProfileImg:r[i],title:s[i]});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"channel"},"All Channel"),n.a.createElement("div",{className:"channel"},"English Channel "),n.a.createElement("div",{className:"channel"},"Taiwan Channel")),n.a.createElement("p",{className:"header"},"Path of Exile"),n.a.createElement("p",{className:"description"},"Top 24 popular live streams sorted by current viewers"),n.a.createElement("div",{className:"streamsContainer"},e.map((function(e){return n.a.createElement("a",{href:"https://www.twitch.tv/"+e.userName,target:"_blank",key:e.userName,className:"streams",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.userImg,alt:"Stream thumbnail",className:"streamsImg"}),n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profileImgContainer"},n.a.createElement("img",{src:e.userProfileImg,alt:"ProfileImg",className:"profileImg"})),n.a.createElement("div",{className:"detail"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("div",{className:"name"},e.userName))))}))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c173cef8.chunk.js.map