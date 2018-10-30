import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from '@app-components/tasks/tasks.component';

const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class appRouting { }
