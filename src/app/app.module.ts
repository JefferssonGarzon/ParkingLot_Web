import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { from } from 'rxjs';
import { LandingComponent } from './landing/landing.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FiltroUsuariosPipe } from './pipes/filtro-usuarios.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ParkingSlotsComponent } from './parking-slots/parking-slots.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LandingComponent,
    ListarUsuariosComponent,
    PageNotFoundComponent,
    FiltroUsuariosPipe,
    ParkingSlotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
