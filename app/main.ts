import { bootstrap } from '@angular/platform-browser-dynamic';
// Component
import { Component, OnInit } from '@angular/core';
// Routes
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';





// ================== START: NotesCurrentComponent ==================
@Component({
    selector: 'notes-current',
    template: `
    <h5>Current</h5>
    `
})
export class NotesCurrentComponent {
    
}
// ================== END: NotesCurrentComponent ==================



// ================== START: NotesArchivedComponent ==================
@Component({
    selector: 'notes-archived',
    template: `
    <h5>Archived</h5>
    `
})
export class NotesArchivedComponent {
    
}
// ================== END: NotesArchivedComponent ==================



// ================== START: NotesDefaultComponent ==================
@Component({
    selector: 'notes-default',
    template: `
    <h5>Default Notes</h5>
    `
})
export class NotesDefaultComponent{
    
}
// ================== END: NotesDefaultComponent ==================










// ================== START: NotesComponent ==================

@Component({
    selector: 'notes',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Notes</h2>
    <nav>
        <a href="" [routerLink]="['NotesDefault']">Notes Home</a> |
        <a href="" [routerLink]="['NotesCurrent']">Current Note</a> |
        <a href="" [routerLink]="['NotesArchived']">Archived Notes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/', name: 'NotesDefault', component: NotesDefaultComponent, useAsDefault:true  },
    {path: '/current', name: 'NotesCurrent', component: NotesCurrentComponent },
    {path: '/archived', name: 'NotesArchived', component: NotesArchivedComponent }, 
])
export class NotesComponent {
    
}
// ================== END: NotesComponent ==================









// ================== START: TasksComponent ==================
@Component({
    selector: 'tasks',
    template: `
    <h2>Tasks</h2>
    `
})
export class TasksComponent {
    
}
// ================== END: TasksComponent ==================









// ================== START: OtherComponent ==================
@Component({
    selector: 'other',
    template: `
    <h2>Other</h2>
    `
})
export class OtherComponent {
    
}
// ================== START: OtherComponent ==================







// ================== START: AppComponent ================== 
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    template: `
    <nav>
        <a href="" [routerLink]="['Notes']">Notes</a> |
        <a href="" [routerLink]="['Tasks']">Tasks</a> |
        <a href="" [routerLink]="['Other']">Other</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/notes/...', name: 'Notes', component: NotesComponent, useAsDefault:true  },
    {path: '/tasks', name: 'Tasks', component: TasksComponent },
    {path: '/other', name: 'Other', component: OtherComponent }
])
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}
// ================== END: AppComponent ==================

bootstrap(AppComponent);