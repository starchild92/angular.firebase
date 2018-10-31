import { Injectable } from "@angular/core";
import { TaskInterface } from "@app-models/taks.model";
import { HttpClient } from "@angular/common/http";
import { ENDPOINT } from "@app-env/environment";

@Injectable({
    providedIn: "root"
})
export class TasksService {
    constructor(private _http: HttpClient) {}

    save(t: TaskInterface) {
        return new Promise((resolve, reject) => {
            this._http
                .post(ENDPOINT + "/create", {
                    task: {
                        name: t.name,
                        dueDate: t.due_date,
                        priority: t.priority
                    }
                })
                .subscribe(
                    resp => {
                        console.log(resp);
                        resolve(resp);
                    },
                    e => {
                        console.log(e);
                        reject(e);
                    }
                );
        });
    }
}
