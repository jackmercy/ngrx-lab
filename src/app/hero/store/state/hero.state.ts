import { IHero } from '../../interface/hero.interface';

export interface HeroState {
    heroes: IHero[];

    prevAction: string;
    formDirty: boolean;
    // for API
    apiSuccess: boolean;
    successResponse: any;
    errorResponse: any;
}