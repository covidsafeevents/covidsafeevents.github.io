(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{eNtl:function(e,n,o){"use strict";o.r(n),o.d(n,"BookingPageModule",(function(){return k}));var t=o("pMoy"),i=o("UKGz"),s=o("SVse"),r=o("s7LF"),c=o("sZkV"),a=o("iInd"),b=o("mrSG");class l{constructor(){this.personFirstName=new r.c("",[r.n.required,r.n.minLength(1)]),this.personLastName=new r.c("",[r.n.required,r.n.minLength(1)]),this.personPhoneNumber=new r.c("",[r.n.required,r.n.minLength(10),r.n.pattern(/^[+)(\d)]+$/)]),this.personEmailAddress=new r.c("",[r.n.required,r.n.minLength(4),r.n.email]),this.isDeclarationChecked=new r.c("",[r.n.requiredTrue])}}class u{static createPersonForm(){return new l}}var d=o("t0hA"),h=o("8Y7J"),m=o("h80k");let g=(()=>{class e{constructor(){this.eventName=""}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h.Db({type:e,selectors:[["app-covid-declaration"]],inputs:{eventName:"eventName"},decls:31,vars:1,consts:[["text-wrap",""],[2,"padding-left","1em"],["name","call-outline"],["size","10"],["id","check-declaration","aria-label","b","formControlName","isDeclarationChecked"]],template:function(e,n){1&e&&(h.Mb(0,"ion-row"),h.Mb(1,"ion-col"),h.Mb(2,"ion-list"),h.Mb(3,"ion-list-header"),h.nc(4,"Please review the following questions: "),h.Lb(),h.Mb(5,"ion-item",0),h.nc(6," 1. In the last 14 days have you travelled from overseas or a COVID-19 hotspot? "),h.Kb(7,"br"),h.nc(8," \xa0 \xa0 \u5728\u904e\u53bb\u7684 14 \u5929\u4e2d\uff0c\u60a8\u662f\u5f9e\u6d77\u5916, \u9084\u662f\u5f9e COVID-19 \u71b1\u9ede\u56de\u6765? "),h.Lb(),h.Mb(9,"ion-item",0),h.nc(10," 2. Have you been in close contact with a person who is positive for COVID-19? "),h.Kb(11,"br"),h.nc(12," \xa0 \xa0 \u60a8\u662f\u5426\u8207COVID-19\u68c0\u6d4b\u5448\u967d\u6027\u7684\u4eba\u4fdd\u6301\u5bc6\u5207\u806f\u7e6b? "),h.Lb(),h.Mb(13,"ion-item"),h.nc(14," 3. Are you an active COVID-19 case? "),h.Kb(15,"br"),h.nc(16," \xa0 \xa0 \u60a8\u662f\u5426\u60a3\u65b0\u51a0\u75c5\u6bd2COVID-19? "),h.Lb(),h.Mb(17,"ion-item",0),h.nc(18," 4. Are you currently experiencing, or have you recently experienced cough, fever, sore throat, fatigue or shortness of breath? "),h.Kb(19,"br"),h.nc(20," \xa0 \xa0 \u60a8\u76ee\u524d\u6216\u6700\u8fd1\u662f\u5426\u6709\u54b3\u55fd\uff0c\u767c\u71d2\uff0c\u5589\u56a8\u75db\uff0c\u75b2\u52de\u6216\u547c\u5438\u6025\u4fc3? "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(21,"ion-row"),h.Mb(22,"ion-col"),h.Mb(23,"span",1),h.nc(24),h.Kb(25,"ion-icon",2),h.nc(26,"13 HEALTH). "),h.Lb(),h.Lb(),h.Lb(),h.Mb(27,"ion-row"),h.Mb(28,"ion-col",3),h.Mb(29,"mat-checkbox",4),h.nc(30," By checking this box I declare that I do not have any of these risk factors. "),h.Lb(),h.Lb(),h.Lb()),2&e&&(h.zb(24),h.pc(" If yes to any of the above please do not attend ",n.eventName?n.eventName+" ":""," this week ( "))},directives:[c.u,c.g,c.r,c.s,c.m,c.k,t.a],styles:[""]}),e})();function p(e,n){if(1&e&&(h.Mb(0,"div"),h.Mb(1,"ion-button",18),h.Kb(2,"ion-icon",19),h.nc(3," Add Person to Booking "),h.Lb(),h.Mb(4,"button",20),h.Kb(5,"ion-icon",21),h.nc(6," Add Person (enter) "),h.Lb(),h.Lb()),2&e){const e=h.Yb();h.zb(1),h.ec("disabled",e.bookingForm.invalid),h.zb(3),h.ec("disabled",e.bookingForm.invalid)}}function f(e,n){if(1&e){const e=h.Nb();h.Mb(0,"div"),h.Mb(1,"ion-button",22),h.Ub("click",(function(n){h.ic(e);const o=h.Yb(),t=h.hc(8);return o.clickSubmitForm(o.selectedEventUUID,t,n)})),h.nc(2," Register for Sunday service (Chinese hall) "),h.Lb(),h.Lb()}if(2&e){const e=h.Yb();h.zb(1),h.ec("disabled",e.bookingForm.invalid)}}function v(e,n){1&e&&(h.Mb(0,"ion-text",23),h.nc(1," Registrations reached maximum capacity "),h.Lb())}const L=[{path:"",component:(()=>{class e{constructor(e,n,o){this.bookingService=e,this.formBuilder=n,this.toastController=o,this.selectedEventUUID="",this.selectedEventName="",this.bookingChineseUUID="445538f0-e22e-4568-acf8-9bc5bba3ceb6",this.bookingEnglishUUID="81508052-8691-4ff4-a3ef-c36bf7fccc88",this.eventChineseUUID="667c1a54-3c59-4eff-a507-b55a80094249",this.eventEnglishUUID="f883134b-661a-4388-b677-582bc2ea39aa",this.latestPersonsEnglishCap=49,this.latestPersonsChineseCap=49;const t=n.group(u.createPersonForm());this.bookingForm=t}get isEnglishCountCappedLocked(){return this.englishCount>=this.latestPersonsEnglishCap}get isChineseCountCappedLocked(){return this.chineseCount>=this.latestPersonsChineseCap}get isRegistrationAllowedEnglishCountBelowCap(){return!this.isEnglishCountCappedLocked}get isRegistrationAllowedChineseCountBelowCap(){return!this.isChineseCountCappedLocked}ngOnInit(){console.log("BookingPage -> ngOnInit");const e=Object(d.b)(this.bookingService.getNumberOfPersonBookingsForEvent());this.latestPersonsCountChinese=e,e.subscribe(e=>{this.chineseCount=e});const n=Object(d.b)(this.bookingService.getNumberOfPersonBookingsForEvent(this.eventEnglishUUID));this.latestPersonsCountEnglish=n,n.subscribe(e=>this.englishCount=e)}clickSubmitForm(e="445538f0-e22e-4568-acf8-9bc5bba3ceb6",n,o,t=this.bookingForm,i=this.bookingService){e===this.bookingEnglishUUID?this.englishCount+=1:this.chineseCount+=1,console.log("BookingPage:: clickSubmitForm() -> form",n,o,t);const s=t.value;""!==s.personFirstName?(n.control.setErrors({invalid:"Saving form..."}),i.addPersonToBookingByUUID(e,s).subscribe(e=>{var n,o,t,i;console.log("BookingPage -> clickSubmitForm -> personBookingResult",e),this.presentToast("Successfully saved booking "+(null===(i=null===(t=null===(o=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.insert_Person)||void 0===o?void 0:o.returning)||void 0===t?void 0:t[0])||void 0===i?void 0:i.personFirstName)).catch(),this.resetRecreateForm()},e=>{this.presentToast("Error saving "+JSON.stringify(e)).catch()})):this.presentToast("Invalid inputs detected").catch()}resetRecreateForm(){const e=this.formBuilder.group(u.createPersonForm());this.bookingForm=e}presentToast(e="Loading...",n=this.toastController){return Object(b.a)(this,void 0,void 0,(function*(){return(yield n.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{console.log("Toast presented")})}))}compare(e,n){return e<n}}return e.\u0275fac=function(n){return new(n||e)(h.Jb(d.a),h.Jb(r.b),h.Jb(c.C))},e.\u0275cmp=h.Db({type:e,selectors:[["app-booking"]],decls:42,vars:6,consts:[[3,"translucent"],["color","cobaltblue"],["slot","start"],[2,"padding-inline-start","0.25em"],[3,"formGroup"],["f","ngForm"],[2,"color","gray"],["col-12","","col-sm-9","","col-md-6","","col-lg-4","","col-xl-3",""],["position","floating"],["formControlName","personFirstName","type","text","placeholder","First name for registration, check in and contact-tracing purposes","required",""],["formControlName","personLastName","type","text","placeholder","Your last name","required",""],["sizeXl","2","sizeLg","2.2","sizeMd","2.5","sizeSm","4","sizeXs","5.6"],["formControlName","personPhoneNumber","type","tel","placeholder","0412345678","size","12","required",""],["formControlName","personEmailAddress","type","text","placeholder","info@example.com","required",""],[3,"eventName"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["maxedChinese",""],["type","button","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","button","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"],["type","button","color","brightnavyblue",3,"disabled","click"],["color","warning"]],template:function(e,n){if(1&e&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar",1),h.Mb(2,"ion-buttons",2),h.Kb(3,"app-home-button"),h.Lb(),h.Mb(4,"ion-title",3),h.nc(5," Booking "),h.Lb(),h.Lb(),h.Lb(),h.Mb(6,"ion-content"),h.Mb(7,"form",4,5),h.Mb(9,"ion-grid"),h.Mb(10,"ion-row",6),h.Mb(11,"ion-col"),h.nc(12," Test"),h.Lb(),h.Lb(),h.Mb(13,"ion-row"),h.Mb(14,"ion-col",7),h.Mb(15,"ion-label",8),h.nc(16," First name "),h.Lb(),h.Kb(17,"ion-input",9),h.Lb(),h.Lb(),h.Mb(18,"ion-row"),h.Mb(19,"ion-col"),h.Mb(20,"ion-label",8),h.nc(21," Last name "),h.Lb(),h.Kb(22,"ion-input",10),h.Lb(),h.Lb(),h.Mb(23,"ion-row"),h.Mb(24,"ion-col",11),h.Mb(25,"ion-label",8),h.nc(26," Phone number "),h.Lb(),h.Kb(27,"ion-input",12),h.Lb(),h.Lb(),h.Mb(28,"ion-row"),h.Mb(29,"ion-col"),h.Mb(30,"ion-label",8),h.nc(31," Email address "),h.Lb(),h.Kb(32,"ion-input",13),h.Lb(),h.Lb(),h.Kb(33,"app-covid-declaration",14),h.Mb(34,"ion-row"),h.Mb(35,"ion-col"),h.lc(36,p,7,2,"div",15),h.Lb(),h.Lb(),h.Mb(37,"ion-row"),h.Mb(38,"ion-col"),h.lc(39,f,3,1,"div",16),h.Lb(),h.Lb(),h.lc(40,v,2,0,"ng-template",null,17,h.mc),h.Lb(),h.Lb(),h.Lb()),2&e){const e=h.hc(41);h.ec("translucent",!0),h.zb(7),h.ec("formGroup",n.bookingForm),h.zb(26),h.ec("eventName",n.selectedEventName),h.zb(3),h.ec("ngIf",n.isRegistrationAllowedEnglishCountBelowCap&&n.isRegistrationAllowedChineseCountBelowCap),h.zb(3),h.ec("ngIf",n.latestPersonsCountEnglish)("ngIfElse",e)}},directives:[c.j,c.x,c.f,m.a,c.w,c.h,r.o,r.k,r.e,c.i,c.u,c.g,c.q,c.l,c.B,r.j,r.d,r.m,g,s.k,c.e,c.k,c.v],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(n){return new(n||e)},imports:[[a.i.forChild(L)],a.i]}),e})(),k=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(n){return new(n||e)},imports:[[s.c,r.f,r.l,c.y,i.a,t.b,C]]}),e})()}}]);