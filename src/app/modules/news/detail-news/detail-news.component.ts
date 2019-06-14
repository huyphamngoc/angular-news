import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {INews} from '../../../shared/entities/news.interface';
import {finalize, map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {NewsService} from '../news.service';

@Component({
    selector: 'app-detail-news',
    templateUrl: './detail-news.component.html',
    styleUrls: ['./detail-news.component.less']
})
export class DetailNewsComponent implements OnInit {
    apiDetail = 'https://nalvnsmartnews.herokuapp.com/api/news/';
    url: '';
    news: INews = {} as INews;
    newsCategory: INews[] = [];
    isLoding: boolean;

    constructor(private activateRoute: ActivatedRoute, private http: HttpClient, private san: DomSanitizer, private newsService: NewsService) {
        this.activateRoute.params.subscribe(
            value => {
                this.url = value.url;
                this.getNewsDetail(this.url);
            }
        );

    }

    ngOnInit() {

    }

    getNewsDetail(url) {
        this.isLoding = true;
        this.http.get<{ data: INews[] }>(this.apiDetail + url)
            .pipe(
                map(value => value.data),
                finalize(() => this.isLoding = false)
            )
            .subscribe(
                {
                    next: value => {
                        this.news = value[0];
                        this.newsService.getNews(this.news.category_name).subscribe(
                            value1 => {
                                this.newsCategory = value1.slice(2, 7);
                            },
                            error1 => console.log(error1)
                        );
                    },
                    error: err => {
                        console.log(err);
                    }
                }
            );
    }

}
