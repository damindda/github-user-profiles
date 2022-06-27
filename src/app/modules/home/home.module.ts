import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from 'src/app/store/users/effects';
import { userReducer } from 'src/app/store/users';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    StoreModule.forFeature('userState', userReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class HomeModule { }
