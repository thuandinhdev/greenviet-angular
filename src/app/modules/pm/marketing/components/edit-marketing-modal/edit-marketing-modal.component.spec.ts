import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketingModalComponent } from './edit-marketing-modal.component';

describe('EditMarketingModalComponent', () => {
  let component: EditMarketingModalComponent;
  let fixture: ComponentFixture<EditMarketingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarketingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
