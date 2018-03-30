import { AuthGuardService } from './login/authGuard.service';
import { JokeFavouritesComponent } from './chuck-jokes/joke-favourites/joke-favourites.component';
import { JokeFavouriteComponent } from './chuck-jokes/joke-favourites/joke-favourite/joke-favourite.component';
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
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'chuck-jokes',
    component: ChuckJokesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ChuckJokesComponent,
    JokeComponent,
    JokeHeaderComponent,
    JokeFavouriteComponent,
    JokeFavouritesComponent,
    LoginComponent
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
  providers: [ChuckJokesService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
