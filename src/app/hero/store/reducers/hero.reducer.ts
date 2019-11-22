import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/hero.actions';
import { HeroState } from '../state/hero.state';


export const initialState: HeroState = {
    heroes: [{
        id: null,
        name: '',
        power: '',
        avatar: ''
    }],

    prevAction: ''
};

const reducer = createReducer(
    initialState,
    // on()
);

export function heroReducer(state: HeroState | undefined, action: Action) {
    return reducer(state, action);
}
