(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hRIL:function(e,n,o){"use strict";o.r(n),o.d(n,"CheckInPageModule",(function(){return y}));var t=o("s7LF"),s=o("UKGz"),i=o("SVse"),r=o("sZkV"),c=o("iInd"),a=o("mrSG"),l=o("LRne"),d=o("aDUK"),u=o("IxO4"),h=o("jp9Y"),m=o("lTCR"),b=o.n(m),k=o("8Y7J"),p=o("nbgS");const v=b.a`
  mutation PersonAdHocCheckIn(
    $personInsertDetails: Person_insert_input! = {
      personFirstName: "test"
      personLastName: "test"
      personPhoneNumber: "1234567890"
      personEmailAddress: "test@test.com"
    }
  ) {
    insert_PersonBooking_one(
      object: {
        Person: {
          data: $personInsertDetails
          on_conflict: {
            constraint: Person_personFirstName_personLastName_personPhoneNumber_personE
            update_columns: updated_at
          }
        }
        Booking: {
          data: {
            Event: {
              data: {
                # Hard-coded for tracking. Allows updates and duplicate persons as the person creates a new booking 1:1 each time.
                randomUUID: "c1836401-aca3-499f-b409-6c8fc1239193"
                # All the rest are placeholders for NOT NULL passing.
                eventTopic: "Church"
                eventStartDateTime: "2020-02-01"
                eventName: "Eight Mile Plains Chinese Methodist Church"
                eventMedium: "In-person"
                eventEndDateTime: "2020-02-02"
                eventDescription: "Default event"
                eventDateTimeRange: "[2020-01-01, 2020-01-02]"
                eventCategory: "Church"
                eventCapacity: 1
                bookingAvailableStartDateTime: "2020-01-01"
                bookingAvailableEndDateTime: "2020-01-02"
                bookingAvailabilityDateTimeRange: "[2020-01-01, 2020-01-02]"
                #
              }
              on_conflict: { constraint: Event_randomUUID_key, update_columns: updated_at }
            }
          }
          on_conflict: { constraint: Booking_bookingID_eventID_key, update_columns: updated_at }
        }
      }
    ) {
      checkInDateTime
      randomUUID
      Person {
        personFirstName
        randomUUID
      }
    }
  }
`,g=b.a`
  mutation PersonCheckIn($personUUIDEquals: uuid!, $eventUUIDEquals: uuid!) {
    update_PersonBooking(
      _set: { checkInDateTime: "now()" }
      where: {
        Person: { randomUUID: { _eq: $personUUIDEquals } }
        Booking: { Event: { randomUUID: { _eq: $eventUUIDEquals } } }
      }
    ) {
      affected_rows
      returning {
        checkInDateTime
        checkOutDateTime
        randomUUID
        updated_at
      }
    }
  }
`,I=b.a`
  mutation PersonCheckOut($personUUIDEquals: uuid!, $eventUUIDEquals: uuid!) {
    update_PersonBooking(
      _set: { checkOutDateTime: "now()" }
      where: {
        Person: { randomUUID: { _eq: $personUUIDEquals } }
        Booking: { Event: { randomUUID: { _eq: $eventUUIDEquals } } }
      }
    ) {
      affected_rows
      returning {
        checkInDateTime
        checkOutDateTime
        randomUUID
        updated_at
      }
    }
  }
`;let P=(()=>{class e{constructor(e){this.apollo=e}checkInPersonDetailsToGenericEventUUID({personFirstName:e,personLastName:n,personPhoneNumber:o,personEmailAddress:t},s=this.apollo){return s.mutate({mutation:v,variables:{personInsertDetails:{personFirstName:e,personLastName:n,personPhoneNumber:o,personEmailAddress:t}}})}checkInPersonByUUIDs(e,n,o=this.apollo){const t={personUUIDEquals:e,eventUUIDEquals:n},s={mutation:g,variables:t};return console.log("CheckInService:: checkInPersonByUUIDs -> variables",t),o.mutate(s)}checkOutPersonByUUIDs(e,n,o=this.apollo){return o.mutate({mutation:I,variables:{personUUIDEquals:e,eventUUIDEquals:n}})}}return e.\u0275fac=function(n){return new(n||e)(k.Tb(p.b))},e.\u0275prov=k.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=o("mEpY"),U=o("t0hA"),D=o("Y+pZ"),C=o("f2/v"),O=o("L1O8");function B(e,n){1&e&&k.Lb(0)}function E(e,n){if(1&e&&(k.Pb(0,"h2"),k.rc(1),k.Ob(),k.Pb(2,"h3"),k.rc(3),k.cc(4,"date"),k.Ob()),2&e){const e=k.bc();k.zb(1),k.tc("",null==e.savedPersonBooking||null==e.savedPersonBooking.PersonBookings[0]?null:e.savedPersonBooking.PersonBookings[0].Booking.Event.eventName," starts soon"),k.zb(2),k.sc(k.ec(4,2,null==e.savedPersonBooking||null==e.savedPersonBooking.PersonBookings[0]?null:e.savedPersonBooking.PersonBookings[0].Booking.Event.eventStartDateTime,e.dateFormat))}}function T(e,n){1&e&&(k.Nb(0),k.rc(1," Nothing to do \u{1f634}. "),k.Kb(2,"br"),k.rc(3," We have already checked in or are awaiting registration. "),k.Kb(4,"br"),k.rc(5," \u{1f6aa}\u{1f9f3}\u{1f6c4} "),k.Mb())}function F(e,n){if(1&e){const e=k.Qb();k.Pb(0,"ion-button",8),k.Xb("click",(function(){return k.mc(e),k.bc().onClickCheckIn()})),k.Kb(1,"ion-icon",9),k.rc(2," Check in "),k.Ob(),k.Pb(3,"ion-button",10),k.Xb("click",(function(){return k.mc(e),k.bc().onClickCheckOut()})),k.rc(4," Check out "),k.Kb(5,"ion-icon",11),k.Ob()}if(2&e){const e=k.bc();k.hc("hidden",e.isAlreadyCheckedIn||null==e.savedPersonBooking),k.zb(3),k.hc("hidden",e.isAlreadyCheckedOut||null==e.savedPersonBooking)}}const _=[{path:"",component:(()=>{class e{constructor(e,n,o,t,s,i,r){this.datePipe=e,this.formBuilder=n,this.activatedRoute=o,this.modalController=t,this.toastController=s,this.bookingService=i,this.checkInOutService=r,this.isAlreadyCheckedIn=!1,this.isAlreadyCheckedOut=!1,this.adhocGenericEventName="Eight Mile Plains Chinese Methodist Church",this.adhocCheckinCount=Object(l.a)(1),this.dateFormat="EEEE d MMMM yyyy HH:mm 'UTC'ZZZ",this.adhocCheckinCount=i.getLatestPersonCountForEventUUID("c1836401-aca3-499f-b409-6c8fc1239193"),({savedPersonBooking:this.savedPersonBooking,personFormAutofillLast:this.personFormAutofillMostRecent}=Object(d.d)());const c=this.getSetupCreatedForm(this.personFormAutofillMostRecent);this.cachedPersonGenericCheckInForm=c,o.queryParams.subscribe(e=>{({savedPersonBooking:this.savedPersonBooking,personFormAutofillLast:this.personFormAutofillMostRecent}=Object(d.d)()),this.cachedPersonGenericCheckInForm=this.getSetupCreatedForm(this.personFormAutofillMostRecent)})}ngOnInit(){}ngAfterViewInit(){}getSetupCreatedForm(e){const n=this.formBuilder.group(h.a.createPersonForm());return null!=e&&n.patchValue(e),n}getLoadBookingPersonsFromLocalStorage(){({savedPersonBooking:this.savedPersonBooking,personFormAutofillLast:this.personFormAutofillMostRecent}=Object(d.d)()),console.log("CheckInPage:: getLoadBookingPersonsFromLocalStorage -> this.savedPersonBooking",this.savedPersonBooking,"this.personFormAutofillMostRecent",this.personFormAutofillMostRecent)}onClickGenericCheckIn(e){const n=this.presentModal();n.then(e=>Object(a.a)(this,void 0,void 0,(function*(){return n}))).then(e=>e.onDidDismiss()).then(e=>{const{data:{isDeclarationChecked:n}}=e;n&&this.checkInToGenericLocationEvent(this.cachedPersonGenericCheckInForm.value)}).catch(e=>{})}checkInToGenericLocationEvent(e,n=this.checkInOutService){n.checkInPersonDetailsToGenericEventUUID(Object.assign({},e)).subscribe(({errors:n,data:o})=>{if(void 0!==n||(null==n?void 0:n.length)>0||void 0===o)return void console.error(n,o);const t=new Date(o.insert_PersonBooking_one.checkInDateTime);if(null!==this.personFormAutofillMostRecent){const n=this.personFormAutofillMostRecent,{randomUUID:o,selectedEventUUID:t}=n;Object(d.f)(Object.assign(Object.assign({},e),{randomUUID:o,selectedEventUUID:t}))}else Object(d.f)(Object.assign({},e));this.personFormAutofillMostRecent=Object(d.c)();const s=`\u2705Thank you for checking in ${o.insert_PersonBooking_one.Person.personFirstName}<br />Welcome to ${this.adhocGenericEventName}<br />${this.getDateTimeText(t)}`;this.presentToast(s).then(()=>{}).catch(()=>{})})}onClickCheckIn({randomUUID:e,PersonBookings:n}=this.savedPersonBooking,{selectedEventUUID:o}=this.personFormAutofillMostRecent,t=this.checkInOutService){t.checkInPersonByUUIDs(e,o).subscribe(({errors:e,data:o})=>{var t,s,i;if(void 0!==e||(null==e?void 0:e.length)>0||void 0===o)return void console.error(e,o);const r=null===(s=null===(t=o.update_PersonBooking.returning)||void 0===t?void 0:t[0])||void 0===s?void 0:s.checkInDateTime,c=`\u2705Successfully checked in<br />Welcome to ${null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.Booking.Event.eventName}<br />${this.getDateTimeText(r)}`;this.presentToast(c).then(()=>{}).catch(()=>{}),this.isAlreadyCheckedIn=!0})}onClickCheckOut({randomUUID:e}=this.savedPersonBooking,{selectedEventUUID:n,personFirstName:o}=this.personFormAutofillMostRecent,t=this.checkInOutService){t.checkOutPersonByUUIDs(e,n).subscribe(({errors:e,data:n})=>{var t,s;if(void 0!==e||(null==e?void 0:e.length)>0||void 0===n)return void console.error(e,n);const i=null===(s=null===(t=n.update_PersonBooking.returning)||void 0===t?void 0:t[0])||void 0===s?void 0:s.checkOutDateTime,r=`\u{1f3c1}Successfully checked out<br />Have a nice day ${o}\u{1f603}<br />${this.getDateTimeText(i)}`;this.presentToast(r).then(()=>{}).catch(()=>{}),this.isAlreadyCheckedOut=!0,Object(d.e)(),this.savedPersonBooking=void 0})}presentToast(e="",n=this.toastController){return Object(a.a)(this,void 0,void 0,(function*(){return(yield n.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{}).catch(e=>{})}))}presentModal(){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:f.a,cssClass:"modal-custom-class",componentProps:{isDeclarationChecked:!1},swipeToClose:!0,animated:!0,backdropDismiss:!0});return e.present().then(()=>e)}))}getDateTimeText(e,n=this.datePipe){return n.transform(e,u.a)}}return e.\u0275fac=function(n){return new(n||e)(k.Jb(i.e),k.Jb(t.c),k.Jb(c.a),k.Jb(r.J),k.Jb(r.M),k.Jb(U.a),k.Jb(P))},e.\u0275cmp=k.Db({type:e,selectors:[["app-check-in"]],decls:27,vars:10,consts:[["pageTitle","Check in","isRightAlignedEndButtonHidden","true"],["button",""],[4,"ngIf","ngIfElse"],["elseTemplateBookingRegisteredAvailableToCheckin",""],["elseTemplateCheckInOutISAvailable",""],["src","/assets/images/church-check-in-location-min.png","alt","check-in-lieu-church"],[3,"formGroup","selectedEventName"],["isSubmitMode","true",3,"checkInClick"],["color","tetradicgreen",3,"hidden","click"],["name","log-in-outline"],["color","cobaltblue",3,"hidden","click"],["name","log-out-outline"]],template:function(e,n){if(1&e&&(k.Pb(0,"ion-header"),k.Kb(1,"app-custom-header",0),k.Ob(),k.Pb(2,"ion-content"),k.Pb(3,"ion-card"),k.Pb(4,"ion-card-content"),k.Pb(5,"ion-item",1),k.Pb(6,"ion-label"),k.rc(7," Recent booking pre-registration "),k.Pb(8,"h2"),k.rc(9),k.Ob(),k.pc(10,B,1,0,"ng-container",2),k.pc(11,E,5,5,"ng-template",null,3,k.qc),k.Kb(13,"h3"),k.Ob(),k.Ob(),k.Ob(),k.Pb(14,"ion-card-content"),k.pc(15,T,6,0,"ng-container",2),k.pc(16,F,6,2,"ng-template",null,4,k.qc),k.Ob(),k.Ob(),k.Pb(18,"ion-card"),k.Pb(19,"ion-card-header"),k.rc(20," Check in venue "),k.Ob(),k.Kb(21,"ion-img",5),k.Pb(22,"ion-card-content"),k.Kb(23,"app-person-booking-form",6),k.rc(24),k.cc(25,"async"),k.Ob(),k.Ob(),k.Ob(),k.Pb(26,"app-check-in-floating-button",7),k.Xb("checkInClick",(function(e){return n.onClickGenericCheckIn(e)})),k.Ob()),2&e){const e=k.lc(12),o=k.lc(17);k.zb(9),k.sc(null==n.personFormAutofillMostRecent?null:n.personFormAutofillMostRecent.personFirstName),k.zb(1),k.hc("ngIf",null==n.savedPersonBooking)("ngIfElse",e),k.zb(5),k.hc("ngIf",null==n.savedPersonBooking)("ngIfElse",o),k.zb(8),k.hc("formGroup",n.cachedPersonGenericCheckInForm)("selectedEventName",n.adhocGenericEventName),k.zb(1),k.tc(" ",k.dc(25,8,n.adhocCheckinCount)," check-ins! ")}},directives:[r.o,D.a,r.k,r.g,r.h,r.s,r.w,i.k,r.i,r.q,C.a,t.l,t.f,O.a,r.e,r.p],pipes:[i.b,i.e],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275mod=k.Hb({type:e}),e.\u0275inj=k.Gb({factory:function(n){return new(n||e)},imports:[[c.i.forChild(_)],c.i]}),e})(),y=(()=>{class e{}return e.\u0275mod=k.Hb({type:e}),e.\u0275inj=k.Gb({factory:function(n){return new(n||e)},imports:[[i.c,t.g,r.H,t.m,s.a,A]]}),e})()}}]);