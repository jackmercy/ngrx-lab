import { Component, OnInit } from '@angular/core';
import { IHero } from '../../interface/hero.interface';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { MatDialog } from '@angular/material';
import { UpdateComponent } from '../update/update.component';
// import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    value = '';
    defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    heroList: IHero[];
    searchFormControl: FormControl;

    constructor(
        private _router: Router,
        public dialog: MatDialog,
        private _heroService: HeroService
    ) { }

    ngOnInit() {
        this.searchFormControl = new FormControl('');

        this._heroService.readHeroes('').subscribe(
            (heroes: IHero[]) => this.heroList = heroes
        );

        this.searchFormControl.valueChanges.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap(term => this._heroService.readHeroes(term))
        ).subscribe(
            (_heroes: any) => this.heroList = _heroes
        );
    }


    updateHero(hero: IHero): void {
        this.dialog.open(UpdateComponent, {
            autoFocus: false,
            restoreFocus: false,
            data: hero,
            height: '400px',
            width: '780px'
        });
    }

    deleteHero(__id: string): void {
        this._heroService.deleteHero(__id);
    }

    createHero(): void {
        this._router.navigate(['hero/create']);
    }

    clearSearchBar(): void {
        this.searchFormControl.setValue('');
    }

}
