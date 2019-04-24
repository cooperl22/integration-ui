import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#IntegrationUiRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#IntegrationUiCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#IntegrationUiLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#IntegrationUiDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#IntegrationUiTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#IntegrationUiEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#IntegrationUiJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#IntegrationUiJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntegrationUiEntityModule {}
