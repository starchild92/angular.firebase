import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "@app-env/environment";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { appRouting } from "./app.routing";

import { TaskCardComponent } from "./components/task-card/task-card.component";
import { MaterialModule } from "@app-modules/material/material.module";
import { SharedModule } from "@app-modules/shared/shared.module";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserFeedbackModule } from "@app-modules/user-feedback/user-feedback.module";

@NgModule({
    entryComponents: [
        TaskFormComponent
    ],
    declarations: [
        AppComponent,
        TasksComponent,
        TaskCardComponent,
        TaskFormComponent
    ],
    imports: [
        BrowserModule,
        appRouting,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule.forRoot(),
        UserFeedbackModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
