(function(){"use strict";var e={7438:function(e,t,o){var a=o(5130),s=o(6768);const l={class:"w-full bg-slate-300 h-[83vh] sm:h-[85vh] overflow-hidden text-center"},r=(0,s.Fv)('<footer class="bg-white px-[5%] flex-col-reverse text-center items-center h-10"><p class="text-lg"> copyright @ <strong class="text-red-500 font-extrabold">mahmoud ramadan</strong></p><ul class="flex justify-center gap-5"><li class="hover:scale-105 ease-linear duration-200"><a href="https://www.facebook.com/profile.php?id=100007283614477"><i class="fa-brands fa-facebook icon text-blue-700 text-xl"></i></a></li><li class="hover:scale-105 ease-linear duration-200"><a href="mailto:hodaramadan199@gmail.com"><i class="fa-solid fa-envelope text-xl text-black"></i></a></li><li class="hover:scale-105 ease-linear duration-200"><a href="https://wa.me/+201129780862"><i class="fa-brands fa-whatsapp font-extrabold text-xl text-green-600"></i></a></li></ul></footer>',1);function d(e,t,o,a,d,n){const i=(0,s.g2)("Header"),c=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(i),(0,s.Lk)("section",l,[(0,s.bF)(c)]),r],64)}const n={class:"flex justify-between items-center py-2 bg-white text-black px-5"},i=(0,s.Lk)("span",{class:"text-red-500 font-bold hover:scale-105 duration-200 cursor-pointer text-2xl uppercase w-full"},"Todo-List",-1),c={class:"flex gap-4 items-center text-lg font-medium"},u=(0,s.Lk)("span",null,"Home",-1),f=(0,s.Lk)("i",{class:"fas fa-home"},null,-1),p=(0,s.Lk)("span",{class:"hidden sm:block"},"Login",-1),m=(0,s.Lk)("i",{class:"fas fa-user-circle"},null,-1),h={class:"h-8 w-8 overflow-hidden"},g=["src"],x={key:1,class:"fas fa-user-circle"},v=(0,s.Lk)("i",{class:"fas fa-right-from-bracket"},null,-1),k=[v];function w(e,t,o,a,l,r){const d=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",n,[i,(0,s.Lk)("div",c,[(0,s.bF)(d,{to:"/",class:"flex gap-1 hover:scale-105 duration-200 items-center"},{default:(0,s.k6)((()=>[u,f])),_:1}),""==e.$store.state.addUser?((0,s.uX)(),(0,s.Wv)(d,{key:0,to:"/login",class:"flex gap-1 hover:scale-105 duration-200 items-center"},{default:(0,s.k6)((()=>[p,m])),_:1})):((0,s.uX)(),(0,s.Wv)(d,{key:1,to:"/login",class:"relative flex-col gap-1 hover:scale-105 duration-200 items-center"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",h,[""!==e.$store.state.addUser?((0,s.uX)(),(0,s.CE)("img",{key:0,class:"p-px h-full w-full rounded-full border-2 border-white",src:e.$store.state.addUser.image,alt:"User Image"},null,8,g)):((0,s.uX)(),(0,s.CE)("i",x))])])),_:1})),(0,s.Lk)("span",{class:"cursor-pointer flex flex-nowrap justify-center items-center gap-1",onClick:t[0]||(t[0]=t=>e.$store.dispatch("logout"))},k)])])}var b={name:"HeaderPage"},y=o(1241);const U=(0,y.A)(b,[["render",w]]);var L=U,C={components:{Header:L}};const S=(0,y.A)(C,[["render",d]]);var T=S,$=o(1387);const E={class:"main"};function N(e,t,o,a,l,r){const d=(0,s.g2)("Create"),n=(0,s.g2)("HeaderTodos"),i=(0,s.g2)("Todos");return(0,s.uX)(),(0,s.CE)("div",E,[(0,s.bF)(d),(0,s.bF)(n),(0,s.bF)(i)])}const O={class:"bg-gray-200 h-28 flex justify-center items-center"},F={class:"px-[5%] flex gap-4 justify-center items-center rounded-xl bg-gray-400 w-5/6 h-4/6"},J={key:0,class:"fa-solid fa-circle-plus text-2xl -mt-1"},X={key:1,class:"fa-solid fa-pencil text-2xl -mt-1"};function I(e,t,o,l,r,d){return(0,s.uX)(),(0,s.CE)("div",O,[(0,s.Lk)("div",F,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>this.$store.state.text=e),type:"text",class:"hover:scale-105 ease-linear duration-200 w-3/4 sm:w-2/3 lg:w-1/2 border-2 rounded-xl pl-3 border-gray-400 outline-none"},null,512),[[a.Jo,this.$store.state.text]]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=t=>d.addTodo(e.$store.state.text)),class:"hover:scale-105 ease-linear duration-200 border-2 px-2 border-gray-400 bg-green-500 text-white overflow-hidden h-7 rounded-full"},["create"===e.$store.state.mode?((0,s.uX)(),(0,s.CE)("i",J)):((0,s.uX)(),(0,s.CE)("i",X))])])])}var j={name:"CreateTodo",data(){return{}},methods:{addTodo(e){this.$store.dispatch("addTodo",e)}}};const A=(0,y.A)(j,[["render",I]]);var P=A;const D={class:"bg-gray-300 flex py-4 justify-end px-[5%] gap-5 relative"},_={key:1,type:"text",class:"scale-x-0 w-0"},V=(0,s.Lk)("i",{class:"fa-solid fa-search"},null,-1),H=[V],W=(0,s.Lk)("i",{class:"fa-solid fa-filter"},null,-1),K=[W],z={key:2,class:"absolute top-10 bg-gray-400 right-5 px-3 py-1 rounded-lg z-40"},R=(0,s.Lk)("input",{type:"radio",name:"1",id:"1"},null,-1),q=(0,s.Lk)("label",{for:"1"},"complete",-1),M=[R,q],B=(0,s.Lk)("input",{type:"radio",name:"1",id:"2"},null,-1),G=(0,s.Lk)("label",{for:"2"},"not complete",-1),Q=[B,G],Y={key:3,class:"hidden"},Z=(0,s.Fv)('<li class="flex gap-2"><label for="1">complete</label><input type="radio" name="1" id="1"></li><li class="flex gap-2"><label for="2">not complete</label><input type="radio" name="1" id="2"></li>',2),ee=[Z];function te(e,t,o,l,r,d){return(0,s.uX)(),(0,s.CE)("div",D,[e.$store.state.disaplySearch?(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{key:0,type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.$store.state.textSearch=t),onKeyup:t[1]||(t[1]=t=>e.$store.dispatch("filteredData",e.$store.state.textSearch)),class:"hover:scale-105 ease-linear duration-200 w-4/6 sm:w-7-12 lg:w-1/2 scale-x-100 rounded-lg outline-none px-4 border border-black"},null,544)),[[a.Jo,e.$store.state.textSearch]]):((0,s.uX)(),(0,s.CE)("input",_)),(0,s.Lk)("button",{onClick:t[2]||(t[2]=t=>(e.$store.state.disaplySearch=!e.$store.state.disaplySearch)&&(e.$store.state.disaplyFilter=!1)),class:"hover:scale-105 ease-linear duration-200"},H),(0,s.Lk)("button",{onClick:t[3]||(t[3]=t=>(e.$store.state.disaplyFilter=!e.$store.state.disaplyFilter)&&(e.$store.state.disaplySearch=!1)),class:"hover:scale-105 ease-linear duration-200"},K),e.$store.state.disaplyFilter?((0,s.uX)(),(0,s.CE)("ul",z,[(0,s.Lk)("li",{onClick:t[4]||(t[4]=t=>e.$store.dispatch("theCompleted")),class:"flex gap-2 hover:scale-105 ease-linear duration-200"},M),(0,s.Lk)("li",{onClick:t[5]||(t[5]=t=>e.$store.dispatch("theNotCompleted")),class:"flex gap-2 hover:scale-105 ease-linear duration-200"},Q)])):((0,s.uX)(),(0,s.CE)("ul",Y,ee))])}var oe={name:"HeaderTodos",data(){return{}}};const ae=(0,y.A)(oe,[["render",te]]);var se=ae,le=o(4232);const re={class:"bg-gray-200 h-[60vh] sm:h-[55vh] flex-col pt-3 gap-5 px-[5%] overflow-hidden"},de=(0,s.Lk)("h1",{class:"font-bold text-2xl mb-4"},"the todos list",-1),ne={class:"text-xl w-full lg:px-10 px-5"},ie={class:"bg-white flex-col items-center h-[45vh] sm:h-[38vh] w-full lg:px-10 px-5 overflow-y-auto py-5"},ce=["onUpdate:modelValue","onClick"],ue={key:0,class:"text-left font-medium w-6/12 text-nowrap overflow-ellipsis overflow-hidden"},fe={class:"text-red-500"},pe={key:1,class:"text-left font-medium w-6/12 text-nowrap overflow-ellipsis overflow-hidden"},me={class:"w-3/12 flex flex-nowrap gap-1"},he=["onClick"],ge=(0,s.Lk)("i",{class:"fa-solid fa-pencil"},null,-1),xe=[ge],ve=["onClick"],ke=(0,s.Lk)("i",{class:"fa-solid fa-trash"},null,-1),we=[ke];function be(e,t,o,l,r,d){return(0,s.uX)(),(0,s.CE)("div",re,[de,(0,s.Lk)("div",ne,[(0,s.Lk)("ul",ie,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.$store.state.addUser.todos,((t,o)=>((0,s.uX)(),(0,s.CE)("li",{key:o,class:"bg-gray-300 p-1 flex justify-between my-2 rounded-lg overflow-hidden hover:scale-105 hover:bg-gray-400 ease-linear duration-200 px-3"},[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e=>t.done=e,onClick:t=>e.$store.dispatch("theCondition",o),type:"checkbox",name:"",id:"",class:"w-[15px]"},null,8,ce),[[a.lH,t.done]]),!0===t.done?((0,s.uX)(),(0,s.CE)("h3",ue,[(0,s.Lk)("del",fe,(0,le.v_)(t.todo),1)])):((0,s.uX)(),(0,s.CE)("h3",pe,(0,le.v_)(t.todo),1)),(0,s.Lk)("div",me,[(0,s.Lk)("button",{onClick:e=>d.updateTodo(o),class:"bg-green-500 rounded-lg text-base font-bold text-white w-1/2 flex-shrink-0 hover:scale-105 ease-linear duration-200"},xe,8,he),(0,s.Lk)("button",{onClick:e=>d.deleteTodo(o),class:"bg-red-500 text-white text-base font-bold rounded-lg w-1/2 flex-shrink-0 hover:scale-105 ease-linear duration-200"},we,8,ve)])])))),128))]),(0,s.Lk)("button",{onClick:t[0]||(t[0]=e=>d.deleteAllTodo()),class:"text-white bg-red-500 mt-3 rounded-lg px-3 w-full"}," delete all ")])])}var ye={name:"TodosList",data(){return{completed:!1}},methods:{updateTodo(e){this.$store.dispatch("updatedTodo",e)},deleteTodo(e){this.$store.dispatch("deletedTodo",e)},deleteAllTodo(){this.$store.dispatch("deletedAllTodo")}}};const Ue=(0,y.A)(ye,[["render",be]]);var Le=Ue,Ce={components:{Create:P,HeaderTodos:se,Todos:Le}};const Se=(0,y.A)(Ce,[["render",N]]);var Te=Se;const $e={class:"flex items-center justify-center w-full h-full px-[5%]"},Ee={class:"form w-full h-[60vh] sm:w-1/2 sm:h-[70vh] lg:w-2/5 p-5"},Ne=(0,s.Lk)("h2",{class:"font-bold text-2xl text-white"},"signup",-1),Oe=(0,s.Lk)("input",{type:"file",id:"image",accept:"image/*",required:"",class:"border-0 ml-4 hover:scale-90"},null,-1),Fe=(0,s.Lk)("i",{class:"fa-solid fa-image absolute top-[6px] px-1 right-[7%] sm:right-[10%] text-xl z-40"},null,-1),Je=[Oe,Fe],Xe=(0,s.Lk)("p",null,"password forget ?",-1);function Ie(e,t,o,l,r,d){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",$e,[(0,s.Lk)("div",Ee,[Ne,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.textName=e),placeholder:"user name"},null,512),[[a.Jo,r.textName]]),(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>r.textEmail=e),placeholder:"user email"},null,512),[[a.Jo,r.textEmail]]),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>r.textPass=e),placeholder:"user password"},null,512),[[a.Jo,r.textPass]]),(0,s.Lk)("div",{class:"relative flex justify-content-center align-items-center w-75 p-1 hover:scale-105 duration-200 ease-linear",onChange:t[3]||(t[3]=(...e)=>d.handleFileSelect&&d.handleFileSelect(...e))},Je,32),(0,s.Lk)("button",{type:"submit",onClick:t[4]||(t[4]=e=>d.saveDataUser(r.textName,r.textEmail,r.textPass,this.image))}," Create User "),(0,s.Lk)("div",null,[Xe,(0,s.bF)(n,{to:"/login",class:"hover:scale-105 hover:text-white duration-200 ease-linear"},{default:(0,s.k6)((()=>[(0,s.eW)("login")])),_:1})])])])}var je={data(){return{image:"",textName:"",textPass:"",textEmail:""}},methods:{saveDataUser(e,t,o,a){this.$store.dispatch("saveDataUser",{name:e,email:t,password:o,image:a}),this.textName="",this.textPass="",this.textEmail=""},handleFileSelect(e){const t=e.target.files[0],o=new FileReader;o.onload=e=>{const o=new Image;o.onload=()=>{const e=t.name;console.log("Image location:",e)},o.onerror=()=>{console.error("Failed to load image.")},o.src=e.target.result,this.image=o.src},o.onerror=()=>{console.error("Failed to read file.")},o.readAsDataURL(t)}}};const Ae=(0,y.A)(je,[["render",Ie]]);var Pe=Ae;const De={class:"flex items-center justify-center w-full h-full px-[5%]"},_e={class:"form w-full h-[60vh] sm:w-1/2 lg:w-2/5 sm:h-[70vh] p-5"},Ve=(0,s.Lk)("h2",{class:"font-bold text-2xl text-white"},"login",-1),He=(0,s.Lk)("p",null,"password forget ?",-1);function We(e,t,o,l,r,d){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",De,[(0,s.Lk)("div",_e,[Ve,(0,s.bo)((0,s.Lk)("input",{class:"w-full",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.textName=e),placeholder:"user name"},null,512),[[a.Jo,r.textName]]),(0,s.bo)((0,s.Lk)("input",{class:"w-full",type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.textPass=e),placeholder:"user password"},null,512),[[a.Jo,r.textPass]]),(0,s.Lk)("button",{type:"submit",onClick:t[2]||(t[2]=e=>d.checkDataUser(r.textName,r.textPass))}," login "),(0,s.Lk)("div",null,[He,(0,s.bF)(n,{to:"/signup",class:"hover:scale-105 hover:text-white duration-200 ease-linear"},{default:(0,s.k6)((()=>[(0,s.eW)("singup")])),_:1})])])])}var Ke={name:"login-page",data(){return{textName:"",textPass:""}},methods:{checkDataUser(e,t){this.$store.dispatch("checkDataUser",{name:e,password:t}),this.textName="",this.textPass=""}}};const ze=(0,y.A)(Ke,[["render",We]]);var Re=ze;const qe=[{path:"/",name:"home",component:Te},{path:"/signup",name:"signup",component:Pe},{path:"/login",name:"login",component:Re}],Me=(0,$.aE)({history:(0,$.LA)("/"),routes:qe});var Be=Me,Ge=(o(4114),o(782));function Qe(){const e=localStorage.getItem("addUser");return e?JSON.parse(e):[]}function Ye(){const e=localStorage.getItem("theUser");return e?JSON.parse(e):{}}var Ze=(0,Ge.y$)({state:{dataUser:Qe(),addUser:Ye(),text:"",upTodo:{},todos:Ye(),mode:"create",disaplyFilter:!1,disaplySearch:!1,textSearch:""},mutations:{createUser(e,t){const o=e.dataUser.find((e=>e.email===t.email));o?alert("هذا المستخدم موجود بالفعل"):""!==t.name&&""!==t.email&&""!==t.password&&""!==t.image?(e.dataUser.push({...t,todos:[]}),window.location.href="/login",localStorage.setItem("addUser",JSON.stringify(e.dataUser))):alert("لا تترك حقل فارغ")},loginUser(e,t){const o=e.dataUser.find((e=>e.name===t.name&&e.password===t.password));o?(e.addUser=o,window.location.href="/",localStorage.setItem("theUser",JSON.stringify(o))):(e.addUser={},localStorage.setItem("theUser",JSON.stringify(e.addUser)),alert("اسم المستخدم أو كلمة المرور غير صحيحة"))},addTodo(e,t){const o=e.addUser.name;if(o)if(""!==t){if("create"===e.mode){let o=e.addUser.todos.find((e=>e.todo===t));if(o)alert("المهمة موجودة مسبقاً");else{e.addUser.todos.unshift({todo:t,done:!1}),localStorage.setItem("theUser",JSON.stringify(e.addUser));let o=e.dataUser.find((t=>t.email===e.addUser.email));o&&(o.todos=e.addUser.todos),localStorage.setItem("addUser",JSON.stringify(e.dataUser))}}else{let t=e.addUser.todos.find((t=>t.todo===e.upTodo.todo));t&&(t.todo=e.text),localStorage.setItem("theUser",JSON.stringify(e.addUser));let o=e.dataUser.find((t=>t.email===e.addUser.email));o&&(o.todos=e.addUser.todos),localStorage.setItem("addUser",JSON.stringify(e.dataUser))}e.text=""}else alert("هذا الحقل مطلوب");else alert("سجل دخول أولاً"),window.location.href="/login"},deleteTodo(e,t){for(let a=0;a<e.addUser.todos.length;a++)t===a&&(e.addUser.todos.splice(a,1),localStorage.setItem("theUser",JSON.stringify(e.addUser)));let o=e.dataUser.find((t=>t.email===e.addUser.email));o&&(o.todos=e.addUser.todos),localStorage.setItem("addUser",JSON.stringify(e.dataUser))},deleteAllTodo(e){e.addUser.todos.splice(0),localStorage.setItem("theUser",JSON.stringify(e.addUser));let t=e.dataUser.find((t=>t.email===e.addUser.email));t&&(t.todos=e.addUser.todos),localStorage.setItem("addUser",JSON.stringify(e.dataUser))},updateTodo(e,t){let o=e.addUser.todos.find(((e,o)=>o===t));e.text=o.todo,e.upTodo=o,e.mode="update"},logoutUser(){localStorage.setItem("theUser",JSON.stringify("")),window.location.href="/"},condition(e,t){let o=e.addUser.todos.find(((e,o)=>o===t));o.done=!o.done,localStorage.setItem("theUser",JSON.stringify(e.addUser));let a=e.dataUser.find((t=>t.email===e.addUser.email));a&&(a.todos=e.addUser.todos),localStorage.setItem("addUser",JSON.stringify(e.dataUser))},async complete(e){let t=await e.todos.todos.filter((e=>!0===e.done));e.addUser.todos=t},async notComplete(e){let t=await e.todos.todos.filter((e=>!1===e.done));e.addUser.todos=t},filterSearch(e,t){let o=e.todos.todos.filter((e=>e.todo.toLowerCase().includes(t.toLowerCase())));e.addUser.todos=o}},actions:{checkDataUser({commit:e},t){e("loginUser",t)},saveDataUser({commit:e},t){e("createUser",t)},addTodo({commit:e},t){e("addTodo",t)},deletedTodo({commit:e},t){e("deleteTodo",t)},deletedAllTodo({commit:e}){e("deleteAllTodo")},updatedTodo({commit:e},t){e("updateTodo",t)},logout({commit:e}){e("logoutUser")},theCondition({commit:e},t){e("condition",t)},theCompleted({commit:e}){e("complete")},theNotCompleted({commit:e}){e("notComplete")},filteredData({commit:e},t){e("filterSearch",t)}},modules:{}});(0,a.Ef)(T).use(Ze).use(Be).mount("#app")}},t={};function o(a){var s=t[a];if(void 0!==s)return s.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,s,l){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],l=e[c][2];for(var d=!0,n=0;n<a.length;n++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[n])}))?a.splice(n--,1):(d=!1,l<r&&(r=l));if(d){e.splice(c--,1);var i=s();void 0!==i&&(t=i)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,s,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,l,r=a[0],d=a[1],n=a[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(s in d)o.o(d,s)&&(o.m[s]=d[s]);if(n)var c=n(o)}for(t&&t(a);i<r.length;i++)l=r[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},a=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(7438)}));a=o.O(a)})();
//# sourceMappingURL=app.4d047ae0.js.map