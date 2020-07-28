(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-booking-pages-booking-booking-module"],{

/***/ "./src/app/event/booking/models/person-form.ts":
/*!*****************************************************!*\
  !*** ./src/app/event/booking/models/person-form.ts ***!
  \*****************************************************/
/*! exports provided: PersonForm, PersonFormFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonForm", function() { return PersonForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonFormFactory", function() { return PersonFormFactory; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


// tslint:disable: no-magic-numbers
class PersonForm {
    constructor() {
        this.personFirstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.personLastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]);
        this.personPhoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[+)(\d)]+$/)]);
        this.personEmailAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
        this.isDeclarationChecked = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]);
    }
}
const personFormKeys = {
    randomUUID: true,
    personFirstName: true,
    personLastName: true,
    personPhoneNumber: true,
    personEmailAddress: true,
    isDeclarationChecked: true
};
// tslint:disable-next-line: no-unnecessary-class
class PersonFormFactory {
    static createPersonForm() {
        return new PersonForm();
    }
}


/***/ }),

/***/ "./src/app/event/booking/pages/booking/booking-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/event/booking/pages/booking/booking-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function() { return BookingPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.page */ "./src/app/event/booking/pages/booking/booking.page.ts");





const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_2__["BookingPage"]
    }
];
class BookingPageRoutingModule {
}
BookingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BookingPageRoutingModule });
BookingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BookingPageRoutingModule_Factory(t) { return new (t || BookingPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BookingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/event/booking/pages/booking/booking.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/event/booking/pages/booking/booking.module.ts ***!
  \***************************************************************/
/*! exports provided: BookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-routing.module */ "./src/app/event/booking/pages/booking/booking-routing.module.ts");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking.page */ "./src/app/event/booking/pages/booking/booking.page.ts");









