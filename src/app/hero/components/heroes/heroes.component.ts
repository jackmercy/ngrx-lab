import { Component, OnInit } from '@angular/core';
import { IHero } from '../../interface/hero.interface';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HeroService } from '../../services/hero.service';
import { MatDialog } from '@angular/material';
import { UpdateComponent } from '../update/update.component';
// import { Observable } from 'rxjs';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    heroList: IHero[];
    // heroList: IHero[] = [
    //     {
    //         id: '1',
    //         avatar: this.defaultAvatar,
    //         name: 'T.A lớn',
    //         power: 'Ăn shit'
    //     },
    //     {
    //         id: '2',
    //         avatar: this.defaultAvatar,
    //         name: 'T.A nhỏ',
    //         power: 'Linh vật debug'
    //     }
    // ];

    // herosCollection: AngularFirestoreCollection<IHero>;

    constructor(
        private _router: Router,
        public dialog: MatDialog,
        private _heroService: HeroService
    ) { }

    ngOnInit() {
        // this.herosCollection = this._afs.collection<IHero>('hero');

        this._heroService.readHero().subscribe(
            (heroes: IHero[]) => this.heroList = heroes
        );

        // this.herosCollection.snapshotChanges().subscribe(snapshot => {
        //     this.heroList = snapshot;
        // });
    }

    updateHero(hero: IHero): void {
        this.dialog.open(UpdateComponent, {
            autoFocus: false,
            restoreFocus: false,
            data: hero,
            height: '400px',
            width: '780px'
        })
    }

    deleteHero(__id: string): void {
        this._heroService.deleteHero(__id);
    }

    createHero(): void {
        this._router.navigate(['hero/create']);
    }

}
