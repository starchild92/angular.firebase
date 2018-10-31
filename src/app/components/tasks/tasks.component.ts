import { Component, OnInit } from "@angular/core";
import { TaskFormComponent } from "@app-components/task-form/task-form.component";
import { MatDialog } from "@angular/material";
import { TasksService } from "@app-services/tasks.service";
import { UserFeedbackService } from "@app-modules/user-feedback/services/user-feedback.service";

@Component({
    selector: "app-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
    constructor(
        public dialog: MatDialog,
        private taskService: TasksService,
        private _feedback: UserFeedbackService
    ) {}

    ngOnInit() {}

    addTask() {
        const dialogRef = this.dialog.open(TaskFormComponent, {});

        dialogRef.afterClosed().subscribe(task => {
            if (task) {
                this.taskService.save(task).then(resp => {
                    console.log("done", resp);
                    if (resp) {
                        this._feedback.getAlertDialog({
                            title: "Good",
                            content: "You're task were added successfully"
                        });
                    }
                });
            }
        });
    }
}
