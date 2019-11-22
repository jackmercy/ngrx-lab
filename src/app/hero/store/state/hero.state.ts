import { IHero } from '../../interface/hero.interface';

export interface HeroState {
    heroes: IHero[];

    prevAction: string;
}