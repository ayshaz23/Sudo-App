import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MainModule } from './main/main.module';
import { SecondModule } from './second/second.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => MainModule) ,
  },

  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then(m => SecondModule) ,
  },

]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(routes),
    MainModule,
    SecondModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
