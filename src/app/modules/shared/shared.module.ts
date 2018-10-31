import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksService } from '@app-services/tasks.service';

// COMPONENTS/COMPONENTES  ------------------------------------------------
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ErrorComponent
    ],
    exports: [
        ErrorComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                TasksService
            ]
        };
    }
}
