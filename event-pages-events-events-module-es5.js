(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n  mutation CreateEvents(\n    $eventInsertObjects: [Event_insert_input!]! = [\n      {\n        EventSeries: { data: { eventSeriesDetails: \"Sunday service (English)\", eventSeriesName: \"Sunday worship\" } }\n        Organiser: { data: { randomUUID: \"b669fc76-3130-4c4e-a04e-49e9f067ea9c\" } }\n      }\n    ]\n  ) {\n    insert_Event(objects: $eventInsertObjects) {\n      affected_rows\n      returning {\n        eventName\n        eventCapacity\n        eventStartDateTime\n        eventEndDateTime\n        bookingAvailableStartDateTime\n        bookingAvailableEndDateTime\n      }\n    }\n  }\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n  mutation CreateEvent($eventInsertObject: Event_insert_input! = {}) {\n    insert_Event_one(object: $eventInsertObject) {\n      randomUUID\n      bookingAvailableStartDateTime\n      bookingAvailableEndDateTime\n      eventStartDateTime\n      eventEndDateTime\n      eventDateTimeRange\n      bookingAvailabilityDateTimeRange\n      eventName\n      eventTopic\n      eventCategory\n      eventCapacity\n      eventDescription\n      eventMedium\n    }\n  }\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  # Get all future events.\n  # Default just in case dumb hasura behaviour doesn't return EventRooms but somehow returns Events depending on presence of comparison exp\n  subscription GetAllEvents($eventEndDateTimeGreaterThanEqual: timestamptz = \"2020-07-28\") {\n    Event(where: { eventEndDateTime: { _gte: $eventEndDateTimeGreaterThanEqual } }, limit: 20) {\n      eventName\n      eventDescription\n      eventStartDateTime\n      eventEndDateTime\n      bookingAvailableStartDateTime\n      bookingAvailableEndDateTime\n      randomUUID\n      updated_at\n      EventRooms {\n        roomName\n        eventRoomUUID\n        eventRoomDetails\n      }\n    }\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-pages-events-events-module"], {
    /***/
    "./src/app/event/pages/events/events-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/event/pages/events/events-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EventsPageRoutingModule */

    /***/
    function srcAppEventPagesEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
        return EventsPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _events_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events.page */
      "./src/app/event/pages/events/events.page.ts");

      var routes = [{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_2__["EventsPage"]
      }];

      var EventsPageRoutingModule = function EventsPageRoutingModule() {
        _classCallCheck(this, EventsPageRoutingModule);
      };

      EventsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EventsPageRoutingModule
      });
      EventsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EventsPageRoutingModule_Factory(t) {
          return new (t || EventsPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/event/pages/events/events.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/event/pages/events/events.module.ts ***!
      \*****************************************************/

    /*! exports provided: EventsPageModule */

    /***/
    function srcAppEventPagesEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
        return EventsPageModule;
      });
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../shared/modules/shared.module */
      "./src/app/shared/modules/shared.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./events-routing.module */
      "./src/app/event/pages/events/events-routing.module.ts");
      /* harmony import */


      var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./events.page */
      "./src/app/event/pages/events/events.page.ts");

      var EventsPageModule = function EventsPageModule() {
        _classCallCheck(this, EventsPageModule);
      };

      EventsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: EventsPageModule
      });
      EventsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function EventsPageModule_Factory(t) {
          return new (t || EventsPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EventsPageModule, {
          declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventsPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]],
            declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/event/pages/events/events.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/event/pages/events/events.page.ts ***!
      \***************************************************/

    /*! exports provided: EventsPage */

    /***/
    function srcAppEventPagesEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
        return EventsPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _globals_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../globals/globals */
      "./src/app/globals/globals.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _events_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../events/services/event.service */
      "./src/app/events/services/event.service.ts");
      /* harmony import */


      var _booking_services_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../booking/services/booking.service */
      "./src/app/event/booking/services/booking.service.ts");
      /* harmony import */


      var _shared_components_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/custom-header/custom-header.component */
      "./src/app/shared/components/custom-header/custom-header.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function EventsPage_ion_item_sliding_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item-sliding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item-options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsPage_ion_item_sliding_5_Template_ion_item_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var event_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.clickEventItem($event, event_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-avatar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r1 == null ? null : event_r1.eventName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r1 == null ? null : event_r1.EventRooms[0] == null ? null : event_r1.EventRooms[0].roomName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 4, event_r1.eventStartDateTime, "EEEE',' dd MMM HH:mm"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, event_r1.eventEndDateTime, "HH:mm"), " ");
        }
      }

      var EventsPage = /*#__PURE__*/function () {
        function EventsPage(router, eventService, bookingService) {
          _classCallCheck(this, EventsPage);

          this.router = router;
          this.eventService = eventService;
          this.bookingService = bookingService;
          this.upcomingEvents = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          console.log("EventsPage:: constructor");
        }

        _createClass(EventsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("EventsPage:: ngOnInit");
            this.upcomingEvents = this.getLatestEvents();
          }
        }, {
          key: "getLatestEvents",
          value: function getLatestEvents() {
            var eventService = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.eventService;
            console.log("EventsPage:: getLatestEvents");
            var currentEvents = eventService.getEvents();
            var upcomingEvents = currentEvents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (eventsResult) {
              var events = eventsResult.data.Event,
                  context = eventsResult.context,
                  errors = eventsResult.errors,
                  extensions = eventsResult.extensions;
              console.log("EventsPage -> eventsResult", eventsResult);

              if ((errors === null || errors === void 0 ? void 0 : errors.length) > 0) {
                return undefined;
              }

              console.log("%c EventsPage:: subscribeLatestEvents -> events", _globals_globals__WEBPACK_IMPORTED_MODULE_3__["CONSOLE_COLOUR"]);
              return eventsResult.data.Event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (eventData) {
              var _a, _b, _c;

              return eventData !== undefined && ((_a = eventData[0]) === null || _a === void 0 ? void 0 : _a.EventRooms) !== undefined && ((_c = (_b = eventData[0]) === null || _b === void 0 ? void 0 : _b.EventRooms[0]) === null || _c === void 0 ? void 0 : _c.roomName) !== undefined;
            }));
            return upcomingEvents;
          } // - MARK: Click events

        }, {
          key: "clickEventItem",
          value: function clickEventItem(tap, event) {
            var router = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.router;
            console.log("EventsPage -> eventItemClick -> eventItemClick", tap);
            console.log("EventsPage -> eventItemClick -> event", event.randomUUID);
          }
        }, {
          key: "clickTestButton",
          value: function clickTestButton(event) {
            console.log("EventsPage -> testButton -> event", event);
            this.seedEvents();
          }
        }, {
          key: "seedEvents",
          value: function seedEvents() {
            var eventService = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.eventService;
            var seedEventInputObjects = eventService.getSeedEventInputObjects();
            console.log("EventsPage -> seedEvents -> getSeedEventInputObjects", seedEventInputObjects);
            var createdEventsReturning = eventService.createEvents(seedEventInputObjects);
            createdEventsReturning.subscribe(function (createdEventsResult) {
              console.log("EventsPage -> seedEvents -> createdEventsResult", createdEventsResult);
            });
          }
        }]);

        return EventsPage;
      }();

      EventsPage.ɵfac = function EventsPage_Factory(t) {
        return new (t || EventsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_events_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_booking_services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"]));
      };

      EventsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EventsPage,
        selectors: [["app-events"]],
        decls: 7,
        vars: 3,
        consts: [["pageTitle", "COVIDSafe Events"], [4, "ngFor", "ngForOf"], ["color", "danger"], ["button", "", 3, "click"], ["slot", "start"], ["src", "/assets/images/emp-cmca-logo-small-172x172-placeholder.jpg", "alt", "Placeholder-image-church"]],
        template: function EventsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-list-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upcoming events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventsPage_ion_item_sliding_5_Template, 16, 10, "ion-item-sliding", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.upcomingEvents));
          }
        },
        directives: [_shared_components_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_7__["CustomHeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonListHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L3BhZ2VzL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-events",
            templateUrl: "./events.page.html",
            styleUrls: ["./events.page.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _events_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]
          }, {
            type: _booking_services_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/events/services/event.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/events/services/event.service.ts ***!
      \**************************************************/

    /*! exports provided: EventService, getCreateEventObjectInput */

    /***/
    function srcAppEventsServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCreateEventObjectInput", function () {
        return getCreateEventObjectInput;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! graphql-tag */
      "./node_modules/graphql-tag/src/index.js");
      /* harmony import */


      var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_globals_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/globals/globals */
      "./src/app/globals/globals.ts");
      /* harmony import */


      var _shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/utilities/date-utilities */
      "./src/app/shared/utilities/date-utilities.ts");
      /* harmony import */


      var _generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../__generated__/globalTypes */
      "./__generated__/globalTypes.ts");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! apollo-angular */
      "./node_modules/apollo-angular/fesm2015/ngApollo.js");

      var GET_ALL_EVENTS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject()); // - FIXME: Placeholders

      var CREATE_EVENT = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject2());
      var ORGANISER_UUID = "b669fc76-3130-4c4e-a04e-49e9f067ea9c";
      var CREATE_EVENTS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject3());
      /* const CREATE_EVENTS_BY_ORGANISER: DocumentNode; */

      var EventService = /*#__PURE__*/function () {
        function EventService(apollo) {
          _classCallCheck(this, EventService);

          this.apollo = apollo;
          console.log("EventService -> constructor ");
        }
        /**
         * Get upcoming events for users to book into and pre-register.
         * @param currentGivenDate Defaulted to locale midnight to aid Hasura query/subscription caching all users.
         */


        _createClass(EventService, [{
          key: "getEvents",
          value: function getEvents() {
            var currentGivenDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(src_app_globals_globals__WEBPACK_IMPORTED_MODULE_3__["getLocaleMidnightDateTime"])();
            var apollo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.apollo;

            /* const pastEventEndDateThreshold: Date = getPastEventDateThreshold(currentGivenDate); */
            var baseEventEndDateThresholdShouldBeGreaterThan = currentGivenDate;
            var variables = {
              eventEndDateTimeGreaterThanEqual: baseEventEndDateThresholdShouldBeGreaterThan
            };
            var options = {
              query: GET_ALL_EVENTS,
              fetchPolicy: "cache-first",
              variables: variables
            };
            var events = apollo.subscribe(options);
            return events;
          }
          /**
           * Get created seed events for Sunday recurring.
           * Once-off.
           * Other organisers should be able to manage their group weekly recurring events through organiser creation flow.
           */

        }, {
          key: "getSeedEventInputObjects",
          value: function getSeedEventInputObjects() {
            var _ref2;

            // tslint:disable: no-magic-numbers
            var sundayService9AMStart = Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["nextDayDateWithTime"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["WeekDay"].Sunday, 9, 0);
            var sundayService1030AMEnd = Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["nextDayDateWithTime"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["WeekDay"].Sunday, 10, 30);
            var sundayServiceBookingStart = Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["nextDayDateWithTime"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["WeekDay"].Wednesday, 0, 0);
            var sundayServiceBookingEnd = Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["nextDayDateWithTime"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["WeekDay"].Sunday, 23, 59, 59, 999); // tslint:enable: no-magic-numbers

            var recurringDates = Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getRecurringEventBookingDateTime"])(sundayService9AMStart, sundayService1030AMEnd, sundayServiceBookingStart, sundayServiceBookingEnd);
            console.log("EventService -> getSeedEventInputObjects -> recurringDates", recurringDates);
            var eventName = "Sunday service";
            var eventCapacity = 40;
            var eventDescription = "Description of community event";
            var eventCategory = "Church";
            var chineseEventName = "主日崇拜";
            var eventTuplesConcurrent = recurringDates.map(function (_ref) {
              var _ref$eventStartEndDat = _ref.eventStartEndDateTime,
                  eventStart = _ref$eventStartEndDat.startDateTime,
                  eventEnd = _ref$eventStartEndDat.endDateTime,
                  eventTstzRange = _ref$eventStartEndDat.startEndDateTimeRangeTstzRangeText,
                  _ref$bookingStartEndD = _ref.bookingStartEndDateTime,
                  bookingStart = _ref$bookingStartEndD.startDateTime,
                  bookingEnd = _ref$bookingStartEndD.endDateTime,
                  bookingTstzRange = _ref$bookingStartEndD.startEndDateTimeRangeTstzRangeText;
              var englishEventInsertObject = getCreateEventObjectInput("English hall"
              /* EnglishHallName */
              , "English hall for live stream and in-person services"
              /* EnglishHallDescription */
              , bookingStart, bookingEnd, bookingTstzRange, eventStart, eventEnd, eventTstzRange, eventName, eventCapacity, eventDescription, eventCategory);
              var chineseEventObjectInput = getCreateEventObjectInput("Chinese hall"
              /* ChineseHallName */
              , "Chinese main hall for live stream and in-person services"
              /* ChineseHallDescription */
              , bookingStart, bookingEnd, bookingTstzRange, eventStart, eventEnd, eventTstzRange, chineseEventName, eventCapacity, eventDescription, eventCategory);
              var bothEvents = [englishEventInsertObject, chineseEventObjectInput];
              return bothEvents;
            });

            var eventInsertObjects = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(eventTuplesConcurrent));

            return eventInsertObjects;
          }
        }, {
          key: "createEvents",
          value: function createEvents(eventInsertObjects) {
            var apollo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.apollo;
            var variables = {
              eventInsertObjects: eventInsertObjects
            };
            var options = {
              mutation: CREATE_EVENTS,
              variables: variables
            }; // Create recurring dates and then map the array into an events array? double iteration but easier to handle

            var createdEventsReturning = apollo.mutate(options);
            return createdEventsReturning;
          }
        }, {
          key: "createEvent",
          value: function createEvent() {
            var apollo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.apollo;
            var baseDateNow = new Date();
            var bookingAvailableStartDateTime = new Date(baseDateNow.getTime() - Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getMillisecondsFromDays"])(2));
            var bookingAvailableEndDateTime = new Date(baseDateNow.getTime() + Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getMillisecondsFromDays"])(7));
            var eventStartDateTime = new Date(baseDateNow.getTime() + Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getMillisecondsFromDays"])(9));
            var eventEndDateTime = new Date(baseDateNow.getTime() + Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getMillisecondsFromDays"])(10));
            var endDate = new Date(baseDateNow.getTime() + Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getMillisecondsFromDays"])(10));
            var startTimeRange = "2020-07-22T09:27:53.667Z";
            var endTimeRange = "2020-08-14T09:27:53.667Z";
            var placeholderDateTimeRange = "('".concat(startTimeRange, "', '").concat(endTimeRange, "']");
            var eventInsertObject = getCreateEventObjectInput("English hall"
            /* EnglishHallName */
            , "English hall for live stream and in-person services"
            /* EnglishHallDescription */
            , bookingAvailableStartDateTime, bookingAvailableEndDateTime, Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getPostgresTimestamptzTstzRange"])(bookingAvailableStartDateTime, bookingAvailableEndDateTime), eventStartDateTime, eventEndDateTime, Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["getPostgresTimestamptzTstzRange"])(eventStartDateTime, eventEndDateTime));
            console.log("EventService -> constructor -> eventInsertObject", eventInsertObject);
            var variables = {
              eventInsertObject: eventInsertObject
            };
            var createEventReturning = apollo.mutate({
              mutation: CREATE_EVENT,
              variables: variables
            });
            return createEventReturning;
          }
        }]);

        return EventService;
      }();

      EventService.ɵfac = function EventService_Factory(t) {
        return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]));
      };

      EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EventService,
        factory: EventService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]
          }];
        }, null);
      })();

      function getCreateEventObjectInput(roomName, eventRoomDetails, bookingAvailableStartDateTime, bookingAvailableEndDateTime, bookingAvailableTstzRange, eventStartDateTime, eventEndDateTime, eventStartEndTstzRange) {
        var eventName = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "Sunday service";
        var eventCapacity = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 40;
        var eventDescription = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : "Description of community event";
        var eventCategory = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : "Church";
        var organiserUUID = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : ORGANISER_UUID;
        return {
          bookingAvailableStartDateTime: bookingAvailableStartDateTime,
          bookingAvailableEndDateTime: bookingAvailableEndDateTime,
          bookingAvailabilityDateTimeRange: bookingAvailableTstzRange,
          eventStartDateTime: eventStartDateTime,
          eventEndDateTime: eventEndDateTime,
          eventDateTimeRange: eventStartEndTstzRange,
          eventName: eventName,
          eventTopic: "Topic",
          eventMedium: "In-person",
          eventCategory: eventCategory,
          eventCapacity: eventCapacity,
          eventDescription: eventDescription,
          Organiser: {
            data: {
              randomUUID: organiserUUID,
              organiserDetails: ""
              /* organiserDetails: "anonymous", */

              /*
              User: {
                data: { username: "anonymous", emailAddress: "anonymous@anonymous" },
                on_conflict: {
                  constraint: User_constraint.User_username_key,
                  update_columns: [User_update_column.updated_at]
                }
              }
               */

            },
            on_conflict: {
              constraint: _generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["Organiser_constraint"].Organiser_randomUUID_key,
              update_columns: [_generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["Organiser_update_column"].updated_at]
            }
          },
          EventRooms: {
            data: [{
              eventRoomDetails: eventRoomDetails,
              Room: {
                data: {
                  roomName: roomName,
                  roomType: "Hall",
                  roomCapacity: 49,
                  Venue: {
                    data: {
                      venueName: "Eight Mile Plains Chinese Methodist Church"
                      /* WholeChurchVenueDescription */
                      ,
                      randomUUID: "9cb826dc-fcf8-406e-8b01-f4eba15dfcc6"
                      /* WholeChurchVenue */

                    },
                    on_conflict: {
                      constraint: _generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["Venue_constraint"].Venue_randomUUID_key,
                      update_columns: [_generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["Venue_update_column"].updated_at]
                    }
                  }
                },
                on_conflict: {
                  constraint: _generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["Room_constraint"].Room_venueID_roomName_key,
                  update_columns: [_generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["Room_update_column"].updated_at]
                }
              }
            }],
            on_conflict: {
              constraint: _generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["EventRoom_constraint"].EventRoom_eventRoomID_eventID_roomID_venueID_roomName_event_key,
              update_columns: [_generated_globalTypes__WEBPACK_IMPORTED_MODULE_5__["EventRoom_update_column"].updated_at]
            }
          }
        };
      } // Up to a certain date would require different calculation helper could still do? Probs should use a standard library.
      // Only need this function to generate the next dates.
      // Should pass in the starting date separately... and then just simple regenerate n times + 7 days


      function createEventsRecurring(numberOfEvents) {
        // 9am church
        var hh = 9;
        var mi = 0;
        var eventStartDateTime = Object(_shared_utilities_date_utilities__WEBPACK_IMPORTED_MODULE_4__["nextDayDateWithTime"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["WeekDay"].Sunday);
        return [];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=event-pages-events-events-module-es5.js.map