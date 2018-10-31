import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

    title: string = ''
    content: string = ''

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogReference: MatDialogRef<AlertDialogComponent>,
    ) { }

    ngOnInit() {
        this.title = this.data.title
        this.content = this.data.content
    }

    close() { this.dialogReference.close(); }

}
