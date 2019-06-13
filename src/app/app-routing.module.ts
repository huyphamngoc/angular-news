import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {ListNewsComponent} from './modules/news/list-news/list-news.component';
import {DetailNewsComponent} from './modules/news/detail-news/detail-news.component';
import {FormCrawlComponent} from './modules/crawl/form-crawl/form-crawl.component';

export const routes = {
    NEWS_GROUP: {
        name: 'Báo',
        path: 'news',
        children: [
            {
                path: ':id',
                component: ListNewsComponent,
                data: {
                    name: 'Bài viết1',
                    display: false
                }
            },
            {
                path: '',
                component: ListNewsComponent,
                data: {
                    name: 'Bài viết',
                    display: true
                }
            },
            {
                path: 'detail/:url',
                component: DetailNewsComponent,
                data: {
                    name: 'Chi tiết',
                    display: false
                }
            },
        ] as Routes
    },
    CRAWL_GROUP: {
        name: 'Crawl',
        path: 'crawl',
        children: [
            {
                path: '',
                component: FormCrawlComponent,
                data: {
                    name: 'Crawl',
                    display: false
                }
            }
        ] as Routes
    }
};


const matchAll: Route = {
    path: '**',
    redirectTo: 'news',
    pathMatch: 'full'
};

@NgModule({
    imports: [RouterModule.forRoot([matchAll])],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
