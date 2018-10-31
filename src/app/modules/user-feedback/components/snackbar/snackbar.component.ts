import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

    // The message to be shown in the snack bar
    message: string;
    // The status for the snack bar
    status: string;

    constructor(
        private _snackBarRef: MatSnackBarRef<SnackbarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) {

    }

    // COMPONENT LIFECYCLE HOOKS -------------------------------------------------

    ngOnInit() {
        this.message = this.data.message;
        this.status = this.data.status;
    }

    // COMPONENT METHODS ---------------------------------------------------------

    dismiss(): void {
        this._snackBarRef.dismiss();
    }

}
