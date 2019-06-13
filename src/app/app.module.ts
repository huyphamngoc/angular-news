import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {SharedModule} from './shared/shared.module';
import {NewsModule} from './modules/news/news.module';
import {MenuComponent} from './layouts/menu/menu.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SliderComponent} from './layouts/slider/slider.component';
import {FormCrawlComponent} from './modules/crawl/form-crawl/form-crawl.component';
import {CrawlModule} from './modules/crawl/crawl.module';

registerLocaleData(vi);

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent,
        SliderComponent,
    ],
    imports: [
        SharedModule,
        NewsModule,
        CrawlModule,
        AppRoutingModule,
    ],
    providers: [{provide: NZ_I18N, useValue: vi_VN}],
    bootstrap: [AppComponent]
})
export class AppModule {
    isCollapsed = false;
}
