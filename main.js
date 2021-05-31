(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Info Grid-->\n<app-section-info></app-section-info>\n<!-- tools-->\n<!-- <app-section-auth *ngIf=\"!tokenValid\" (onAutenticar)=\"showTools($event)\"></app-section-auth> -->\n<!-- <app-section-tools *ngIf=\"tokenValid\"></app-section-tools> -->\n<app-section-tools></app-section-tools>\n<!-- About-->\n<app-section-about></app-section-about>\n<!-- Team-->\n<app-section-team></app-section-team>\n<!-- Contact-->\n<app-section-contact></app-section-contact>\n<!-- Footer-->\n<footer class=\"footer py-4\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-4 text-lg-left\">Clinica Zayma 2020</div>\n            <div class=\"col-lg-4 my-3 my-lg-0\">\n                <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n            </div>\n            <div class=\"col-lg-4 text-lg-right\">\n                <a class=\"mr-3\" href=\"#!\">Política de privacidad</a>\n                <a href=\"#!\">Términos de uso</a>\n            </div>\n        </div>\n    </div>\n</footer>\n<!-- Portfolio Modals-->\n<!-- Modal 1-->\n<!-- <div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\" alt=\"Close modal\" />\n            </div>\n            <div class=\"container\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-8\">\n                        <div class=\"modal-body\">\n                            <h2 class=\"text-uppercase\">Project Name</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/01-full.jpg\" alt=\"\" />\n                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                adipisicing elit. Est\n                                blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt\n                                officia\n                                expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                            <ul class=\"list-inline\">\n                                <li>Date: January 2020</li>\n                                <li>Client: Threads</li>\n                                <li>Category: Illustration</li>\n                            </ul>\n                            <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                                <i class=\"fas fa-times mr-1\"></i>\n                                Close Project\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .opacar {\n  color: #ddd !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb3llY3Rvc1xcWmF5bWEgU29mdHdhcmVcXFNpb3JpLXYyXFxzaW9yaS1sYW5kaW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAub3BhY2FyIHtcclxuICAgIGNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'siori-landig';
        this.tokenValid = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.validateToken();
    };
    AppComponent.prototype.validateToken = function () {
        this.tokenValid = this.authService.isAuthenticated();
        return this.tokenValid;
    };
    AppComponent.prototype.showTools = function (event) {
        this.validateToken();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _section_tools_section_tools_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-tools/section-tools.component */ "./src/app/section-tools/section-tools.component.ts");
