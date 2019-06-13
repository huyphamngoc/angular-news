import {Injectable} from '@angular/core';
import {INews} from '../../shared/entities/news.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, delay, finalize} from 'rxjs/operators';
import {ICategorys} from '../../shared/entities/category.interface';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    apiNews = 'https://nalvnsmartnews.herokuapp.com/api/news';
    apiNewsCategory = 'https://nalvnsmartnews.herokuapp.com/api/category/news/';
    apiCategory = 'https://nalvnsmartnews.herokuapp.com/api/category';
    apiDetail = 'https://nalvnsmartnews.herokuapp.com/api/news/';

    constructor(private http: HttpClient) {
    }

    getNews(id): Observable<INews[]> {
        if (id === undefined) {
            return this.http
                .get<any>(this.apiNews)
                .pipe(
                    map(res => res.data.data)
                );
        } else {
            return this.http
                .get<any>(this.apiNewsCategory + id)
                .pipe(
                    map(res => res.data.data)
                );
        }
    }


    getCategorys(): Observable<ICategorys[]> {
        return this.http.get<any>(this.apiCategory).pipe(
            map(res => res.data)
        );
    }
}
