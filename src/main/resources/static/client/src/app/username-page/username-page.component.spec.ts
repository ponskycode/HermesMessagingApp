import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePageComponent } from './username-page.component';

describe('UsernamePageComponent', () => {
  let component: UsernamePageComponent;
  let fixture: ComponentFixture<UsernamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
