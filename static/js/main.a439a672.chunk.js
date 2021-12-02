(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={info:"ContactItem_info__2xNHw",item:"ContactItem_item__8ladh",icon:"ContactItem_icon__2AtBq",button:"ContactItem_button__1dkyg",buttonText:"ContactItem_buttonText__3BGFh",topKey:"ContactItem_topKey__ULHV2",firstKey:"ContactItem_firstKey__1KfTf",secondKey:"ContactItem_secondKey__3D948",animation:"ContactItem_animation__3oY-d",beat:"ContactItem_beat__2tYVM"}},function(t,e,n){t.exports={inputBox:"Form_inputBox__3O-za",input:"Form_input__32Qgi",label:"Form_label__1IMIV",button:"Form_button__3SQBE",buttonName:"Form_buttonName__1ytzQ"}},function(t,e,n){t.exports={label:"Filter_label__2aOok",wrapper:"Filter_wrapper__QtV1L",input:"Filter_input__3SIEZ",focusBorder:"Filter_focusBorder__205yT"}},,,,,function(t,e,n){t.exports={total:"ContactList_total__NSZjP",amount:"ContactList_amount__2dqZj",item:"ContactList_item__1PLqk"}},,function(t,e,n){t.exports={section:"Section_section__39n7N",title:"Section_title__1az5c"}},function(t,e,n){t.exports={link:"Logo_link__fDAho",logo:"Logo_logo__VXcXT"}},,,,,,function(t,e,n){t.exports={container:"App_container__3FzFg"}},,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(15),s=n.n(o),i=n(19),r=n(5),l=n(6),u=n(8),m=n(7),b=n(20),d=n(11),j=n.n(d),h=n(0);function p(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:j.a.section,children:[e&&Object(h.jsx)("h2",{className:j.a.title,children:e}),n]})}var f=n(16),_=n(3),x=n.n(_),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.value;return Object(h.jsxs)("form",{onSubmit:this.onSubmit,autoComplete:"off",children:[Object(h.jsxs)("div",{className:x.a.inputBox,children:[Object(h.jsx)("input",{className:x.a.input,onChange:this.onChange,value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(h.jsx)("label",{className:x.a.label,children:"Name"})]}),Object(h.jsxs)("div",{className:x.a.inputBox,children:[Object(h.jsx)("input",{className:x.a.input,onChange:this.onChange,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(h.jsx)("label",{className:x.a.label,children:"Number"})]}),Object(h.jsx)("button",{className:x.a.button,type:"submit",children:Object(h.jsx)("span",{className:x.a.buttonName,children:"Add contact"})})]})}}]),n}(a.Component),v=n(2),g=n.n(v),N=n.p+"static/media/sprite.1aaf25ac.svg";function C(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:g.a.info,children:[Object(h.jsxs)("li",{className:g.a.item,children:[Object(h.jsx)("svg",{className:g.a.icon,width:"18",height:"18",children:Object(h.jsx)("use",{xlinkHref:"".concat(N,"#book")})}),Object(h.jsx)("p",{children:n})]}),Object(h.jsxs)("li",{className:g.a.item,children:[Object(h.jsx)("svg",{className:"".concat(g.a.icon," ").concat(g.a.animation),width:"18",height:"18",children:Object(h.jsx)("use",{xlinkHref:"".concat(N,"#mobile")})}),Object(h.jsx)("p",{children:a})]})]}),Object(h.jsxs)("button",{type:"button",onClick:function(){return c(e)},className:g.a.button,children:[Object(h.jsx)("span",{className:g.a.topKey}),Object(h.jsx)("span",{className:g.a.buttonText,children:"delete"}),Object(h.jsx)("span",{className:g.a.firstKey}),Object(h.jsx)("span",{className:g.a.secondKey})]})]})}var y=n(9),w=n.n(y);function k(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:w.a.total,children:["Total contacts:",Object(h.jsxs)("span",{className:w.a.amount,children:[" ",e.length]})]}),Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsx)("li",{className:w.a.item,children:Object(h.jsx)(C,{id:e,name:a,number:c,onDeleteContact:n})},e)}))})]})}var F=n(4),S=n.n(F),I=n(17);function A(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(h.jsxs)("div",{className:S.a.wrapper,children:[Object(h.jsx)(I.DebounceInput,{debounceTimeout:500,className:S.a.input,type:"text",value:e,onChange:n}),Object(h.jsx)("span",{className:S.a.focusBorder,children:Object(h.jsx)("i",{})})]})]})}var B=n(12),K=n.n(B),L=n.p+"static/media/logo.783f8c4b.png";function T(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("a",{className:K.a.link,href:"./index.html",children:Object(h.jsx)("img",{className:K.a.logo,src:L,alt:"logo"})})})}var z=n(13),D=n.n(z);function H(t){return D.a.Notify.warning("".concat(t," is already in contacts"))}D.a.Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:5e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",warning:{background:"#ff524b"}});var V=n(18),Z=n.n(V),q=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Viktor Kost",number:"221-19-88"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,o={id:Object(b.a)(),name:n,number:a},s=c.find((function(t){return t.name===o.name})),r=c.find((function(t){return t.number===o.number}));s?H(o.name):r?H(o.number):t.setState((function(t){var e=t.contacts;return{contacts:[o].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterBy=function(e){t.setState({filter:e.target.value})},t.showFiltered=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.showFiltered();return Object(h.jsxs)("div",{className:Z.a.container,children:[Object(h.jsx)(T,{}),Object(h.jsx)(p,{title:"Phonebook",children:Object(h.jsx)(O,{onSubmit:this.addContact})}),Object(h.jsxs)(p,{title:"Contacts",children:[Object(h.jsx)(A,{value:t,onChange:this.filterBy}),Object(h.jsx)(k,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(28);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.a439a672.chunk.js.map