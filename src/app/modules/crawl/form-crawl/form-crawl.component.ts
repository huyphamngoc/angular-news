import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CrawlService} from '../crawl.service';
import {ICrawl} from '../../../shared/entities/crawl.interface';
import {DomSanitizer} from '@angular/platform-browser';
import {forEachComment} from 'tslint';

@Component({
    selector: 'app-form-crawl',
    templateUrl: './form-crawl.component.html',
    styleUrls: ['./form-crawl.component.less']
})
export class FormCrawlComponent implements OnInit {
    apiSave = 'http://crawl-source-dot-neural-guard-241903.appspot.com/crawlersource';
    apiPreview = 'https://crawl-source-dot-neural-guard-241903.appspot.com/article/preview';
    isVisible = false;
    crawl: ICrawl = {} as ICrawl;
    profileForm = this.fb.group({
        url: [null, [Validators.required]],
        titleSelector: [null, [Validators.required]],
        contentSelector: [null, [Validators.required]],
    });

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private crawlService: CrawlService,
                public san: DomSanitizer) {
    }

    ngOnInit() {
    }

    onSubmit(): void {

        this.crawlService.postCrawl(this.apiSave, this.profileForm.value).subscribe(
            {
                next: value => console.log(value),
                error: err => console.log(err)
            });
    }

    onPreview() {
        this.crawlService.postCrawl(this.apiPreview, this.profileForm.value).subscribe(
            {
                next: value => {
                    this.isVisible = true;
                    this.crawl = value;
                    console.log(this.crawl.title);
                },
                error: err => console.log(err)
            }
        );
    }

    handleOk(): void {
        this.isVisible = false;
        this.onSubmit();
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
