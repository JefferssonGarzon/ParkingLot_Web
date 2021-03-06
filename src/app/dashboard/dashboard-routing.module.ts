import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';
import {ListarReservasComponent} from '../listar-reservas/listar-reservas.component'
import { ParkingSlotsComponent } from '../parking-slots/parking-slots.component';
import { PnfDashboardComponent } from '../pnf-dashboard/pnf-dashboard.component';
import { StartingScreenComponent } from '../starting-screen/starting-screen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'usuarios',
                component: ListarUsuariosComponent,
            },
            {
                path: 'parking-slots',
                component: ParkingSlotsComponent,
            },
            {
                path: 'inicio',
                component: StartingScreenComponent,
            },
            {

                path: 'reservas',
                component: ListarReservasComponent,
            }
        ]
    },
    {
        path: '**',
        component: PnfDashboardComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})

export class DashboardRoutingModule {}