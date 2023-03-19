import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleBookComponent } from './rule-book.component';

describe('RuleBookComponent', () => {
  let component: RuleBookComponent;
  let fixture: ComponentFixture<RuleBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
