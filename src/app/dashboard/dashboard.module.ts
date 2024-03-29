import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SummaryComponent } from './summary/summary.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { EditableFieldComponent } from './editable-field/editable-field.component';
import {MatTableModule} from '@angular/material/table';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    FormsComponent,
    SummaryComponent,
    EditableFieldComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
  ]
})
export class DashboardModule { }
