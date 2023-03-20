import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card'

import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MatTableModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class UserInfoModule { }
