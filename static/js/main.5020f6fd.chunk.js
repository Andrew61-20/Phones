(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(54)},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),c=a(56),i=a(57),u=(a(28),a(5)),s=a(6),d=a(9),m=a(7),h=a(10),p=a(11),v=a.n(p);v.a.defaults.baseUrl="http://localhost:3001/users";var f="http://localhost:3001/users",b=function(e){return v.a.delete("".concat(f,"/").concat(e)).then(function(e){return 200===e.status})},E=function(e){return v.a.post(f,e).then(function(e){return e.data})},g=function(e){var t=e.user,a=e.update,n=e.index;return l.a.createElement("tr",{onClick:function(){return a({active:n})}},l.a.createElement("td",null,l.a.createElement("img",{src:"../../media/".concat(t.image,".jpg"),alt:"",className:"user-image"})),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.phone))},y=function(e){var t=e.data,a=e.update;if(!t)return l.a.createElement("p",null,"Loading...");var n=t.map(function(e,t){return l.a.createElement(g,{user:e,index:t,key:"user-".concat(t),update:a})});return l.a.createElement("table",{className:"user-list table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"))),l.a.createElement("tbody",null,n))},O=function(e){var t=e.data,a=e.active;if(!t||!t[a])return l.a.createElement("h4",null," Nothing found :(");var n=t[a];return l.a.createElement("div",{className:"thumbnail"},l.a.createElement("img",{src:"../../media/".concat(n.image,".jpg"),alt:""}),l.a.createElement("div",{className:"thumbnail-caption"},l.a.createElement("h3",null,n.name),l.a.createElement("table",{className:"user-info table table-responsive"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Favorite animal:"),l.a.createElement("td",null,n.image)),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone:"),l.a.createElement("td",null,n.phone)))),l.a.createElement("p",null,l.a.createElement("b",null,"Favorite phrase: "),n.phrase)))},w=function(e){var t=e.dataSearch,a=e.term,n=e.data,r=e.update;return t=function(e){var t=e.target.value.toLowerCase(),a=n.filter(function(e){return e.name.toLowerCase().includes(t)});r({data:a,active:0,term:t})},l.a.createElement("div",{className:"searchbar form-group"},l.a.createElement("input",{value:a,type:"text",className:"form-control",placeholder:"Search people by name...",onChange:t}))},C=a(12),N={name:"",phone:"",phrase:""},M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state=Object(C.a)({},N),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.closeModal()},a.reset=function(){a.setState(Object(C.a)({},N))},a.handleSubmit=function(e){var t=a.props,n=t.data,l=t.update;(0,t.closeModal)(),v.a.put("http://localhost:3001/users/".concat(e.id),{name:e.name,phone:e.phone,image:e.image}).then(function(e){l({data:n,active:0})})},a.handleChangeName=function(e){var t=a.props,n=t.data,l=t.active;a.setState({name:e.target.value}),n[l].name=e.target.value},a.handleChangePhrase=function(e){var t=a.props,n=t.data,l=t.active;a.setState({phrase:e.target.value}),n[l].phrase=e.target.value},a.handleChange2=function(e){var t=a.props,n=t.data,l=t.active;a.setState({phone:e.target.value});e.target.value.match(/[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/g)&&(n[l].phone=e.target.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this,t=this.props,a=t.closeModal,n=t.data,r=t.active,o=this.state,c=o.name,i=o.phone,u=o.phrase;return l.a.createElement("div",{className:"FormModal"},l.a.createElement("input",{type:"text",name:"name",value:c,onChange:function(t){return e.handleChangeName(t)},placeholder:"Name and Surname"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u2116 \u0442\u0435\u043b. \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 (111)111-11-11"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phoneNumber",value:i,onChange:function(t){return e.handleChange2(t)},placeholder:"Phone Number"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phrase",value:u,onChange:function(t){return e.handleChangePhrase(t)},placeholder:"Favorite Phrase"}),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:a},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),l.a.createElement("button",{type:"button",onClick:function(){return e.handleSubmit(n[r])}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435"))}}]),t}(n.Component),j=a(13),k={name:"",phone:"",phrase:""},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state=Object(C.a)({},k),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.closeModal()},a.reset=function(){a.setState(Object(C.a)({},k))},a.handleSubmit=function(e,t){var n=a.props,l=n.closeModal,r=n.load;l(),t.preventDefault(),E(e).then(function(e){r()})},a.handleChange1=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(j.a)({},n,l))},a.handleChange2=function(e){a.setState({phone:e.target.value.match(/[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/g)})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this,t=this.props.closeModal,a=this.state,n=a.name,r=a.phone,o=a.phrase;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit({name:n,phone:r,phrase:o},t)}},l.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChange1,placeholder:"Name and Surname"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u2116 \u0442\u0435\u043b. \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 (111)111-11-11"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phoneNumber",value:r,onChange:function(t){return e.handleChange2(t)},placeholder:"Phone Number"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phrase",value:o,onChange:this.handleChange1,placeholder:"Favorite Phrase"}),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:t},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),l.a.createElement("button",{type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435")))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isModalOpen1:!1,isModalOpen2:!1,isSignAdd:!1},a.openModal1=function(){return a.setState({isModalOpen1:!0,isModalOpen2:!1})},a.openModal2=function(){return a.setState({isModalOpen2:!0,isModalOpen1:!1})},a.closeModal=function(){return a.setState({isModalOpen1:!1,isModalOpen2:!1})},a.rem=function(e){var t=a.props,n=t.data,l=t.update;n.find(function(t){return t.id===e.id})&&b(e.id).then(function(t){t&&l({data:n.filter(function(t){return t.id!==e.id}),active:0})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isModalOpen1,n=t.isModalOpen2,r=this.props,o=r.update,c=r.data,i=r.active,u=r.load;return l.a.createElement("div",{className:"toolbar"},l.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.rem(c[i])}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.openModal1()}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),l.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.openModal2()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),a&&l.a.createElement(M,{closeModal:this.closeModal,data:c,active:i,update:o}),n&&l.a.createElement(S,{closeModal:this.closeModal,data:c,load:u}))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={users:[],data:null,term:"",active:0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;v.a.get(f).then(function(e){return e.data}).then(function(t){e.initialData=t,e.setState({data:e.initialData})})}},{key:"updateData",value:function(e){this.setState(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"app container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(w,{term:this.state.term,data:this.initialData,update:this.updateData.bind(this)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(D,{data:this.state.data,active:this.state.active,update:this.updateData.bind(this),load:this.loadData.bind(this)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 col-md-3 col-lg-2"},l.a.createElement(O,{data:this.state.data,active:this.state.active})),l.a.createElement("div",{className:"col-sm-8 col-md-9 col-lg-10"},l.a.createElement(y,{data:this.state.data,update:this.updateData.bind(this)}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);o.a.render(l.a.createElement(c.a,null,l.a.createElement(i.a,{component:P})),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.5020f6fd.chunk.js.map