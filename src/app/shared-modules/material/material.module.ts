import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule,MatNativeDateModule, MatToolbarModule, MatCardModule,MatRadioModule,MatListModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDatepickerModule} from  '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule,
    MatTabsModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule,
    MatTabsModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: []
})
export class MaterialModule { }
