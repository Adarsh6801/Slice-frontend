import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIntroComponent } from './admin-intro.component';

describe('AdminIntroComponent', () => {
  let component: AdminIntroComponent;
  let fixture: ComponentFixture<AdminIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
