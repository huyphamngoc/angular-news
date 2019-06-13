import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from '../../app-routing.module';
import { FormCrawlComponent } from './form-crawl/form-crawl.component';

@NgModule({

    imports: [
        SharedModule,
        RouterModule.forRoot([routes.CRAWL_GROUP])
    ],

    declarations: [FormCrawlComponent]
})
export class CrawlModule {

}
