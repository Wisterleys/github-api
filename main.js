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
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);






function InputSearchComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputSearchComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onGetWords());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InputSearchComponent_mat_spinner_8_Template(rf, ctx) {
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
  valueInputData(input) {
    this.searchValueInput = input;
    if (this.searchValueInput != null && this.searchValueInput.length > 2 && !this.hasButton) this.words.emit(this.searchValueInput);
  }
  onGetWords() {
    if (this.searchValueInput != null) this.words.emit(this.searchValueInput);
  }
  onKeyDown(event) {
    console.log(event);
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
  decls: 9,
  vars: 2,
  consts: [[1, "container"], [1, "input-group"], [1, "search-icon"], ["type", "text", "placeholder", "Search", 3, "keyup"], ["searchValueInput", ""], ["mat-raised-button", "", "color", "primary", "class", "custom-button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "custom-button", 3, "click"]],
  template: function InputSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputSearchComponent_Template_input_keyup_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.valueInputData(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputSearchComponent_button_7_Template, 2, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InputSearchComponent_mat_spinner_8_Template, 1, 0, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.hasButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading && ctx.hasButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(---border-color);\n  height: 1.5rem;\n  width: 35rem;\n  padding-left: 10px;\n  border-radius: 6px;\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(---icon-search-color);\n}\n.container[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 11rem;\n  border-radius: 6px;\n  margin-left: 10px;\n  padding: 10px 24px 10px 24px;\n}\n@media screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1zZWFyY2gvaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FBRkY7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUFGSjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFETjtBQUlJO0VBQ0UsZ0NBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFKSjtBQVFFO0VBQ0U7SUFDQSxnQkFBQTtFQU5GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmlucHV0LWdyb3Vwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tLWJvcmRlci1jb2xvcik7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpbnB1dHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBcbiAgICB9XG4gICAgLnNlYXJjaC1pY29ue1xuICAgICAgY29sb3I6IHZhcigtLS1pY29uLXNlYXJjaC1jb2xvcik7XG4gICAgfVxuICAgIFxuICB9XG4gIC5jdXN0b20tYnV0dG9ue1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMTFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjRweCAxMHB4IDI0cHg7XG4gICAgXG5cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jdXN0b20tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
        console.log(err);
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
  styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 32.5rem;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 4rem;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: #8C19D2;\n}\n.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  color: #0069CA;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 170px;\n  height: 50px;\n  font-size: 1.2em;\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFBUTtFQUNJLGNBQUE7QUFFWjtBQUFRO0VBQ0ksY0FBQTtBQUVaOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgXG59XG4uaXRlbXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAudGl0bGV7XG4gICAgICAgIHdpZHRoOiAzMi41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuOm50aC1vZi10eXBlKDEpe1xuICAgICAgICAgICAgY29sb3I6ICM4QzE5RDI7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbjpudGgtb2YtdHlwZSgyKXtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA2OUNBO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLmN1c3RvbS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLyogb3V0cmFzIHByb3ByaWVkYWRlcyBDU1MgKi9cbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/pt */ 7423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/image_paths */ 8677);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/github.service */ 7357);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/input-search/input-search.component */ 5395);













function UserDetailComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function UserDetailComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.flowers, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.user.followers, " seguidores ");
  }
}
function UserDetailComponent_li_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.heart, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.user.following, " seguindo ");
  }
}
function UserDetailComponent_li_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.office, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.user.company, " ");
  }
}
function UserDetailComponent_li_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.email, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.user.email, " ");
  }
}
function UserDetailComponent_li_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserDetailComponent_li_29_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.openBlog(ctx_r8.user.blog));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](" " + ctx_r5.user.blog);
  }
}
function UserDetailComponent_li_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserDetailComponent_li_30_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.openTwitter(ctx_r10.user.twitter_username));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" @", ctx_r6.user.twitter_username, " ");
  }
}
function UserDetailComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "p", 19)(2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 21)(7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const repo_r12 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", repo_r12.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](repo_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_2_0 = repo_r12.description) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r7.star, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", repo_r12.stargazers_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.updated(repo_r12.updated_at), " ");
  }
}
const _c0 = function () {
  return {
    "background-color": "var(---secondary-color)"
  };
};
(0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__["default"]);
class UserDetailComponent {
  constructor(githubService, router, snackBar, datePipe) {
    this.githubService = githubService;
    this.router = router;
    this.snackBar = snackBar;
    this.datePipe = datePipe;
    this.isSearch = false;
    this.login = '';
    this.twitter = ''; //icon
    this.office = ''; //icon
    this.flowers = ''; //icon
    this.heart = ''; //icon
    this.map = ''; //icon
    this.email = ''; //icon
    this.star = ''; //icon
    this.subJectSearch = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.twitter = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.twitter_icon;
    this.office = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.office_work;
    this.heart = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.heart;
    this.flowers = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.group;
    this.map = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.map_pointer;
    this.email = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.email;
    this.star = src_app_utils_image_paths__WEBPACK_IMPORTED_MODULE_0__.ImagePaths.star;
  }
  ngOnInit() {
    let userName = this.githubService.user?.login;
    let repoName = '';
    this.subJectSearch.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(value => {
      repoName = value;
      console.log(value);
      if (value.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.githubService.repos);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)({
        repos: this.githubService.getRepos(userName)
      });
    })).subscribe({
      next: value => {
        let r = new RegExp(repoName, 'i');
        let filter = value.repos.filter(repo => r.test(repo.name));
        this.githubService.repos = filter.length > 0 ? filter : value.repos;
      },
      error: err => {
        console.log(err);
        this.openSnackbar(`Ops! usuário ${userName} não encontrado`);
      }
    });
    if (this.githubService.repos == undefined || this.githubService.user == undefined) this.router.navigate(['/']);
    this.login = `@${this.githubService.user?.login ?? ''}`;
  }
  onGetWords(value) {
    console.log(value);
    this.subJectSearch.next(value);
  }
  openSnackbar(value) {
    this.snackBar.open(value);
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
  openTwitter(value) {
    window.open(`https://twitter.com/${value}`, '_blank');
  }
  openBlog(value) {
    window.open(`https://${value}`, '_blank');
  }
  updated(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays === 0) {
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      if (diffInHours === 0) {
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        return `Atualizado há ${diffInMinutes} minutos.`;
      }
      return `Atualizado há ${diffInHours} horas.`;
    }
    const weeks = Math.floor(diffInDays / 7);
    const remainingDays = diffInDays % 7;
    if (weeks === 0) {
      return `Atualizado há ${remainingDays} dias.`;
    } else if (weeks === 1) {
      return 'Atualizado na última semana.';
    } else if (weeks === 2) {
      return 'Atualizado há 2 semanas.';
    } else if (remainingDays === 0) {
      return `Atualizado há ${weeks} semanas.`;
    }
    const formattedDate = this.datePipe.transform(date, 'MMM d, yyyy');
    return `Atualizado em ${formattedDate}.`;
  }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
  return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_github_service__WEBPACK_IMPORTED_MODULE_1__.GitHubService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe));
};
UserDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UserDetailComponent,
  selectors: [["app-user-detail"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID,
    useValue: 'pt-BR'
  }])],
  decls: 34,
  vars: 14,
  consts: [[1, "container"], ["routerLink", "/", 1, "logo"], [3, "hasButton", "words"], [1, "sidebar"], [3, "ngStyle"], [1, "profile"], [4, "ngIf"], [1, "name"], [1, "profile-login"], [1, "desc"], [1, "links"], ["style", "cursor: pointer;", 4, "ngIf"], ["class", "content", 4, "ngFor", "ngForOf"], [3, "src"], ["alt", "", 3, "src"], [2, "cursor", "pointer"], [1, "material-icons"], [3, "click"], [1, "content"], [1, "repo-title", 2, "font-size", "20px"], ["target", "_blank", 3, "href"], [1, "ftitle", 2, "width", "20rem", "display", "flex", "justify-content", "space-around"], [1, "att-info"]],
  template: function UserDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "section", 1)(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " d_evs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section")(8, "app-input-search", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("words", function UserDetailComponent_Template_app_input_search_words_8_listener($event) {
        return ctx.onGetWords($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nav", 3)(11, "mat-card", 4)(12, "mat-card-content")(13, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UserDetailComponent_div_14_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "section", 9)(21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "section", 10)(24, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, UserDetailComponent_li_25_Template, 3, 2, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, UserDetailComponent_li_26_Template, 3, 2, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, UserDetailComponent_li_27_Template, 3, 2, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, UserDetailComponent_li_28_Template, 3, 2, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, UserDetailComponent_li_29_Template, 5, 1, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, UserDetailComponent_li_30_Template, 4, 2, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "main")(32, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, UserDetailComponent_div_33_Template, 12, 6, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasButton", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.avatar_url);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.user.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.login, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = ctx.user.bio) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.followers);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.following);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.company);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.blog);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.twitter_username);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.repos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _components_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_2__.InputSearchComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-areas: \"header header header\" \"sidebar main main\";\n  grid-template-columns: minmax(0, 1fr) 1fr minmax(0, 1fr); \n  grid-template-rows: 4.3rem 1fr 0px;\n}\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nheader[_ngcontent-%COMP%] {\n  grid-area: header;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: #8C19D2;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  color: #0069CA;\n}\n\n.att-info[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nmain[_ngcontent-%COMP%] {\n  grid-area: main;\n}\nmain[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: 20px;\n  border-color: var(---border-dark-color);\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n}\n\n@media (max-width: 768px) { \n  .container[_ngcontent-%COMP%] {\n    grid-template-areas: \"header header header\" \"sidebar sidebar sidebar\" \"main main main\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px auto auto 100px;\n  }\n  main[_ngcontent-%COMP%] {\n    grid-row: 3/-1;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    grid-row: 2/3;\n  }\n}\n@media (max-width: 480px) { \n  .container[_ngcontent-%COMP%] {\n    grid-template-areas: \"header\" \"sidebar\" \"main\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px auto auto auto 100px;\n  }\n  header[_ngcontent-%COMP%] {\n    grid-area: header;\n  }\n  main[_ngcontent-%COMP%] {\n    grid-area: main;\n    grid-row: 3/-1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .repo-title[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .ftitle[_ngcontent-%COMP%] {\n    width: 2rem;\n    display: flex;\n    justify-content: space-around;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    grid-area: sidebar;\n    grid-row: 2/3;\n  }\n}\nmat-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-areas: \"p p p\" \"desc desc desc\" \"links links links\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px auto auto auto 100px;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 90%;\n  overflow: hidden;\n  grid-area: p;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 3fr 8fr;\n  align-items: center;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 70px;\n  height: auto;\n  border-radius: 180px;\n  object-fit: contain;\n  object-position: top;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n}\nmat-card-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-login[_ngcontent-%COMP%] {\n  color: var(---login-word-color);\n}\nmat-card-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 90%;\n  grid-area: desc;\n  grid-row: 2/3;\n}\nmat-card-content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 90%;\n  grid-area: links;\n  grid-row: 3/-1;\n}\nmat-card-content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\nmat-card-content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrREFDSTtFQUVKLHdEQUFBLEVBQUEsd0JBQUE7RUFDQSxrQ0FBQTtBQUZKO0FBR0k7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtBQUZOOztBQUtJO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUdRO0VBQ0ksZUFBQTtBQURaO0FBR1E7RUFDSSxjQUFBO0FBRFo7QUFHUTtFQUNJLGNBQUE7QUFEWjs7QUFLSTtFQUNFLGlCQUFBO0FBRk47O0FBSUk7RUFDSSxlQUFBO0FBRFI7QUFFUTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBQVY7O0FBS0k7RUFDSSxrQkFBQTtBQUZSOztBQU9FLDRCQUFBLHdDQUFBO0VBQ0U7SUFDRSxzRkFDRTtJQUdGLDBCQUFBO0lBQ0EseUNBQUE7RUFQSjtFQVVFO0lBQ0ksY0FBQTtFQVJOO0VBWUU7SUFDSSxhQUFBO0VBVk47QUFDRjtBQWNFLDRCQUFBLHdDQUFBO0VBQ0U7SUFDRSw4Q0FDRTtJQUdGLDBCQUFBO0lBQ0EsOENBQUE7RUFmSjtFQWtCRTtJQUNFLGlCQUFBO0VBaEJKO0VBbUJFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQWpCSjtFQWtCSTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFoQk47RUFzQkU7SUFDRSxtQkFBQTtFQXBCSjtFQXNCRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFwQko7RUFzQkU7SUFFRSxrQkFBQTtJQUNBLGFBQUE7RUFyQko7QUFDRjtBQTRCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUVBQ0k7RUFHSiwwQkFBQTtFQUNBLDhDQUFBO0FBN0JKO0FBK0JJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUE3Qk47QUE4Qk07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUE1QlI7QUE4Qk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBNUJSO0FBOEJNO0VBQ0UsK0JBQUE7QUE1QlI7QUFnQ0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBOUJOO0FBZ0NJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE5Qk47QUErQk07RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUE3QlI7QUE4QlE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBNUJWIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJzaWRlYmFyIG1haW4gbWFpblwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMWZyIG1pbm1heCgwLCAxZnIpOyAvKiBjb2x1bmFzIHJlc3BvbnNpdmFzICovXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0LjNyZW0gMWZyIDBweDtcbiAgICBhe1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6YmxhY2tcblxuICAgIH1cbiAgICAubG9nb3tcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbiAgICBoZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMSl7XG4gICAgICAgICAgICBjb2xvcjogIzhDMTlEMjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuOm50aC1vZi10eXBlKDIpe1xuICAgICAgICAgICAgY29sb3I6ICMwMDY5Q0E7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAuYXR0LWluZm97XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgbWFpbiB7XG4gICAgICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLS1ib3JkZXItZGFyay1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7IFxuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7IC8qIGFqdXN0ZSBwYXJhIHRlbGFzIG1lbm9yZXMgcXVlIDc2OHB4ICovXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJzaWRlYmFyIHNpZGViYXIgc2lkZWJhclwiXG4gICAgICAgIFwibWFpbiBtYWluIG1haW5cIjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIGF1dG8gMTAwcHg7XG4gICAgfVxuICBcbiAgICBtYWluIHtcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyAtMTtcbiAgICAgIFxuICAgIH1cbiAgXG4gICAgLnNpZGViYXIge1xuICAgICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkgeyAvKiBhanVzdGUgcGFyYSB0ZWxhcyBtZW5vcmVzIHF1ZSA0ODBweCAqL1xuICAgIC5jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJoZWFkZXJcIlxuICAgICAgICBcInNpZGViYXJcIlxuICAgICAgICBcIm1haW5cIjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvIGF1dG8gYXV0byAxMDBweDtcbiAgICB9XG4gIFxuICAgIGhlYWRlciB7XG4gICAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICB9XG4gIFxuICAgIG1haW4ge1xuICAgICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgICAgZ3JpZC1yb3c6IDMgLyAtMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBzZWN0aW9ue1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICAucmVwby10aXRsZXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5mdGl0bGV7XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gICAgLnNpZGViYXIge1xuICAgICAgXG4gICAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICBcbiAgICB9XG4gIFxuICAgXG4gIH1cbiAgXG4gIC8vIGNhcmRcbiAgbWF0LWNhcmQtY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwicCBwIHBcIlxuICAgICAgICBcImRlc2MgZGVzYyBkZXNjXCJcbiAgICAgICAgXCJsaW5rcyBsaW5rcyBsaW5rc1wiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0byBhdXRvIGF1dG8gMTAwcHg7XG5cbiAgICAucHJvZmlsZXtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBncmlkLWFyZWE6IHA7XG4gICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgOGZyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcbiAgICAgIH1cbiAgICAgIC5uYW1le1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUtbG9naW57XG4gICAgICAgIGNvbG9yOiB2YXIoLS0tbG9naW4td29yZC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5kZXNje1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgZ3JpZC1hcmVhOiBkZXNjO1xuICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIH1cbiAgICAubGlua3N7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBncmlkLWFyZWE6IGxpbmtzO1xuICAgICAgZ3JpZC1yb3c6IDMgLyAtMTtcbiAgICAgIHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXtcbiAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    return super.getAll(`${this.apiUrl}/users/${username}/repos?direction=asc`);
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

/***/ 8677:
/*!**************************************!*\
  !*** ./src/app/utils/image_paths.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePaths": () => (/* binding */ ImagePaths)
/* harmony export */ });
class ImagePaths {}
ImagePaths.email = 'assets/img/logo.png';
ImagePaths.group = 'assets/img/group.png';
ImagePaths.heart = 'assets/img/heart.png';
ImagePaths.map_pointer = 'assets/img/Navigation-Maps.png';
ImagePaths.office_work = 'assets/img/office-work-square.png';
ImagePaths.twitter_icon = 'assets/img/shape.png';
ImagePaths.star = 'assets/img/star.png';

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