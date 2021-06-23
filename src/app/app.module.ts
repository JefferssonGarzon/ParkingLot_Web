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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditPopUpComponent } from './edit-pop-up/edit-pop-up.component';
import {MatRadioModule} from '@angular/material/radio';
import { StartingScreenComponent } from './starting-screen/starting-screen.component';
import { PnfDashboardComponent } from './pnf-dashboard/pnf-dashboard.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { ListarReservasComponent } from './listar-reservas/listar-reservas.component';
import { EditReservaComponent } from './edit-reserva/edit-reserva.component';
import { PagarReservaComponent } from './pagar-reserva/pagar-reserva.component';
import { CrearReservaComponent } from './crear-reserva/crear-reserva.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LandingComponent,
    ListarUsuariosComponent,
    ListarReservasComponent,
    PageNotFoundComponent,
    FiltroUsuariosPipe,
    ParkingSlotsComponent,
    EditPopUpComponent,
    StartingScreenComponent,
    PnfDashboardComponent,
    EditReservaComponent,
    PagarReservaComponent,
    CrearReservaComponent,
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
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: ListarUsuariosComponent
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
