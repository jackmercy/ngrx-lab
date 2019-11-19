import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { GettingStartedContentComponent } from './getting-started-content.component';

const routes: Routes = [
    {
        path: '', component: GettingStartedContentComponent,
    },
    { path: 'hero', loadChildren: () => import('./hero/hero.module').then(module => module.HeroModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: NoPreloading
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
