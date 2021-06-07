import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';
import { ParkingSlotsComponent } from '../parking-slots/parking-slots.component';
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
            }
        ]
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