/* harmony import */ var _section_info_section_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-info/section-info.component */ "./src/app/section-info/section-info.component.ts");
/* harmony import */ var _section_about_section_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-about/section-about.component */ "./src/app/section-about/section-about.component.ts");
/* harmony import */ var _section_team_section_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section-team/section-team.component */ "./src/app/section-team/section-team.component.ts");
/* harmony import */ var _section_contact_section_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-contact/section-contact.component */ "./src/app/section-contact/section-contact.component.ts");
/* harmony import */ var _section_auth_section_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section-auth/section-auth.component */ "./src/app/section-auth/section-auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _section_tools_section_tools_component__WEBPACK_IMPORTED_MODULE_5__["SectionToolsComponent"],
                _section_info_section_info_component__WEBPACK_IMPORTED_MODULE_6__["SectionInfoComponent"],
                _section_about_section_about_component__WEBPACK_IMPORTED_MODULE_7__["SectionAboutComponent"],
                _section_team_section_team_component__WEBPACK_IMPORTED_MODULE_8__["SectionTeamComponent"],
                _section_contact_section_contact_component__WEBPACK_IMPORTED_MODULE_9__["SectionContactComponent"],
                _section_auth_section_auth_component__WEBPACK_IMPORTED_MODULE_10__["SectionAuthComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(httpService) {
        this.httpService = httpService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.API_ENDPOINT = 'http://10.2.202.234:9898/oauth/token';
    }
    AuthService.prototype.validarCredenciales = function (username, password) {
        // Armado de las credenciales de acceso a los recursos de la API
        var credentials = btoa("USER_CLIENT_APP:password");
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': "Basic " + credentials,
        });
        // Parámetros de autenticacion
        var params = new URLSearchParams();
        params.set('username', username.toUpperCase());
        params.set('password', password);
        params.set('grant_type', 'password');
        // Armado de la url de autenticación
        var urlEndPoint = "" + this.API_ENDPOINT;
        // Retorno de promesa con el resultado de la autenticación
        return this.httpService.post(urlEndPoint, params.toString(), { headers: httpHeaders, observe: 'response' }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            if (e.status !== 500) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e.error.error_description);
            }
            else if (e.status === 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Servicio no disponilbe!');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    };
    // recuperarCredenciales(username: string): Observable<any> {
    //     // Armado de las credenciales de acceso a los recursos de la API
    //     const credentials: string = btoa(`${AppConstantes.ApiBackendID}:${AppConstantes.ApiBackendSecret}`);
    //     const httpHeaders = new HttpHeaders({
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': `Basic ${credentials}`,
    //     });
    //     // Parámetros de autenticacion
    //     const params = new URLSearchParams();
    //     params.set('mail', username.toUpperCase());
    //     // Armado de la url de recuperación
    //     const urlEndPoint = `${AppConstantes.ApiBackendURL}/${AppConstantes.ApiBackendRecoveryPassURL}`;
    //     // Retorno de promesa con el resultado de la autenticación
    //     return this.httpService.post(urlEndPoint, { email: username.toLocaleLowerCase() }).
    //         pipe(takeUntil(this.destroy$),
    //             map((response: any) => {
    //                 return response;
    //             }),
    //             catchError(e => {
    //                 if (e.status !== 500)
    //                     return throwError(e.error.error_description);
    //                 else if (e.status === 0)
    //                     return throwError('Servicio no disponilbe!');
    //                 return throwError(e);
    //             })
    //         );
    // }
    // logout(): Observable<any> {
    //     return new Observable<any>(observer => {
    //         // Borramos datos del token de la memoria del navegador
    //         localStorage.removeItem(AppConstantes.StorageKeyAuth);
    //         // Redireccionamos al login
    //         this.navService.goToLogin();
    //         // Finalizamos el observer
    //         observer.complete();
    //         observer.next();
    //     })
    // }
    AuthService.prototype.isAuthenticated = function () {
        var token = this.infoToken;
        if (token) {
            return this.isValidToken(token);
        }
        return false;
    };
    AuthService.prototype.isValidToken = function (access_token) {
        var payload = JSON.parse(atob(access_token.split('.')[1]));
        var now = new Date().getTime() / 1000;
        if (payload.exp > now) {
            return true;
        }
        console.warn('El token ha expirado!');
        return false;
    };
    Object.defineProperty(AuthService.prototype, "infoToken", {
        // hasAuthority(role: string, ignoreAdminClient: boolean = false): boolean {
        //     if (this.infoUser.authorities === undefined)
        //         return false;
        //     let roleFinded = this.infoUser.authorities.find(x => x === role);
        //     if (isNil(roleFinded) && !ignoreAdminClient)
        //         roleFinded = this.infoUser.authorities.find(x => x === 'ROLE_ADMIN');
        //     if (isNil(roleFinded))
        //         roleFinded = this.infoUser.authorities.find(x => x === 'ROLE_SMSDEV');
        //     return !isNil(roleFinded);
        // }
        // hasAuthorityOrIsAdmin(role: string): boolean {
        //     if (this.hasAuthority('ROLE_ADMIN'))
        //         return true;
        //     else
        //         return this.hasAuthority(role);
        // }
        // get infoUser(): UserDataInterface {
        //     const token = this.infoToken;
        //     if (token) {
        //         const payload = JSON.parse(atob(token.split('.')[1]));
        //         return payload;
        //     }
        //     return null;
        // }
        // isSamusoftAdmin(): boolean {
        //     return this.hasAuthority('ROLE_SMSDEV', true);
        // }
        // get usuarioMask(): Usuarios {
        //     const usu: Usuarios = new Usuarios();
        //     const uIface = this.infoUser;
        //     usu.idusuario = uIface.idusuario;
        //     usu.nombres = uIface.nombres;
        //     usu.username = uIface.username;
        //     usu.empresa = new Empresas();
        //     usu.empresa.idempresa = (<any>uIface).idempresa;
        //     return usu;
        // }
        get: function () {
            var dataAuth = localStorage.getItem('token');
            if (dataAuth === undefined || dataAuth === null) {
                return null;
            }
            // Convertimos la cadena obtenida de la memoria del navegador en un JSON
            var jsonAuth = JSON.parse(dataAuth);
            return jsonAuth.access_token;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/section-about/section-about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/section-about/section-about.component.ts ***!
  \**********************************************************/
/*! exports provided: SectionAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAboutComponent", function() { return SectionAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionAboutComponent = /** @class */ (function () {
    function SectionAboutComponent() {
    }
    SectionAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-about',
            template: "<section class=\"page-section\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"text-center\">\n            <h2 class=\"section-heading text-uppercase\">Acerca de...</h2>\n            <h3 class=\"section-subheading text-muted\">Asi naci\u00F3 SIORI... El deseo de cl\u00EDnica Zayma por mejorar sus procesos!</h3>\n        </div>\n        <ul class=\"timeline\">\n            <li>\n                <div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"assets/img/about/1.jpg\" alt=\"\" />\n                </div>\n                <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"subheading\">Objetivos del proyecto</h4>\n                    </div>\n                    <div class=\"timeline-body\">\n                        <p class=\"text-muted\">\n                            1. Fluidez y coherencia entre la informaci\u00F3n.<br>\n                            2. Control y trazabilidad sobre procesos operativos.<br>\n                            3. Automatizaci\u00F3n de tareas operativas.<br>\n                            4. Dependencia hacia la unidad de Gesti\u00F3n de Informaci\u00F3n.\n                        </p>\n                    </div>\n                </div>\n            </li>\n            <li class=\"timeline-inverted\">\n                <div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"assets/img/about/2.jpg\" alt=\"\" />\n                </div>\n                <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"subheading\">Inicio de operaciones</h4>\n                    </div>\n                    <div class=\"timeline-body\">\n                        <p class=\"text-muted\">\n                            Se inicia con la implementaci\u00F3n de SIESA y FACTURACI\u00D3N\n                            ELECTR\u00D3NICA como base fundamental para el desarrollo de\n                            software y posterior integraci\u00F3n Con base en SIESA se determinan\n                            todos los puntos de integraci\u00F3n a utilizar</p>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"assets/img/about/3.jpg\" alt=\"\" />\n                </div>\n                <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"subheading\">Primera transacci\u00F3n exitosa!!</h4>\n                    </div>\n                    <div class=\"timeline-body\">\n                        <p class=\"text-muted\">El\n                            2 de Julio de 2019 se realiza la salida al aire de SIESA y con ella,\n                            comienza la utilizaci\u00F3n de SIORI como herramienta orientada al\n                            usuario y a mejorar la automatizaci\u00F3n de procesos, d\u00E1ndose la\n                            primera transacci\u00F3n exitosa para solicitud de medicamentos</p>\n                    </div>\n                </div>\n            </li>\n            <li class=\"timeline-inverted\">\n                <div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"assets/img/about/4.jpg\" alt=\"\" />\n                </div>\n                <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"subheading\">Desarrollo SIORI v2</h4>\n                    </div>\n                    <div class=\"timeline-body\">\n                        <p class=\"text-muted\">\n                            Se inicia desarrollo de la versi\u00F3n 2 de SIORI para el desarrollo de\n                            los m\u00F3dulos no abarcados en primera etapa Se espera con este\n                            desarrollo mejorar la comunicaci\u00F3n entre sistemas pre existentes y\n                            mejorar la disponibilidad de la informaci\u00F3n para toma de decisiones</p>\n                    </div>\n                </div>\n            </li>\n            <li class=\"timeline-inverted\">\n                <div class=\"timeline-image\">\n                    <h4><br>\n                        ...Continuamos\n                    </h4>\n                </div>\n            </li>\n        </ul>\n    </div>\n</section>"
        })
    ], SectionAboutComponent);
    return SectionAboutComponent;
}());



