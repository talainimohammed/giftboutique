import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketcardComponent } from './basketcard.component';

describe('BasketcardComponent', () => {
  let component: BasketcardComponent;
  let fixture: ComponentFixture<BasketcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
