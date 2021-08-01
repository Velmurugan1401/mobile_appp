(self["webpackChunkmyApp1"] = self["webpackChunkmyApp1"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);




// import { Http } from '@angular/http';



let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            // Http,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ 4679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);





// import { HttpHeaders } from '@angular/common/http';
// import { HttpClient, HttpClientModule } from '@angular/common/http'

// import 'rxjs/Rx';
let LoginPage = class LoginPage {
    constructor(_http) {
        this._http = _http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__.Headers({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__.RequestOptions({ headers: this.headers });
    }
    ngOnInit() {
    }
    showAlert() {
        this._http.get('http://localhost:5000/api/get', this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.json())).subscribe(result => {
            console.log(this.name);
        });
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const headerDict = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Headers': 'Content-Type',
                };
                const requestOptions = {
                    headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__.Headers(headerDict),
                };
                const url = 'https://api.example.com';
                let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__.Headers();
                headers.append('Content-Type', 'application/json');
                const response = yield this._http.get(url, requestOptions);
                console.log(response);
                // console.log(JSON.parse(response)); // JSON data returned by server
                // console.log(response.headers);
            }
            catch (error) {
                console.error(error.status);
                console.error(error.error); // Error message as string
                console.error(error.headers);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__.Http }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".divider {\n  display: flex;\n}\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\nion-col {\n  margin-top: 200px;\n}\na {\n  background-color: red;\n}\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\nion-grid {\n  background-image: url('5291450.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBRUksV0FBQTtFQUNBLE9BQUE7QUFDUjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUdBO0VBQ0kscUJBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUNJO0VBRUksV0FBQTtFQUNBLGFBQUE7QUFBUjtBQUtJO0VBRUksbUJBQUE7QUFIUjtBQU9BOztFQUVJLFlBQUE7RUFDQSx1QkFBQTtBQUpKO0FBT0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUpKO0FBT0E7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FBSkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG5pb24tY29sIHtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbSAtMWVtO1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgICB9XG59XG5cbi5vbmUtbGluZSB7XG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgfVxufVxuXG4uYXV0aC1mb3JtIGlvbi1ncmlkLFxuLmF1dGgtZm9ybSBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbHJlYWR5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbi81MjkxNDUwLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"auth-form\">\n    <ion-grid>\n        <ion-row>\n            <ion-col align-self-center>\n                <ion-button [routerLink]=\"['/registration']\" expand=\"block\" color=\"warning\">Register</ion-button>\n\n                <span class=\"divider line one-line\">or</span>\n\n                <span class=\"already\">Already a user?</span>\n\n                <ion-button [routerLink]=\"['/register']\" expand=\"block\" color=\"tertiary\">Sign In</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map