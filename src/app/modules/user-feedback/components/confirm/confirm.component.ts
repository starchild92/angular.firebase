import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

/**
 * Componente de dialogo de confirmación de la app
 *
 * @export
 * @class ConfirmComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

    title: string = ''
    content: string = ''
    btnAgree: string = ''
    btnDisagree: string = ''

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogReference: MatDialogRef<ConfirmComponent>,
    ) { }

    ngOnInit() {
        this.title = this.data.title
        this.content = this.data.content
        this.btnAgree = this.data.btnAgree
        this.btnDisagree = this.data.btnDisagree
    }

    agree() { this.dialogReference.close({ return: true }); }
    desagree() { this.dialogReference.close({ return: false }); }

}
