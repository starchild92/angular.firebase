import { TasksCategories } from "./general.interfaces";

export class Taks {
    private name: string;
    private category: TasksCategories;
    private priority: number;
    private due_date: string;


    public get _name() : string {
        return this.name
    }

    public get _category() : TasksCategories {
        return this.category
    }

    public get _priority() : number {
        return this.priority
    }

    public get _due_date() : string {
        return this.due_date
    }



    public set $name(v : string) {
        this.name = v;
    }

    public set $category(v : TasksCategories) {
        this.category = v;
    }

    public set $priority(v : number) {
        this.priority = v;
    }

    public set $due_date(v : string) {
        this.due_date = v;
    }



    constructor(t?: TaskInterface) {
        if (t) {
            this.loadInfo(t)
        }
    }

    loadInfo(info: TaskInterface) {
        this.name = this.loadData(info.name)
        this.category = this.loadData(info.category)
        this.priority = this.loadData(info.priority)
        this.due_date = this.loadData(info.due_date)
    }

    private loadData<T>(data: T, defaul?: T) {
        return data === undefined ?
            defaul !== undefined ? defaul : null
            : data
    }

}

export interface TaskInterface {
    name: string;
    category: TasksCategories;
    priority: number;
    due_date: string;
}