/***/ }),

/***/ "./src/app/section-auth/section-auth.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-auth/section-auth.component.ts ***!
  \********************************************************/
/*! exports provided: SectionAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAuthComponent", function() { return SectionAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var SectionAuthComponent = /** @class */ (function () {
    function SectionAuthComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.onAutenticar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    SectionAuthComponent.prototype.validar = function () {
        var _this = this;
        this.authService.validarCredenciales(this.authForm.value.username, this.authForm.value.password).subscribe(function (response) {
            _this.authForm.controls.username.disable({});
            _this.authForm.controls.password.disable({});
            var data = {};
            data.name = 'nb:auth:oauth2:token';
            data.ownerStrategyName = 'auth';
            data.createdAt = (new Date()).getTime();
            data.value = JSON.stringify(response.body);
            localStorage.setItem('auth_app_token', JSON.stringify(data));
            localStorage.setItem('token', JSON.stringify(response.body));
            _this.onAutenticar.emit(response);
        }, function (err) {
            console.log(err);
            _this.message_error = err;
            // this.appFuncionesService.delay(2000).then(() => {
            //     this.showSpinner(false, 'text-danger', err);
            // });
        });
        console.log(this.authForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SectionAuthComponent.prototype, "onAutenticar", void 0);
    SectionAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-auth',
            template: "\n        <section class=\"page-section bg-light\" id=\"tools\">\n            <div class=\"container\">\n                <div class=\"text-center\">\n                    <h2 class=\"section-heading text-uppercase\">Autenticaci\u00F3n</h2>\n                    <h3 class=\"section-subheading text-muted\">Ingresa tus datos de acceso para utilizar las herramientas.</h3>\n                </div>\n                <form id=\"authForm\" [formGroup]=\"authForm\">\n                    <div class=\"row align-items-stretch mb-5\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <span class=\"help-block\">Usuario</span>\n                                <input class=\"form-control\" id=\"username\" type=\"text\" placeholder=\"Usuario *\" required=\"required\"\n                                    data-validation-required-message=\"Ingresa tu usuario.\" formControlName=\"username\"/>\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group mb-md-0\">\n                                <span class=\"help-block\">Contrase\u00F1a</span>\n                                <input class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Contrase\u00F1a *\" required=\"required\"\n                                    data-validation-required-message=\"Ingresa tu contrase\u00F1a.\" autocomplete=\"password\" \n                                    formControlName=\"password\"/>\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\" *ngIf=\"message_error\">\n                        <p class=\"help-block text-danger\">{{message_error}}</p>\n                    </div>\n                    <div class=\"text-center\">\n                        <div id=\"success\"></div>\n                        <button class=\"btn btn-primary btn-xl text-uppercase\" (click)=\"validar()\">Entrar</button>\n                    </div>\n                </form>\n            </div>\n        </section>\n        \n        <!-- Clients-->\n    <div class=\"py-5 mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.208:8080/webhc/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/envato.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.210:8080/comercial/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/designmodo.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.210:8080/NeoGenesis/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/themeforest.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"#\"  target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/creative-market.jpg\" alt=\"\" /></a>\n                </div>\n            </div>\n        </div>\n    </div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SectionAuthComponent);
    return SectionAuthComponent;
}());



/***/ }),

