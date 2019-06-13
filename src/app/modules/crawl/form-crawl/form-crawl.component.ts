import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CrawlService} from '../crawl.service';
import {ICrawl} from '../../../shared/entities/crawl.interface';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-form-crawl',
    templateUrl: './form-crawl.component.html',
    styleUrls: ['./form-crawl.component.less']
})
export class FormCrawlComponent implements OnInit {
    apiSave = 'http://crawl-source-dot-neural-guard-241903.appspot.com/crawlersource';
    apiPreview = 'https://crawl-source-dot-neural-guard-241903.appspot.com/article/preview';
    profileForm = this.fb.group({
        url: ['', Validators.required],
        titleSelector: ['', Validators.required],
        contentSelector: ['', Validators.required],
    });
    isVisible = false;
    crawl: ICrawl = {} as ICrawl;

    constructor(private fb: FormBuilder, private http: HttpClient, private crawlService: CrawlService, public san: DomSanitizer) {
    }

    ngOnInit() {
    }

    onSubmit() {
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
