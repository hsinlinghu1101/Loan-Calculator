(this.webpackJsonploan=this.webpackJsonploan||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(11),l=a.n(c),r=a(5),i=a(4),o=a(3),j=a(10),p=a(6),d=(a(21),a(0));function b(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)("monthly"),r=Object(i.a)(l,2),b=r[0],u=r[1],h=[p.d,p.a,p.f,p.b,p.c];return Object(d.jsxs)("div",{className:"list",children:[e.record.map((function(t,a){return Object(d.jsx)("div",{children:s?Object(d.jsxs)("div",{className:"list1",children:[Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Type of loans:"}),Object(d.jsx)("b",{children:Object(d.jsxs)("span",{children:[""===t.loanType?"Others":t.loanType," "]})})]}),Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Principal: "}),Object(d.jsx)("b",{children:Object(d.jsx)("span",{children:Object(d.jsx)(o.a,{value:t.principal,displayType:"text",thousandSeparator:!0,prefix:"$"})})})]}),Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Monthly payments: "}),Object(d.jsx)("b",{children:Object(d.jsx)("span",{children:Object(d.jsx)(o.a,{value:t.loanPayment.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})})})]}),Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Accelerated bi-weekly payments: "}),Object(d.jsx)("b",{children:Object(d.jsx)("span",{children:Object(d.jsx)(o.a,{value:(parseFloat(t.loanPayment.toFixed(2))/2).toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})})})]}),Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Total interest using monthly payments: "}),Object(d.jsx)("b",{children:Object(d.jsx)("span",{children:Object(d.jsx)(o.a,{value:t.interestM.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})})})]}),Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Total interest using accelerated bi-weekly payments: "}),Object(d.jsx)("b",{children:Object(d.jsx)("span",{children:Object(d.jsx)(o.a,{value:t.interestBi.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})})})]}),Object(d.jsxs)("div",{className:"list2",children:[Object(d.jsx)("span",{children:"Bi-weekly payment interest savings: "}),Object(d.jsx)("b",{children:Object(d.jsx)("span",{children:Object(d.jsx)(o.a,{value:(t.interestM-t.interestBi).toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})})})]}),Object(d.jsx)("hr",{})]}):Object(d.jsxs)("div",{className:"list1",children:[Object(d.jsx)(j.a,{icon:h[t.typeNum],color:"#f5df4d",size:"lg"}),""===t.loanType?"Others":t.loanType," loans --- ",Object(d.jsx)(o.a,{value:t.principal,displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(d.jsx)("button",{type:"button",className:"remove","aria-label":"remove",onClick:function(){e.handleRemove(a)},children:Object(d.jsx)(j.a,{icon:p.e,size:"lg"})})]})},a)})),Object(d.jsx)("div",{className:"list_btn",children:Object(d.jsx)("button",{className:"btn send",onClick:function(){c(!s)},children:s?"Close":"Show Details"})}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"section ",children:[Object(d.jsx)("label",{htmlFor:"payment_type",children:"Payment Frequency: "}),Object(d.jsxs)("select",{type:"number",name:"payment_type",onChange:function(e){return u(e.target.value)},children:[Object(d.jsx)("option",{value:"monthly",children:"Monthly"}),Object(d.jsx)("option",{value:"bi-weekly",children:"Bi-Weekly"})]})]}),Object(d.jsxs)("p",{className:"section",children:["Total ",b," payment: ",Object(d.jsx)(o.a,{value:"monthly"===b?e.all_month.reduce((function(e,t){return e+t}),0).toFixed(2):(e.all_month.reduce((function(e,t){return e+t}),0)/2).toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})," "]})]})]})}a(23);var u=a.p+"static/media/Mortgage.ba4e3332.png",h=a.p+"static/media/Auto.be7d87be.png",O=a.p+"static/media/Others.649a0511.png",x=a.p+"static/media/Personal.40497cfc.png",m=a.p+"static/media/Student.75d0cb1c.png";function y(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)([]),r=Object(i.a)(l,2),j=r[0],p=r[1],y=Object(n.useState)(!1),v=Object(i.a)(y,2),f=v[0],T=v[1],N=Object(n.useState)(!1),g=Object(i.a)(N,2),S=(g[0],g[1]),_=[u,h,x,m,O],M=e.loan,F=parseFloat(M.loan),A=M.loanTermMonth,k=M.loanApr/100/12,C=Math.pow(1+k,A),$=F*C*k/(C-1),w=$*A-F,P=F+w,E=$/2,Y=M.loanApr/100/26;function R(){for(var e=F,t=0;e>0;)t++,e=e+e*Y-E;return E*t+e-F}return Object(n.useEffect)((function(){e.isSubmit&&T(!1)}),[e.isSubmit]),Object(n.useEffect)((function(){S(!1)})),Object(d.jsxs)("div",{children:[e.isSubmit&&!f&&Object(d.jsxs)("div",{className:"record",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("h2",{children:[" ",""===M.loanType?"Others":M.loanType," loans"]}),Object(d.jsxs)("p",{children:["Monthly Payments: ",Object(d.jsx)(o.a,{value:$.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(d.jsxs)("p",{children:["Total principal paid: ",Object(d.jsx)(o.a,{value:F,displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(d.jsxs)("p",{children:["Total interest paid: ",Object(d.jsx)(o.a,{value:w.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(d.jsxs)("p",{children:["Total amount repaid: ",Object(d.jsx)(o.a,{value:P.toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(d.jsx)("button",{className:"btn send",onClick:function(){return function(){var e={loanType:M.loanType,loanPayment:$,typeNum:M.typeNum,principal:F,interestM:w,interestBi:R(),total_amount:P},t=s;t.push(e),c(t);var a=j;a.push($),p(a),T(!0)}()},disabled:f,children:"Save and continue"})]}),Object(d.jsx)("img",{src:_[Number(M.typeNum)],alt:M.loanType})]}),s.length>0&&f&&Object(d.jsx)(b,{record:s,handleRemove:function(e){var t=s;t.splice(e,1),c(t);var a=j;a.splice(e,1),p(a),S(!0)},all_month:j})]})}var v=a.p+"static/media/characters.09dcfb9f.png";a(24);var f=function(){var e=Object(n.useState)({loan:"",loanApr:"",loanType:"Mortgage",typeNum:0,loanTermYear:"",loanTermMonth:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],j=l[1],p=Object(n.useState)(!1),b=Object(i.a)(p,2),u=b[0],h=b[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),m=x[0],f=x[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsxs)("h1",{children:[Object(d.jsx)("i",{"data-vi":"calculator","data-vi-primary":"#939597","data-vi-accent":"#393e46"}),"Loan Calculator"]})}),Object(d.jsxs)("main",{children:[Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=e.target,a=t.loan_amount,n=t.others,c=t.loan_type,l=t.apr,r=t.loan_term_year,i=t.loan_term_month;s({loan:a.value,loanApr:l.value,loanType:n?m.charAt(0).toUpperCase()+m.slice(1):c.value.split(",")[0],typeNum:c.value.split(",")[1],loanTermYear:r.value,loanTermMonth:i.value}),j(!0),f("")}(e)},children:[Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("label",{htmlFor:"loan_type",children:"TYPES OF LOANS "}),Object(d.jsx)("select",{type:"text",name:"loan_type",id:"loan_type",onChange:function(e){j(!1),h(!1),s(Object(r.a)(Object(r.a)({},a),{},{loanType:e.target.value.split(",")[0],typeNum:e.target.value.split(",")[1]}))},children:[{Mortgage:0},{Auto:1},{Personal:2},{Student:3},{Others:4}].map((function(e,t){return Object(d.jsx)("option",{value:Object.entries(e),children:Object.keys(e)},t)}))}),"Mortgage"!==a.loanType&&"Auto"!==a.loanType&&"Student"!==a.loanType&&"Personal"!==a.loanType&&!o&&!u&&Object(d.jsx)("input",{type:"text",name:"others",placeholder:"Type your loan",autoFocus:!0,onChange:function(e){f(e.target.value)}})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("label",{htmlFor:"loan_amount",children:"LOAN AMOUNT "}),Object(d.jsx)("span",{className:"dollar",children:"$"}),Object(d.jsx)("input",{type:"float",name:"loan_amount",id:"loan_amount",min:"1000",required:!0,onChange:function(){j(!1)}})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("label",{htmlFor:"apr",children:"ANNUAL INTEREST RATE (APR) "}),Object(d.jsx)("input",{type:"float",name:"apr",id:"apr",max:"99",min:"1",required:!0,onChange:function(){j(!1)}}),Object(d.jsx)("span",{className:"percent",children:"%"})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("label",{children:"LOAN TERM "}),Object(d.jsx)("input",{type:"number",className:"loan_term",name:"loan_term_year",min:"1",max:"40",placeholder:"Year",value:a.loanTermYear,required:!0,onKeyDown:function(e){return/[\.\,]$/.test(e.key)&&e.preventDefault()},onChange:function(e){j(!1),s(Object(r.a)(Object(r.a)({},a),{},{loanTermYear:parseInt(e.target.value),loanTermMonth:12*e.target.value}))}}),Object(d.jsx)("span",{className:"or",children:"y or"}),Object(d.jsx)("input",{type:"number",className:"loan_term",name:"loan_term_month",min:"1",max:"480",placeholder:"Month",value:a.loanTermMonth,required:!0,onKeyDown:function(e){return/[\.\,]$/.test(e.key)&&e.preventDefault()},onChange:function(e){j(!1),s(Object(r.a)(Object(r.a)({},a),{},{loanTermYear:e.target.value/12,loanTermMonth:parseInt(e.target.value)}))}}),Object(d.jsx)("span",{className:"or",children:"m"})]}),Object(d.jsx)("button",{type:"submit",className:"btn send",children:"Calculate"}),Object(d.jsx)("button",{type:"reset",className:"btn reset",onClick:function(){s(Object(r.a)(Object(r.a)({},a),{},{loanTermYear:"",loanTermMonth:""})),h(!0)},children:"Reset"})]}),!o&&Object(d.jsx)("img",{className:"characters",src:v,alt:"characters",width:"400px"}),Object(d.jsx)(y,{loan:a,isSubmit:o})]}),Object(d.jsxs)("footer",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("span",{children:"\xa9 Hsin Ling Hu  "})}),Object(d.jsx)("a",{href:"mailto:hsinkava11@gmail.com",children:"hsinkava11@gmail.com"})]})]})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.733e9ccf.chunk.js.map