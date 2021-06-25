import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloComponent } from './polo.component';

describe('PostsComponent', () => {
  let component: PoloComponent;
  let fixture: ComponentFixture<PoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoloComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
