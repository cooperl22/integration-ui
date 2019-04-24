import { NgModule } from '@angular/core';

import { IntegrationUiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IntegrationUiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IntegrationUiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IntegrationUiSharedCommonModule {}
