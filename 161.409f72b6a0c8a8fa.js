"use strict";(self.webpackChunksweeft_task=self.webpackChunksweeft_task||[]).push([[161],{7161:(q,m,a)=>{a.r(m),a.d(m,{UserInfoModule:()=>E});var d=a(6895),c=a(8555),i=a(4006),x=a(7579),p=a(2722),e=a(4650),b=a(9576),_=a(8768),v=a(3319);let C=(()=>{class n extends v.b{createMessage(o){return this.post("messages",o)}}return n.\u0275fac=function(){let r;return function(t){return(r||(r=e.n5z(n)))(t||n)}}(),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=a(4144),g=a(7676),h=a(4859);function M(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Full Name is required"),e.qZA())}function U(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Email is required"),e.qZA())}function w(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Email form isn't correct"),e.qZA())}function O(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Text Area is required"),e.qZA())}function y(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Text Area length must be more than 3 characters"),e.qZA())}function T(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Text Area length must be less than 10 characters"),e.qZA())}function Z(n,r){1&n&&(e.ynx(0),e.TgZ(1,"div",31),e._UZ(2,"img",32),e.qZA(),e.BQk())}function P(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"div",36)(1,"div",37),e._UZ(2,"div",38),e.TgZ(3,"div",39)(4,"div",40),e._UZ(5,"img",41),e.TgZ(6,"h4",42),e._uU(7),e.qZA(),e.TgZ(8,"p",43),e._uU(9),e.qZA(),e.TgZ(10,"button",44),e.NdJ("click",function(){const l=e.CHM(o).$implicit,u=e.oxw(3);return e.KtG(u.showUser(l.id))}),e._uU(11,"See Profile"),e.qZA()()()()()}if(2&n){const o=r.$implicit;e.xp6(5),e.Q6J("src",o.profilePic,e.LSH),e.xp6(2),e.AsE("",o.firstName," ",o.lastName,""),e.xp6(2),e.hij(" ",o.description,"")}}function I(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"h1",33),e._uU(1),e.qZA(),e.TgZ(2,"div",34),e.NdJ("scroll",function(s){e.CHM(o);const l=e.oxw(2);return e.KtG(l.onScroll(s))}),e.YNc(3,P,12,4,"div",35),e.qZA()}if(2&n){const o=e.oxw(2);e.xp6(1),e.hij("",0!=o.userFriends.length?"You can also see "+o.currUsr.firstName+"'s friends list before scrolling("+o.userFriends.length+")":o.currUsr.firstName+"'s has no friends"," "),e.xp6(2),e.Q6J("ngForOf",o.userFriends)}}function A(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._UZ(3,"img",5),e.qZA()(),e.TgZ(4,"ul",6),e._uU(5),e.qZA(),e.TgZ(6,"div",7)(7,"div",8)(8,"div",9)(9,"h4",10)(10,"a",11)(11,"div",12),e._uU(12),e.qZA()()()(),e.TgZ(13,"div",13)(14,"div",14),e._uU(15),e.qZA()()(),e.TgZ(16,"div",8)(17,"div",15)(18,"h4",10)(19,"a",16)(20,"div",12),e._uU(21,"SOCIAL"),e.qZA()()()(),e.TgZ(22,"div",17)(23,"div",14),e._uU(24),e.qZA()()(),e.TgZ(25,"div",8)(26,"div",18)(27,"h4",10)(28,"a",19)(29,"div",12),e._uU(30,"CONTACT"),e.qZA()(),e.TgZ(31,"button",20),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.delete(s.currUsr.id))}),e._uU(32),e.qZA()()(),e.TgZ(33,"div",21)(34,"div",14)(35,"form",22),e.NdJ("submit",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.submit())}),e.TgZ(36,"mat-form-field",23)(37,"mat-label"),e._uU(38,"Full Name"),e.qZA(),e._UZ(39,"input",24),e.YNc(40,M,2,0,"mat-error",25),e.qZA(),e.TgZ(41,"mat-form-field",23)(42,"mat-label"),e._uU(43,"Email"),e.qZA(),e._UZ(44,"input",26),e.YNc(45,U,2,0,"mat-error",25),e.YNc(46,w,2,0,"mat-error",25),e.qZA(),e.TgZ(47,"mat-form-field",23)(48,"mat-label"),e._uU(49,"Message"),e.qZA(),e._UZ(50,"textarea",27),e.YNc(51,O,2,0,"mat-error",25),e.YNc(52,y,2,0,"mat-error",25),e.YNc(53,T,2,0,"mat-error",25),e.qZA(),e.TgZ(54,"button",28),e._uU(55,"Submit"),e.qZA(),e._UZ(56,"br"),e.qZA()()()()(),e.YNc(57,Z,3,0,"ng-container",29),e.YNc(58,I,4,2,"ng-template",null,30,e.W1O),e.qZA()}if(2&n){const o=e.MAs(59),t=e.oxw();e.xp6(3),e.Q6J("src",t.currUsr.profilePic,e.LSH),e.xp6(2),e.AsE("",t.currUsr.firstName," ",t.currUsr.lastName,""),e.xp6(7),e.hij("ABOUT ",t.currUsr.firstName.toUpperCase()," "),e.xp6(3),e.hij(" ",t.currUsr.description," "),e.xp6(9),e.hij(" ",t.currUsr.firstName," has been building websites for years. He enjoys making unique websites and web projects. His hobbies include photography, traveling, fishing, watching movies and playing tennis. "),e.xp6(8),e.hij("DELETE ",t.currUsr.firstName.toUpperCase(),""),e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("ngIf",(null==t.getFullName||null==t.getFullName.errors?null:t.getFullName.errors.required)&&(null==t.getFullName?null:t.getFullName.touched)),e.xp6(5),e.Q6J("ngIf",(null==t.getEmail||null==t.getEmail.errors?null:t.getEmail.errors.required)&&(null==t.getEmail?null:t.getEmail.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.getEmail||null==t.getEmail.errors?null:t.getEmail.errors.email)&&(null==t.getEmail?null:t.getEmail.touched)),e.xp6(5),e.Q6J("ngIf",(null==t.getMessage||null==t.getMessage.errors?null:t.getMessage.errors.required)&&(null==t.getMessage?null:t.getMessage.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.getMessage||null==t.getMessage.errors?null:t.getMessage.errors.minlength)&&(null==t.getMessage?null:t.getMessage.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.getMessage||null==t.getMessage.errors?null:t.getMessage.errors.maxlength)&&(null==t.getMessage?null:t.getMessage.touched)),e.xp6(4),e.Q6J("ngIf",t.loading)("ngIfElse",o)}}const N=[{path:"",component:(()=>{class n{constructor(o,t,s,l,u){this.userService=o,this.activateRoute=t,this.router=s,this.toastAlert=l,this.messageService=u,this.userFriends=[],this.sub$=new x.x,this.loading=!0,this.page=1,this.isLoading=!1,this.form=new i.cw({fullName:new i.NI("",i.kI.required),email:new i.NI("",[i.kI.required,i.kI.email]),textMessage:new i.NI("",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(10)])})}get getEmail(){return this.form.get("email")}get getFullName(){return this.form.get("fullName")}get getMessage(){return this.form.get("textMessage")}ngOnInit(){this.activateRoute.params.subscribe(o=>{this.id=o.id,this.getCurrentUser()})}ngOnDestroy(){this.sub$.next(null),this.sub$.complete()}getUsersFriends(){this.isLoading=!0,this.userService.getAllFriends(this.page,this.id).pipe((0,p.R)(this.sub$)).subscribe(o=>{setTimeout(()=>{this.loading=!1},1e3),this.userFriends=this.userFriends.concat(o),console.log(o),this.isLoading=!1})}onScroll(o){(document.documentElement.scrollTop||document.body.scrollTop)+document.documentElement.offsetHeight==document.documentElement.scrollHeight&&(this.isLoading||(this.page++,this.getUsersFriends()))}getCurrentUser(){this.userService.getCurrentUser(this.id).pipe((0,p.R)(this.sub$)).subscribe(o=>{console.log(o),this.currUsr=o,this.getUsersFriends()})}submit(){this.form.markAllAsTouched(),!this.form.invalid&&(console.log(this.form.value),this.form.valid&&this.messageService.createMessage(this.form.value).subscribe(o=>{this.toastAlert.success({detail:"Success Message",summary:"Your message has been sent successfully",duration:3e3})}),this.form.reset(),this.router.navigate(["users"]))}showUser(o){this.router.navigate(["user-info",o]),this.userFriends=[]}delete(o){this.userService.deleteUser(o).subscribe(t=>{this.toastAlert.success({detail:"Success Message",summary:"User successfully deleted",duration:3e3}),this.router.navigate(["users"])})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(b.f),e.Y36(c.gz),e.Y36(c.F0),e.Y36(_.s),e.Y36(C))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-info"]],hostBindings:function(o,t){1&o&&e.NdJ("scroll",function(l){return t.onScroll(l)},!1,e.Jf7)},decls:2,vars:1,consts:[[1,"box"],["id","overlay",4,"ngIf"],["id","overlay"],[1,"image1"],[1,"trick"],["alt","",3,"src"],[1,"text"],["id","accordion","role","tablist","aria-multiselectable","true",1,"panel-group"],[1,"panel","panel-default"],["role","tab","id","headingOne",1,"panel-heading"],[1,"panel-title"],["role","button","data-toggle","collapse","data-parent","#accordion","href","#collapseOne","aria-expanded","","aria-controls","collapseOne"],[1,"title","btn","btn-danger","btn-outline","btn-lg"],["id","collapseOne","role","tabpanel","aria-labelledby","headingOne",1,"panel-collapse","collapse","in"],[1,"panel-body"],["role","tab","id","headingTwo",1,"panel-heading"],["role","button","data-toggle","collapse","data-parent","#accordion","href","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"collapsed"],["id","collapseTwo","role","tabpanel","aria-labelledby","headingTwo",1,"panel-collapse","collapse"],["role","tab","id","headingThree",1,"panel-heading"],["role","button","data-toggle","collapse","data-parent","#accordion","href","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"collapsed"],[1,"title","btn","btn-danger","btn-outline","btn-lg",2,"background-color","rgb(164, 7, 7)",3,"click"],["id","collapseThree","role","tabpanel","aria-labelledby","headingThree",1,"panel-collapse","collapse"],[1,"center-content",3,"formGroup","submit"],[1,"example-full-width"],["matInput","","placeholder","Full Name","name","fullName","formControlName","fullName"],[4,"ngIf"],["matInput","","placeholder","Your email","name","email","formControlName","email"],["matInput","","placeholder","Text Area","name","textArea","formControlName","textMessage"],["type","submit","mat-raised-button","","color","primary"],[4,"ngIf","ngIfElse"],["loaded",""],[1,"d-flex","justify-content-center","align-items-center","h-100","w-100"],["src","./assets/images/loading.gif","alt","","width","60px"],[2,"text-align","center"],[1,"row","product-items",3,"scroll"],["class","   mt-5 mb-5 col-12 col-sm text-center",4,"ngFor","ngForOf"],[1,"mt-5","mb-5","col-12","col-sm","text-center"],[1,"card","row","product-items"],[1,"area1","p-3","py-5"],[1,"area2","p-","text-center","px-3"],[1,"image","mr-3"],["width","100",1,"rounded-circle",3,"src"],[1,"name","mt-3"],[1,"information","mt-3","text-justify"],["type","button",1,"btn","btn-primary","follow",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.YNc(1,A,60,16,"div",1),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngIf",t.currUsr))},dependencies:[d.sg,d.O5,f.Nt,g.KE,g.hX,g.TO,h.lW,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["body[_ngcontent-%COMP%]{background-size:1400px 700px;background-position:30%;background-attachment:fixed}.text[_ngcontent-%COMP%]{font-family:raleway;font-size:40px;position:absolute center;text-align:center;padding-left:0%;color:#000;margin-top:43px}.text1[_ngcontent-%COMP%]{font-family:raleway;font-size:21px;text-align:center;margin-top:-20px;color:#000}.image1[_ngcontent-%COMP%]{text-align:center;width:200px;height:200px;-webkit-border-radius:75%;-moz-border-radius:75%;box-shadow:0 0 0 1px #eee;background-size:cover;margin:20px auto -30px;align-content:center}.trick[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;height:150px}.image1[_ngcontent-%COMP%]:hover{box-shadow:0 5px 20px .9px #3f3f3f}.image1[_ngcontent-%COMP%]:hover{transform:scale(1.12);transition:1.6s ease-in-out}img[_ngcontent-%COMP%]{width:200px;height:200px;-webkit-border-radius:75%;-moz-border-radius:75%;background-color:#7098ee;cursor:pointer}.trick[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1)}#overlay[_ngcontent-%COMP%]{-webkit-border-radius:50%;-moz-border-radius:50%;padding:0;opacity:1;-webkit-transition:opacity 2.25s ease;-moz-transition:opacity 10.25s ease}#box[_ngcontent-%COMP%]:hover   #overlay[_ngcontent-%COMP%]{opacity:1}.panel-group[_ngcontent-%COMP%]{width:350px;margin:auto;max-width:100%}.panel-heading[_ngcontent-%COMP%]{background-color:transparent!important}.title[_ngcontent-%COMP%]{text-align:center;background-color:transparent;color:#000;font-family:lato;font-weight:300;font-size:15px;max-width:100%;background-color:brown}#accordion[_ngcontent-%COMP%]{background-color:transparent;max-width:100%;margin-bottom:10px}.btn-outline[_ngcontent-%COMP%]{color:inherit;transition:all 1.4s;background-color:transparent}.btn-danger.btn-outline[_ngcontent-%COMP%]{background-color:transparent;color:#000;border-color:#000;padding:auto;padding:10px 0;margin:1px 5px 1px 0;width:100%;text-align:center;font-family:raleway;font-weight:300;max-width:100%}.example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-size:cover}.center-content[_ngcontent-%COMP%]{text-align:-webkit-center}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}input[_ngcontent-%COMP%]:hover:focus::placeholder, textarea[_ngcontent-%COMP%]:hover:focus::placeholder{color:#fff;font-family:raleway}input[_ngcontent-%COMP%]:hover::placeholder, textarea[_ngcontent-%COMP%]:hover::placeholder{color:#fff;font-size:15px;font-family:raleway}input[_ngcontent-%COMP%]:hover:focus::-ms-placeholder, textarea[_ngcontent-%COMP%]:hover::focus:-ms-placeholder{color:#fff;font-family:raleway}#form[_ngcontent-%COMP%]{position:relative;width:100%;margin:0 auto;font-family:raleway}input[_ngcontent-%COMP%]{font-family:raleway;font-size:15px;width:100%;height:50px;padding:0 12px;background:transparent;outline:none;color:#726659;border:solid 1px #eee;border-bottom:none;transition:all .9s ease-in-out;-webkit-transition:all .9s ease-in-out;-moz-transition:all .9s ease-in-out;-ms-transition:all .9s ease-in-out}input[_ngcontent-%COMP%]:hover{background:#ccc;color:#fff;font-family:raleway}textarea[_ngcontent-%COMP%]{width:100%;max-width:100%;height:110px;max-height:110px;padding:15px;background:transparent;outline:none;color:#000;font-family:raleway;font-size:25px;border:solid 1px #eee;transition:all .9s ease-in-out;-webkit-transition:all .9s ease-in-out;-moz-transition:all .9s ease-in-out;-ms-transition:all .9s ease-in-out}textarea[_ngcontent-%COMP%]:hover{background:#ccc;color:#fff;font-family:raleway}#submit[_ngcontent-%COMP%]{width:100%;padding:0;font-family:raleway;font-size:20px;color:#000;outline:none;cursor:pointer;border:solid 1px #eee;border-top:none;margin-bottom:0}#submit[_ngcontent-%COMP%]:hover{color:#fff;background-color:#ccc}.center[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.card[_ngcontent-%COMP%]{width:500px;border-radius:14px!important;border:2px solid rgb(238,234,234)}.border[_ngcontent-%COMP%]{border:2px solid rgb(238,234,234)}.product-items[_ngcontent-%COMP%]{margin:auto}.area1[_ngcontent-%COMP%]{background-color:#b5b2f1;border-top-left-radius:14px!important;border-top-right-radius:14px!important;padding-top:83px!important}.image[_ngcontent-%COMP%]{top:-62px;position:relative}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{box-shadow:5px 6px 6px 2px #e9ecef}.area2[_ngcontent-%COMP%]{background-color:#fff;border-bottom-left-radius:14px!important;border-bottom-right-radius:14px!important}.name[_ngcontent-%COMP%]{font-size:25px;font-weight:650}.information[_ngcontent-%COMP%]{color:#9fa8da;font-weight:500;font-size:16px}.list-icons[_ngcontent-%COMP%]{display:inline-flex;color:#c5cae9}.list-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:12px;border-radius:10px;width:49px;margin-right:10px}.list-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:17px;color:#fff}@media (max-width: 700px){.list-icons[_ngcontent-%COMP%]{display:block}}.follow[_ngcontent-%COMP%]{border:2px solid grey;border-radius:25px;padding-right:19px;padding-left:19px;height:42px;font-size:13px;width:130px;background-color:#aca9c3}.follow[_ngcontent-%COMP%]:hover{background-color:#9e98ca}.delete[_ngcontent-%COMP%]{background-color:brown;border-radius:25px;padding-right:19px;padding-left:19px;height:42px;font-size:13px;width:130px}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(N),c.Bz]}),n})();var F=a(315),z=a(3546);let E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,k,F.p0,f.c,c.Bz,z.QW,h.ot,i.UX,g.lN]}),n})()}}]);