import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Taks } from "@app-models/taks.model";
import {
    TasksCategories,
    TasksPriorities
} from "@app-models/general.interfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserFeedbackService } from "@app-modules/user-feedback/services/user-feedback.service";

@Component({
    selector: "app-task-form",
    templateUrl: "./task-form.component.html",
    styleUrls: ["./task-form.component.scss"]
})
export class TaskFormComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) data,
        private dialogRef: MatDialogRef<TaskFormComponent>,
        private feedback: UserFeedbackService
    ) {}

    ngOnInit() {
        this.form = this.fb.group({
            name: ["", [Validators.required]]
        });
    }

    save() {
        let t = new Taks();

        if (this.form.valid) {
            let value = this.form.value;

            t.$name = value.name;
            t.$category = TasksCategories.Pending;
            t.$priority = TasksPriorities.One;
            t.$due_date = Date.now().toString();

            this.dialogRef.close(t);
        } else {
            this.feedback.getAlertDialog({ title: 'Atención', content: 'El formulario tiene errores'})
        }
    }
}
