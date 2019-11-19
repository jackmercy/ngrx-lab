import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateComponent } from './components/create/create.component';
/* Components */


const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '', component: MasterComponent,
        children: [
            { path: 'list', component: HeroesComponent },
            { path: 'create', component: CreateComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroRoutingModule { }
