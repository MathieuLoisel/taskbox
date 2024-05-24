import{T as b}from"./Task-8078be18.js";import{I as K,v as j}from"./preview-errors-dde4324f.js";import"./vue.esm-bundler-02e7e331.js";import"./index-356e4a49.js";const{addons:B}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__;var N="storybook/actions",V=`${N}/action-event`,x={depth:10,clearOnStoryChange:!0,limit:50},S=(t,r)=>{let e=Object.getPrototypeOf(t);return!e||r(e)?e:S(e,r)},C=t=>!!(typeof t=="object"&&t&&S(t,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof t.persist=="function"),L=t=>{if(C(t)){let r=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));r.persist();let e=Object.getOwnPropertyDescriptor(r,"view"),a=e==null?void 0:e.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...e,value:Object.create(a.constructor.prototype)}),r}return t},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?j():Date.now().toString(36)+Math.random().toString(36).substring(2);function m(t,r={}){let e={...x,...r},a=function(...c){var d,l;if(r.implicit){let u=(d="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(n=>n.phase==="playing"||n.phase==="rendering");if(u){let n=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),g=new K({phase:u.phase,name:t,deprecated:n});if(n)console.warn(g);else throw g}}let I=B.getChannel(),v=W(),R=5,p=c.map(L),P=c.length>1?p:p[0],w={id:v,count:0,data:{name:t,args:P},options:{...e,maxDepth:R+(e.depth||3),allowFunction:e.allowFunction||!1}};I.emit(V,w)};return a.isAction=!0,a}const U={component:b,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},$={onPinTask:m("pin-task"),onArchiveTask:m("archive-task")},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...s.args.task,state:"TASK_PINNED"}}},i={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var O,T,f;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var D,h,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,k,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const H=["actionsData","Default","Pinned","Archived"];export{i as Archived,s as Default,o as Pinned,H as __namedExportsOrder,$ as actionsData,U as default};
