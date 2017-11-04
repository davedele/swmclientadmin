import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './module-routing';
import { ModuleComponent } from './module.component';
import { ModuleEntitiesComponent } from './module-entities/module-entities.component';
import { ModuleSettingsComponent } from './module-settings/module-settings.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ModuleComponent, ModuleEntitiesComponent, ModuleSettingsComponent]
})
export class ModuleModule { }
