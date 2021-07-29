(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),s=n.n(o),c=(n(28),n(3)),i=n(6),u=n(5),l=n(4),h=(n(29),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e}return Object(i.a)(n,[{key:"changeState",value:function(){this.setState({showDetails:!this.state.showDetails})}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h1",{className:"summary",children:t.summary}),Object(h.jsx)("p",{className:"date",children:t.start.dateTime+" ("+t.start.timeZone+")"}),Object(h.jsx)("p",{className:"location",children:"@"+t.summary+" | "+t.location}),this.state.showDetails?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"about",children:"About event:"}),Object(h.jsx)("a",{className:"link",href:t.htmlLink,children:"See details on Google Calendar"}),Object(h.jsx)("p",{className:"description",children:t.description})]}):null,Object(h.jsx)("button",{className:"details-button",onClick:function(){return e.changeState()},children:this.state.showDetails?"Hide Details":"Show Details"})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(f,{text:this.state.infoText}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:function(){e.setState({showSuggestions:!1})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onMouseDown:function(e){return e.preventDefault()},onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onMouseDown:function(e){return e.preventDefault()},onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleInputChanged=function(t){var n=t.target.value;e.props.updateNumberOfEvents(n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.numberOfEvents;return Object(h.jsx)("div",{className:"NumberOfEvents",children:Object(h.jsx)("input",{type:"number",className:"number",value:e,onChange:this.handleInputChanged})})}}]),n}(a.Component),b=n(23),j=n(7),g=n.n(j),w=n(8),O=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],y=n(10),k=n.n(y),x=n(11),S=n.n(x),T=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://q5a5kpwrdb.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.a.start(),!window.location.href.startsWith("http://localhost")){e.next=3;break}return e.abrupt("return",O);case 3:return e.next=5,T();case 5:if(!(t=e.sent)){e.next=15;break}return E(),n="https://q5a5kpwrdb.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=11,k.a.get(n);case 11:return(a=e.sent).data&&(r=D(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),S.a.done(),e.abrupt("return",a.data.events);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(w.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://q5a5kpwrdb.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.map((function(e){return e.location}));return Object(b.a)(new Set(t))},I=(n(49),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],location:"all",numberOfEvents:32},e.updateEvents=function(t){N().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a.slice(0,e.state.numberOfEvents)})})),e.setState({location:t})},e.updateNumberOfEvents=function(t){e.setState({numberOfEvents:t}),e.updateEvents(e.state.location)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,N().then((function(t){e.mounted&&e.setState({events:t,locations:D(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(v,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(h.jsx)(p,{events:this.state.events})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(22).config("4e18c62150334de4a623e9328c986497").install(),s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.c0436f4a.chunk.js.map