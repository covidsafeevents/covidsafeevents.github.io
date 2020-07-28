(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{oirr:function(e,t,n){"use strict";n.r(t),n.d(t,"EventsPageModule",(function(){return M}));var a=n("UKGz"),o=n("SVse"),i=n("s7LF"),s=n("sZkV"),c=n("iInd"),r=n("LRne"),l=n("lJxs"),v=n("pLZG"),m=n("ZTNX"),b=n("8Y7J"),u=n("RXPq"),d=n("lTCR"),g=n.n(d),p=n("IxO4"),E=n("Ok9p"),h=n("nbgS");const D=g.a`
  # Get all future events.
  # Default just in case dumb hasura behaviour doesn't return EventRooms but somehow returns Events depending on presence of comparison exp
  subscription GetAllEvents($eventEndDateTimeGreaterThanEqual: timestamptz = "2020-07-28") {
    Event(where: { eventEndDateTime: { _gte: $eventEndDateTimeGreaterThanEqual } }, limit: 20) {
      eventName
      eventDescription
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
`,T=g.a`
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
`,f=g.a`
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
`;let O=(()=>{class e{constructor(e){this.apollo=e,console.log("EventService -> constructor ")}getEvents(e=Object(m.e)(),t=this.apollo){return t.subscribe({query:D,fetchPolicy:"cache-first",variables:{eventEndDateTimeGreaterThanEqual:e}})}getSeedEventInputObjects(){const e=Object(p.d)(o.o.Sunday,9,0),t=Object(p.d)(o.o.Sunday,10,30),n=Object(p.d)(o.o.Wednesday,0,0),a=Object(p.d)(o.o.Sunday,23,59,59,999),i=Object(p.c)(e,t,n,a);console.log("EventService -> getSeedEventInputObjects -> recurringDates",i);const s=i.map(({eventStartEndDateTime:{startDateTime:e,endDateTime:t,startEndDateTimeRangeTstzRangeText:n},bookingStartEndDateTime:{startDateTime:a,endDateTime:o,startEndDateTimeRangeTstzRangeText:i}})=>[I("English hall","English hall for live stream and in-person services",a,o,i,e,t,n,"Sunday service",40,"Description of community event","Church"),I("Chinese hall","Chinese main hall for live stream and in-person services",a,o,i,e,t,n,"\u4e3b\u65e5\u5d07\u62dc",40,"Description of community event","Church")]);return[].concat(...s)}createEvents(e,t=this.apollo){return t.mutate({mutation:f,variables:{eventInsertObjects:e}})}createEvent(e=this.apollo){const t=new Date,n=new Date(t.getTime()-Object(p.a)(2)),a=new Date(t.getTime()+Object(p.a)(7)),o=new Date(t.getTime()+Object(p.a)(9)),i=new Date(t.getTime()+Object(p.a)(10)),s=(new Date(t.getTime()+Object(p.a)(10)),I("English hall","English hall for live stream and in-person services",n,a,Object(p.b)(n,a),o,i,Object(p.b)(o,i)));return console.log("EventService -> constructor -> eventInsertObject",s),e.mutate({mutation:T,variables:{eventInsertObject:s}})}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(h.b))},e.\u0275prov=b.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function I(e,t,n,a,o,i,s,c,r="Sunday service",l=40,v="Description of community event",m="Church",b="b669fc76-3130-4c4e-a04e-49e9f067ea9c"){return{bookingAvailableStartDateTime:n,bookingAvailableEndDateTime:a,bookingAvailabilityDateTimeRange:o,eventStartDateTime:i,eventEndDateTime:s,eventDateTimeRange:c,eventName:r,eventTopic:"Topic",eventMedium:"In-person",eventCategory:m,eventCapacity:l,eventDescription:v,Organiser:{data:{randomUUID:b,organiserDetails:""},on_conflict:{constraint:E.g.Organiser_randomUUID_key,update_columns:[E.h.updated_at]}},EventRooms:{data:[{eventRoomDetails:t,Room:{data:{roomName:e,roomType:"Hall",roomCapacity:49,Venue:{data:{venueName:"Eight Mile Plains Chinese Methodist Church",randomUUID:"9cb826dc-fcf8-406e-8b01-f4eba15dfcc6"},on_conflict:{constraint:E.o.Venue_randomUUID_key,update_columns:[E.p.updated_at]}}},on_conflict:{constraint:E.k.Room_venueID_roomName_key,update_columns:[E.l.updated_at]}}}],on_conflict:{constraint:E.c.EventRoom_eventRoomID_eventID_roomID_venueID_roomName_event_key,update_columns:[E.d.updated_at]}}}}var y=n("t0hA"),_=n("h80k");let S=(()=>{class e{constructor(){this.pageTitle=""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Db({type:e,selectors:[["app-custom-header"]],inputs:{pageTitle:"pageTitle"},decls:7,vars:1,consts:[["color","cobaltblue"],["slot","start"],["text-left",""]],template:function(e,t){1&e&&(b.Mb(0,"ion-toolbar",0),b.Mb(1,"ion-buttons",1),b.Mb(2,"ion-back-button"),b.nc(3,"Back button"),b.Lb(),b.Kb(4,"app-home-button"),b.Lb(),b.Mb(5,"ion-title",2),b.nc(6),b.Lb(),b.Lb()),2&e&&(b.zb(6),b.oc(t.pageTitle))},directives:[s.x,s.f,s.c,s.d,_.a,s.w],styles:["ion-title[_ngcontent-%COMP%]{-webkit-padding-start:.25em;padding-inline-start:.25em}"]}),e})();function k(e,t){if(1&e){const e=b.Nb();b.Mb(0,"ion-item-sliding"),b.Mb(1,"ion-item-options"),b.Mb(2,"ion-item-option",2),b.nc(3,"Check "),b.Lb(),b.Lb(),b.Mb(4,"ion-item",3),b.Ub("click",(function(n){b.ic(e);const a=t.$implicit;return b.Yb().clickEventItem(n,a)})),b.Mb(5,"ion-avatar",4),b.Kb(6,"img",5),b.Lb(),b.Mb(7,"ion-label"),b.Mb(8,"h2"),b.nc(9),b.Lb(),b.Mb(10,"h3"),b.nc(11),b.Lb(),b.Mb(12,"p"),b.nc(13),b.Zb(14,"date"),b.Zb(15,"date"),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&e){const e=t.$implicit;b.zb(9),b.oc(null==e?null:e.eventName),b.zb(2),b.oc(null==e||null==e.EventRooms[0]?null:e.EventRooms[0].roomName),b.zb(2),b.qc(" ",b.bc(14,4,e.eventStartDateTime,"EEEE',' dd MMM HH:mm")," \u2013 ",b.bc(15,7,e.eventEndDateTime,"HH:mm")," ")}}const j=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.router=e,this.pwaService=t,this.eventService=n,this.bookingService=a,this.upcomingEvents=Object(r.a)([]),console.log("EventsPage:: constructor")}ngOnInit(){console.log("EventsPage:: ngOnInit"),this.upcomingEvents=this.getLatestEvents()}getLatestEvents(e=this.eventService){return console.log("EventsPage:: getLatestEvents"),e.getEvents().pipe(Object(l.a)(e=>{const{data:{},errors:t}=e;if(console.log("EventsPage -> eventsResult",e),!((null==t?void 0:t.length)>0))return console.log("%c EventsPage:: subscribeLatestEvents -> events",m.a),e.data.Event}),Object(v.a)(e=>{var t,n,a;return void 0!==e&&void 0!==(null===(t=e[0])||void 0===t?void 0:t.EventRooms)&&void 0!==(null===(a=null===(n=e[0])||void 0===n?void 0:n.EventRooms[0])||void 0===a?void 0:a.roomName)}))}clickEventItem(e,t,n=this.router){console.log("EventsPage -> eventItemClick -> eventItemClick",e),console.log("EventsPage -> eventItemClick -> event",t.randomUUID)}clickTestButton(e){console.log("EventsPage -> testButton -> event",e),this.seedEvents()}seedEvents(e=this.eventService){const t=e.getSeedEventInputObjects();console.log("EventsPage -> seedEvents -> getSeedEventInputObjects",t),e.createEvents(t).subscribe(e=>{console.log("EventsPage -> seedEvents -> createdEventsResult",e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(c.g),b.Jb(u.a),b.Jb(O),b.Jb(y.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-events"]],decls:7,vars:3,consts:[["pageTitle","COVIDSafe Events"],[4,"ngFor","ngForOf"],["color","danger"],["button","",3,"click"],["slot","start"],["src","/assets/images/emp-cmca-logo-small-172x172-placeholder.jpg","alt","Placeholder-image-church"]],template:function(e,t){1&e&&(b.Kb(0,"app-custom-header",0),b.Mb(1,"ion-content"),b.Mb(2,"ion-list"),b.Mb(3,"ion-list-header"),b.nc(4,"Upcoming events"),b.Lb(),b.lc(5,k,16,10,"ion-item-sliding",1),b.Zb(6,"async"),b.Lb(),b.Lb()),2&e&&(b.zb(5),b.ec("ngForOf",b.ac(6,1,t.upcomingEvents)))},directives:[S,s.h,s.r,s.s,o.j,s.p,s.o,s.n,s.m,s.b,s.q],pipes:[o.b,o.e],styles:[""]}),e})()}];let R=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[c.i.forChild(j)],c.i]}),e})(),M=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[o.c,i.f,s.y,a.a,R]]}),e})()}}]);