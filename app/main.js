"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Component
var core_1 = require('@angular/core');
// Routes
var router_deprecated_1 = require('@angular/router-deprecated');
// ================== START: NotesCurrentComponent ==================
var NotesCurrentComponent = (function () {
    function NotesCurrentComponent() {
    }
    NotesCurrentComponent = __decorate([
        core_1.Component({
            selector: 'notes-current',
            template: "\n    <h5>Current</h5>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotesCurrentComponent);
    return NotesCurrentComponent;
}());
exports.NotesCurrentComponent = NotesCurrentComponent;
// ================== END: NotesCurrentComponent ==================
// ================== START: NotesArchivedComponent ==================
var NotesArchivedComponent = (function () {
    function NotesArchivedComponent() {
    }
    NotesArchivedComponent = __decorate([
        core_1.Component({
            selector: 'notes-archived',
            template: "\n    <h5>Archived</h5>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotesArchivedComponent);
    return NotesArchivedComponent;
}());
exports.NotesArchivedComponent = NotesArchivedComponent;
// ================== END: NotesArchivedComponent ==================
// ================== START: NotesDefaultComponent ==================
var NotesDefaultComponent = (function () {
    function NotesDefaultComponent() {
    }
    NotesDefaultComponent = __decorate([
        core_1.Component({
            selector: 'notes-default',
            template: "\n    <h5>Default Notes</h5>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotesDefaultComponent);
    return NotesDefaultComponent;
}());
exports.NotesDefaultComponent = NotesDefaultComponent;
// ================== END: NotesDefaultComponent ==================
// ================== START: NotesComponent ==================
var NotesComponent = (function () {
    function NotesComponent() {
    }
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'notes',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            template: "\n    <h2>Notes</h2>\n    <nav>\n        <a href=\"\" [routerLink]=\"['NotesDefault']\">Notes Home</a> |\n        <a href=\"\" [routerLink]=\"['NotesCurrent']\">Current Note</a> |\n        <a href=\"\" [routerLink]=\"['NotesArchived']\">Archived Notes</a>\n    </nav>\n    <router-outlet></router-outlet>\n    "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'NotesDefault', component: NotesDefaultComponent, useAsDefault: true },
            { path: '/current', name: 'NotesCurrent', component: NotesCurrentComponent },
            { path: '/archived', name: 'NotesArchived', component: NotesArchivedComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
// ================== END: NotesComponent ==================
// ================== START: TasksComponent ==================
var TasksComponent = (function () {
    function TasksComponent() {
    }
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: "\n    <h2>Tasks</h2>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
// ================== END: TasksComponent ==================
// ================== START: OtherComponent ==================
var OtherComponent = (function () {
    function OtherComponent() {
    }
    OtherComponent = __decorate([
        core_1.Component({
            selector: 'other',
            template: "\n    <h2>Other</h2>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OtherComponent);
    return OtherComponent;
}());
exports.OtherComponent = OtherComponent;
// ================== START: OtherComponent ==================
// ================== START: AppComponent ================== 
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            template: "\n    <nav>\n        <a href=\"\" [routerLink]=\"['Notes']\">Notes</a> |\n        <a href=\"\" [routerLink]=\"['Tasks']\">Tasks</a> |\n        <a href=\"\" [routerLink]=\"['Other']\">Other</a>\n    </nav>\n    <router-outlet></router-outlet>\n    "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/notes/...', name: 'Notes', component: NotesComponent, useAsDefault: true },
            { path: '/tasks', name: 'Tasks', component: TasksComponent },
            { path: '/other', name: 'Other', component: OtherComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// ================== END: AppComponent ==================
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map