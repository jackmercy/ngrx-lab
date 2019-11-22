import { createAction, props } from '@ngrx/store';

export enum EHeroActions {
    createHero = '[C] Create Hero',
    readHeroes = '[R] Get heroes',
    updateHero = '[U] Update hero details',
    deleteHero = '[D] Delete hero',
    searchHero = '[S] Search hero(es)'
}

export const readHeroes = createAction(EHeroActions.readHeroes);
