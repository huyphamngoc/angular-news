import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ListNewsComponent} from './list-news/list-news.component';
import {DetailNewsComponent} from './detail-news/detail-news.component';
import {RouterModule} from '@angular/router';
import {routes} from '../../app-routing.module';

@NgModule({
    declarations: [ListNewsComponent, DetailNewsComponent],
    imports: [
        SharedModule,
        RouterModule.forRoot([routes.NEWS_GROUP])
    ]
})
export class NewsModule {
}
