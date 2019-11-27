import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdateComponent } from '../../components/update/update.component';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, mergeMap, map, catchError, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';
import * as heroActions from '../actions/hero.actions';
import { IHero } from '../../interface/hero.interface';
import { Router } from '@angular/router';

const handlerBeforeUnload = (ev: any) => {
    // Cancel the event
    ev.preventDefault();
    // Chrome requires returnValue to be set
    ev.returnValue = 'refresh event';
};

@Injectable()
export class HeroEffects {
    constructor(
        private _actions$: Actions,
        private _heroService: HeroService,
        private _router: Router,
        public _dialog: MatDialog
    ) { }

    createHero$ = createEffect(
        () => this._actions$.pipe(
            ofType(heroActions.createHero),
            mergeMap(action => this._heroService.createHero(action.payload).pipe(
                map((res: IHero) => res ? heroActions.createHeroSUCCESS({ payload: res }) : null),
                catchError((error: any) => of(heroActions.createHeroERROR({ payload: error })))
            ))
        )
    );

    readHeroes$ = createEffect(
        () => (
            { debounce = 500 } = {}
        ) => this._actions$.pipe(
            ofType(heroActions.readHeroes),
            debounceTime(debounce),
            distinctUntilChanged(),
            switchMap(action =>
                this._heroService.readHeroes(action.payload).pipe(
                    map((res: IHero[]) => heroActions.readHeroesSUCCESS({ payload: res })
                    ))
            ),
        )
    );

    updateHero$ = createEffect(
        () => this._actions$.pipe(
            ofType(heroActions.updateHero),
            mergeMap(action => this._heroService.updateHero(action.payload).pipe(
                map((res: any) => heroActions.updateHeroSUCCESS({ payload: res }))
            ))
        )
    );

    deleteHero$ = createEffect(
        () => this._actions$.pipe(
            ofType(heroActions.deleteHero),
            mergeMap(action => this._heroService.deleteHero(action.payload).pipe(
                map((res: any) => heroActions.deleteHeroSUCCESS({ payload: res }))
            ))
        )
    );

    navigateToHeroList$ = createEffect(
        () => this._actions$.pipe(
            ofType(heroActions.navigateToPage),
            tap(action => this._router.navigate([action.payload]))
        ),
        { dispatch: false }
    );

    openUpdateHeroDialog$ = createEffect(
        () => this._actions$.pipe(
            ofType(heroActions.openUpdateHeroDialog),
            tap(action => this._dialog.open(UpdateComponent, {
                autoFocus: false,
                restoreFocus: false,
                data: action.payload,
                height: '400px',
                width: '780px'
            }))
        ),
        { dispatch: false }
    );

    changeDirtyState$ = createEffect(
        () => this._actions$.pipe(
            ofType(heroActions.changeDirtyState),
            tap(action => {
                if (action.payload === true) {
                    window.addEventListener('beforeunload', handlerBeforeUnload);
                } else if (action.payload === false) {
                    window.removeEventListener('beforeunload', handlerBeforeUnload);
                }
            })
        ),
        { dispatch: false }
    );
}
