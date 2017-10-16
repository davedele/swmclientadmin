import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home';
import { PagesModule } from './pages';
import { routing } from './app.routes';
import { UserComponent } from './user/user.component';
import { ModuleModule } from './module/module.module';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings';
import { UserService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    SettingsModule,
    PagesModule,
    ModuleModule,
    SharedModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