class BookingPageModule {
}
BookingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BookingPageModule });
BookingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BookingPageModule_Factory(t) { return new (t || BookingPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookingPageModule, { declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_7__["BookingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
        _booking_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                    _booking_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingPageRoutingModule"]
                ],
                declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_7__["BookingPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/event/booking/pages/booking/booking.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/event/booking/pages/booking/booking.page.ts ***!
  \*************************************************************/
/*! exports provided: BookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPage", function() { return BookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_person_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/person-form */ "./src/app/event/booking/models/person-form.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/booking.service */ "./src/app/event/booking/services/booking.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_components_home_button_home_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/home-button/home-button.component */ "./src/app/shared/components/home-button/home-button.component.ts");
/* harmony import */ var _components_covid_declaration_covid_declaration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/covid-declaration/covid-declaration.component */ "./src/app/event/booking/components/covid-declaration/covid-declaration.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











function BookingPage_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add Person to Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add Person (enter) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.bookingForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.bookingForm.invalid);
} }
function BookingPage_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingPage_div_39_Template_ion_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx_r5.clickSubmitForm(ctx_r5.selectedEventUUID, _r0, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Register for Sunday service (Chinese hall) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.bookingForm.invalid);
} }
function BookingPage_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Registrations reached maximum capacity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const ENGLISH_EVENT_UUID = "f883134b-661a-4388-b677-582bc2ea39aa";
const CHINESE_EVENT_UUID = "667c1a54-3c59-4eff-a507-b55a80094249";
const DEFAULT_LOADING_TOAST_MESSAGE_TEXT = "Loading...";
class BookingPage {
    constructor(bookingService, formBuilder, toastController) {
        this.bookingService = bookingService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.selectedEventUUID = "";
        this.selectedEventName = "";
        // - FIXME: Hard coded values.
        this.bookingChineseUUID = "445538f0-e22e-4568-acf8-9bc5bba3ceb6";
        this.bookingEnglishUUID = "81508052-8691-4ff4-a3ef-c36bf7fccc88";
        this.eventChineseUUID = CHINESE_EVENT_UUID;
        this.eventEnglishUUID = ENGLISH_EVENT_UUID;
        this.latestPersonsEnglishCap = 49;
        this.latestPersonsChineseCap = 49;
        const bookingForm = formBuilder.group(_models_person_form__WEBPACK_IMPORTED_MODULE_2__["PersonFormFactory"].createPersonForm());
        this.bookingForm = bookingForm;
    }
    get isEnglishCountCappedLocked() {
        return this.englishCount >= this.latestPersonsEnglishCap;
    }
    get isChineseCountCappedLocked() {
        return this.chineseCount >= this.latestPersonsChineseCap;
    }
    get isRegistrationAllowedEnglishCountBelowCap() {
        return !this.isEnglishCountCappedLocked;
    }
    get isRegistrationAllowedChineseCountBelowCap() {
        return !this.isChineseCountCappedLocked;
    }
    ngOnInit() {
        console.log("BookingPage -> ngOnInit");
        const latestCountChineseDefault = Object(_services_booking_service__WEBPACK_IMPORTED_MODULE_3__["getLatestPersonCountFromQuerySubscription"])(this.bookingService.getNumberOfPersonBookingsForEvent());
        this.latestPersonsCountChinese = latestCountChineseDefault;
        latestCountChineseDefault.subscribe((num) => {
            this.chineseCount = num;
        });
        const latestCountEnglish = Object(_services_booking_service__WEBPACK_IMPORTED_MODULE_3__["getLatestPersonCountFromQuerySubscription"])(this.bookingService.getNumberOfPersonBookingsForEvent(this.eventEnglishUUID));
        this.latestPersonsCountEnglish = latestCountEnglish;
        latestCountEnglish.subscribe((a) => (this.englishCount = a));
    }
    clickSubmitForm(pickHardcodedBookingUUID = "445538f0-e22e-4568-acf8-9bc5bba3ceb6", form, event, personBookingForm = this.bookingForm, bookingService = this.bookingService) {
        // Temporarily mutate the count up while waiting for query
        // Helps deter edge case of clicking 9 submissions at a row while lagging and suddenly filling in 7 at once over the limit.
        // The real-time subscription will still reset to the latest values within milliseconds.
        pickHardcodedBookingUUID === this.bookingEnglishUUID ? (this.englishCount += 1) : (this.chineseCount += 1);
        console.log("BookingPage:: clickSubmitForm() -> form", form, event, personBookingForm);
        const person = personBookingForm.value;
        if (person.personFirstName === "") {
            this.presentToast(`Invalid inputs detected`).catch();
            return;
        }
        // Set form invalid intermediate state and then finally clear it on returned success.
        form.control.setErrors({ invalid: "Saving form..." });
        // INSERT
        const insertPersonReturning = bookingService.addPersonToBookingByUUID(pickHardcodedBookingUUID, person);
        insertPersonReturning.subscribe((personBookingResult) => {
            var _a, _b, _c, _d;
            console.log("BookingPage -> clickSubmitForm -> personBookingResult", personBookingResult);
            this.presentToast(`Successfully saved booking ${(_d = (_c = (_b = (_a = personBookingResult === null || personBookingResult === void 0 ? void 0 : personBookingResult.data) === null || _a === void 0 ? void 0 : _a.insert_Person) === null || _b === void 0 ? void 0 : _b.returning) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.personFirstName}`).catch();
            /* ${JSON.stringify(personBookingResult?.data?.insert_Person?.returning)} */
            // Success quickly reset the form to prevent duplicates.
            // Maybe should show the preview of the names...
            // Already shows count.
            this.resetRecreateForm();
        }, (error) => {
            this.presentToast(`Error saving ${JSON.stringify(error)}`).catch();
        });
    }
    resetRecreateForm() {
        const bookingForm = this.formBuilder.group(_models_person_form__WEBPACK_IMPORTED_MODULE_2__["PersonFormFactory"].createPersonForm());
        this.bookingForm = bookingForm;
    }
    presentToast(msg = DEFAULT_LOADING_TOAST_MESSAGE_TEXT, toastController = this.toastController) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield toastController.create({
                message: msg,
                duration: 3500,
                animated: true,
                translucent: true
            });
            // tslint:disable-next-line: newline-per-chained-call
            const toasted = toast.present().then(() => {
                console.log("Toast presented");
            });
            return toasted;
        });
    }
    compare(count, cap) {
        return count < cap;
    }
}
BookingPage.ɵfac = function BookingPage_Factory(t) { return new (t || BookingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"])); };
BookingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookingPage, selectors: [["app-booking"]], decls: 42, vars: 6, consts: [[3, "translucent"], ["color", "cobaltblue"], ["slot", "start"], [2, "padding-inline-start", "0.25em"], [3, "formGroup"], ["f", "ngForm"], [2, "color", "gray"], ["col-12", "", "col-sm-9", "", "col-md-6", "", "col-lg-4", "", "col-xl-3", ""], ["position", "floating"], ["formControlName", "personFirstName", "type", "text", "placeholder", "First name for registration, check in and contact-tracing purposes", "required", ""], ["formControlName", "personLastName", "type", "text", "placeholder", "Your last name", "required", ""], ["sizeXl", "2", "sizeLg", "2.2", "sizeMd", "2.5", "sizeSm", "4", "sizeXs", "5.6"], ["formControlName", "personPhoneNumber", "type", "tel", "placeholder", "0412345678", "size", "12", "required", ""], ["formControlName", "personEmailAddress", "type", "text", "placeholder", "info@example.com", "required", ""], [3, "eventName"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["maxedChinese", ""], ["type", "button", "color", "cobaltblue", 3, "disabled"], ["name", "person-add-outline"], ["type", "button", "mat-button", "", "color", "primary", "hidden", "", 3, "disabled"], ["name", "document-text"], ["type", "button", "color", "brightnavyblue", 3, "disabled", "click"], ["color", "warning"]], template: function BookingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-home-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Booking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " First name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Last name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Phone number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ion-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-covid-declaration", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, BookingPage_div_36_Template, 7, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, BookingPage_div_39_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, BookingPage_ng_template_40_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.bookingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("eventName", ctx.selectedEventName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRegistrationAllowedEnglishCountBelowCap && ctx.isRegistrationAllowedChineseCountBelowCap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.latestPersonsCountEnglish)("ngIfElse", _r3);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _shared_components_home_button_home_button_component__WEBPACK_IMPORTED_MODULE_6__["HomeButtonComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _components_covid_declaration_covid_declaration_component__WEBPACK_IMPORTED_MODULE_7__["CovidDeclarationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonText"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvYm9va2luZy9wYWdlcy9ib29raW5nL2Jvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztFQVdFIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQvYm9va2luZy9wYWdlcy9ib29raW5nL2Jvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cbi8vIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4vLyB9XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xufVxuICovXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-booking",
                templateUrl: "./booking.page.html",
                styleUrls: ["./booking.page.scss"]
            }]
    }], function () { return [{ type: _services_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=event-booking-pages-booking-booking-module-es2015.js.map