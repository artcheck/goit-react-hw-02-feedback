(this.webpackJsonpreact_lib=this.webpackJsonpreact_lib||[]).push([[0],{10:function(e,t,n){e.exports={message:"Notification_message__3aTLb"}},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),o=n.n(s),i=n(7),r=n(8),d=n(9),b=n(12),l=n(11),u=n(3),j=n.n(u),p=n(0),h=function(e){var t=e.onLeaveFeedback;return Object(p.jsxs)("div",{className:j.a.optionsContainer,children:[Object(p.jsx)("button",{className:j.a.btn,type:"button",onClick:function(){return t("good")},children:"Good"}),Object(p.jsx)("button",{className:j.a.btn,type:"button",onClick:function(){return t("neutral")},children:"Neutral"}),Object(p.jsx)("button",{className:j.a.btn,type:"button",onClick:function(){return t("bad")},children:"Bad"})]})},O=n(10),v=n.n(O),x=function(e){var t=e.message;return Object(p.jsx)("p",{className:v.a.message,children:t})},f=n(5),k=n.n(f),m=function(e){var t=e.title,n=e.children;return Object(p.jsxs)("section",{className:k.a.section,children:[Object(p.jsx)("h2",{className:k.a.title,children:t}),n]})},g=n(2),N=n.n(g),_=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positiveFeedback;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:N.a.description,children:["Good: ",t]}),Object(p.jsxs)("p",{className:N.a.description,children:["Neutral: ",n]}),Object(p.jsxs)("p",{className:N.a.description,children:["Bad: ",a]}),Object(p.jsxs)("p",{className:N.a.description,children:["Total: ",c]}),Object(p.jsxs)("p",{className:N.a.description,children:["Positive feedback: ",s,"%"]})]})},F=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.onLeaveFeedback=function(t){e.setState((function(e){var n=e[t];return Object(i.a)({},t,n+1)}))},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.round(t/n*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage(),o=c?Object(p.jsx)(_,{good:t,neutral:n,bad:a,total:c,positiveFeedback:s}):Object(p.jsx)(x,{message:"No feedback given"});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{title:"Please leave feedback",children:Object(p.jsx)(h,{onLeaveFeedback:this.onLeaveFeedback})}),Object(p.jsx)(m,{title:"Statistics",children:o})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={description:"Statistics_description__3g1Dk"}},3:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2z_9d"}},5:function(e,t,n){e.exports={title:"Section_title__3Mvtq"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ed37cf76.chunk.js.map