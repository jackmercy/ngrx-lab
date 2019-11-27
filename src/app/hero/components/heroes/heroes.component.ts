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
    heroList: IHero[];
    searchFormControl: FormControl = new FormControl('');;
    private ngRxDestroy$ = new Subject();

    constructor(
        private _store: Store<State>
    ) {}

    ngOnInit() {
        this._store.dispatch(heroActions.readHeroes({ payload: '' }));

        this._store.select(heroSelectors.selectHeroes).pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            (_heroes: IHero[]) => _heroes ? this.heroList = _heroes : this.heroList = []
        );

        this._store.select(heroSelectors.isDeleteHeroSUCCESS).pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            (isSuccess: boolean) => isSuccess ? this._store.dispatch(heroActions.readHeroes({ payload: '' })) : null
        );

        this.searchFormControl.valueChanges.pipe(takeUntil(this.ngRxDestroy$)).subscribe(
            (query: string) => this._store.dispatch(heroActions.readHeroes({ payload: query }))
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
