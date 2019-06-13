import {Component, OnInit} from '@angular/core';
import {routes} from '../../app-routing.module';
import {ICategorys} from '../../shared/entities/category.interface';
import {NewsService} from '../../modules/news/news.service';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
    routes = Object.values(routes);
    isVisible = false;
    placement = 'left';
    category: ICategorys[];
    id: string;

    constructor(private newService: NewsService, private activateRoute: ActivatedRoute) {
        this.activateRoute.params.subscribe(
            value => {
                this.id = value.id;
            }
        );
    }

    ngOnInit() {
        this.newService.getCategorys().subscribe({
            next: value => {
                this.category = value;
            }, error: err => {
                console.log(err);
            }
        });
    }

    open(): void {
        this.isVisible = true;
    }

    close(): void {
        this.isVisible = false;
    }
}
