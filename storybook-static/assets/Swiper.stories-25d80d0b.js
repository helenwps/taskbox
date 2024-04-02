import{r as z,l,d as x,t as v,n as B,m as E,o as q}from"./vue.esm-bundler-1e5d12c2.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const w={name:"my-swiper",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:r}){return e=z(e),{classes:l(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:l(()=>({backgroundColor:e.backgroundColor})),onClick(){r("click")}}}};function L(e,r,_,a,O,P){return q(),x("button",{type:"button",class:B(a.classes),onClick:r[0]||(r[0]=(...C)=>a.onClick&&a.onClick(...C)),style:E(a.style)},v(_.label),7)}const N=D(w,[["render",L]]);w.__docgenInfo={displayName:"my-swiper",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["/Users/mac/Documents/taskbox/src/stories/Swiper.vue"]};const M={title:"Example/Swiper",component:N,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},s={args:{primary:!0,label:"Swiper"}},o={args:{label:"Swiper"}},t={args:{size:"large",label:"Swiper"}},n={args:{size:"small",label:"Swiper"}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Swiper'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Swiper'
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,g,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Swiper'
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,k,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Swiper'
  }
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const T=["Primary","Secondary","Large","Small"];export{t as Large,s as Primary,o as Secondary,n as Small,T as __namedExportsOrder,M as default};
