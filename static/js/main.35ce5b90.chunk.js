(this["webpackJsonpsieve-of-eratosthenes"]=this["webpackJsonpsieve-of-eratosthenes"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(4),o=n.n(s),c=(n(9),n(2)),a=(n(10),n(0)),b=function(e){var t=Object(a.jsx)("div",{});return t=e.prime?Object(a.jsxs)("div",{style:{width:"100px",height:"100px",border:"1px solid black",background:"green",textAlign:"center",fontSize:"35px",fontFamily:"Oswald, sans-serif"},children:[" ",e.number," "]}):Object(a.jsxs)("div",{style:{width:"100px",height:"100px",border:"1px solid black",textAlign:"center",fontSize:"35px",fontFamily:"Oswald, sans-serif"},children:[" ",e.number," "]}),Object(a.jsx)("div",{children:t})},l=function(){var e=Object(i.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)([]),o=Object(c.a)(s,2),l=o[0],u=o[1],h=Object(i.useState)(!1),j=Object(c.a)(h,2),d=j[0],m=j[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"headers",children:"The Sieve of Eratosthenes Prime Number Generator"}),Object(a.jsxs)("div",{className:"inputs",children:[Object(a.jsx)("input",{type:"text",className:"input_box",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Limit (n)"}),Object(a.jsx)("button",{className:"generate_button",onClick:function(){if("number"===typeof parseInt(n)){var e=function(e){for(var t=[],n=0,i=0;i<=e;i++)t.push(!0);t[0]=!1,t[1]=!1;for(var r=2;r<=Math.sqrt(e);r++)if(!0===t[r]){n=0;for(var s=r*r;s<=e;s=r*r+n*r)t[s]=!1,n++}return t}(n);u(e),m(!0)}},children:"Generate"}),Object(a.jsx)("button",{className:"reset_button",onClick:function(){m(!1),r("")},children:"Reset"})]}),Object(a.jsx)("div",{className:"container",children:d&&Object(a.jsx)("div",{className:"body",children:l.map((function(e,t){return Object(a.jsx)(b,{number:t,prime:e})}))})}),!d&&Object(a.jsxs)("div",{className:"description",children:["Enter natural number ",Object(a.jsx)("i",{children:"n"})," into the textbox and click Generate! This will compute all the prime numbers up to ",Object(a.jsx)("i",{children:"n"}),". WARNING: ",Object(a.jsx)("i",{children:"n"})," > 90,000 may crash the site.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"During my Number Theory course in college, we learned about The Sieve of Eratosthenes. Although simple, I still found this ancient method of computing prime numbers to be a pretty fascinating algorithm. It works by going down the line of numbers, stopping at each, and sending out a second pointer to eliminate all of the multiples of the selected number.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"A more formal definition can be found ",Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes",children:"here"}),". Thought it would be fun to code up this quick visualization of the results. I was never the best at math courses, let alone a proof-based math course, but Number Theory was quite memorable and interesting. Shoutout to Professor Luis for being amazing! Even if I don't remember everything from this course in the future, I will at least have this project to look back on :)",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"~Tyler",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Sept. 2021"]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),s(e),o(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.35ce5b90.chunk.js.map