/***/ "./src/app/section-contact/section-contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/section-contact/section-contact.component.ts ***!
  \**************************************************************/
/*! exports provided: SectionContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContactComponent", function() { return SectionContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SectionContactComponent = /** @class */ (function () {
    function SectionContactComponent(fb) {
        this.fb = fb;
        this.contactForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    SectionContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-contact',
            template: "\n        <section class=\"page-section\" id=\"contact\">\n            <div class=\"container\">\n                <div class=\"text-center\">\n                    <h2 class=\"section-heading text-uppercase\">Sugerencias</h2>\n                    <h3 class=\"section-subheading text-muted\">Envia un comentario, sugerencia u observaci\u00F3n.</h3>\n                </div>\n                <form id=\"contactForm\" [formGroup]=\"contactForm\">\n                    <div class=\"row align-items-stretch mb-5\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Nombres *\" required=\"required\"\n                                    data-validation-required-message=\"Por favor, ingresa tu nombre\" />\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Correo electr\u00F3nico *\"\n                                    required=\"required\" data-validation-required-message=\"Por favor, ingresa tu direcci\u00F3n de email.\" />\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group mb-md-0\">\n                                <input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"N\u00FAmero celular *\" required=\"required\"\n                                    data-validation-required-message=\"Por favor, ingresa tu n\u00FAmero celular.\" />\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group form-group-textarea mb-md-0\">\n                                <textarea class=\"form-control\" id=\"message\" placeholder=\"Mensaje *\" required=\"required\"\n                                    data-validation-required-message=\"Por favor, ingresa tu mensaje\"></textarea>\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <div id=\"success\"></div>\n                        <button class=\"btn btn-primary btn-xl text-uppercase\" id=\"sendMessageButton\" type=\"submit\">Enviar\n                            Mensaje</button>\n                    </div>\n                </form>\n            </div>\n        </section>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SectionContactComponent);
    return SectionContactComponent;
}());



/***/ }),

