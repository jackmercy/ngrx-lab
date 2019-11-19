import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { IHero } from '../interface/hero.interface';
import * as _ from 'lodash';
@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(
        private _afs: AngularFirestore
    ) { }

    createHero(__payload: any) {
        console.log(__payload);
        const _id = this._afs.createId();
        const _hero = { ...__payload, id: _id  };
        this._afs.collection('hero').doc(_id).set(_hero);
    }

    readHero(): Observable<any> {
        return this._afs.collection('hero').snapshotChanges().pipe(
            map( (snap: any) => _.forEach(snap, (element: any) => element.payload.doc.data()))
        );
    }

    deleteHero(__id: string): Observable<any> {
        return of(this._afs.collection('hero').doc(__id).delete());
    }
}
