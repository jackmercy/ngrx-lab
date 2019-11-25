import { Component, OnInit, OnDestroy } from '@angular/core';
import { IHero } from '../../interface/hero.interface';
import { FormControl } from '@angular/forms';
/* NgRx */
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/hero.state';
import * as heroActions from '../../store/actions/hero.actions';
import * as heroSelectors from '../../store/selectors/hero.selector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {
    value = '';
    defaultAvatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    heroList: IHero[];
    searchFormControl: FormControl;
    private ngRxDestroy$ = new Subject();

    constructor(
        private _store: Store<State>
    ) {}

    ngOnInit() {
        this.searchFormControl = new FormControl('');

        this._store.dispatch(heroActions.readHeroes());

        this._store.select(heroSelectors.selectHeroes).pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            (_heroes: IHero[]) => _heroes ? this.heroList = _heroes : this.heroList = []
        );

        this.searchFormControl.valueChanges.subscribe(
            (query: string) => this._store.dispatch(heroActions.searchHeroes({ payload: query }))
        );
    }

    ngOnDestroy() {
        this.ngRxDestroy$.next();
    }


    updateHero(hero: IHero): void {
        this._store.dispatch(heroActions.openUpdateHeroDialog({ payload: hero }));
    }

    deleteHero(__id: string): void {
        this._store.dispatch(heroActions.deleteHero({ payload: __id }));
    }

    createHero(): void {
        this._store.dispatch(heroActions.navigateToPage({ payload: 'hero/create' }));
    }

    clearSearchBar(): void {
        this.searchFormControl.setValue('');
    }

}
