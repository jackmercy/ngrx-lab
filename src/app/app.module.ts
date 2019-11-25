import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GettingStartedContentComponent } from './getting-started-content.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
    declarations: [
        AppComponent,
        GettingStartedContentComponent,
    ],
    imports: [
        // @angular
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // my module
        AppRoutingModule,
        SharedModule,

        // @firebase
        AngularFireModule.initializeApp(environment.firebase, 'ngrx-lab'),
        AngularFirestoreModule,
        AngularFireStorageModule,

        // @store
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            name: 'NgRx Hero Devtools',
            maxAge: 25,
        }),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
