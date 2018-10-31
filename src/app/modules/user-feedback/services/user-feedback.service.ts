import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';

// MODULES/MODULOS  -------------------------------------------------------
import { SnackbarOptionsModel } from '../models/snackbar-options.model';
import { ConfirmOptionsModel } from '../models/confirm-options.model';
import { AlertDialogOptionsModel } from '../models/alert-dialog-component.model';

// COMPONENTS/COMPONENTES  ------------------------------------------------
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';


@Injectable()
export class UserFeedbackService {

    private _defaultSnackBarDuration = 4000;
    private _defaultSnackBarStatus = 'success';

    /**
     * Constructor
     *
     * @param _snackBar material snack bar service
     */
    constructor(
        private _dialog: MatDialog,
        private _snackBar: MatSnackBar
    ) { }

    // SNACK BAR METHODS ---------------------------------------------------------
    openSnackbar(options: SnackbarOptionsModel): void {
        this._snackBar.openFromComponent(SnackbarComponent,
            {
                duration: options.duration || this._defaultSnackBarDuration,
                data: {
                    message: options.message,
                    status: options.status || this._defaultSnackBarStatus
                },
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['snackbar']
            });
    }

    // DIALOG BAR METHODS --------------------------------------------------------
    getConfirmDialog(options: ConfirmOptionsModel): MatDialogRef<ConfirmComponent> {
        let dialogRef: MatDialogRef<ConfirmComponent>;
        dialogRef = this._dialog.open(ConfirmComponent, {
            width: '30vw',
            disableClose: true,
            data: options
        });
        return dialogRef;
    }

    getAlertDialog(options: AlertDialogOptionsModel): MatDialogRef<AlertDialogComponent> {
        let dialogRef: MatDialogRef<AlertDialogComponent>;
        dialogRef = this._dialog.open(AlertDialogComponent, {
            width: '30vw',
            disableClose: true,
            data: options
        })
        return dialogRef
    }

}
