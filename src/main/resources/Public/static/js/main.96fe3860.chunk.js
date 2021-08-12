(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(4)),j=c(2),l=c(8),m=c.n(l),h=c(10),d=c(11),o=(c(28),c(0)),u=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=t===c.team1?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsxs)("h1",{children:[Object(o.jsx)(i.b,{to:n,children:a})," "]}),Object(o.jsx)("h2",{className:"match-date",children:c.date}),Object(o.jsxs)("h3",{className:"match-venue",children:[c.venue," at ",c.city]}),Object(o.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(o.jsxs)("div",{className:"additional-detail",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:c.team1}),Object(o.jsx)("h3",{children:"Second Innings"}),Object(o.jsx)("p",{children:c.team2}),Object(o.jsx)("h3",{children:"Man of the match"}),Object(o.jsx)("p",{children:c.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[c.umpire1," , ",c.umpire2]})]})]})},b=function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsxs)("h1",{children:[Object(o.jsx)(i.b,{to:n,children:a})," "]}),Object(o.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})},O=(c(35),c(20)),x=function(){var e,t=Object(a.useState)({matches:[]}),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(j.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),n&&n.teamName?Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:null===n||void 0===n?void 0:n.teamName})}),Object(o.jsxs)("div",{className:"wins-loss-section",children:["Wins / Losses",Object(o.jsx)(O.PieChart,{data:[{title:"Losses",value:n.totalMatches-n.totalWins,color:"#a34d5d"},{title:"Wins",value:n.totalWins,color:"#4da375"}]}),";"]}),Object(o.jsxs)("div",{className:"match-detail-section",children:[Object(o.jsx)("h3",{children:"Latest Match"}),Object(o.jsx)(u,{teamName:n.teamName,match:n.matches[0]})]}),null===n||void 0===n||null===(e=n.matches)||void 0===e?void 0:e.slice(1).map((function(e){return Object(o.jsx)(b,{match:e,teamName:n.teamName},e.id)})),Object(o.jsx)("div",{className:"more-link",children:Object(o.jsx)(i.b,{to:"/teams/".concat(r,"/matches/").concat("2020"),children:"More >"})})]}):Object(o.jsx)("h2",{children:"Team not found"})},f=(c(36),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return c.map((function(e){return Object(o.jsx)("h4",{className:"YearSelector",children:Object(o.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))}),v=(c(37),function(){var e=Object(j.f)(),t=e.teamName,c=e.year,n=Object(a.useState)([]),s=Object(d.a)(n,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(t,"/matches?year=").concat(c));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:"Select Year"}),Object(o.jsx)(f,{teamName:t})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"page-heading",children:[t," matches in ",c]}),null===r||void 0===r?void 0:r.map((function(e){return Object(o.jsx)(u,{teamName:t,match:e},e.id)}))]})]})}),p=(c(38),function(e){var t=e.teamName;return Object(o.jsx)("div",{className:"TeamTile",children:Object(o.jsx)("h2",{children:Object(o.jsx)(i.b,{to:"/teams/".concat(t),children:t})})})}),N=(c(39),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("div",{className:"header-section",children:Object(o.jsx)("h1",{className:"app-name",children:"Skynet Systems IPL Dashboard"})}),Object(o.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(o.jsx)(p,{teamName:e.teamName},e.id)}))})]})});var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(o.jsx)(v,{})}),Object(o.jsx)(j.a,{path:"/teams/:teamName",children:Object(o.jsx)(x,{})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)(N,{})})]})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.96fe3860.chunk.js.map