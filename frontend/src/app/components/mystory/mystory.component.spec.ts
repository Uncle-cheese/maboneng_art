import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystoryComponent } from './mystory.component';

describe('MystoryComponent', () => {
  let component: MystoryComponent;
  let fixture: ComponentFixture<MystoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MystoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
