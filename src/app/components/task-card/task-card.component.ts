import { Component, OnInit } from "@angular/core";
import { Taks } from "@app-models/taks.model";
import { TasksPriorities } from "@app-models/general.interfaces";

@Component({
    selector: "app-task-card",
    templateUrl: "./task-card.component.html",
    styleUrls: ["./task-card.component.scss"]
})
export class TaskCardComponent implements OnInit {
    task = new Taks()

    constructor() {}

    ngOnInit() {

        this.task.$name = 'Dummie Task'
        this.task.$due_date = Date.now().toString()
        this.task.$priority = TasksPriorities.Three
    }
}
