"use strict";
(self["webpackChunksearchdev"] = self["webpackChunksearchdev"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/search/search.component */ 1164);
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ 7104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent
}, {
  path: 'detail',
  component: _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_1__.UserDetailComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'searchdev';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/interceptors/token.interceptor */ 8776);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ 1164);
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ 7104);
/* harmony import */ var _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/input-search/input-search.component */ 5395);





















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: _services_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_2__.TokenInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID,
    useValue: 'pt-BR'
  }, {
    provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      duration: 3000,
      panelClass: ['danger-snackbar']
    }
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__.UserDetailComponent, _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_5__.InputSearchComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule]
  });
})();

/***/ }),

/***/ 5395:
/*!*******************************************************************!*\
  !*** ./src/app/components/input-search/input-search.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputSearchComponent": () => (/* binding */ InputSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);







function InputSearchComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputSearchComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onGetWords());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputSearchComponent_mat_spinner_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
  }
}
class InputSearchComponent {
  constructor() {
    this.words = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isLoading = false;
    this.hasButton = true;
  }
  ngOnChanges() {
    this.isLoading;
  }
  valueInputData() {
    if (this.searchValueInput != null && this.searchValueInput.length > 2 && !this.hasButton) this.words.emit(this.searchValueInput);
  }
  onGetWords() {
    if (this.searchValueInput != null) this.words.emit(this.searchValueInput);
  }
}
InputSearchComponent.ɵfac = function InputSearchComponent_Factory(t) {
  return new (t || InputSearchComponent)();
};
InputSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InputSearchComponent,
  selectors: [["app-input-search"]],
  inputs: {
    isLoading: "isLoading",
    hasButton: "hasButton"
  },
  outputs: {
    words: "words"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 3,
  consts: [[1, "container"], [1, "input-group"], [1, "search-icon"], ["type", "text", "placeholder", "Search", 3, "ngModel", "ngModelChange", "input"], ["mat-raised-button", "", "color", "primary", "class", "custom-button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "custom-button", 3, "click"]],
  template: function InputSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputSearchComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchValueInput = $event;
      })("input", function InputSearchComponent_Template_input_input_5_listener() {
        return ctx.valueInputData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputSearchComponent_button_6_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputSearchComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValueInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.hasButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading && ctx.hasButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(---border-color);\n  height: 1.5rem;\n  width: 35rem;\n  padding-left: 10px;\n  border-radius: 6px;\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(---icon-search-color);\n}\n.container[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 11rem;\n  border-radius: 6px;\n  margin-left: 10px;\n  padding: 10px 24px 10px 24px;\n}\n@media screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1zZWFyY2gvaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FBRkY7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUFGSjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFETjtBQUlJO0VBQ0UsZ0NBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFKSjtBQVFFO0VBQ0U7SUFDQSxnQkFBQTtFQU5GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIFxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5pbnB1dC1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS0tYm9yZGVyLWNvbG9yKTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDM1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaW5wdXR7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWljb257XHJcbiAgICAgIGNvbG9yOiB2YXIoLS0taWNvbi1zZWFyY2gtY29sb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIC5jdXN0b20tYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgd2lkdGg6IDExcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHggMTBweCAyNHB4O1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmN1c3RvbS1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1164:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/github.service */ 7357);
/* harmony import */ var _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/input-search/input-search.component */ 5395);