/***/ "./src/app/section-info/section-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-info/section-info.component.ts ***!
  \********************************************************/
/*! exports provided: SectionInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionInfoComponent", function() { return SectionInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionInfoComponent = /** @class */ (function () {
    function SectionInfoComponent() {
    }
    SectionInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-info',
            template: "\n        <section class=\"page-section\" id=\"portfolio\">\n            <div class=\"container\">\n                <div class=\"text-center\">\n                    <h2 class=\"section-heading text-uppercase\">Informate</h2>\n                    <h3 class=\"section-subheading text-muted\">Enterate de las publicaciones de nuestra instituci\u00F3n</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mb-4\">\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal1\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                                <img class=\"img-fluid\" src=\"assets/img/portfolio/01-thumbnail.jpg\" alt=\"\" />\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Info ZAYMA</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Informe mensual</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6 mb-4\">\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal2\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                                <img class=\"img-fluid\" src=\"assets/img/portfolio/02-thumbnail.jpg\" alt=\"\" />\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Humana</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Notificaciones HUM</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6 mb-4\">\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal3\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                                <img class=\"img-fluid\" src=\"assets/img/portfolio/03-thumbnail.jpg\" alt=\"\" />\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Encuestas</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Diligenciamiento de encuestas</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6 mb-4 mb-lg-0\">\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal4\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                                <img class=\"img-fluid\" src=\"assets/img/portfolio/04-thumbnail.jpg\" alt=\"\" />\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">SIORI</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Actualizaciones</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6 mb-4 mb-sm-0\">\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal5\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                                <img class=\"img-fluid\" src=\"assets/img/portfolio/05-thumbnail.jpg\" alt=\"\" />\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Twitter</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Publicaciones de inter\u00E9s</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6\">\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal6\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                                <img class=\"img-fluid\" src=\"assets/img/portfolio/06-thumbnail.jpg\" alt=\"\" />\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Blog</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Publicaciones de usuarios</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>"
        })
    ], SectionInfoComponent);
    return SectionInfoComponent;
}());



/***/ }),

/***/ "./src/app/section-team/section-team.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-team/section-team.component.ts ***!
  \********************************************************/
/*! exports provided: SectionTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTeamComponent", function() { return SectionTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionTeamComponent = /** @class */ (function () {
    function SectionTeamComponent() {
    }
    SectionTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-team',
            template: "\n        <section class=\"page-section bg-light\" id=\"team\">\n            <div class=\"container\">\n                <div class=\"text-center\">\n                    <h2 class=\"section-heading text-uppercase\">Equipo de trabajo</h2>\n                    <h3 class=\"section-subheading text-muted\">Ingenieros a cargo del dise\u00F1o y desarrollo</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"team-member\">\n                            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/1.jpg\" alt=\"\" />\n                            <h4>Carlos Lopera</h4>\n                            <p class=\"text-muted\">Backend Dev.</p>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"team-member\">\n                            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/2.jpg\" alt=\"\" />\n                            <h4>Jose Vergara</h4>\n                            <p class=\"text-muted\">Lider de proyecto</p>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"team-member\">\n                            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/3.jpg\" alt=\"\" />\n                            <h4>Mauricio Manjarres</h4>\n                            <p class=\"text-muted\">Frontend Dev.</p>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                            <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-8 mx-auto text-center\">\n                        <p class=\"large text-muted\">Equipo de ingenieros de Cl\u00EDnica Zayma conformado por Gesti\u00F3n de informaci\u00F3n\n                            y\n                            Coordinador de proyectos</p>\n                    </div>\n                </div>\n            </div>\n        </section>"
        })
    ], SectionTeamComponent);
    return SectionTeamComponent;
}());



