import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app-modules/material/material.module';

// SERVICES/SERVICIOS  ----------------------------------------------------
import { UserFeedbackService } from './services/user-feedback.service';

// COMPONENTS/COMPONENTES  ------------------------------------------------
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

/**
 * Modulo con el proposito de brindar de componentes basicos a la plataforma
 *
 * @export
 * @class UserFeedbackModule
 */
@NgModule({
    entryComponents: [
        SnackbarComponent,
        ConfirmComponent,
        AlertDialogComponent
    ],
    imports: [
        // Core imports
        CommonModule,
        // Material modules imports
        MaterialModule
    ],
    declarations: [
        SnackbarComponent,
        ConfirmComponent,
        AlertDialogComponent,
    ],
    providers: [
        UserFeedbackService
    ]
})
export class UserFeedbackModule { }
