import { ActionReducerMap } from '@ngrx/store';
import { heroReducer } from '../reducers/hero.reducer';
import { HeroModuleState } from 'src/app/state/hero.state';

export const reducers: ActionReducerMap<HeroModuleState> = {
    hero: heroReducer
};
