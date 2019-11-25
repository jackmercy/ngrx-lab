import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MasterComponent } from './components/master/master.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';

import { HeroService } from './services/hero.service';
/* Ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EStateFeaturesName } from '../state/app.state';
import { reducers } from './store/reducers/index.reducer';
import { HeroEffects } from './store/effects/hero.effects';

@NgModule({
    declarations: [
        HeroesComponent,
        MasterComponent,
        UpdateComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HeroRoutingModule,

        /* Ngrx */
        StoreModule.forFeature(EStateFeaturesName.heroModule, reducers),
        EffectsModule.forFeature([HeroEffects])
    ],
    providers: [
        HeroService
    ],
    entryComponents: [
        UpdateComponent
    ]
})
export class HeroModule { }