class SearchComponent {
  constructor(router, snackBar, githubService) {
    this.router = router;
    this.snackBar = snackBar;
    this.githubService = githubService;
    this.isLoading = false;
  }
  onGetWords(value) {
    this.isLoading = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      user: this.githubService.getUsers(value),
      repos: this.githubService.getRepos(value)
    }).subscribe({
      next: value => {
        this.githubService.user = value.user;
        this.githubService.repos = value.repos;
        this.isLoading = false;
        this.router.navigate(['/detail']);
      },
      error: err => {
        this.openSnackbar(`Ops! usuário ${value} não encontrado`);
        this.isLoading = false;
      }
    });
  }
  openSnackbar(value) {
    this.snackBar.open(value);
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GitHubService));
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 8,
  vars: 1,
  consts: [[1, "container"], [1, "item"], [1, "title"], [3, "isLoading", "words"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " d_evs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-input-search", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("words", function SearchComponent_Template_app_input_search_words_7_listener($event) {
        return ctx.onGetWords($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", ctx.isLoading);
    }
  },
  dependencies: [_components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_1__.InputSearchComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 32.5rem;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 4rem;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: #8C19D2;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  color: #0069CA;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 170px;\n  height: 50px;\n  font-size: 1.2em;\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFBUTtFQUNJLGNBQUE7QUFFWjtBQUFRO0VBQ0ksY0FBQTtBQUVaOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4uaXRlbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgd2lkdGg6IDMyLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbjpudGgtb2YtdHlwZSgxKXtcclxuICAgICAgICAgICAgY29sb3I6ICM4QzE5RDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMil7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA2OUNBO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5jdXN0b20tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAvKiBvdXRyYXMgcHJvcHJpZWRhZGVzIENTUyAqL1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7104:
/*!************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailComponent": () => (/* binding */ UserDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/github.service */ 7357);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/input-search/input-search.component */ 5395);






function UserDetailComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function UserDetailComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "p")(2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repo_r2 = ctx.$implicit;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", repo_r2.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](repo_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_2_0 = repo_r2.description) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "");
  }
}
const _c0 = function () {
  return {
    "background-color": "var(---secondary-color)"
  };
};
class UserDetailComponent {
  constructor(githubService, router) {
    this.githubService = githubService;
    this.router = router;
  }
  ngOnInit() {
    if (this.githubService.repos == undefined || this.githubService.user == undefined) this.router.navigate(['/']);
    console.log(this.githubService.user);
  }
  onGetWords(value) {
    console.log(value);
  }
  get user() {
    return this.githubService.user;
  }
  get repos() {
    let data = this.githubService.repos != undefined ? this.githubService.repos : [];
    let r = [];
    r = data;
    return r;
  }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
  return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GitHubService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
UserDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserDetailComponent,
  selectors: [["app-user-detail"]],
  decls: 26,
  vars: 7,
  consts: [[1, "container"], ["routerLink", "/", 1, "logo"], [3, "hasButton", "words"], [1, "sidebar"], [3, "ngStyle"], [1, "profile"], [3, "src", 4, "ngIf"], [1, "name"], [1, "desc"], [1, "links"], ["class", "content", 4, "ngFor", "ngForOf"], [3, "src"], [1, "content"], ["target", "_blank", 3, "href"]],
  template: function UserDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "section", 1)(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " d_evs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section")(8, "app-input-search", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("words", function UserDetailComponent_Template_app_input_search_words_8_listener($event) {
        return ctx.onGetWords($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nav", 3)(11, "mat-card", 4)(12, "mat-card-content")(13, "section", 5)(14, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, UserDetailComponent_img_15_Template, 1, 1, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "section", 8)(22, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "main")(24, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, UserDetailComponent_div_25_Template, 6, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasButton", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user.avatar_url);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.user.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx.user.bio) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.repos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_1__.InputSearchComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-areas: \"header header header\" \"sidebar main main\";\n  grid-template-columns: minmax(0, 1fr) 1fr minmax(0, 1fr); \n  grid-template-rows: 4.3rem 1fr 0px;\n}\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nheader[_ngcontent-%COMP%] {\n  grid-area: header;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: #8C19D2;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  color: #0069CA;\n}\n\nmain[_ngcontent-%COMP%] {\n  grid-area: main;\n}\nmain[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: 20px;\n  border-color: var(---border-dark-color);\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n}\n\n@media (max-width: 768px) { \n  .container[_ngcontent-%COMP%] {\n    grid-template-areas: \"header header header\" \"sidebar sidebar sidebar\" \"main main main\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px auto auto 100px;\n  }\n  main[_ngcontent-%COMP%] {\n    grid-row: 3/-1;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    grid-row: 2/3;\n  }\n}\n@media (max-width: 480px) { \n  .container[_ngcontent-%COMP%] {\n    grid-template-areas: \"header\" \"sidebar\" \"main\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px auto auto auto 100px;\n  }\n  header[_ngcontent-%COMP%] {\n    grid-area: header;\n  }\n  main[_ngcontent-%COMP%] {\n    grid-area: main;\n    grid-row: 3/-1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    grid-area: sidebar;\n    grid-row: 2/3;\n  }\n}\nmat-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  display: grid;\n  grid-template-areas: \"p p p\" \"desc desc desc\" \"links links links\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px auto auto auto 100px;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 90%;\n  overflow: hidden;\n  grid-area: p;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 3fr 8fr;\n  align-items: center;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmat-card-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 90%;\n  grid-area: desc;\n  grid-row: 2/3;\n}\nmat-card-content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 90%;\n  grid-area: links;\n  grid-row: 3/-1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrREFDSTtFQUVKLHdEQUFBLEVBQUEsd0JBQUE7RUFDQSxrQ0FBQTtBQURKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtBQUROOztBQUlJO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVRO0VBQ0ksZUFBQTtBQUFaO0FBRVE7RUFDSSxjQUFBO0FBQVo7QUFFUTtFQUNJLGNBQUE7QUFBWjs7QUFLSTtFQUNJLGVBQUE7QUFGUjtBQUdRO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUFEVjs7QUFLSTtFQUVJLGtCQUFBO0FBSFI7O0FBU0UsNEJBQUEsd0NBQUE7RUFDRTtJQUNFLHNGQUNFO0lBR0YsMEJBQUE7SUFDQSx5Q0FBQTtFQVRKO0VBWUU7SUFDSSxjQUFBO0VBVk47RUFjRTtJQUNJLGFBQUE7RUFaTjtBQUNGO0FBZ0JFLDRCQUFBLHdDQUFBO0VBQ0U7SUFDRSw4Q0FDRTtJQUdGLDBCQUFBO0lBQ0EsOENBQUE7RUFqQko7RUFvQkU7SUFDRSxpQkFBQTtFQWxCSjtFQXFCRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFuQko7RUFvQkk7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBbEJOO0VBd0JFO0lBRUUsa0JBQUE7SUFDQSxhQUFBO0VBdkJKO0FBQ0Y7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpRUFDSTtFQUdKLDBCQUFBO0VBQ0EsOENBQUE7QUEvQko7QUFpQ0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQS9CTjtBQWdDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBOUJSO0FBZ0NNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTlCUjtBQWtDSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFoQ047QUFrQ0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWhDTiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiXHJcbiAgICAgICAgXCJzaWRlYmFyIG1haW4gbWFpblwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAxZnIgbWlubWF4KDAsIDFmcik7IC8qIGNvbHVuYXMgcmVzcG9uc2l2YXMgKi9cclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNC4zcmVtIDFmciAwcHg7XHJcbiAgICBhe1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOmJsYWNrXHJcblxyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgICBoZWFkZXIge1xyXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOEMxOUQyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuOm50aC1vZi10eXBlKDIpe1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNjlDQTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1haW4ge1xyXG4gICAgICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tLWJvcmRlci1kYXJrLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICBcclxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7IC8qIGFqdXN0ZSBwYXJhIHRlbGFzIG1lbm9yZXMgcXVlIDc2OHB4ICovXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCJcclxuICAgICAgICBcInNpZGViYXIgc2lkZWJhciBzaWRlYmFyXCJcclxuICAgICAgICBcIm1haW4gbWFpbiBtYWluXCI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gYXV0byAxMDBweDtcclxuICAgIH1cclxuICBcclxuICAgIG1haW4ge1xyXG4gICAgICAgIGdyaWQtcm93OiAzIC8gLTE7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkgeyAvKiBhanVzdGUgcGFyYSB0ZWxhcyBtZW5vcmVzIHF1ZSA0ODBweCAqL1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJoZWFkZXJcIlxyXG4gICAgICAgIFwic2lkZWJhclwiXHJcbiAgICAgICAgXCJtYWluXCI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG8gYXV0byBhdXRvIDEwMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtYWluIHtcclxuICAgICAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gICAgICBncmlkLXJvdzogMyAvIC0xO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgc2VjdGlvbntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICBcclxuICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xyXG4gICAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLy9Qcm9maWxlIGNhcmRcclxuICBtYXQtY2FyZC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcInAgcCBwXCJcclxuICAgICAgICBcImRlc2MgZGVzYyBkZXNjXCJcclxuICAgICAgICBcImxpbmtzIGxpbmtzIGxpbmtzXCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0byBhdXRvIGF1dG8gMTAwcHg7XHJcblxyXG4gICAgLnByb2ZpbGV7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBncmlkLWFyZWE6IHA7XHJcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgOGZyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlc2N7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBncmlkLWFyZWE6IGRlc2M7XHJcbiAgICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgIH1cclxuICAgIC5saW5rc3tcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgIGdyaWQtYXJlYTogbGlua3M7XHJcbiAgICAgIGdyaWQtcm93OiAzIC8gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9580:
/*!*******************************************************!*\
  !*** ./src/app/services/core/service-base.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceBase": () => (/* binding */ ServiceBase)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_utils_header_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/header.util */ 244);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class ServiceBase {
  constructor(endpoint, injector) {
    this.endpoint = endpoint;
    this.injector = injector;
    this.http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.apiUrl = `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}${endpoint}`;
  }
  getAll(endpoint) {
    return this.http.get(endpoint, {
      headers: src_app_utils_header_util__WEBPACK_IMPORTED_MODULE_0__.HeaderUtil.get()
    });
  }
  getById(endpoint = this.apiUrl) {
    return this.http.get(endpoint, {
      headers: src_app_utils_header_util__WEBPACK_IMPORTED_MODULE_0__.HeaderUtil.get()
    });
  }
  post(endpoint, resource) {
    return this.http.post(endpoint, resource, {
      headers: src_app_utils_header_util__WEBPACK_IMPORTED_MODULE_0__.HeaderUtil.get()
    });
  }
  put(endpoint, resource) {
    return this.http.put(endpoint, resource, {
      headers: src_app_utils_header_util__WEBPACK_IMPORTED_MODULE_0__.HeaderUtil.get()
    });
  }
  delete(endpoint) {
    return this.http.delete(endpoint, {
      headers: src_app_utils_header_util__WEBPACK_IMPORTED_MODULE_0__.HeaderUtil.get()
    });
  }
}
ServiceBase.ɵfac = function ServiceBase_Factory(t) {
  return new (t || ServiceBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
ServiceBase.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ServiceBase,
  factory: ServiceBase.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7357:
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitHubService": () => (/* binding */ GitHubService)
/* harmony export */ });
/* harmony import */ var _core_service_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/service-base.service */ 9580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class GitHubService extends _core_service_base_service__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
  constructor(injector) {
    super('', injector);
    this.injector = injector;
    this.repos = [];
  }
  getUsers(username) {
    return super.getAll(`${this.apiUrl}/users/${username}`);
  }
  getRepos(username) {
    return super.getAll(`${this.apiUrl}/users/${username}/repos`);
  }
}
GitHubService.ɵfac = function GitHubService_Factory(t) {
  return new (t || GitHubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
GitHubService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GitHubService,
  factory: GitHubService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8776:
/*!************************************************************!*\
  !*** ./src/app/services/interceptors/token.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var src_app_shared_storage_auth_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/storage/auth.storage */ 4071);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



/** Pass untouched request through to the next request handler. */
class TokenInterceptor {
  intercept(request, next) {
    const token = src_app_shared_storage_auth_storage__WEBPACK_IMPORTED_MODULE_0__.AuthStorage.getToken();
    const app = src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__.environment.app;
    const requestURL = request.url.split("/");
    const apiUrl = src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl.split("/");
    if (token && requestURL[2] === apiUrl[2]) {
      const newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          app: app
        }
      });
      return next.handle(newRequest);
    } else {
      const newRequest = request.clone({
        setHeaders: {}
      });
      return next.handle(newRequest);
    }
  }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
  return new (t || TokenInterceptor)();
};
TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TokenInterceptor,
  factory: TokenInterceptor.ɵfac
});

