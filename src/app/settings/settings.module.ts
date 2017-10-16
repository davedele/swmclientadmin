import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './';
import { SettingsComponent } from './';
import { SettingsService } from './settings.service';
//,
@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
    , routing
  ],
  declarations: [SettingsComponent],
  providers:[SettingsService]
})
export class SettingsModule { }
