(self["webpackChunkmyApp1"] = self["webpackChunkmyApp1"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 2836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 8043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ 4679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);







// import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
let DashboardPage = class DashboardPage {
    constructor(_http, route) {
        this._http = _http;
        this.route = route;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this._http.get('http://localhost:5000/api/get').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.json())).subscribe(result => {
                // console.log(this.email,result)
                if (this.id != NaN) {
                    for (let i = 0; i < result.length; i++) {
                        if (this.id === result[i]._id) {
                            this.alldata = result[i];
                            this.name = this.alldata.first_name;
                            this.email = this.alldata.email ? this.alldata.email : '-';
                            // this.router.navigate(['/dashboard',result[i]._id]);
                        }
                    }
                }
            });
            // In a real app: dispatch action to load the details here.
        });
    }
    editprof() {
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__.Http },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 8043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  border: none;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.card:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 4px;\n  height: 100%;\n  background-color: #E1BEE7;\n  transform: scaleY(1);\n  transition: all 0.5s;\n  transform-origin: bottom;\n}\n\n.card:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 4px;\n  height: 100%;\n  background-color: #8E24AA;\n  transform: scaleY(0);\n  transition: all 0.5s;\n  transform-origin: bottom;\n}\n\n.card:hover::after {\n  transform: scaleY(1);\n}\n\n.fonts {\n  font-size: 11px;\n}\n\n.social-list {\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  padding: 0;\n}\n\n.social-list li {\n  padding: 10px;\n  color: #8E24AA;\n  font-size: 19px;\n}\n\n.buttons button:nth-child(1) {\n  border: 1px solid #8E24AA !important;\n  color: #8E24AA;\n  height: 40px;\n}\n\n.buttons button:nth-child(1):hover {\n  border: 1px solid #8E24AA !important;\n  color: #fff;\n  height: 40px;\n  background-color: #8E24AA;\n}\n\n.buttons button:nth-child(2) {\n  border: 1px solid #8E24AA !important;\n  background-color: #8E24AA;\n  color: #fff;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5jYXJkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxQkVFNztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b21cbn1cblxuLmNhcmQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RTI0QUE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tXG59XG5cbi5jYXJkOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSlcbn1cblxuLmZvbnRzIHtcbiAgICBmb250LXNpemU6IDExcHhcbn1cblxuLnNvY2lhbC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMFxufVxuXG4uc29jaWFsLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM4RTI0QUE7XG4gICAgZm9udC1zaXplOiAxOXB4XG59XG5cbi5idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RTI0QUEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzhFMjRBQTtcbiAgICBoZWlnaHQ6IDQwcHhcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhFMjRBQSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEUyNEFBXG59XG5cbi5idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RTI0QUEgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEUyNEFBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNDBweFxufSJdfQ== */");

/***/ }),

/***/ 2836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-button [routerLink]=\"['/login']\" type=\"submit\" color=\"\" expand=\"small\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n<script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css\" />\n<ion-content>\n    <div class=\"container mt-5\">\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-md-7\">\n                <div class=\"card p-3 py-4\">\n                    <div class=\"text-center\"> <img src=\"https://i.imgur.com/bDLhJiP.jpg\" width=\"100\" class=\"rounded-circle\"> </div>\n                    <div class=\"text-center mt-3\"> <span class=\"bg-secondary p-1 px-4 rounded text-white\">Pro</span>\n                        <h5 class=\"mt-2 mb-0\" [innerHTML]=\"name\">Alexender Schidmt</h5> <span [innerHTML]=\"job\">UI/UX Designer</span>\n                        <div class=\"px-4 mt-1\">\n                            <p class=\"fonts\" [innerHTML]=\"email\">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n                        </div>\n                        <ul class=\"social-list\">\n                            <li><i class=\"fa fa-facebook\"></i></li>\n                            <li><i class=\"fa fa-dribbble\"></i></li>\n                            <li><i class=\"fa fa-instagram\"></i></li>\n                            <li><i class=\"fa fa-linkedin\"></i></li>\n                            <li><i class=\"fa fa-google\"></i></li>\n                        </ul>\n                        <div class=\"buttons\"> <button class=\"btn btn-outline-primary px-4\" (click)=\"editprof()\">Edit</button> <button class=\"btn btn-primary px-4 ms-3\">Logout</button> </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map