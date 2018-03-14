webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_not_auth_guard__ = __webpack_require__("./src/app/guards/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__ = __webpack_require__("./src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_not_auth_guard__["a" /* NotAuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_not_auth_guard__["a" /* NotAuthGuard */]]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("./src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_not_auth_guard__ = __webpack_require__("./src/app/guards/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__ = __webpack_require__("./src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_admin_component__["a" /* AdminComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_8__services_quote_service__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__guards_not_auth_guard__["a" /* NotAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n    margin: 10px;\r\n    font-size: 50px;\r\n}\r\n.addButton {\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header title\">Adminisatrion</h1>\n<br>\n\n<div [ngClass]=\"messageClass\" role=\"alert\">\n  {{ message }}\n</div>\n<div class=\"addButton\">\n  <button type=\"button\" name=\"button\" class=\"btn btn-success\" *ngIf=\"!addAdmin && !edit\" (click)=\"newAdminForm()\">\n    Add new admin</button>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"onAddSubmit()\" *ngIf=\"addAdmin && !edit\">\n\n  <div class=\"form-Group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"off\" formControlName=\"username\"\n    />\n    <ul class=\"help-block\">\n      <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n    </ul>\n  </div>\n\n  <div class=\"form-Group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"off\" formControlName=\"password\"\n    />\n    <ul class=\"help-block\">\n      <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n    </ul>\n  </div>\n  <div class=\"addButton\">\n    <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Add</button>\n    <button type=\"button\" name=\"button\" (click)=\"cancel()\" class=\"btn btn-warning\">Cancel</button>\n  </div>\n</form>\n\n<table class=\"table table-hover\" *ngIf=\"!edit\">\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th class=\"active\">Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let admin of admins\">\n      <th>{{admin.username}}</th>\n      <td>\n        <button type=\"button\" name=\"button\" (click)=\"modifyAdmin(admin)\" class=\"btn btn-sm btn-info\">Modify</button>\n\n        <button type=\"button\" name=\"button\" (click)=\"deleteAdmin(admin)\" class=\"btn btn-sm btn-danger\">Delete</button>\n\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<form (submit)=\"updateAdminSubmit()\" *ngIf=\"edit && !addAdmin\">\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" [(ngModel)]=\"adminToModify.username\" />\n  </div>\n\n  <button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"cancel()\">Cancel</button>\n  <button type=\"submit\" name=\"save\" class=\"btn btn-info\">Save</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(formBuilder, quoteService) {
        this.formBuilder = formBuilder;
        this.quoteService = quoteService;
        this.processing = false;
        this.edit = false;
        this.addAdmin = false;
    }
    AdminComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
        });
    };
    AdminComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    AdminComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    AdminComponent.prototype.newAdminForm = function () {
        this.addAdmin = true;
        this.createForm();
    };
    AdminComponent.prototype.cancel = function () {
        this.addAdmin = false;
        this.edit = false;
    };
    AdminComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var admin = {
            username: this.form.get('username').value,
            password: this.form.get('password').value,
        };
        this.quoteService.newAdmin(admin).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.form.reset();
                    _this.enableForm();
                    _this.getAllAdmins();
                    _this.processing = false;
                    _this.message = null;
                    _this.messageClass = null;
                    _this.addAdmin = false;
                }, 1500);
            }
        });
    };
    AdminComponent.prototype.modifyAdmin = function (admin) {
        this.addAdmin = false;
        this.edit = true;
        this.adminToModify = admin;
    };
    AdminComponent.prototype.updateAdminSubmit = function () {
        var _this = this;
        this.quoteService.editAdmin(this.adminToModify).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.getAllAdmins();
                    _this.message = null;
                    _this.messageClass = null;
                    _this.edit = false;
                }, 1500);
            }
        });
    };
    AdminComponent.prototype.deleteAdmin = function (admin) {
        var _this = this;
        this.quoteService.deleteAdmin(admin).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.getAllAdmins();
                    _this.message = null;
                    _this.messageClass = null;
                }, 1500);
            }
        });
    };
    AdminComponent.prototype.getAllAdmins = function () {
        var _this = this;
        this.quoteService.getAllAdmins().subscribe(function (data) {
            if (!data.success) {
            }
            else {
                _this.admins = data.admins;
                _this.selectedValue = null;
            }
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.getAllAdmins();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_quote_service__["a" /* QuoteService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n    margin: 10px;\r\n    font-size: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header title\">Push a Quote</h1>\r\n<br>\r\n\r\n<div [ngClass]=\"messageClass\" role=\"alert\">\r\n    {{ message }}\r\n</div>\r\n\r\n<form [formGroup]=\"form\" (submit)=\"onPushSubmit()\">\r\n\r\n    <div class=\"form-Group\">\r\n        <label for=\"user\">User</label>\r\n        <select class=\"form-control\" formControlName=\"user\" name=\"user\" [(ngModel)]=\"selectedValue\" >\r\n            <option *ngFor=\"let use of users\" [ngValue]=\"use.username\">{{use.username}}</option>\r\n        </select>\r\n        <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.user.errors?.required && form.controls.user.dirty\">This field is required.</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"form-Group\">\r\n        <label for=\"title\">Title</label>\r\n        <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Title\" autocomplete=\"off\" formControlName=\"title\" />\r\n        <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.title.errors?.required && form.controls.title.dirty\">This field is required.</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"form-Group\">\r\n        <label for=\"desc\">Description</label>\r\n        <input type=\"text\" name=\"desc\" class=\"form-control\" placeholder=\"Description\" autocomplete=\"off\" formControlName=\"desc\" />\r\n        <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.desc.errors?.required && form.controls.desc.dirty\">This field is required.</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Send</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(formBuilder, quoteService) {
        this.formBuilder = formBuilder;
        this.quoteService = quoteService;
        this.messages = [];
        this.sent = false;
        this.processing = false;
        this.createForm();
    }
    HomeComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            user: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            desc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    HomeComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.quoteService.getAllUsers().subscribe(function (data) {
            if (!data.success) {
                console.log(data.message);
            }
            else {
                console.log(data.users);
                _this.users = data.users;
                _this.selectedValue = null;
            }
        });
    };
    HomeComponent.prototype.disableForm = function () {
        this.form.controls['user'].disable();
        this.form.controls['title'].disable();
        this.form.controls['desc'].disable();
    };
    HomeComponent.prototype.enableForm = function () {
        this.form.controls['user'].enable();
        this.form.controls['title'].enable();
        this.form.controls['desc'].enable();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        /* const notification = new Notification('Notification');
         console.log(notification);
         this.connection = this.socketService.getMessages().subscribe(message => {
           this.messages.push(message);
           console.log(this.messages);
         });*/
    };
    HomeComponent.prototype.onPushSubmit = function () {
        var _this = this;
        /*
        this.sent = true;
        const message = this.form.get('title').value;
        this.socketService.send(message);
        this.form.reset();
        */
        this.processing = true;
        this.disableForm();
        var quote = {
            user: this.form.get('user').value,
            title: this.form.get('title').value,
            desc: this.form.get('desc').value,
        };
        this.quoteService.newQuote(quote).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.form.reset();
                    _this.enableForm();
                    _this.processing = false;
                    _this.message = null;
                    _this.messageClass = null;
                }, 1500);
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n    margin: 10px;\r\n    font-size: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header title\">Login</h2>\n<br>\n\n<!-- Custom Success/Error Message -->\n\n  <div [ngClass]=\"messageClass\" role=\"alert\">\n    {{ message }} \n  </div>\n\n\n\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\n  <!-- Username Field -->\n  <div class=\"form-group\">\n    <label for=\"username\">Pseudo</label>\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Field  -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Submit Button -->\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, quoteService, router) {
        this.formBuilder = formBuilder;
        this.quoteService = quoteService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.quoteService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.quoteService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 2000);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_quote_service__["a" /* QuoteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand mb-0 h1 \" href=\"#\">iWealth</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\" *ngIf=\"quoteService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\" *ngIf=\"quoteService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/users\">Users <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item active\" *ngIf=\"quoteService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/admin\">Admin <span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!quoteService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n    </ul>\n    <ul class=\"my-2 my-lg-0\">\n      <li class=\"btn btn-outline-primary my-2 my-sm-0\" *ngIf=\"quoteService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Déconnexion</a></li>\n    </ul>\n  </div>\n</nav>\n<!--\n<div id=\"navbar\" class=\"navbar-collapse collapse\">\n  <ul class=\"nav navbar-nav nav navbar-left\">\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Accueil</a></li>  \n  </ul>\n\n  <ul class=\"nav navbar-nav nav navbar-right\">\n    <li *ngIf=\"_authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\">Profile</a></li>\n    <li *ngIf=\"_authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/blog\">Publications</a></li>\n    <li *ngIf=\"_authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/pdf\">Fichiers Pdf</a></li>\n    <li *ngIf=\"!_authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/login\">Connexion</a></li>\n    <li *ngIf=\"_authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Inscription</a></li>\n    <li *ngIf=\"_authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Déconnexion</a></li>\n  </ul>\n</div>/.nav-collapse -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FlashMessagesService } from 'angular2-flash-messages';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(quoteService, router) {
        this.quoteService = quoteService;
        this.router = router;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.quoteService.logout();
        //this._flashMessagesService.show('Vous êtes déconnecté', {cssClass: 'alert-info' });
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quote_service__["a" /* QuoteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n    text-align: center;\r\n    font-variant: small-caps;\r\n    margin: 10px;\r\n    font-size: 50px;\r\n}\r\n.addButton {\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header title\">Users</h1>\n<br>\n\n<div [ngClass]=\"messageClass\" role=\"alert\">\n  {{ message }}\n</div>\n<div class=\"addButton\">\n  <button type=\"button\" name=\"button\" class=\"btn btn-success\" *ngIf=\"!addUser && !edit\" (click)=\"newUserForm()\">\n    Add new user</button>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"onAddSubmit()\" *ngIf=\"addUser && !edit\">\n\n  <div class=\"form-Group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"off\" formControlName=\"username\"\n    />\n    <ul class=\"help-block\">\n      <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n    </ul>\n  </div>\n\n  <div class=\"form-Group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"off\" formControlName=\"email\" />\n    <ul class=\"help-block\">\n      <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required.</li>\n    </ul>\n  </div>\n\n  <div class=\"form-Group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"off\" formControlName=\"password\"\n    />\n    <ul class=\"help-block\">\n      <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n    </ul>\n  </div>\n  <div class=\"addButton\">\n    <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Add</button>\n    <button type=\"button\" name=\"button\" (click)=\"cancel()\" class=\"btn btn-warning\">Cancel</button>\n  </div>\n</form>\n\n<table class=\"table table-hover\" *ngIf=\"!edit\">\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th class=\"active\">Username</th>\n      <th class=\"active\">Email</th>\n      <th class=\"active\">Number of quotes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <th>{{user.username}}</th>\n      <th>{{user.email}}</th>\n      <th>{{user.quotes.length}}</th>\n      <td>\n        <button type=\"button\" name=\"button\" (click)=\"modifyUser(user)\" class=\"btn btn-sm btn-info\">Modify</button>\n\n        <button type=\"button\" name=\"button\" (click)=\"deleteUser(user)\" class=\"btn btn-sm btn-danger\">Delete</button>\n\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<form (submit)=\"updateUserSubmit()\" *ngIf=\"edit && !addUser\">\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" [(ngModel)]=\"userToModify.username\" />\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"userToModify.email\" />\n  </div>\n  <button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"cancel()\">Cancel</button>\n  <button type=\"submit\" name=\"save\" class=\"btn btn-info\">Save</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(formBuilder, quoteService) {
        this.formBuilder = formBuilder;
        this.quoteService = quoteService;
        this.processing = false;
        this.edit = false;
        this.addUser = false;
    }
    UsersComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    UsersComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['email'].disable();
        this.form.controls['password'].disable();
    };
    UsersComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['email'].enable();
        this.form.controls['password'].enable();
    };
    UsersComponent.prototype.newUserForm = function () {
        this.addUser = true;
        this.createForm();
    };
    UsersComponent.prototype.cancel = function () {
        this.addUser = false;
        this.edit = false;
    };
    UsersComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            email: this.form.get('email').value,
            password: this.form.get('password').value,
        };
        this.quoteService.newUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.form.reset();
                    _this.enableForm();
                    _this.getAllUsers();
                    _this.processing = false;
                    _this.message = null;
                    _this.messageClass = null;
                    _this.addUser = false;
                }, 1500);
            }
        });
    };
    UsersComponent.prototype.modifyUser = function (user) {
        this.addUser = false;
        this.edit = true;
        this.userToModify = user;
    };
    UsersComponent.prototype.updateUserSubmit = function () {
        var _this = this;
        this.quoteService.editUser(this.userToModify).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.getAllUsers();
                    _this.message = null;
                    _this.messageClass = null;
                    _this.edit = false;
                }, 1500);
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.quoteService.deleteUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.getAllUsers();
                    _this.message = null;
                    _this.messageClass = null;
                }, 1500);
            }
        });
    };
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.quoteService.getAllUsers().subscribe(function (data) {
            if (!data.success) {
                console.log(data.message);
            }
            else {
                console.log(data.users);
                _this.users = data.users;
                _this.selectedValue = null;
            }
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/components/users/users.component.html"),
            styles: [__webpack_require__("./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(quoteService, router) {
        this.quoteService = quoteService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (this.quoteService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/not-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quote_service__ = __webpack_require__("./src/app/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    /*canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
      }*/
    function NotAuthGuard(quoteService, router) {
        this.quoteService = quoteService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this.quoteService.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_quote_service__["a" /* QuoteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuoteService = /** @class */ (function () {
    function QuoteService(http) {
        this.http = http;
        this.domain = '';
    }
    QuoteService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token'); // Avoir le jeton et l'attribuer pour qu'il soit valable partout
    };
    QuoteService.prototype.createAuthentificationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    QuoteService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    QuoteService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    QuoteService.prototype.login = function (user) {
        return this.http.post(this.domain + 'user/loginAdmin', user).map(function (res) { return res.json(); });
    };
    QuoteService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    QuoteService.prototype.newQuote = function (quote) {
        this.createAuthentificationHeaders();
        return this.http.put(this.domain + 'user/newQuote', quote, this.options).map(function (res) { return res.json(); });
    };
    QuoteService.prototype.newUser = function (user) {
        return this.http.post(this.domain + 'user/register', user).map(function (res) { return res.json(); });
    };
    QuoteService.prototype.editUser = function (user) {
        this.createAuthentificationHeaders();
        return this.http.put(this.domain + 'user/updateUser', user, this.options).map(function (res) { return res.json(); });
    };
    QuoteService.prototype.deleteUser = function (user) {
        this.createAuthentificationHeaders();
        return this.http.delete(this.domain + 'user/deleteUser/' + user._id, this.options).map(function (res) { return res.json(); });
        ;
    };
    QuoteService.prototype.getAllUsers = function () {
        return this.http.get(this.domain + 'user/allUsers').map(function (res) { return res.json(); });
    };
    QuoteService.prototype.newAdmin = function (admin) {
        this.createAuthentificationHeaders();
        return this.http.post(this.domain + 'user/registerAdmin', admin, this.options).map(function (res) { return res.json(); });
    };
    QuoteService.prototype.editAdmin = function (admin) {
        this.createAuthentificationHeaders();
        return this.http.put(this.domain + 'user/updateAdmin', admin, this.options).map(function (res) { return res.json(); });
    };
    QuoteService.prototype.deleteAdmin = function (admin) {
        this.createAuthentificationHeaders();
        return this.http.delete(this.domain + 'user/deleteAdmin/' + admin._id, this.options).map(function (res) { return res.json(); });
        ;
    };
    QuoteService.prototype.getAllAdmins = function () {
        return this.http.get(this.domain + 'user/allAdmins').map(function (res) { return res.json(); });
    };
    QuoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'http://localhost:8080';
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
    }
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map