import { createSelector } from '@ngrx/store';
import { selectHeroModule, HeroModuleState } from 'src/app/state/hero.state';
import { HeroState } from '../state/hero.state';
import { EHeroActions } from '../actions/hero.actions';

const selectHeroState = createSelector(
    selectHeroModule,
    (state: HeroModuleState) => state.hero
);

export const selectHeroes = createSelector(
    selectHeroState,
    (state: HeroState) => state.heroes
);

export const isCreateHeroSUCCESS = createSelector(
    selectHeroState,
    (state: HeroState) => (state.prevAction === EHeroActions.createHero && state.apiSuccess) ? true : null
);


export const isUpdateHeroSUCCESS = createSelector(
    selectHeroState,
    (state: HeroState) => (state.prevAction === EHeroActions.updateHero && state.apiSuccess) ? true : null
);

export const isDeleteHeroSUCCESS = createSelector(
    selectHeroState,
    (state: HeroState) => (state.prevAction === EHeroActions.deleteHero && state.apiSuccess) ? true : null
);
