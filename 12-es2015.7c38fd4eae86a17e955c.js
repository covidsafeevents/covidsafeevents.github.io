(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{eNtl:function(e,o,n){"use strict";n.r(o),n.d(o,"BookingPageModule",(function(){return v}));var t=n("pMoy"),i=n("UKGz"),s=n("SVse"),r=n("s7LF"),c=n("sZkV"),b=n("iInd"),a=n("mrSG"),l=n("jp9Y"),d=n("t0hA"),u=n("8Y7J"),h=n("h80k"),p=n("T/V+");function g(e,o){if(1&e&&(u.Pb(0,"div"),u.Pb(1,"ion-button",18),u.Kb(2,"ion-icon",19),u.rc(3," Add Person to Booking "),u.Ob(),u.Pb(4,"button",20),u.Kb(5,"ion-icon",21),u.rc(6," Add Person (enter) "),u.Ob(),u.Ob()),2&e){const e=u.bc();u.zb(1),u.hc("disabled",e.bookingForm.invalid),u.zb(3),u.hc("disabled",e.bookingForm.invalid)}}function m(e,o){if(1&e){const e=u.Qb();u.Pb(0,"div"),u.Pb(1,"ion-button",22),u.Xb("click",(function(o){u.mc(e);const n=u.bc(),t=u.lc(8);return n.clickSubmitForm(n.selectedEventUUID,t,o)})),u.rc(2," Register for Sunday service (Chinese hall) "),u.Ob(),u.Ob()}if(2&e){const e=u.bc();u.zb(1),u.hc("disabled",e.bookingForm.invalid)}}function f(e,o){1&e&&(u.Pb(0,"ion-text",23),u.rc(1," Registrations reached maximum capacity "),u.Ob())}const P=[{path:"",component:(()=>{class e{constructor(e,o,n){this.bookingService=e,this.formBuilder=o,this.toastController=n,this.selectedEventUUID="",this.selectedEventName="",this.bookingChineseUUID="445538f0-e22e-4568-acf8-9bc5bba3ceb6",this.bookingEnglishUUID="81508052-8691-4ff4-a3ef-c36bf7fccc88",this.eventChineseUUID="667c1a54-3c59-4eff-a507-b55a80094249",this.eventEnglishUUID="f883134b-661a-4388-b677-582bc2ea39aa",this.latestPersonsEnglishCap=49,this.latestPersonsChineseCap=49;const t=o.group(l.a.createPersonForm());this.bookingForm=t}get isEnglishCountCappedLocked(){return this.englishCount>=this.latestPersonsEnglishCap}get isChineseCountCappedLocked(){return this.chineseCount>=this.latestPersonsChineseCap}get isRegistrationAllowedEnglishCountBelowCap(){return!this.isEnglishCountCappedLocked}get isRegistrationAllowedChineseCountBelowCap(){return!this.isChineseCountCappedLocked}ngOnInit(){const e=Object(d.b)(this.bookingService.getNumberOfPersonBookingsForEvent());this.latestPersonsCountChinese=e,e.subscribe(e=>{this.chineseCount=e});const o=Object(d.b)(this.bookingService.getNumberOfPersonBookingsForEvent(this.eventEnglishUUID));this.latestPersonsCountEnglish=o,o.subscribe(e=>this.englishCount=e)}clickSubmitForm(e="445538f0-e22e-4568-acf8-9bc5bba3ceb6",o,n,t=this.bookingForm,i=this.bookingService){e===this.bookingEnglishUUID?this.englishCount+=1:this.chineseCount+=1;const s=t.value;""!==s.personFirstName?(o.control.setErrors({invalid:"Saving form..."}),i.addPersonToBookingByUUID(e,s).subscribe(e=>{var o,n,t,i;this.presentToast("Successfully saved booking "+(null===(i=null===(t=null===(n=null===(o=null==e?void 0:e.data)||void 0===o?void 0:o.insert_Person)||void 0===n?void 0:n.returning)||void 0===t?void 0:t[0])||void 0===i?void 0:i.personFirstName)).catch(),this.resetRecreateForm()},e=>{this.presentToast("Error saving "+JSON.stringify(e)).catch()})):this.presentToast("Invalid inputs detected").catch()}resetRecreateForm(){const e=this.formBuilder.group(l.a.createPersonForm());this.bookingForm=e}presentToast(e="Loading...",o=this.toastController){return Object(a.a)(this,void 0,void 0,(function*(){return(yield o.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{})}))}compare(e,o){return e<o}}return e.\u0275fac=function(o){return new(o||e)(u.Jb(d.a),u.Jb(r.c),u.Jb(c.M))},e.\u0275cmp=u.Db({type:e,selectors:[["app-booking"]],decls:42,vars:6,consts:[[3,"translucent"],["color","cobaltblue"],["slot","start"],[2,"padding-inline-start","0.25em"],[3,"formGroup"],["f","ngForm"],[2,"color","gray"],["col-12","","col-sm-9","","col-md-6","","col-lg-4","","col-xl-3",""],["position","floating"],["formControlName","personFirstName","type","text","placeholder","First name for registration, check in and contact-tracing purposes","required",""],["formControlName","personLastName","type","text","placeholder","Your last name","required",""],["sizeXl","2","sizeLg","2.2","sizeMd","2.5","sizeSm","4","sizeXs","5.6"],["formControlName","personPhoneNumber","type","tel","placeholder","0412345678","size","12","required",""],["formControlName","personEmailAddress","type","text","placeholder","info@example.com","required",""],[3,"eventName"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["maxedChinese",""],["type","button","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","button","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"],["type","button","color","brightnavyblue",3,"disabled","click"],["color","warning"]],template:function(e,o){if(1&e&&(u.Pb(0,"ion-header",0),u.Pb(1,"ion-toolbar",1),u.Pb(2,"ion-buttons",2),u.Kb(3,"app-home-button"),u.Ob(),u.Pb(4,"ion-title",3),u.rc(5," Booking "),u.Ob(),u.Ob(),u.Ob(),u.Pb(6,"ion-content"),u.Pb(7,"form",4,5),u.Pb(9,"ion-grid"),u.Pb(10,"ion-row",6),u.Pb(11,"ion-col"),u.rc(12," Test"),u.Ob(),u.Ob(),u.Pb(13,"ion-row"),u.Pb(14,"ion-col",7),u.Pb(15,"ion-label",8),u.rc(16," First name "),u.Ob(),u.Kb(17,"ion-input",9),u.Ob(),u.Ob(),u.Pb(18,"ion-row"),u.Pb(19,"ion-col"),u.Pb(20,"ion-label",8),u.rc(21," Last name "),u.Ob(),u.Kb(22,"ion-input",10),u.Ob(),u.Ob(),u.Pb(23,"ion-row"),u.Pb(24,"ion-col",11),u.Pb(25,"ion-label",8),u.rc(26," Phone number "),u.Ob(),u.Kb(27,"ion-input",12),u.Ob(),u.Ob(),u.Pb(28,"ion-row"),u.Pb(29,"ion-col"),u.Pb(30,"ion-label",8),u.rc(31," Email address "),u.Ob(),u.Kb(32,"ion-input",13),u.Ob(),u.Ob(),u.Kb(33,"app-covid-declaration",14),u.Pb(34,"ion-row"),u.Pb(35,"ion-col"),u.pc(36,g,7,2,"div",15),u.Ob(),u.Ob(),u.Pb(37,"ion-row"),u.Pb(38,"ion-col"),u.pc(39,m,3,1,"div",16),u.Ob(),u.Ob(),u.pc(40,f,2,0,"ng-template",null,17,u.qc),u.Ob(),u.Ob(),u.Ob()),2&e){const e=u.lc(41);u.hc("translucent",!0),u.zb(7),u.hc("formGroup",o.bookingForm),u.zb(26),u.hc("eventName",o.selectedEventName),u.zb(3),u.hc("ngIf",o.isRegistrationAllowedEnglishCountBelowCap&&o.isRegistrationAllowedChineseCountBelowCap),u.zb(3),u.hc("ngIf",o.latestPersonsCountEnglish)("ngIfElse",e)}},directives:[c.o,c.G,c.f,h.a,c.F,c.k,r.p,r.l,r.f,c.n,c.B,c.j,c.w,c.r,c.L,r.k,r.e,r.n,p.a,s.k,c.e,c.p,c.D],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(o){return new(o||e)},imports:[[b.i.forChild(P)],b.i]}),e})(),v=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(o){return new(o||e)},imports:[[s.c,r.g,r.m,c.H,i.a,t.b,C]]}),e})()}}]);