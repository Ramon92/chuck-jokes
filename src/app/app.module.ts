import { JokeComponent } from './chuck-jokes/joke/joke.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ChuckJokesComponent } from './chuck-jokes/chuck-jokes.component';

const appRoutes: Routes = [
  { path: 'chuck-jokes', component: ChuckJokesComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/chuck-jokes', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, ChuckJokesComponent, JokeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
