"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[823],{9823:(C,p,i)=>{i.r(p),i.d(p,{AuthModule:()=>v});var c=i(6895),u=i(5453),n=i(1571),l=i(433);function m(e,o){1&e&&(n.TgZ(0,"label",21),n._uU(1,"Name"),n.qZA())}function d(e,o){1&e&&n._UZ(0,"input",22)}function h(e,o){1&e&&(n.TgZ(0,"label",11),n._uU(1,"Phone number"),n.qZA())}function f(e,o){1&e&&n._UZ(0,"input",23)}let M=(()=>{class e{constructor(t,r){this.route=t,this.router=r,this.isLoginMode=!0,this.mode=""}ngOnInit(){this.router.navigate(["/auth/login"])}onSubmit(t){console.log(t.value)}onSwitch(){this.route.params.subscribe(t=>{this.mode=t.mode}),"login"==this.mode?(this.router.navigate(["/auth/signup"],{}),this.isLoginMode=!this.isLoginMode):(this.router.navigate(["/auth/login"],{}),this.isLoginMode=!this.isLoginMode)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.gz),n.Y36(u.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:36,vars:9,consts:[[1,"container","my-3","d-flex","justify-content-center"],[1,"row"],[3,"ngSubmit"],["f","ngForm"],["role","alert",1,"alert","alert-danger","text-center"],[1,"mt-10"],[1,"fw-bold","text-center"],["for","","class","form-label w-10",4,"ngIf"],["type","text","class","form-control","placeholder","Enter username","name","username","ngModel","","required","",4,"ngIf"],["for","","class","form-label",4,"ngIf"],["type","text","class","form-control","placeholder","Enter phone","name","tel","ngModel","","required","",4,"ngIf"],["for","",1,"form-label"],["type","text","placeholder","Enter email","name","email","ngModel","","required","",1,"form-control"],["for","Password",1,"form-label"],["type","password","placeholder","Enter Password","ngModel","","name","password","required","",1,"form-control"],["href",""],[1,"btn","btn-primary","w-100",3,"disabled"],[1,"text-center","line"],[1,"btn","btn-outline-dark","w-100"],[1,"m-t-1"],["role","button",1,"link-primary",3,"click"],["for","",1,"form-label","w-10"],["type","text","placeholder","Enter username","name","username","ngModel","","required","",1,"form-control"],["type","text","placeholder","Enter phone","name","tel","ngModel","","required","",1,"form-control"]],template:function(t,r){if(1&t){const a=n.EpF();n.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),n.NdJ("ngSubmit",function(){n.CHM(a);const T=n.MAs(3);return n.KtG(r.onSubmit(T))}),n.TgZ(4,"div",4),n._uU(5," Login Failed! "),n.qZA(),n.TgZ(6,"div",5)(7,"h2",6),n._uU(8,"W4t3R TR4Ck3R"),n.qZA()(),n.YNc(9,m,2,0,"label",7),n.YNc(10,d,1,0,"input",8),n.YNc(11,h,2,0,"label",9),n.YNc(12,f,1,0,"input",10),n.TgZ(13,"label",11),n._uU(14,"Email adress"),n.qZA(),n._UZ(15,"input",12),n.TgZ(16,"label",13),n._uU(17,"Password"),n.qZA(),n._UZ(18,"input",14),n.TgZ(19,"div")(20,"p"),n._uU(21," By signing Up you accept our terms of use "),n.TgZ(22,"span")(23,"a",15),n._uU(24,"Terms Of Use"),n.qZA()()()(),n.TgZ(25,"button",16),n._uU(26),n.qZA(),n.TgZ(27,"p",17)(28,"span"),n._uU(29,"OR"),n.qZA()(),n.TgZ(30,"button",18),n._uU(31),n.qZA(),n.TgZ(32,"p",19),n._uU(33),n.TgZ(34,"span",20),n.NdJ("click",function(){return r.onSwitch()}),n._uU(35),n.qZA()()()()()}if(2&t){const a=n.MAs(3);n.xp6(9),n.Q6J("ngIf",!r.isLoginMode),n.xp6(1),n.Q6J("ngIf",!r.isLoginMode),n.xp6(1),n.Q6J("ngIf",!r.isLoginMode),n.xp6(1),n.Q6J("ngIf",!r.isLoginMode),n.xp6(13),n.Q6J("disabled",!a.valid),n.xp6(1),n.Oqu(r.isLoginMode?"Login":"Sign Up"),n.xp6(5),n.hij(" ",r.isLoginMode?"Signin Using Google":"Signup Using Google"," "),n.xp6(2),n.hij(" ",r.isLoginMode?"Dont have an account?":"Already have an account?"," "),n.xp6(2),n.Oqu(r.isLoginMode?"Sign up here":"Signin here")}},dependencies:[c.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.On,l.F],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}.line[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #000;line-height:.1em;margin:10px 0 20px}.line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fff;padding:0 10px}.btn-primary[_ngcontent-%COMP%]{margin-bottom:1rem}.btn-outline-dark[_ngcontent-%COMP%]{margin-top:.7rem}"]}),e})();const A=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-auth"]],decls:1,vars:0,template:function(t,r){1&t&&n._UZ(0,"app-login")},dependencies:[M]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.Bz.forChild(A),u.Bz]}),e})();var y=i(262),g=i(2843),Z=i(529);let L=(()=>{class e{constructor(t){this.http=t,this.url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDntD4AyLHBuooMFRFR58oXKkzNGxEPJ60"}login(){}signup(t,r){return this.http.post(this.url,{email:t,password:r,returnSecureToken:!0}).pipe((0,y.K)(a=>{let s="An unknown error occured!";return a.error&&a.error.error?("EMAIL_EXISTS"===a.error.error.message&&(s="This email exists already!"),(0,g._)(s)):(0,g._)(s)}))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(Z.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[L],imports:[c.ez,b,l.u5]}),e})()}}]);