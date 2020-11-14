!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kJmD:function(n,o,r){"use strict";r.r(o),r.d(o,"BookingEventPageModule",(function(){return S}));var i=r("UKGz"),a=r("pMoy"),c=r("SVse"),s=r("s7LF"),u=r("sZkV"),l=r("iInd"),b=r("mrSG"),d=r("LRne"),v=r("aDUK"),m=r("jp9Y"),p=r("mEpY"),h=r("8Y7J"),f=r("t0hA"),g=r("Y+pZ"),k=r("f2/v");function y(e,t){1&e&&(h.Pb(0,"h3"),h.Pb(1,"ion-text",15),h.rc(2,"Capacity filled"),h.Ob(),h.Ob())}function P(e,t){if(1&e&&(h.Nb(0),h.Pb(1,"ion-row"),h.Pb(2,"ion-col"),h.Pb(3,"div"),h.Pb(4,"ion-button",11),h.Kb(5,"ion-icon",12),h.rc(6," Book seat \ud83d\udcba\ud83d\udcdc "),h.Ob(),h.Pb(7,"button",13),h.Kb(8,"ion-icon",14),h.rc(9," \ud83d\udcba (enter) "),h.Ob(),h.Ob(),h.Ob(),h.Ob(),h.pc(10,y,3,0,"h3",7),h.Mb()),2&e){var n=t.ngIf,o=h.bc();h.zb(4),h.hc("disabled",o.personForm.invalid||n>=o.selectedEventCapacity),h.zb(3),h.hc("disabled",o.personForm.invalid||n>=o.selectedEventCapacity),h.zb(3),h.hc("ngIf",n>=o.selectedEventCapacity)}}var C,w,E,F=[{path:"",component:(C=function(){function n(t,o,r,i,a,c){var s=this;e(this,n),this.formBuilder=t,this.modalController=o,this.activatedRoute=r,this.router=i,this.toastController=a,this.bookingService=c,this.selectedEventUUID="",this.selectedEventName="",this.selectedEventCapacity=40,this.currentPersonBookingCount=Object(d.a)(0),r.queryParams.subscribe((function(e){var t=i.getCurrentNavigation();if(null!==t&&void 0!==t.extras.state){var n=t.extras.state,o=n.randomUUID,r=n.eventName,a=n.eventCapacity;s.selectedEventUUID=o,s.selectedEventName=r,s.selectedEventCapacity=a,s.currentPersonBookingCount=s.getLatestPersonAttendeeCountForSelectedEvent(o,c)}else i.navigate(["/"]).then((function(e){})).catch((function(e){}))}))}var o,r,i;return o=n,(r=[{key:"getCreatedNewResetForm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formBuilder;return e.group(m.a.createPersonForm())}},{key:"ngOnInit",value:function(){var e=this.getCreatedNewResetForm(this.formBuilder);this.personForm=e,this.personForm.valueChanges.subscribe((function(e){}))}},{key:"clickPrefill",value:function(e){this.prefillFormWithLastPerson(this.personForm)}},{key:"prefillFormWithLastPerson",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.personForm,t=Object(v.d)(),n=t.personFormAutofillLast;e.patchValue(n)}},{key:"getLatestPersonAttendeeCountForSelectedEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selectedEventUUID,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.bookingService;return t.getLatestPersonCountForEventUUID(e)}},{key:"onSubmitForm",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.selectedEventUUID,r=(arguments.length>3&&void 0!==arguments[3]||this.modalController,arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.personForm),i=(arguments.length>5&&void 0!==arguments[5]||this.bookingService,r.value);e.control.setErrors({invalid:"Saving form..."});var a=this.presentModal();a.then((function(e){return Object(b.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a);case 1:case"end":return e.stop()}}),e)})))})).then((function(e){return Object(b.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.onDidDismiss());case 1:case"end":return t.stop()}}),t)})))})).then((function(e){e.data.isDeclarationChecked&&n.submitSaveBookSeat(o,i)})).catch((function(e){}))}},{key:"submitSaveBookSeat",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.bookingService;o.bookPersonByEventUUID(e,t).subscribe((function(o){var r,i=o.errors,a=o.data;if(void 0!==i||(null==i?void 0:i.length)>0||void 0===(null===(r=a.insert_Person_one)||void 0===r?void 0:r.personFirstName))return console.error("Failed to save"),void n.presentToast("Unable to book. \ud83d\udea7").then((function(){})).catch((function(){}));var c=a.insert_Person_one,s=Object.assign({selectedEventUUID:e},t),u=JSON.stringify(c),l=JSON.stringify(s);console.log("BookingEventPage:: -> ngOnInit -> returnedPersonSuccessLocalStorageText personFormSubmissionLocalStorageText",u,l),localStorage.setItem(v.a,u),localStorage.setItem(v.b,l),n.presentToast("\ud83d\udd16\ud83d\udcd1Booking successful \ud83d\udcbe\ud83e\uddfe\ud83d\udcdd\ud83d\udcda\ud83d\udcd7\ud83d\udcd6").then((function(){})).catch((function(){})),n.personForm=n.getCreatedNewResetForm()}))}},{key:"presentToast",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading... \ud83d\udd03",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.toastController;return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.create({message:e,duration:4e3,animated:!0,translucent:!0});case 2:return n.abrupt("return",n.sent.present().then((function(){})));case 3:case"end":return n.stop()}}),n)})))}},{key:"presentModal",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:p.a,cssClass:"modal-custom-class",componentProps:{isDeclarationChecked:!1},swipeToClose:!0,animated:!0,backdropDismiss:!0});case 2:return t=e.sent,e.abrupt("return",t.present().then((function(){return t})));case 4:case"end":return e.stop()}}),e,this)})))}}])&&t(o.prototype,r),i&&t(o,i),n}(),C.\u0275fac=function(e){return new(e||C)(h.Jb(s.c),h.Jb(u.J),h.Jb(l.a),h.Jb(l.g),h.Jb(u.M),h.Jb(f.a))},C.\u0275cmp=h.Db({type:C,selectors:[["app-booking-event"]],decls:27,vars:9,consts:[[3,"translucent"],["pageTitle","Book seat"],[3,"formGroup","ngSubmit"],["f","ngForm"],["isEventElseVenue","true",3,"formGroup","selectedEventName","currentPersonBookingCount","selectedEventCapacity"],[2,"font-weight","bold"],["size","large","name","log-in-outline","aria-label","log in outline",2,"margin-left","-0.15em","vertical-align","middle"],[4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","size","large"],["color","cobaltbluemonochrome",3,"click"],["name","arrow-redo-circle-outline","size","large"],["type","submit","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","submit","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"],["color","danger"]],template:function(e,t){if(1&e){var n=h.Qb();h.Pb(0,"ion-header",0),h.Kb(1,"app-custom-header",1),h.Ob(),h.Pb(2,"ion-content"),h.Pb(3,"form",2,3),h.Xb("ngSubmit",(function(e){h.mc(n);var o=h.lc(4);return t.onSubmitForm(o,e)})),h.Kb(5,"app-person-booking-form",4),h.Pb(6,"ion-row"),h.Pb(7,"ion-col"),h.Pb(8,"div",5),h.rc(9," This confirms your booking. "),h.Kb(10,"br"),h.rc(11," \u8fd9\u786e\u8ba4\u60a8\u7684\u9884\u8ba2\u3002 "),h.Kb(12,"br"),h.rc(13," Please remember to check in when you arrive on the day. "),h.Kb(14,"br"),h.rc(15," \u5f53\u5929\u62b5\u8fbe\u65f6\u8bf7\u8bb0\u5f97\u529e\u7406\u7b7e\u5230\u624b\u7eed\u3002 "),h.Kb(16,"br"),h.rc(17," Scan the door QR code or click the green button to open the check-in page "),h.Kb(18,"ion-icon",6),h.Kb(19,"br"),h.rc(20," \u626b\u63cf\u95e8\u7684QR\u7801\u6216\u70b9\u51fb\u7eff\u8272\u6309\u94ae\u4ee5\u6253\u5f00\u7b7e\u5230\u9875\u9762 "),h.Kb(21,"ion-icon",6),h.Ob(),h.Ob(),h.Ob(),h.pc(22,P,11,3,"ng-container",7),h.cc(23,"async"),h.Ob(),h.Ob(),h.Pb(24,"ion-fab",8),h.Pb(25,"ion-fab-button",9),h.Xb("click",(function(e){return t.clickPrefill(e)})),h.Kb(26,"ion-icon",10),h.Ob(),h.Ob()}2&e&&(h.hc("translucent",!0),h.zb(3),h.hc("formGroup",t.personForm),h.zb(2),h.hc("formGroup",t.personForm)("selectedEventName",t.selectedEventName)("currentPersonBookingCount",t.currentPersonBookingCount)("selectedEventCapacity",t.selectedEventCapacity),h.zb(17),h.hc("ngIf",h.dc(23,7,t.currentPersonBookingCount)))},directives:[u.o,g.a,u.k,s.p,s.l,s.f,k.a,u.B,u.j,u.p,c.k,u.l,u.m,u.e,u.D],pipes:[c.b],styles:[""]}),C)}],O=((E=function t(){e(this,t)}).\u0275mod=h.Hb({type:E}),E.\u0275inj=h.Gb({factory:function(e){return new(e||E)},imports:[[l.i.forChild(F)],l.i]}),E),S=((w=function t(){e(this,t)}).\u0275mod=h.Hb({type:w}),w.\u0275inj=h.Gb({factory:function(e){return new(e||w)},imports:[[c.c,s.g,s.m,u.H,i.a,a.b,O]]}),w)}}])}();