import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrawlComponent } from './form-crawl.component';

describe('FormCrawlComponent', () => {
  let component: FormCrawlComponent;
  let fixture: ComponentFixture<FormCrawlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCrawlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
