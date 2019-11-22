import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { tap, mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { HeroService } from '../../services/hero.service';

@Injectable()
export class HeroEffects {
    constructor(
        private _actions$: Action,
        private _heroService: HeroService
    ) {}
}