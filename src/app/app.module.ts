import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { GettingStartedContentComponent } from './getting-started-content.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        GettingStartedContentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,

        AngularFireModule.initializeApp(environment.firebase, 'ngrx-lab'),
        AngularFirestoreModule,
        AngularFireStorageModule
        // StoreModule.forRoot(reducers, {
        //     metaReducers,
        //     runtimeChecks: {
        //         strictStateImmutability: true,
        //         strictActionImmutability: true
        //     }
        // }),
        // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
