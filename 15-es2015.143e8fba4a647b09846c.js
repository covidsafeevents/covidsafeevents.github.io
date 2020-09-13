(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{oirr:function(e,t,n){"use strict";n.r(t),n.d(t,"EventsPageModule",(function(){return K}));var i=n("UKGz"),o=n("SVse"),a=n("s7LF"),s=n("sZkV"),r=n("iInd"),c=n("mrSG"),l=n("LRne"),b=n("IzEk"),v=n("lJxs"),m=n("pLZG"),d=n("ZTNX"),u=n("IxO4"),g=n("8Y7J"),p=n("RXPq"),h=n("lTCR"),E=n.n(h),k=n("Ok9p"),D=n("nbgS");const O=E.a`
  # Get all future events.
  # Default just in case dumb hasura behaviour doesn't return EventRooms but somehow returns Events depending on presence of comparison exp
  subscription GetAllEvents($eventEndDateTimeGreaterThanEqual: timestamptz = "2020-07-28") {
    Event(
      where: { eventEndDateTime: { _gte: $eventEndDateTimeGreaterThanEqual } }
      limit: 20
      order_by: { eventStartDateTime: asc, eventName: asc, bookingAvailableStartDateTime: asc }
    ) {
      eventName
      eventDescription
      eventCapacity
      eventStartDateTime
      eventEndDateTime
      bookingAvailableStartDateTime
      bookingAvailableEndDateTime
      randomUUID
      updated_at
      EventRooms {
        roomName
        eventRoomUUID
        eventRoomDetails
      }
    }
  }
`,f=E.a`
  mutation CreateEvent($eventInsertObject: Event_insert_input! = {}) {
    insert_Event_one(object: $eventInsertObject) {
      randomUUID
      bookingAvailableStartDateTime
      bookingAvailableEndDateTime
      eventStartDateTime
      eventEndDateTime
      eventDateTimeRange
      bookingAvailabilityDateTimeRange
      eventName
      eventTopic
      eventCategory
      eventCapacity
      eventDescription
      eventMedium
    }
  }
`,T=E.a`
  mutation CreateEvents(
    $eventInsertObjects: [Event_insert_input!]! = [
      {
        EventSeries: { data: { eventSeriesDetails: "Sunday service (English)", eventSeriesName: "Sunday worship" } }
        Organiser: { data: { randomUUID: "b669fc76-3130-4c4e-a04e-49e9f067ea9c" } }
      }
    ]
  ) {
    insert_Event(objects: $eventInsertObjects) {
      affected_rows
      returning {
        eventName
        eventCapacity
        eventStartDateTime
        eventEndDateTime
        bookingAvailableStartDateTime
        bookingAvailableEndDateTime
      }
    }
  }
`;let P=(()=>{class e{constructor(e){this.apollo=e}getEvents(e=Object(d.e)(),t=this.apollo){return t.subscribe({query:O,fetchPolicy:"cache-first",variables:{eventEndDateTimeGreaterThanEqual:e}})}getSeedEventInputObjects(){const e=Object(u.e)(o.o.Sunday,9,0),t=Object(u.e)(o.o.Sunday,10,30),n=Object(u.e)(o.o.Wednesday,0,0),i=Object(u.e)(o.o.Sunday,23,59,59,999),a=Object(u.d)(e,t,n,i).map(({eventStartEndDateTime:{startDateTime:e,endDateTime:t,startEndDateTimeRangeTstzRangeText:n},bookingStartEndDateTime:{startDateTime:i,endDateTime:o,startEndDateTimeRangeTstzRangeText:a}})=>[S("English hall","English hall for live stream and in-person services",i,o,a,e,t,n,"Sunday service",40,"Description of community event","Church"),S("Chinese hall","Chinese main hall for live stream and in-person services",i,o,a,e,t,n,"\u4e3b\u65e5\u5d07\u62dc",40,"Description of community event","Church")]);return[].concat(...a)}createEvents(e,t=this.apollo){return t.mutate({mutation:T,variables:{eventInsertObjects:e}})}createEvent(e=this.apollo){const t=new Date,n=new Date(t.getTime()-Object(u.b)(2)),i=new Date(t.getTime()+Object(u.b)(7)),o=new Date(t.getTime()+Object(u.b)(9)),a=new Date(t.getTime()+Object(u.b)(10)),s=(new Date(t.getTime()+Object(u.b)(10)),S("English hall","English hall for live stream and in-person services",n,i,Object(u.c)(n,i),o,a,Object(u.c)(o,a)));return e.mutate({mutation:f,variables:{eventInsertObject:s}})}}return e.\u0275fac=function(t){return new(t||e)(g.Tb(D.b))},e.\u0275prov=g.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function S(e,t,n,i,o,a,s,r,c="Sunday service",l=40,b="Description of community event",v="Church",m="b669fc76-3130-4c4e-a04e-49e9f067ea9c"){return{bookingAvailableStartDateTime:n,bookingAvailableEndDateTime:i,bookingAvailabilityDateTimeRange:o,eventStartDateTime:a,eventEndDateTime:s,eventDateTimeRange:r,eventName:c,eventTopic:"Topic",eventMedium:"In-person",eventCategory:v,eventCapacity:l,eventDescription:b,Organiser:{data:{randomUUID:m,organiserDetails:""},on_conflict:{constraint:k.g.Organiser_randomUUID_key,update_columns:[k.h.updated_at]}},EventRooms:{data:[{eventRoomDetails:t,Room:{data:{roomName:e,roomType:"Hall",roomCapacity:49,Venue:{data:{venueName:"Eight Mile Plains Chinese Methodist Church",randomUUID:"9cb826dc-fcf8-406e-8b01-f4eba15dfcc6"},on_conflict:{constraint:k.o.Venue_randomUUID_key,update_columns:[k.p.updated_at]}}},on_conflict:{constraint:k.k.Room_venueID_roomName_key,update_columns:[k.l.updated_at]}}}],on_conflict:{constraint:k.c.EventRoom_eventRoomID_eventID_roomID_venueID_roomName_event_key,update_columns:[k.d.updated_at]}}}}var y=n("t0hA"),w=n("Y+pZ"),_=n("L1O8");function I(e,t){1&e&&g.Kb(0,"ion-progress-bar",4)}function j(e,t){if(1&e){const e=g.Qb();g.Pb(0,"ion-item-sliding"),g.Pb(1,"ion-item-options"),g.Pb(2,"ion-item-option",5),g.Xb("click",(function(n){g.mc(e);const i=t.$implicit,o=g.bc();return o.clickNavViewAllBookingsForEventSwiper(n,i,o.router)})),g.rc(3,"Check "),g.Ob(),g.Ob(),g.Pb(4,"ion-item",6),g.Xb("click",(function(n){g.mc(e);const i=t.$implicit;return g.bc().clickEventItem(n,i)})),g.Pb(5,"ion-avatar",7),g.Kb(6,"img",8),g.Ob(),g.Pb(7,"ion-label",9),g.Pb(8,"h2"),g.rc(9),g.Ob(),g.Pb(10,"h3"),g.rc(11),g.Ob(),g.Pb(12,"p"),g.rc(13),g.cc(14,"date"),g.cc(15,"date"),g.Ob(),g.Ob(),g.Ob(),g.Ob()}if(2&e){const e=t.$implicit,n=g.bc();g.zb(4),g.ic("color",n.isBookingAvailableForEvent(e)?"":"light"),g.hc("button",n.isBookingAvailableForEvent(e)),g.zb(3),g.ic("color",n.isBookingAvailableForEvent(e)?"":"medium"),g.zb(2),g.sc(null==e?null:e.eventName),g.zb(2),g.sc(null==e||null==e.EventRooms[0]?null:e.EventRooms[0].roomName),g.zb(2),g.uc(" ",g.ec(14,7,e.eventStartDateTime,"EEEE',' dd MMM HH:mm"),"\u2013",g.ec(15,10,e.eventEndDateTime,"HH:mm")," ")}}function x(e,t){1&e&&(g.Pb(0,"div"),g.Pb(1,"div",10),g.Kb(2,"ion-skeleton-text",11),g.Kb(3,"ion-skeleton-text",12),g.Kb(4,"ion-skeleton-text",13),g.Kb(5,"ion-skeleton-text",14),g.Kb(6,"ion-skeleton-text",11),g.Ob(),g.Pb(7,"ion-list"),g.Pb(8,"ion-list-header"),g.Pb(9,"ion-label"),g.Kb(10,"ion-skeleton-text",15),g.Ob(),g.Ob(),g.Pb(11,"ion-item"),g.Pb(12,"ion-avatar",7),g.Kb(13,"ion-skeleton-text",12),g.Ob(),g.Pb(14,"ion-label"),g.Pb(15,"h3"),g.Kb(16,"ion-skeleton-text",16),g.Ob(),g.Pb(17,"p"),g.Kb(18,"ion-skeleton-text",17),g.Ob(),g.Pb(19,"p"),g.Kb(20,"ion-skeleton-text",11),g.Ob(),g.Ob(),g.Ob(),g.Pb(21,"ion-item"),g.Pb(22,"ion-thumbnail",7),g.Kb(23,"ion-skeleton-text",12),g.Ob(),g.Pb(24,"ion-label"),g.Pb(25,"h3"),g.Kb(26,"ion-skeleton-text",16),g.Ob(),g.Pb(27,"p"),g.Kb(28,"ion-skeleton-text",17),g.Ob(),g.Pb(29,"p"),g.Kb(30,"ion-skeleton-text",11),g.Ob(),g.Ob(),g.Ob(),g.Pb(31,"ion-item"),g.Kb(32,"ion-skeleton-text",18),g.Pb(33,"ion-label"),g.Pb(34,"h3"),g.Kb(35,"ion-skeleton-text",16),g.Ob(),g.Pb(36,"p"),g.Kb(37,"ion-skeleton-text",17),g.Ob(),g.Pb(38,"p"),g.Kb(39,"ion-skeleton-text",11),g.Ob(),g.Ob(),g.Ob(),g.Ob(),g.Ob())}function R({bookingAvailableStartDateTime:e}){return function(e,t=new Date(e)){return function(e,t=(new Date).getTime()){return void 0!==e&&t>e.getTime()}(t)}(e)}const A=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,a){this.router=e,this.pwaService=t,this.datePipe=n,this.toastController=i,this.eventService=o,this.bookingService=a,this.upcomingEvents=Object(l.a)([]),this.isLoading=!0}ngOnInit(){this.upcomingEvents=this.getLatestEvents(),this.upcomingEvents.pipe(Object(b.a)(1)).subscribe(e=>{this.isLoading=!1})}getLatestEvents(e=this.eventService){return e.getEvents().pipe(Object(v.a)(e=>{const{data:{},errors:t}=e;if(!((null==t?void 0:t.length)>0))return console.log("%c EventsPage:: subscribeLatestEvents -> events",d.a),e.data.Event}),Object(m.a)(e=>{var t,n,i;return void 0!==e&&void 0!==(null===(t=e[0])||void 0===t?void 0:t.EventRooms)&&void 0!==(null===(i=null===(n=e[0])||void 0===n?void 0:n.EventRooms[0])||void 0===i?void 0:i.roomName)}))}clickEventItem(e,t,n=this.router){if(R(t))this.navigateToBooking(t,n);else{const e=this.datePipe.transform(t.bookingAvailableStartDateTime,u.a);this.presentToast(`Booking is currently unavailable for ${t.eventName} <br />Please check back on ${e}`).then(e=>{}).catch(e=>{})}}clickNavViewAllBookingsForEventSwiper(e,t,n=this.router){console.log("EventsPage -> clickCheckAllBookingsSwiper -> touch",e),n.navigate(["event",""+t.randomUUID,"visitor-list"]).then(e=>{console.log("EventsPage -> clickCheckAllBookingsSwiper -> navigated",e)}).catch(e=>{console.log("EventsPage -> clickCheckAllBookingsSwiper -> error",e)})}navigateToBooking(e,t){t.navigate(["/booking"],{state:e}).then(e=>{}).catch(e=>{})}clickTestButton(e){this.seedEvents()}seedEvents(e=this.eventService){const t=e.getSeedEventInputObjects();e.createEvents(t).subscribe(e=>{})}isBookingAvailableForEvent(e){return void 0!==e&&R(e)}presentToast(e="",t=this.toastController){return Object(c.a)(this,void 0,void 0,(function*(){return(yield t.create({message:e,duration:3500,animated:!0,translucent:!0})).present().then(()=>{})}))}}return e.\u0275fac=function(t){return new(t||e)(g.Jb(r.g),g.Jb(p.a),g.Jb(o.e),g.Jb(s.M),g.Jb(P),g.Jb(y.a))},e.\u0275cmp=g.Db({type:e,selectors:[["app-events"]],decls:10,vars:6,consts:[["pageTitle","COVIDSafe Events",3,"isRightAlignedEndButtonHidden"],["value","0.25","buffer","0.50",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["value","0.25","buffer","0.50"],["color","danger","button","",3,"click"],[3,"button","color","click"],["slot","start"],["src","/assets/images/emp-cmca-logo-small-172x172-placeholder.jpg","alt","Placeholder-image-church"],[3,"color"],[1,"ion-padding","custom-skeleton"],["animated","",2,"width","60%"],["animated",""],["animated","",2,"width","88%"],["animated","",2,"width","70%"],["animated","",2,"width","20%"],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","","slot","start",2,"width","27px","height","27px"]],template:function(e,t){1&e&&(g.Kb(0,"app-custom-header",0),g.Kb(1,"app-check-in-floating-button"),g.Pb(2,"ion-content"),g.Pb(3,"ion-list"),g.Pb(4,"ion-list-header"),g.rc(5,"Upcoming events"),g.Ob(),g.pc(6,I,1,0,"ion-progress-bar",1),g.pc(7,j,16,13,"ion-item-sliding",2),g.cc(8,"async"),g.Ob(),g.pc(9,x,40,0,"div",3),g.Ob()),2&e&&(g.hc("isRightAlignedEndButtonHidden",!0),g.zb(6),g.hc("ngIf",t.isLoading),g.zb(1),g.hc("ngForOf",g.dc(8,4,t.upcomingEvents)),g.zb(2),g.hc("ngIf",t.isLoading))},directives:[w.a,_.a,s.k,s.x,s.y,o.k,o.j,s.z,s.v,s.u,s.t,s.s,s.b,s.w,s.C,s.E],pipes:[o.b,o.e],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(A)],r.i]}),e})(),K=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[o.c,a.g,s.H,i.a,C]]}),e})()}}]);