(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kJmD:function(e,t,o){"use strict";o.r(t),o.d(t,"BookingEventPageModule",(function(){return y}));var n=o("UKGz"),r=o("pMoy"),i=o("SVse"),s=o("s7LF"),c=o("sZkV"),a=o("iInd"),l=o("mrSG"),b=o("LRne"),u=o("aDUK"),d=o("jp9Y"),m=o("mEpY"),h=o("8Y7J"),p=o("t0hA"),v=o("Y+pZ"),g=o("f2/v");function f(e,t){1&e&&(h.Pb(0,"h3"),h.Pb(1,"ion-text",15),h.rc(2,"Capacity filled"),h.Ob(),h.Ob())}function k(e,t){if(1&e&&(h.Nb(0),h.Pb(1,"ion-row"),h.Pb(2,"ion-col"),h.Pb(3,"div"),h.Pb(4,"ion-button",11),h.Kb(5,"ion-icon",12),h.rc(6," Book seat \u{1f4ba}\u{1f4dc} "),h.Ob(),h.Pb(7,"button",13),h.Kb(8,"ion-icon",14),h.rc(9," \u{1f4ba} (enter) "),h.Ob(),h.Ob(),h.Ob(),h.Ob(),h.pc(10,f,3,0,"h3",7),h.Mb()),2&e){const e=t.ngIf,o=h.bc();h.zb(4),h.hc("disabled",o.personForm.invalid||e>=o.selectedEventCapacity),h.zb(3),h.hc("disabled",o.personForm.invalid||e>=o.selectedEventCapacity),h.zb(3),h.hc("ngIf",e>=o.selectedEventCapacity)}}const P=[{path:"",component:(()=>{class e{constructor(e,t,o,n,r,i){this.formBuilder=e,this.modalController=t,this.activatedRoute=o,this.router=n,this.toastController=r,this.bookingService=i,this.selectedEventUUID="",this.selectedEventName="",this.selectedEventCapacity=40,this.currentPersonBookingCount=Object(b.a)(0),o.queryParams.subscribe(e=>{const t=n.getCurrentNavigation();if(null===t||void 0===t.extras.state)return void n.navigate(["/"]).then(e=>{}).catch(e=>{});const{extras:{state:o}}=t,{randomUUID:r,eventName:s,eventCapacity:c}=o;this.selectedEventUUID=r,this.selectedEventName=s,this.selectedEventCapacity=c,this.currentPersonBookingCount=this.getLatestPersonAttendeeCountForSelectedEvent(r,i)})}getCreatedNewResetForm(e=this.formBuilder){return e.group(d.a.createPersonForm())}ngOnInit(){const e=this.getCreatedNewResetForm(this.formBuilder);this.personForm=e,this.personForm.valueChanges.subscribe(e=>{})}clickPrefill(e){this.prefillFormWithLastPerson(this.personForm)}prefillFormWithLastPerson(e=this.personForm){const{personFormAutofillLast:t}=Object(u.d)();e.patchValue(t)}getLatestPersonAttendeeCountForSelectedEvent(e=this.selectedEventUUID,t=this.bookingService){return t.getLatestPersonCountForEventUUID(e)}onSubmitForm(e,t,o=this.selectedEventUUID,n=this.modalController,r=this.personForm,i=this.bookingService){const s=r.value;e.control.setErrors({invalid:"Saving form..."});const c=this.presentModal();c.then(e=>Object(l.a)(this,void 0,void 0,(function*(){return c}))).then(e=>Object(l.a)(this,void 0,void 0,(function*(){return e.onDidDismiss()}))).then(e=>{const{data:{isDeclarationChecked:t}}=e;t&&this.submitSaveBookSeat(o,s)}).catch(e=>{})}submitSaveBookSeat(e,t,o=this.bookingService){o.bookPersonByEventUUID(e,t).subscribe(({errors:o,data:n})=>{var r;if(void 0!==o||(null==o?void 0:o.length)>0||void 0===(null===(r=n.insert_Person_one)||void 0===r?void 0:r.personFirstName))return console.error("Failed to save"),void this.presentToast("Unable to book. \u{1f6a7}").then(()=>{}).catch(()=>{});const i=n.insert_Person_one,s=Object.assign({selectedEventUUID:e},t),c=JSON.stringify(i),a=JSON.stringify(s);console.log("BookingEventPage:: -> ngOnInit -> returnedPersonSuccessLocalStorageText personFormSubmissionLocalStorageText",c,a),localStorage.setItem(u.a,c),localStorage.setItem(u.b,a),this.presentToast("\u{1f516}\u{1f4d1}Booking successful \u{1f4be}\u{1f9fe}\u{1f4dd}\u{1f4da}\u{1f4d7}\u{1f4d6}").then(()=>{}).catch(()=>{}),this.personForm=this.getCreatedNewResetForm()})}presentToast(e="Loading... \u{1f503}",t=this.toastController){return Object(l.a)(this,void 0,void 0,(function*(){return(yield t.create({message:e,duration:4e3,animated:!0,translucent:!0})).present().then(()=>{})}))}presentModal(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:m.a,cssClass:"modal-custom-class",componentProps:{isDeclarationChecked:!1},swipeToClose:!0,animated:!0,backdropDismiss:!0});return e.present().then(()=>e)}))}}return e.\u0275fac=function(t){return new(t||e)(h.Jb(s.c),h.Jb(c.J),h.Jb(a.a),h.Jb(a.g),h.Jb(c.M),h.Jb(p.a))},e.\u0275cmp=h.Db({type:e,selectors:[["app-booking-event"]],decls:27,vars:9,consts:[[3,"translucent"],["pageTitle","Book seat"],[3,"formGroup","ngSubmit"],["f","ngForm"],["isEventElseVenue","true",3,"formGroup","selectedEventName","currentPersonBookingCount","selectedEventCapacity"],[2,"font-weight","bold"],["size","large","name","log-in-outline","aria-label","log in outline",2,"margin-left","-0.15em","vertical-align","middle"],[4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","size","large"],["color","cobaltbluemonochrome",3,"click"],["name","arrow-redo-circle-outline","size","large"],["type","submit","color","cobaltblue",3,"disabled"],["name","person-add-outline"],["type","submit","mat-button","","color","primary","hidden","",3,"disabled"],["name","document-text"],["color","danger"]],template:function(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-header",0),h.Kb(1,"app-custom-header",1),h.Ob(),h.Pb(2,"ion-content"),h.Pb(3,"form",2,3),h.Xb("ngSubmit",(function(o){h.mc(e);const n=h.lc(4);return t.onSubmitForm(n,o)})),h.Kb(5,"app-person-booking-form",4),h.Pb(6,"ion-row"),h.Pb(7,"ion-col"),h.Pb(8,"div",5),h.rc(9," This confirms your booking. "),h.Kb(10,"br"),h.rc(11," \u8fd9\u786e\u8ba4\u60a8\u7684\u9884\u8ba2\u3002 "),h.Kb(12,"br"),h.rc(13," Please remember to check in when you arrive on the day. "),h.Kb(14,"br"),h.rc(15," \u5f53\u5929\u62b5\u8fbe\u65f6\u8bf7\u8bb0\u5f97\u529e\u7406\u7b7e\u5230\u624b\u7eed\u3002 "),h.Kb(16,"br"),h.rc(17," Scan the door QR code or click the green button to open the check-in page "),h.Kb(18,"ion-icon",6),h.Kb(19,"br"),h.rc(20," \u626b\u63cf\u95e8\u7684QR\u7801\u6216\u70b9\u51fb\u7eff\u8272\u6309\u94ae\u4ee5\u6253\u5f00\u7b7e\u5230\u9875\u9762 "),h.Kb(21,"ion-icon",6),h.Ob(),h.Ob(),h.Ob(),h.pc(22,k,11,3,"ng-container",7),h.cc(23,"async"),h.Ob(),h.Ob(),h.Pb(24,"ion-fab",8),h.Pb(25,"ion-fab-button",9),h.Xb("click",(function(e){return t.clickPrefill(e)})),h.Kb(26,"ion-icon",10),h.Ob(),h.Ob()}2&e&&(h.hc("translucent",!0),h.zb(3),h.hc("formGroup",t.personForm),h.zb(2),h.hc("formGroup",t.personForm)("selectedEventName",t.selectedEventName)("currentPersonBookingCount",t.currentPersonBookingCount)("selectedEventCapacity",t.selectedEventCapacity),h.zb(17),h.hc("ngIf",h.dc(23,7,t.currentPersonBookingCount)))},directives:[c.o,v.a,c.k,s.p,s.l,s.f,g.a,c.B,c.j,c.p,i.k,c.l,c.m,c.e,c.D],pipes:[i.b],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(P)],a.i]}),e})(),y=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(t){return new(t||e)},imports:[[i.c,s.g,s.m,c.H,n.a,r.b,C]]}),e})()}}]);