import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {ListNewsComponent} from './modules/news/list-news/list-news.component';
import {DetailNewsComponent} from './modules/news/detail-news/detail-news.component';

export const routes = {
    NEWS_GROUP: {
        name: 'Báo',
        path: 'news',
        children: [
            {
                path: 'list',
                component: ListNewsComponent,
                data: {
                    name: 'Bài viết',
                    display: true
                }
            },
            {
                path: 'detail',
                component: DetailNewsComponent,
                data: {
                    name: 'Chi tiết',
                    display: true
                }
            },
            {
                path: 'tung',
                component: DetailNewsComponent,
                data: {
                    name: 'tung',
                    display: true
                }
            }
        ] as Routes
    }
};

const matchAll: Route = {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
};

@NgModule({
    imports: [RouterModule.forRoot([matchAll])],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
