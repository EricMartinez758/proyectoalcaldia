import{P as l,j as r,r as t}from"./index-DwvoAiy8.js";import{c as d}from"./index-C8m_4LRO.js";import{D as i}from"./DefaultLayout-BTfZrRXg.js";import"./index.esm-Bf7yr9NV.js";import{C as h,a as m}from"./CCardBody-CE4h0fN0.js";import{C as x}from"./CCardHeader-DT4u3M-W.js";import{C as j,a as g}from"./CRow-DaTDNMwH.js";import"./cil-envelope-open-CnCowPmc.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";var p=function(s){if(typeof s>"u")throw new TypeError("Hex color is not defined");if(s==="transparent")return"#00000000";var o=s.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!o)throw new Error("".concat(s," is not a valid rgb color"));var a="0".concat(parseInt(o[1],10).toString(16)),n="0".concat(parseInt(o[2],10).toString(16)),c="0".concat(parseInt(o[3],10).toString(16));return"#".concat(a.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))};const C=()=>{const[s,o]=t.useState("rgb(255, 255, 255)"),a=t.createRef();return t.useEffect(()=>{const n=a.current.parentNode.firstChild,c=window.getComputedStyle(n).getPropertyValue("background-color");o(c)},[a]),r.jsx("table",{className:"table w-100",ref:a,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{className:"text-body-secondary",children:"HEX:"}),r.jsx("td",{className:"font-weight-bold",children:p(s)})]}),r.jsxs("tr",{children:[r.jsx("td",{className:"text-body-secondary",children:"RGB:"}),r.jsx("td",{className:"font-weight-bold",children:s})]})]})})},e=({className:s,children:o})=>{const a=d(s,"theme-color w-75 rounded mb-3");return r.jsxs(g,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[r.jsx("div",{className:a,style:{paddingTop:"75%"}}),o,r.jsx(C,{})]})};e.propTypes={children:l.node,className:l.string};const E=()=>r.jsx(r.Fragment,{children:r.jsxs(h,{className:"mb-4",children:[r.jsxs(x,{children:["Theme colors",r.jsx(i,{href:"https://coreui.io/docs/utilities/colors/"})]}),r.jsx(m,{children:r.jsxs(j,{children:[r.jsx(e,{className:"bg-primary",children:r.jsx("h6",{children:"Brand Primary Color"})}),r.jsx(e,{className:"bg-secondary",children:r.jsx("h6",{children:"Brand Secondary Color"})}),r.jsx(e,{className:"bg-success",children:r.jsx("h6",{children:"Brand Success Color"})}),r.jsx(e,{className:"bg-danger",children:r.jsx("h6",{children:"Brand Danger Color"})}),r.jsx(e,{className:"bg-warning",children:r.jsx("h6",{children:"Brand Warning Color"})}),r.jsx(e,{className:"bg-info",children:r.jsx("h6",{children:"Brand Info Color"})}),r.jsx(e,{className:"bg-light",children:r.jsx("h6",{children:"Brand Light Color"})}),r.jsx(e,{className:"bg-dark",children:r.jsx("h6",{children:"Brand Dark Color"})})]})})]})});export{E as default};
