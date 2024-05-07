import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDetailComponent } from './marketing-detail.component';

describe('MarketingDetailComponent', () => {
  let component: MarketingDetailComponent;
  let fixture: ComponentFixture<MarketingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
