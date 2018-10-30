import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(
        private _db: AngularFirestore
    ) {
        let doc = this._db.collection('test').doc('JknOpbqxHBbAbGfn5s31').get()
        doc.subscribe((d) => {
            if(d.exists) {
                console.log('el documento existe', d.data());
            }
        })
    }
}
