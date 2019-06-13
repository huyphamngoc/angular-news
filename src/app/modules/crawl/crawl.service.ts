import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICrawl} from '../../shared/entities/crawl.interface';

@Injectable({
    providedIn: 'root'
})
export class CrawlService {

    constructor(private http: HttpClient) {
    }

    postCrawl(api, abc): Observable<ICrawl> {
        return this.http.post<any>(api, abc).pipe(
            map(res => res)
        );
    }

}
