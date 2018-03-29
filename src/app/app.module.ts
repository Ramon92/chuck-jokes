import { JokeHeaderComponent } from './chuck-jokes/joke-header/joke-header.component';
import { JokeComponent } from './chuck-jokes/joke/joke.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ChuckJokesComponent } from './chuck-jokes/chuck-jokes.component';
import { ChuckJokesService } from './chuck-jokes/chuck-jokes.service';

const appRoutes: Routes = [
  { path: 'chuck-jokes', component: ChuckJokesComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/chuck-jokes', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ChuckJokesComponent,
    JokeComponent,
    JokeHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ChuckJokesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
