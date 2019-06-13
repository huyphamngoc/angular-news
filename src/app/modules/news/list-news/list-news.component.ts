import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {INews} from '../../../shared/entities/news.interface';
import {finalize} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-list-news',
    templateUrl: './list-news.component.html',
    styleUrls: ['./list-news.component.less']
})
export class ListNewsComponent implements OnInit, OnDestroy {
    news: INews[] = [];
    newsTopLeft: INews = {} as INews;
    newsTopRight: INews = {} as INews;
    isLoading: boolean;
    subscription: Subscription;
    id: string;

    constructor(private newsService: NewsService, private activateRoute: ActivatedRoute) {
        this.activateRoute.params.subscribe(
            value => {
                console.log(value.id);
                this.id = value.id;
                this.refresh();
            }
        );
    }

    ngOnInit() {
        // this.refresh();
    }

    refresh() {
        this.isLoading = true;
        this.subscription = this.newsService
            .getNews(this.id)
            .pipe(
                finalize(() => this.isLoading = false)
            )
            .subscribe({
                next: value => {
                    this.news = value;
                    this.newsTopLeft = value[value.length - 1];
                    this.newsTopRight = value[value.length - 2];
                },
                error: err => {
                    console.log(err);
                }
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
