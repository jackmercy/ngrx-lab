import { AppState, EStateFeaturesName } from './app.state';
import { createFeatureSelector } from '@ngrx/store';
import { HeroState } from '../hero/store/state/hero.state';

export const selectPrivateFeature = createFeatureSelector<State, HeroModuleState>(EStateFeaturesName.heroModule);

export interface HeroModuleState {
    hero: HeroState;
}

export interface State extends AppState {
    heroModule: HeroModuleState;
}

