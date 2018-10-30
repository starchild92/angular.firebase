import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { environment } from '@app-env/environment';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
