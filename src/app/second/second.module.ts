import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ParentComponent } from './parent/parent.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [

  {
    path: 'parent',
   component: ParentComponent,

  },

]

@NgModule({
  declarations: [FirstComponent, SecondComponent, ParentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondModule { }
