// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';




// export class AdminDashModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UserComponent } from './user/user.component';
// import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
// import { DialogComponent } from './dialog/dialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from '../admin-dash/admin/admin.component';



@NgModule({
  declarations: [  AdminComponent, AdminDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],
  exports:[
    // UserComponent,
    AdminComponent
  ]
})
export class AdminDashModule {

 }

