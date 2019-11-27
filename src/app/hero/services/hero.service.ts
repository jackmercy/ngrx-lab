import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, filter, take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IHero } from '../interface/hero.interface';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    herosCollection: AngularFirestoreCollection<IHero>;
    constructor(
        private _afs: AngularFirestore
    ) {
        this.herosCollection = this._afs.collection<IHero>('hero');
    }

    createHero(__payload: IHero): Observable<any> {
        const _id = this._afs.createId();
        const _hero = {
            ...__payload,
            id: _id
        };
        return of(this.herosCollection.doc(_id).set(_hero));
    }

    readHeroes(__query: string): Observable<IHero[]> {
        return this._afs.collection('hero', ref => ref.where('name', '>=', __query)
            .where('name', '<=', __query + '\uf8ff'))
            .snapshotChanges().pipe(
                take(1),
                map(
                    (snap: any) => _.forEach(snap,
                        (element: any, key: number) => snap[key] = element.payload.doc.data()
                    )
                )
            );
    }

    // readHero(): Observable<IHero[]> {
    //     return this._afs.collection('hero').snapshotChanges().pipe(
    //         take(1),
    //         map(
    //             (snap: Array<any>) =>
    //                 _.forEach(snap, (element: any, key: number) => snap[key] = element.payload.doc.data())
    //         )
    //     );
    // }

    updateHero(hero: IHero): Observable<any> {
        return of(this.herosCollection.doc(hero.id).update(hero));
    }

    deleteHero(__id: string): Observable<any> {
        return of(this.herosCollection.doc(__id).delete());
    }
}
