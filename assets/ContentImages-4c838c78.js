import{u as b,d as k,r as e,o as n,c as l,a,F as p,i as D,t as L,g as W,b as I}from"./index-96262fca.js";import P from"./ModalImage-c569b256.js";const C={class:"content-image-wrapper"},M={class:"content-image"},S={class:"content-image-item"},R=["onClick"],U=["src"],x={class:"content-image-label"},w={__name:"ContentImages",props:["componentData"],setup(i){b(o=>({"83cbb71e":r.value,"29c8755a":d.value,"36349f16":u.value,ea438918:g.value,f3826f1a:_.value}));const m=k(),r=e(),d=e(),u=e(),g=e(),_=e(),s=e(!1),v=e(""),t=i;r.value=t.componentData.imagesWidthPercent+"%",d.value=100/t.componentData.imagesList.length+"%",u.value=t.componentData.imagesWidthPercentSmall+"%",g.value=100/t.componentData.imagesList.length+"%",_.value=t.componentData.imagesWidthPercentMobile+"%";const h=o=>{document.documentElement.clientWidth>=480&&t.componentData.clickEnlarge&&(v.value=o,s.value=!0,m.scrollDisabled=!0)},f=()=>{s.value=!1,m.scrollDisabled=!1};return(o,y)=>(n(),l(p,null,[a("div",C,[a("div",M,[(n(!0),l(p,null,D(i.componentData.imagesList,c=>(n(),l("div",S,[a("div",{onClick:B=>h(c.imageURL)},[a("img",{src:c.imageURL,class:"content-image-image"},null,8,U)],8,R),a("div",x,L(c.label),1)]))),256))])]),s.value?(n(),W(P,{key:0,imageURL:v.value,onCloseModal:f},null,8,["imageURL"])):I("",!0)],64))}};export{w as default};
