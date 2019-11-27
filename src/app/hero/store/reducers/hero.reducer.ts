import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/hero.actions';
import { HeroState } from '../state/hero.state';


export const initialState: HeroState = {
    heroes: [],

    prevAction: '',
    formDirty: false,

    apiSuccess: false,
    successResponse: null,
    errorResponse: null
};

const reducer = createReducer(
    initialState,
    //#region Create Hero
    on(
        actions.createHero,
        (state) => ({
            ...state,
            prevAction: actions.EHeroActions.createHero,
            apiSuccess: false,
            successResponse: null,
            errorResponse: null
        })
    ),
    on(
        actions.createHeroSUCCESS,
        (state, { payload }) => ({
            ...state,
            prevAction: actions.EHeroActions.createHero,
            apiSuccess: true,
            successResponse: payload,
            errorResponse: null
        })
    ),
    on(
        actions.createHeroERROR,
        (state, { payload }) => ({
            ...state,
            prevAction: actions.EHeroActions.createHero,
            apiSuccess: false,
            successResponse: null,
            errorResponse: payload
        })
    ),
    //#endregion

        //#region Read hero(es)
        on(
            actions.readHeroes,
            state => ({
                ...state,
                prevAction: actions.EHeroActions.readHeroes,
                apiSuccess: false,
                successResponse: null,
                errorResponse: null
            })
        ),
        on(
            actions.readHeroesSUCCESS,
            (state, { payload }) => ({
                ...state,
                prevAction: actions.EHeroActions.readHeroes,
                heroes: payload,
                apiSuccess: true
            })
        ),
        //#endregion

    //#region Update hero
    on(
        actions.updateHero,
        state => ({
            ...state,
            prevAction: actions.EHeroActions.updateHero,
            apiSuccess: false,
            successResponse: null,
            errorResponse: null
        })
    ),
    on(
        actions.updateHeroSUCCESS,
        (state, { payload }) => ({
            ...state,
            prevAction: actions.EHeroActions.updateHero,
            apiSuccess: true,
            successResponse: payload,
            errorResponse: null
        })
    ),
    //#endregion

    //#region Delete hero
    on(
        actions.deleteHero,
        state => ({
            ...state,
            prevAction: actions.EHeroActions.deleteHero,
            apiSuccess: false,
            successResponse: null,
            errorResponse: null
        })
    ),
    on(
        actions.deleteHeroSUCCESS,
        (state, { payload }) => ({
            ...state,
            prevAction: actions.EHeroActions.deleteHero,
            apiSuccess: true,
            successResponse: payload,
            errorResponse: null
        })
    ),
    //#endregion

    on(
        actions.changeDirtyState,
        (state, { payload }) => ({
            ...state,
            prevAction: actions.EHeroActions.changeDirtyState,
            formDirty: payload
        })
    ),
);

export function heroReducer(state: HeroState | undefined, action: Action) {
    return reducer(state, action);
}
