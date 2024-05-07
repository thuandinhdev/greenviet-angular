import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarketingModalComponent } from './create-marketing-modal.component';

describe('CreateMarketingModalComponent', () => {
  let component: CreateMarketingModalComponent;
  let fixture: ComponentFixture<CreateMarketingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMarketingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMarketingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