/***/ }),

/***/ "./src/app/section-tools/section-tools.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/section-tools/section-tools.component.ts ***!
  \**********************************************************/
/*! exports provided: SectionToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionToolsComponent", function() { return SectionToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionToolsComponent = /** @class */ (function () {
    function SectionToolsComponent() {
        this.baseurl = 'http://10.2.202.234:82';
        this.config = '/configuraciones/##/setup/home';
        this.comercio = '/comercio/#/commerce/home';
        this.gerencial = '/gerencia/#/gerencia/home';
        this.reportes = '/reportes/#/report/home';
    }
    SectionToolsComponent.prototype.goToPage = function (page) {
        if (this.validateToken()) {
            window.open(this.baseurl + page, '_blank');
        }
        else {
        }
    };
    SectionToolsComponent.prototype.validateToken = function () {
        var memoria = localStorage.getItem('auth_app_token');
        if (memoria) {
        }
        return true;
    };
    SectionToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-tools',
            template: "\n    <section class=\"page-section bg-light\" id=\"tools\">\n        <div class=\"container\">\n            <div class=\"text-center\">\n                <h2 class=\"section-heading text-uppercase\">SIORI 2.0</h2>\n                <h3 class=\"section-subheading text-muted\">Herramientas de administraci\u00F3n y gesti\u00F3n</h3>\n            </div>\n            <div class=\"row text-center\">\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\" (click)=\"goToPage(comercio)\" style=\"cursor: pointer;\">\n                        <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fab fa-shopify fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"my-3\">Comercial</h4>\n                    <p class=\"text-muted\">Gestione la admisi\u00F3n de pacientes, liquidaci\u00F3n y facturaci\u00F3n de servicios. Adem\u00E1s\n                        configure los portafolios y administre los contratos...</p>\n                </div>\n                <div class=\"col-md-4\" (click)=\"goToPage(gerencial)\" style=\"cursor: pointer;\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fas fa-circle fa-stack-2x text-muted opacar\"></i>\n                        <i class=\"fas fa-laptop fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"my-3\">Gerencial</h4>\n                    <p class=\"text-muted\">Realice seguimiento a los procesos principales y de inter\u00E9s financiero...</p>\n                </div>\n                <div class=\"col-md-4\" (click)=\"goToPage(config)\" style=\"cursor: pointer;\">\n                    <!-- <div class=\"col-md-4\"  (click)=\"goToPage(reportes)\" style=\"cursor: pointer;\"> -->\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fas fa-sliders-h fa-stack-1x fa-inverse\"></i>\n                        <!-- <i class=\"fas fa-file-invoice fa-stack-1x fa-inverse\"></i> -->\n                    </span>\n                    <!-- <h4 class=\"my-3\">Informes</h4> -->\n                    <!-- <p class=\"text-muted\">Obtenga reportes en cualquier momento de \n                        los datos de inter\u00E9s, estad\u00EDsticas e indicadores...</p> -->\n                    <h4 class=\"my-3\">Configuraciones</h4>\n                    <p class=\"text-muted\">Administre y gestione los datos maestros del entorno SIORI...</p>\n                </div>\n            </div>\n        </div>\n    </section>\n<!-- Clients-->\n    <div class=\"py-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.208:8080/webhc/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/envato.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.210:8080/comercial/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/designmodo.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.210:8080/NeoGenesis/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/themeforest.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.234:81/#\"  target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/creative-market.jpg\" alt=\"\" /></a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://190.14.252.180:8008/siesa/jsp/ag.jsp?s=Real\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/siesanom.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"http://10.2.202.210:8080/ISoftware/\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/sgc.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"https://nd.ruaf.gov.co/websitende/login.aspx\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/ruaf.jpg\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-md-3 col-sm-6 my-3\">\n                    <a href=\"https://bibliotecavirtual.unisinu.edu.co/login\" target=\"_blank\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/biblioteca.jpg\" alt=\"\" /></a>\n                </div>\n            </div>\n        </div>\n    </div>"
        })
    ], SectionToolsComponent);
    return SectionToolsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyectos\Zayma Software\Siori-v2\siori-landing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map