/***/ }),

/***/ 4071:
/*!************************************************!*\
  !*** ./src/app/shared/storage/auth.storage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthStorage": () => (/* binding */ AuthStorage)
/* harmony export */ });
/* harmony import */ var src_app_utils_cryptography_cryptography_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/cryptography/cryptography.util */ 6713);

class AuthStorage {
  static setUser(user) {
    localStorage.setItem(this.userStorageKey, src_app_utils_cryptography_cryptography_util__WEBPACK_IMPORTED_MODULE_0__.CryptographyUtil.encrypt(user));
  }
  static getUser() {
    const data = localStorage.getItem(this.userStorageKey);
    const decrypted = src_app_utils_cryptography_cryptography_util__WEBPACK_IMPORTED_MODULE_0__.CryptographyUtil.decrypt(data);
    return decrypted ? decrypted : null;
  }
  static removeUser() {
    localStorage.removeItem(this.userStorageKey);
  }
  static setToken(token) {
    localStorage.setItem(this.tokenStorageKey, src_app_utils_cryptography_cryptography_util__WEBPACK_IMPORTED_MODULE_0__.CryptographyUtil.encrypt(token));
  }
  static getToken() {
    const data = localStorage.getItem(this.tokenStorageKey);
    const decrypted = src_app_utils_cryptography_cryptography_util__WEBPACK_IMPORTED_MODULE_0__.CryptographyUtil.decrypt(data);
    return decrypted ? decrypted : null;
  }
  static removeToken() {
    localStorage.removeItem(this.tokenStorageKey);
  }
  static isAuthenticated() {
    return AuthStorage.getToken() != null;
  }
  static clear() {
    localStorage.clear();
  }
}
AuthStorage.userStorageKey = 'key.user';
AuthStorage.tokenStorageKey = 'key.token';

/***/ }),

/***/ 6713:
/*!*********************************************************!*\
  !*** ./src/app/utils/cryptography/cryptography.util.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptographyUtil": () => (/* binding */ CryptographyUtil)
/* harmony export */ });
class CryptographyUtil {
  static encrypt(value) {
    if (!value) return null;
    const data = JSON.stringify(value);
    return btoa(data);
  }
  static decrypt(value) {
    if (!value) return null;
    const data = atob(value);
    return JSON.parse(data);
  }
}

/***/ }),

/***/ 244:
/*!**************************************!*\
  !*** ./src/app/utils/header.util.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderUtil": () => (/* binding */ HeaderUtil)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);

class HeaderUtil {
  static get() {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
    return headers;
  }
}

/***/ }),

/***/ 1261:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiUrl: 'https://api.github.com',
  apiStorage: '',
  app: ''
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map