import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { environment } from '@app-env/environment';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TasksComponent } from './components/tasks/tasks.component';
import { appRouting } from './app.routing';

import { TasksService } from '@app-services/tasks.service';


@NgModule({
    declarations: [
        AppComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        appRouting,
        AngularFirestoreModule
    ],
    providers: [
        TasksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
