import{u as T,d as A,r as y,e as k,f as b,o as s,c as o,g as l,b as i,h as v,a as h,F as p,i as D,n as g}from"./index-8721e2de.js";import R from"./ButtonAnswer-ee70e904.js";import _ from"./CheckboxAnswer-6f4a2cd0.js";import $ from"./CheckboxImageAnswer-568b5fc9.js";import B from"./ContentImages-0166ef20.js";import S from"./ContentAnswersOnImage-c7448fde.js";import I from"./ContentText-09c9636e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-e9248f18.js";import"./ModalImage-2c373cfe.js";const M={key:1,class:"left-side"},H={class:"content-answers"},U={key:0},V=["innerHTML"],N={key:1,class:"answers-checkboxes-list"},O={key:2,class:"answers-image-checkboxes-list"},W={key:3,class:"answers-buttons-list"},F=["innerHTML"],Y={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(a,{emit:f}){T(t=>({"59dd894a":u.value})),A();const w=f,e=a,u=y("");e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const C=k(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let c=0;c<e.componentData.answersList.length;c++)e.componentData.answersList[c].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?w("action",e.componentData.answersList[t].action):w("chooseAction",e.componentData.answersList[t].action)}},L=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const c=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[c]]=[e.componentData.answersList[c],e.componentData.answersList[t]]}},x=k(()=>e.componentData.answersList.every(t=>!t.isChecked));return b(()=>{e.componentData.doShuffle&&x.value&&L()}),(t,c)=>(s(),o("div",{class:g({"multi-wrapper":a.componentData.isAnswersWithImage,"image-answers-wrapper":a.componentData.isAnswersOnImage})},[a.componentData.isAnswersOnImage?(s(),l(S,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):i("",!0),a.componentData.isAnswersWithImage?(s(),o("div",M,[v(B,{componentData:a.componentData.imagesData},null,8,["componentData"])])):i("",!0),h("div",{class:g({"right-side":a.componentData.isAnswersWithImage})},[a.componentData.textData!=null?(s(),l(I,{key:0,componentData:a.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):i("",!0),h("div",H,[e.componentData.hints?(s(),o("div",U,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,V)])):i("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",N,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(_,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,onClick:d=>m(r),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",O,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l($,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,imageURL:n.image.imageURL,onClick:d=>m(r),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",W,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(R,{answerText:n.answerText,isChecked:!!n.isChecked,onClick:d=>m(r),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):i("",!0),a.componentData.showLegend?(s(),o("div",{key:4,innerHTML:C.value,class:"answers-legend"},null,8,F)):i("",!0)])],2)],2))}};export{Y as default};
