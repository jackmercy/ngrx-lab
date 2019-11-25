import { createAction, props } from '@ngrx/store';
import { IHero } from '../../interface/hero.interface';

export enum EHeroActions {
    createHero = '[C] Create Hero',
    createHeroSUCCESS = '[C] Create Hero SUCCESS',
    createHeroERROR = '[C] Create Hero ERROR',

    readHeroes = '[R] Get heroes',
    readHeroesSUCCESS = '[R] Get heroes SUCCESS',

    updateHero = '[U] Update hero details',
    updateHeroSUCCESS = '[U] Update hero details SUCCESS',

    deleteHero = '[D] Delete hero',
    deleteHeroSUCCESS = '[D] Delete hero SUCCESS',

    searchHeroes = '[S] Search hero(es)',
    searchHeroesSUCCESS = '[S] Search hero(es) SUCCESS',

    navigateToPage = '[Navigate] Go to target page',
    openUpdateHeroDialog = '[Dialog] Open update hero',
    changeDirtyState = '[Effect] Change Dirty State'
}

//#region Create Hero
export const createHero = createAction(
    EHeroActions.createHero,
    props<{ payload: IHero }>()
);

export const createHeroSUCCESS = createAction(
    EHeroActions.createHeroSUCCESS,
    props<{ payload: any }>()
);

export const createHeroERROR = createAction(
    EHeroActions.createHeroERROR,
    props<{ payload: any }>()
);

//#endregion

//#region Read Hero
export const readHeroes = createAction(EHeroActions.readHeroes);

export const readHeroesSUCCESS = createAction(
    EHeroActions.readHeroesSUCCESS,
    props<{ payload: IHero[] }>()
);

//#endregion

//#region  Update Hero
export const updateHero = createAction(
    EHeroActions.updateHero,
    props<{ payload: IHero }>()
);

export const updateHeroSUCCESS = createAction(
    EHeroActions.updateHeroSUCCESS,
    props<{ payload: any }>()
);
//#endregion

//#region Delete hero
export const deleteHero = createAction(
    EHeroActions.deleteHero,
    props<{ payload: string }>()
);

export const deleteHeroSUCCESS = createAction(
    EHeroActions.deleteHeroSUCCESS,
    props<{ payload: any }>()
);

//#endregion


//#region  Search heroes
export const searchHeroes = createAction(
    EHeroActions.searchHeroes,
    props<{ payload: string }>()
);

export const searchHeroesSUCCESS = createAction(
    EHeroActions.searchHeroesSUCCESS,
    props<{ payload: IHero[] }>()
);
//#endregion

export const navigateToPage = createAction(
    EHeroActions.navigateToPage,
    props<{ payload: string }>()
);

export const openUpdateHeroDialog = createAction(
    EHeroActions.openUpdateHeroDialog,
    props<{ payload: IHero }>()
);


export const changeDirtyState = createAction(
    EHeroActions.changeDirtyState,
    props<{ payload: boolean }>()
);
