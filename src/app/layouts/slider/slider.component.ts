import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {routes} from '../../app-routing.module';
import {NewsService} from '../../modules/news/news.service';
import {ICategorys} from '../../shared/entities/category.interface';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
    category: ICategorys[];

    @Output()
    selectMenu = new EventEmitter();

    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
        this.newsService.getCategorys().subscribe({
            next: value => {
                this.category = value;
            }, error: err => {
                console.log(err);
            }
        });
    }

    onSelectItem() {
        this.selectMenu.emit();
        // this.selectMenuTest();
    }
}
