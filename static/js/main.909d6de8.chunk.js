(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(48)},29:function(e,a,t){},30:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(16),r=t.n(o),c=(t(29),t(17)),i=t(18),m=t(21),u=t(19),s=t(22),E=(t(30),t(1)),h=t.n(E),p=t(2),d=t.n(p),v=t(20),g=t.n(v),C=t(11),f=t.n(C),b=t(12),y=t.n(b),w=(t(31),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){var a=e.target.value,n=e.target.name,l=t.state.formData;l[n]=a,t.setState({formData:l})},t.handleSelectChange=function(e){var a=e.target.value,n=e.target.name,l=t.state.formData;l[n]=a,t.setState({formData:l})},t.handlePredictClick=function(e){var a=t.state.formData;t.setState({result:"",isLoading:!0}),Promise.race([fetch("https://flask.ljzxy.com/NET/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}),new Promise(function(e,a){setTimeout(function(){return a(new Error("request timeout"))},5e3)})]).then(function(e){return e.json()}).then(function(e){t.setState({result:e.result,isLoading:!1})}).catch(function(){t.setState({result:"Connection server timed out, please try again.",isLoading:!1})})},t.handleCancelClick=function(e){t.setState({result:""})},t.state={isLoading:!1,formData:{age:"",size:"",ext:"",num:"",sex:"1",race:"1",ru:"1",his:"1",grade:"1",stage:"0",surgery:"0",met:"0"},result:""},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isLoading,a=this.state.formData,t=this.state.result;return l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Predicting Five-year Survival\xa0in R-NETs")),l.a.createElement("div",{className:"content"},l.a.createElement(h.a,null,l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,{className:"label-head"},"General information"))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Age (years)"),l.a.createElement(h.a.Control,{type:"number",placeholder:"(years)",name:"age",value:a.age,onChange:this.handleChange})),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Sex"),l.a.createElement(h.a.Control,{as:"select",value:a.sex,name:"sex",onChange:this.handleSelectChange},l.a.createElement("option",{value:2},"Female"),l.a.createElement("option",{value:1},"Male")))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Race"),l.a.createElement(h.a.Control,{as:"select",value:a.race,name:"race",onChange:this.handleSelectChange},l.a.createElement("option",{value:1},"White"),l.a.createElement("option",{value:2},"Black"),l.a.createElement("option",{value:3},"Other"),l.a.createElement("option",{value:-1},"Unknown"))),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Rural or Urban"),l.a.createElement(h.a.Control,{as:"select",value:a.ru,name:"ru",onChange:this.handleSelectChange},l.a.createElement("option",{value:1},"Metropolitan(population over 1 million)"),l.a.createElement("option",{value:2},"Medium-sized urban(population 250,000-1 million)"),l.a.createElement("option",{value:3},"Small urban(population less than 250,000)"),l.a.createElement("option",{value:4},"Rural close to urban"),l.a.createElement("option",{value:5},"Rural not close to urban"),l.a.createElement("option",{value:-1},"Unknown/Not sure")))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,{className:"label-head"},"Tumor information"))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Histologic Type"),l.a.createElement(h.a.Control,{as:"select",value:a.his,name:"his",onChange:this.handleSelectChange},l.a.createElement("option",{value:1},"Carcinoid tumor"),l.a.createElement("option",{value:2},"Neuroendicrine carcinoma"),l.a.createElement("option",{value:3},"Atypical carcinoid tumor"))),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Grade"),l.a.createElement(h.a.Control,{as:"select",value:a.grade,name:"grade",onChange:this.handleSelectChange},l.a.createElement("option",{value:1},"Well differentiated"),l.a.createElement("option",{value:2},"Moderately differentiated"),l.a.createElement("option",{value:3},"Poorly differentiated"),l.a.createElement("option",{value:4},"Undifferentiated"),l.a.createElement("option",{value:-1},"Unknown"))),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Summary Stage"),l.a.createElement(h.a.Control,{as:"select",value:a.stage,name:"stage",onChange:this.handleSelectChange},l.a.createElement("option",{value:0},"In situ"),l.a.createElement("option",{value:1},"Localized"),l.a.createElement("option",{value:2},"Regional"),l.a.createElement("option",{value:7},"Distant"),l.a.createElement("option",{value:-1},"Unknown")))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Surgical Approach"),l.a.createElement(h.a.Control,{as:"select",value:a.surgery,name:"surgery",onChange:this.handleSelectChange},l.a.createElement("option",{value:0},"No surgery"),l.a.createElement("option",{value:10},"Local tumor destruction"),l.a.createElement("option",{value:20},"Local tumor excision"),l.a.createElement("option",{value:30},"Wedge or segmental resection; partial proctectomy"),l.a.createElement("option",{value:40},"Pull through WITH sphincter preservation (colo-anal anastomosis)"),l.a.createElement("option",{value:50},"Total proctectomy"),l.a.createElement("option",{value:60},"Total proctocolectomy"),l.a.createElement("option",{value:70},"Proctectomy or proctocolectomy with resection in continuity with other organs; pelvic exenteration"),l.a.createElement("option",{value:80},"Proctectomy"),l.a.createElement("option",{value:90},"Uncertain surgery"),l.a.createElement("option",{value:-1},"Unknown if surgery performed"))),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Tumor Size (mm)"),l.a.createElement(h.a.Control,{type:"number",placeholder:"(mm)",name:"size",value:a.size,onChange:this.handleChange})),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Metastasis (Bone,Liver,Brain)"),l.a.createElement(h.a.Control,{as:"select",value:a.met,name:"met",onChange:this.handleSelectChange},l.a.createElement("option",{value:1},"Yes"),l.a.createElement("option",{value:0},"No"),l.a.createElement("option",{value:-1},"Unknown")))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Farthest Extension of Tumors (mm)"),l.a.createElement(h.a.Control,{type:"number",placeholder:"(mm)",name:"ext",value:a.ext,onChange:this.handleChange})),l.a.createElement(h.a.Group,{as:d.a},l.a.createElement(h.a.Label,null,"Tumor Numbers"),l.a.createElement(h.a.Control,{type:"number",placeholder:"",name:"num",value:a.num,onChange:this.handleChange}))),""===t?null:l.a.createElement(f.a,null,l.a.createElement(d.a,{className:"result-container"},l.a.createElement("h5",{id:"result"},t))),l.a.createElement(f.a,null,l.a.createElement(d.a,null,l.a.createElement(y.a,{block:!0,variant:"success",disabled:e,onClick:e?null:this.handlePredictClick},e?"Making prediction":"Predict")),l.a.createElement(d.a,null,l.a.createElement(y.a,{block:!0,variant:"danger",disabled:e,onClick:this.handleCancelClick},"Reset prediction"))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.909d6de8.chunk.js.map